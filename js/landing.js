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
    const codes = window.getVisibleGrades ? window.getVisibleGrades() : Object.entries(window.ACCESS_CODES || {}).map(([k, v]) => ({ code: k, ...v }));
    grid.innerHTML = "";
    order.forEach(gradeId => {
      const entry = codes.find(v => v.grade === gradeId);
      if (!entry) return;
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
        <div class="icon">${icons[gradeId] || "📘"}</div>
        <h3>${entry.label}</h3>
        <p class="subject">${entry.subject}</p>
        <div class="meta">
          <span class="badge badge-ready">15 preguntas</span>
          <span style="font-size: 11px; color: var(--muted);">30 min</span>
        </div>
      `;
      card.addEventListener("click", () => openAccess(gradeId, entry));
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

  document.getElementById("btn-test").addEventListener("click", () => {
    const html = `
      <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.55); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 16px;">
        <div style="background: white; border-radius: 20px; padding: 32px; max-width: 480px; width: 100%;">
          <h2 style="color: var(--secondary); margin-bottom: 8px;">🧪 Examen de Prueba</h2>
          <p style="color: var(--muted); margin-bottom: 20px;">Solo 4 preguntas · 5 minutos · Ideal para verificar el flujo completo.</p>

          <div id="test-step-1">
            <div class="field">
              <label>Tu nombre</label>
              <input type="text" id="test-student" placeholder="Ej. Juan Pérez" autocomplete="off">
            </div>
            <div class="field">
              <label>Código de prueba</label>
              <input type="text" id="test-code" value="AMR-TEST-0001" readonly style="background: #f7fafc;">
            </div>
            <div id="test-error" class="alert alert-error hidden"></div>
            <div style="display: flex; gap: 12px; margin-top: 16px;">
              <button class="btn btn-secondary" onclick="document.getElementById('modal').remove()">Cancelar</button>
              <button class="btn btn-primary" id="btn-test-go" style="flex: 1;">Comenzar →</button>
            </div>
          </div>
        </div>
      </div>
    `;
    const wrap = document.createElement("div");
    wrap.id = "modal";
    wrap.innerHTML = html;
    document.body.appendChild(wrap);

    document.getElementById("btn-test-go").addEventListener("click", () => {
      const student = document.getElementById("test-student").value.trim();
      if (!student) {
        const err = document.getElementById("test-error");
        err.textContent = "Ingresa tu nombre";
        err.classList.remove("hidden");
        return;
      }
      const params = new URLSearchParams({
        code: "AMR-TEST-0001",
        grade: "test_rapido",
        student
      });
      window.location.href = "examen.html?" + params.toString();
    });
  });

  document.getElementById("link-profesor").addEventListener("click", (e) => {
    e.preventDefault();
    showLoginProfesor();
  });

  function showLoginProfesor() {
    const html = `
      <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 16px;">
        <div style="background: white; border-radius: 20px; padding: 32px; max-width: 420px; width: 100%;">
          <h2 style="color: var(--secondary); margin-bottom: 8px;">🔐 Acceso Profesor</h2>
          <p style="color: var(--muted); margin-bottom: 20px; font-size: 14px;">Ingresa la contraseña para ver los resultados de los estudiantes.</p>

          <div class="field">
            <label>Contraseña</label>
            <input type="password" id="prof-password" placeholder="••••••••" autocomplete="off" autofocus>
          </div>

          <div id="login-error" class="alert alert-error hidden"></div>

          <div style="display: flex; gap: 12px; margin-top: 16px;">
            <button class="btn btn-secondary" onclick="document.getElementById('modal').remove()">Cancelar</button>
            <button class="btn btn-primary" id="btn-login" style="flex: 1;">Entrar →</button>
          </div>
        </div>
      </div>
    `;
    const wrap = document.createElement("div");
    wrap.id = "modal";
    wrap.innerHTML = html;
    document.body.appendChild(wrap);

    document.getElementById("btn-login").addEventListener("click", tryLogin);
    document.getElementById("prof-password").addEventListener("keydown", (e) => {
      if (e.key === "Enter") tryLogin();
    });

    function tryLogin() {
      const pwd = document.getElementById("prof-password").value;
      if (pwd === window.PROFESOR_PASSWORD) {
        document.getElementById("modal").remove();
        showProfesorPanel();
      } else {
        const err = document.getElementById("login-error");
        err.textContent = "Contraseña incorrecta";
        err.classList.remove("hidden");
        document.getElementById("prof-password").value = "";
        document.getElementById("prof-password").focus();
      }
    }
  }

  function showProfesorPanel() {
    const collected = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.endsWith("_result")) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          collected.push(data);
        } catch (e) {}
      }
    }

    const rows = collected.map(r => `
      <tr>
        <td>${r.student || '-'}</td>
        <td>${r.grade || '-'}</td>
        <td><code>${r.code || '-'}</code></td>
        <td><strong>${r.score || 0}/${r.total || 0}</strong></td>
        <td>${r.percentage || 0}%</td>
        <td>${Math.floor((r.durationSeconds || 0) / 60)}m ${(r.durationSeconds || 0) % 60}s</td>
        <td>${r.byTimeout ? '⏱️ Timeout' : '✅ Manual'}</td>
        <td>${r.finishedAt ? new Date(r.finishedAt).toLocaleString() : '-'}</td>
      </tr>
    `).join("");

    const html = `
      <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 1000; overflow: auto; padding: 24px;">
        <div style="background: white; border-radius: 20px; padding: 32px; max-width: 1200px; margin: 0 auto;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="color: var(--secondary); margin: 0;">📊 Panel del Profesor</h2>
            <button class="btn btn-secondary" onclick="document.getElementById('modal').remove()">✕ Cerrar</button>
          </div>

          <p style="color: var(--muted); margin-bottom: 16px; font-size: 13px;">
            Resultados almacenados en este navegador: <strong>${collected.length}</strong>.
            <br>Los estudiantes deben descargar su resultado o verlo desde el mismo navegador donde rindieron.
          </p>

          ${collected.length === 0 ? `
            <div class="alert alert-info">
              Aún no hay resultados en este navegador. Los resultados se guardan en el navegador de cada estudiante.
            </div>
          ` : `
            <div style="display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
              <button class="btn btn-primary" id="btn-export-json">📥 Exportar todos (JSON)</button>
              <button class="btn btn-secondary" id="btn-export-csv">📊 Exportar tabla (CSV)</button>
              <button class="btn btn-danger" id="btn-clear">🗑️ Borrar este navegador</button>
            </div>

            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <thead>
                  <tr style="background: var(--primary); color: white;">
                    <th style="padding: 10px; text-align: left;">Estudiante</th>
                    <th style="padding: 10px; text-align: left;">Curso</th>
                    <th style="padding: 10px; text-align: left;">Código</th>
                    <th style="padding: 10px; text-align: left;">Score</th>
                    <th style="padding: 10px; text-align: left;">%</th>
                    <th style="padding: 10px; text-align: left;">Tiempo</th>
                    <th style="padding: 10px; text-align: left;">Estado</th>
                    <th style="padding: 10px; text-align: left;">Finalizado</th>
                  </tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          `}
        </div>
      </div>
    `;
    const wrap = document.createElement("div");
    wrap.id = "modal";
    wrap.innerHTML = html;
    document.body.appendChild(wrap);

    if (collected.length > 0) {
      document.getElementById("btn-export-json").addEventListener("click", () => {
        const blob = new Blob([JSON.stringify(collected, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `resultados_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });

      document.getElementById("btn-export-csv").addEventListener("click", () => {
        const headers = ["Estudiante", "Curso", "Código", "Score", "Total", "Porcentaje", "Tiempo (s)", "Estado", "Finalizado"];
        const lines = [headers.join(",")];
        collected.forEach(r => {
          const row = [
            `"${(r.student || '').replace(/"/g, '""')}"`,
            r.grade || '',
            r.code || '',
            r.score || 0,
            r.total || 0,
            r.percentage || 0,
            r.durationSeconds || 0,
            r.byTimeout ? 'Timeout' : 'Manual',
            r.finishedAt || ''
          ];
          lines.push(row.join(","));
        });
        const blob = new Blob([lines.join("\n")], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `resultados_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });

      document.getElementById("btn-clear").addEventListener("click", () => {
        if (confirm("¿Borrar TODOS los resultados de este navegador?")) {
          for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key && key.endsWith("_result")) localStorage.removeItem(key);
          }
          document.getElementById("modal").remove();
          alert("Resultados borrados de este navegador.");
        }
      });
    }
  }
})();