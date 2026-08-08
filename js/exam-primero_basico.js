// Banco de preguntas · Primero Básico (TAC - Mecanografía)
// Cubre: Clase 1 (Teclas inferiores ZXCV-BNM) + Clase 2 (Combinación de filas)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.primero_basico = {
    grade: "primero_basico",
    title: "Primero Básico",
    subject: "TAC (Mecanografía)",
    duration: 30,
    questions: [
      {
        id: "pb-q1",
        type: "mc",
        prompt: "¿Cuáles de estas teclas pertenecen a la fila inferior del teclado?",
        options: ["A S D F", "Q W E R", "Z X C V", "1 2 3 4"],
        answer: 2
      },
      {
        id: "pb-q2",
        type: "mc",
        prompt: "¿Qué dedo pulsa la tecla V?",
        options: ["Meñique izquierdo", "Anular izquierdo", "Medio izquierdo", "Índice izquierdo"],
        answer: 3
      },
      {
        id: "pb-q3",
        type: "mc",
        prompt: "La tecla M es pulsada por el:",
        options: ["Índice derecho", "Medio derecho", "Anular derecho", "Meñique derecho"],
        answer: 2
      },
      {
        id: "pb-q4",
        type: "mc",
        prompt: "¿Cuál es la fila de descanso de los dedos al escribir?",
        options: ["Fila superior (Q-P)", "Fila inferior (Z-M)", "Fila home (A-Ñ)", "Fila de números"],
        answer: 2
      },
      {
        id: "pb-q5",
        type: "mc",
        prompt: "El meñique izquierdo sube desde A hasta la tecla:",
        options: ["W", "Q", "Z", "S"],
        answer: 1
      },
      {
        id: "pb-q6",
        type: "tf",
        prompt: "La tecla M es la más usada en el idioma español.",
        answer: true
      },
      {
        id: "pb-q7",
        type: "tf",
        prompt: "Al escribir, las muñecas deben moverse constantemente para llegar a las teclas lejanas.",
        answer: false
      },
      {
        id: "pb-q8",
        type: "tf",
        prompt: "El índice derecho controla teclas tanto de la fila superior como de la inferior.",
        answer: true
      },
      {
        id: "pb-q9",
        type: "fill",
        prompt: "Después de pulsar cualquier tecla, los dedos deben volver siempre a la fila ______.",
        answer: ["home", "de descanso"]
      },
      {
        id: "pb-q10",
        type: "fill",
        prompt: "La tecla Z se pulsa con el dedo _______ izquierdo.",
        answer: ["meñique"]
      },
      {
        id: "pb-q11",
        type: "match",
        prompt: "Une cada tecla con el dedo que la pulsa:",
        pairs: {
          left: ["Tecla B", "Tecla C", "Tecla M", "Tecla Z"],
          right: ["Índice derecho", "Medio izquierdo", "Anular derecho", "Meñique izquierdo"]
        },
        answer: { "Tecla B": "Índice derecho", "Tecla C": "Medio izquierdo", "Tecla M": "Anular derecho", "Tecla Z": "Meñique izquierdo" }
      },
      {
        id: "pb-q12",
        type: "match",
        prompt: "Relaciona la fila con su contenido:",
        pairs: {
          left: ["Fila superior", "Fila home", "Fila inferior"],
          right: ["Q W E R T Y U I O P", "A S D F G H J K L Ñ", "Z X C V B N M , . -"]
        },
        answer: { "Fila superior": "Q W E R T Y U I O P", "Fila home": "A S D F G H J K L Ñ", "Fila inferior": "Z X C V B N M , . -" }
      },
      {
        id: "pb-q13",
        type: "short",
        prompt: "Explica con tus palabras qué es la 'fila home' y por qué es importante al escribir."
      },
      {
        id: "pb-q14",
        type: "short",
        prompt: "Menciona tres errores comunes al mecanografiar y cómo evitarlos."
      },
      {
        id: "pb-q15",
        type: "relation",
        prompt: "Indica qué dedo (meñique, anular, medio o índice) pulsa cada tecla. Escribe el nombre del dedo:",
        pairs: {
          left: ["Tecla Q", "Tecla W", "Tecla E", "Tecla R", "Tecla N"],
          right: ["Meñique izquierdo", "Anular izquierdo", "Medio izquierdo", "Índice izquierdo", "Índice derecho"]
        },
        answer: {
          "Tecla Q": "Meñique izquierdo",
          "Tecla W": "Anular izquierdo",
          "Tecla E": "Medio izquierdo",
          "Tecla R": "Índice izquierdo",
          "Tecla N": "Índice derecho"
        }
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));