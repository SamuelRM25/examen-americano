// Banco de preguntas · Examen de Prueba (oculto, solo accesible por URL)
// 4 preguntas para validar el flujo completo (nombre, código, navegación, scoring, descarga JSON)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.test_rapido = {
    grade: "test_rapido",
    title: "Examen de Prueba",
    subject: "🧪 Solo para pruebas del sistema",
    duration: 5,
    hidden: true,
    questions: [
      {
        id: "test-q1",
        type: "mc",
        prompt: "¿Cuál es la capital de Guatemala?",
        options: ["Quetzaltenango", "Ciudad de Guatemala", "Antigua Guatemala", "Cobán"],
        answer: 1
      },
      {
        id: "test-q2",
        type: "tf",
        prompt: "El HTML es un lenguaje de programación.",
        answer: false
      },
      {
        id: "test-q3",
        type: "fill",
        prompt: "El planeta más cercano al sol es ______.",
        answer: ["Mercurio"]
      },
      {
        id: "test-q4",
        type: "short",
        prompt: "¿Qué aprendiste hoy? (escribe al menos una oración)"
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));