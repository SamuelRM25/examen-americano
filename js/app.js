// App principal: inicializa examen desde URL, renderiza preguntas y resultados

(function () {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const grade = params.get("grade");
  const student = params.get("student") || "";

  const container = document.getElementById("question-container");
  const headerEl = document.getElementById("exam-header");
  const progressEl = document.getElementById("progress");
  const navEl = document.getElementById("nav-buttons");
  const titleEl = document.getElementById("exam-title");
  const studentEl = document.getElementById("exam-student");
  const timerEl = document.getElementById("timer");

  if (!code || !grade) {
    container.innerHTML = `
      <div class="card">
        <div class="alert alert-error">Faltan parámetros. Vuelve a la página principal.</div>
        <a href="index.html" class="btn btn-primary">← Volver al inicio</a>
      </div>`;
    return;
  }

  const codeMeta = window.lookupCode(code);
  if (!codeMeta || codeMeta.grade !== grade) {
    container.innerHTML = `
      <div class="card">
        <div class="alert alert-error">Código inválido o curso no coincide.</div>
        <a href="index.html" class="btn btn-primary">← Volver al inicio</a>
      </div>`;
    return;
  }

  const examData = window.EXAMS[grade];
  if (!examData) {
    container.innerHTML = `
      <div class="card">
        <div class="alert alert-error">No hay examen disponible para este curso.</div>
        <a href="index.html" class="btn btn-primary">← Volver al inicio</a>
      </div>`;
    return;
  }

  const existing = window.ExamEngine.load(code);
  if (existing && !existing.finishedAt) {
    if (existing.student === student) {
      window.ExamEngine.resume(existing);
      initUI(examData);
      return;
    }
  }

  if (!student) {
    container.innerHTML = `
      <div class="card">
        <h2>${examData.title}</h2>
        <p style="color: var(--muted); margin-bottom: 16px;">${examData.subject}</p>
        <div class="field">
          <label>Tu nombre completo</label>
          <input type="text" id="late-student" placeholder="Ej. Juan Pérez" value="${existing ? existing.student : ''}">
        </div>
        <button class="btn btn-primary" id="btn-begin">Comenzar examen →</button>
      </div>`;
    document.getElementById("btn-begin").addEventListener("click", () => {
      const s = document.getElementById("late-student").value.trim();
      if (!s) return alert("Ingresa tu nombre");
      const url = new URL(window.location.href);
      url.searchParams.set("student", s);
      window.location.href = url.toString();
    });
    return;
  }

  window.ExamEngine.start({
    code, grade, student,
    questions: examData.questions,
    timeLimit: examData.duration * 60
  });

  initUI(examData);

  function initUI(examData) {
    titleEl.textContent = examData.title;
    const st = window.ExamEngine.getState();
    studentEl.textContent = `${st.student} · ${examData.subject}`;

    headerEl.classList.remove("hidden");
    progressEl.classList.remove("hidden");
    navEl.classList.remove("hidden");

    renderProgress();
    renderCurrent();

    window.onTick = function (remaining) {
      const txt = window.ExamEngine.formatTime(remaining);
      timerEl.textContent = txt;
      timerEl.classList.remove("warning", "danger");
      if (remaining <= 60) timerEl.classList.add("danger");
      else if (remaining <= 300) timerEl.classList.add("warning");
    };

    window.onRender = function () {
      renderProgress();
      renderCurrent();
    };

    window.onFinish = function (payload) {
      showResults(payload);
    };

    document.getElementById("btn-prev").addEventListener("click", () => window.ExamEngine.prev());
    document.getElementById("btn-next").addEventListener("click", () => window.ExamEngine.next());
    document.getElementById("btn-finish").addEventListener("click", () => {
      if (confirm("¿Seguro que quieres finalizar el examen? No podrás cambiar tus respuestas.")) {
        window.ExamEngine.finish(false);
      }
    });
  }

  function renderProgress() {
    const st = window.ExamEngine.getState();
    progressEl.innerHTML = "";
    st.questions.forEach((q, i) => {
      const dot = document.createElement("div");
      dot.className = "progress-dot";
      if (st.answers[q.id] !== undefined && st.answers[q.id] !== "") dot.classList.add("answered");
      if (i === st.currentIndex) dot.classList.add("current");
      dot.title = `Pregunta ${i + 1}`;
      dot.addEventListener("click", () => window.ExamEngine.goTo(i));
      progressEl.appendChild(dot);
    });
  }

  function renderCurrent() {
    const st = window.ExamEngine.getState();
    const q = st.questions[st.currentIndex];
    if (!q) return;

    const num = st.currentIndex + 1;
    const total = st.questions.length;
    const currentAns = st.answers[q.id];

    let body = "";

    switch (q.type) {
      case "mc":
        body = `<div class="options-list">${q.options.map((opt, i) => `
          <label class="option ${currentAns === i ? "selected" : ""}">
            <input type="radio" name="q-${q.id}" ${currentAns === i ? "checked" : ""} value="${i}">
            <span>${opt}</span>
          </label>
        `).join("")}</div>`;
        break;

      case "tf":
        body = `<div class="options-list">
          <label class="option ${currentAns === true ? "selected" : ""}">
            <input type="radio" name="q-${q.id}" ${currentAns === true ? "checked" : ""} value="true">
            <span>Verdadero</span>
          </label>
          <label class="option ${currentAns === false ? "selected" : ""}">
            <input type="radio" name="q-${q.id}" ${currentAns === false ? "checked" : ""} value="false">
            <span>Falso</span>
          </label>
        </div>`;
        break;

      case "fill":
        body = `<input type="text" class="fill-input" id="fill-${q.id}" placeholder="Escribe tu respuesta" value="${currentAns || ''}" autocomplete="off">`;
        break;

      case "match":
      case "relation":
        const matches = currentAns || {};
        body = `<div class="match-grid">`;
        q.pairs.left.forEach((leftItem, i) => {
          body += `
            <div class="match-left">${leftItem}</div>
            <div class="arrow">→</div>
            <select data-q="${q.id}" data-left="${leftItem}" data-idx="${i}">
              <option value="">-- selecciona --</option>
              ${q.pairs.right.map((r, j) => `<option value="${r}" ${matches[leftItem] === r ? "selected" : ""}>${r}</option>`).join("")}
            </select>
          `;
        });
        body += `</div>`;
        break;

      case "short":
        body = `<textarea id="short-${q.id}" placeholder="Escribe tu respuesta aquí…">${currentAns || ''}</textarea>
                <p style="font-size: 12px; color: var(--muted); margin-top: 6px;">Las preguntas de desarrollo reciben 1 punto automáticamente al ser respondidas.</p>`;
        break;
    }

    container.innerHTML = `
      <div class="question-card">
        <span class="question-number">Pregunta ${num} de ${total}</span>
        <div class="question-prompt">${q.prompt}</div>
        <div id="answer-area">${body}</div>
      </div>
    `;

    attachHandlers(q);
  }

  function attachHandlers(q) {
    const st = window.ExamEngine.getState();

    if (q.type === "mc" || q.type === "tf") {
      container.querySelectorAll(`input[name="q-${q.id}"]`).forEach(input => {
        input.addEventListener("change", () => {
          let val;
          if (q.type === "tf") val = input.value === "true";
          else val = parseInt(input.value, 10);
          window.ExamEngine.setAnswer(q.id, val);
          container.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
          input.closest(".option").classList.add("selected");
          renderProgress();
        });
      });
    } else if (q.type === "fill") {
      const inp = document.getElementById(`fill-${q.id}`);
      inp.addEventListener("input", () => {
        window.ExamEngine.setAnswer(q.id, inp.value);
        renderProgress();
      });
      inp.focus();
    } else if (q.type === "match" || q.type === "relation") {
      container.querySelectorAll(`select[data-q="${q.id}"]`).forEach(sel => {
        sel.addEventListener("change", () => {
          const allSelects = container.querySelectorAll(`select[data-q="${q.id}"]`);
          const obj = {};
          allSelects.forEach(s => {
            const left = s.getAttribute("data-left");
            obj[left] = s.value;
          });
          window.ExamEngine.setAnswer(q.id, obj);
          renderProgress();
        });
      });
    } else if (q.type === "short") {
      const ta = document.getElementById(`short-${q.id}`);
      ta.addEventListener("input", () => {
        window.ExamEngine.setAnswer(q.id, ta.value);
        renderProgress();
      });
    }
  }

  function showResults(payload) {
    const gradeLabel = examData.title;
    const minutes = Math.floor(payload.durationSeconds / 60);
    const seconds = payload.durationSeconds % 60;

    headerEl.classList.add("hidden");
    progressEl.classList.add("hidden");
    navEl.classList.add("hidden");

    container.innerHTML = `
      <div class="card results">
        <h2 style="color: var(--secondary);">¡Examen finalizado!</h2>
        <div class="score-circle">
          <div class="pct">${payload.percentage}%</div>
          <div class="label">${payload.score}/${payload.total} correctas</div>
        </div>

        <div class="results-info">
          <div class="info-cell">
            <div class="lbl">Estudiante</div>
            <div class="val">${payload.student}</div>
          </div>
          <div class="info-cell">
            <div class="lbl">Curso</div>
            <div class="val">${gradeLabel}</div>
          </div>
          <div class="info-cell">
            <div class="lbl">Código</div>
            <div class="val" style="font-family: monospace; font-size: 14px;">${payload.code}</div>
          </div>
          <div class="info-cell">
            <div class="lbl">Tiempo</div>
            <div class="val">${minutes}m ${seconds}s</div>
          </div>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary" id="btn-download">📥 Descargar resultados (JSON)</button>
          <a href="index.html" class="btn btn-secondary">🏠 Volver al inicio</a>
        </div>
      </div>
    `;

    document.getElementById("btn-download").addEventListener("click", () => {
      window.ExamEngine.downloadResults(payload);
    });
  }
})();