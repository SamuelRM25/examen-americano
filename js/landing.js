// Landing: renderiza los 9 cursos y maneja el acceso por código

(function () {
  const grid = document.getElementById("courses-grid");

  const order = [
    "primero_basico", "segundo_basico", "tercero_basico",
    "cuarto_madurez", "cuarto_perito", "quinto_perito", "sexto_pc",
    "cuarto_secretariado", "quinto_bachillerato"
  ];

  const icons = {
    "primero_basico": "⌨️", "segundo_basico": "📝", "tercero_basico": "📄",
    "cuarto_madurez": "🖥️", "cuarto_perito": "📊", "quinto_perito": "📈", "sexto_pc": "🔍",
    "cuarto_secretariado": "📁", "quinto_bachillerato": "🌐"
  };

  function render() {
    const codes = window.getVisibleGrades ? window.getVisibleGrades() : Object.entries(window.ACCESS_CODES || {});
    grid.innerHTML = "";
    order.forEach(gradeId => {
      const codeEntry = codes.find(([k, v]) => v.grade === gradeId) || codes.find(v => v.grade === gradeId);
      if (!codeEntry) return;
      const code = Array.isArray(codeEntry) ? codeEntry[0] : codeEntry.code;
      const meta = Array.isArray(codeEntry) ? codeEntry[1] : codeEntry;
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
        <div class="icon">${icons[gradeId] || "📘"}</div>
        <h3>${meta.label}</h3>
        <p class="subject">${meta.subject}</p>
        <div class="meta">
          <span class="badge badge-ready">15 preguntas</span>
          <span style="font-size: 11px; color: var(--muted);">30 min</span>
        </div>
      `;
      card.addEventListener("click", () => openAccess(gradeId, meta));
      grid.appendChild(card);
    });
  }

  function openAccess(gradeId, meta) {
    const codeEntry = Object.entries(window.ACCESS_CODES).find(([k, v]) => v.grade === gradeId);
    const [code] = codeEntry;

    const html = `
      <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.55); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 16px;">
        <div style="background: white; border-radius: 20px; padding: 32px; max-width: 480px; width: 100%;">
          <h2 style="color: var(--secondary); margin-bottom: 8px;">${meta.label}</h2>
          <p style="color: var(--muted); margin-bottom: 20px;">${meta.subject}</p>

          <div id="access-step-1">
            <div class="field">
              <label>Nombre completo del estudiante</label>
              <input type="text" id="student-name" placeholder="Ej. Juan Pérez López" autocomplete="off">
            </div>
            <div class="field">
              <label>Código de acceso</label>
              <input type="text" id="access-code" placeholder="AMR-XXX-XXXX" autocomplete="off" style="text-transform: uppercase;">
              <p style="font-size: 12px; color: var(--muted); margin-top: 6px;">El código te lo dará el profesor.</p>
            </div>
            <div id="access-error" class="alert alert-error hidden"></div>
            <div style="display: flex; gap: 12px; margin-top: 16px;">
              <button class="btn btn-secondary" onclick="document.getElementById('modal').remove()">Cancelar</button>
              <button class="btn btn-primary" id="btn-start" style="flex: 1;">Comenzar examen →</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const wrap = document.createElement("div");
    wrap.id = "modal";
    wrap.innerHTML = html;
    document.body.appendChild(wrap);

    document.getElementById("btn-start").addEventListener("click", () => {
      const student = document.getElementById("student-name").value.trim();
      const inputCode = document.getElementById("access-code").value.trim().toUpperCase();
      const err = document.getElementById("access-error");

      if (!student || student.length < 3) {
        err.textContent = "Por favor ingresa tu nombre completo.";
        err.classList.remove("hidden");
        return;
      }
      if (inputCode !== code) {
        err.textContent = "Código incorrecto. Verifica con tu profesor.";
        err.classList.remove("hidden");
        return;
      }

      const params = new URLSearchParams({ code, grade: gradeId, student });
      window.location.href = "examen.html?" + params.toString();
    });
  }

  render();
})();