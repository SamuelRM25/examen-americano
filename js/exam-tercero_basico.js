// Banco de preguntas · Tercero Básico (TAC - Procesamiento de textos)
// Cubre: Clase 1 (Procesadores de texto) + Clase 2 (Listas con viñetas y numeración)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.tercero_basico = {
    grade: "tercero_basico",
    title: "Tercero Básico",
    subject: "TAC (Procesamiento de textos)",
    duration: 30,
    questions: [
      {
        id: "tb-q1",
        type: "mc",
        prompt: "¿Cuál de los siguientes es un procesador de textos?",
        options: ["Google Chrome", "Microsoft Word", "Adobe Photoshop", "Winamp"],
        answer: 1
      },
      {
        id: "tb-q2",
        type: "mc",
        prompt: "¿En qué lugar Google Docs guarda los documentos automáticamente?",
        options: ["En la memoria USB", "En Google Drive", "En el escritorio del PC", "En un CD"],
        answer: 1
      },
      {
        id: "tb-q3",
        type: "mc",
        prompt: "¿Cuál es la extensión de archivo de Microsoft Word?",
        options: [".xlsx", ".pptx", ".docx", ".pdf"],
        answer: 2
      },
      {
        id: "tb-q4",
        type: "mc",
        prompt: "La barra superior de Word con pestañas (Inicio, Insertar, Diseño...) se llama:",
        options: ["Barra de tareas", "Cinta de opciones (Ribbon)", "Panel de control", "Barra de estado"],
        answer: 1
      },
      {
        id: "tb-q5",
        type: "mc",
        prompt: "¿Cuándo conviene usar una lista numerada?",
        options: [
          "Cuando el orden de los elementos no importa",
          "Cuando el orden sí importa (por ejemplo, pasos de una receta)",
          "Solo para decorar",
          "Para subrayar palabras"
        ],
        answer: 1
      },
      {
        id: "tb-q6",
        type: "tf",
        prompt: "Google Docs guarda automáticamente en la nube a medida que escribes.",
        answer: true
      },
      {
        id: "tb-q7",
        type: "tf",
        prompt: "Las viñetas se usan cuando el orden de los elementos NO es importante.",
        answer: true
      },
      {
        id: "tb-q8",
        type: "tf",
        prompt: "La extensión de archivo de un documento de Word es .xlsx.",
        answer: false
      },
      {
        id: "tb-q9",
        type: "fill",
        prompt: "Para guardar rápidamente en Windows se usa el atajo Ctrl + ______.",
        answer: ["S"]
      },
      {
        id: "tb-q10",
        type: "fill",
        prompt: "Para crear un sub-elemento dentro de una lista se usa la tecla ______.",
        answer: ["Tab"]
      },
      {
        id: "tb-q11",
        type: "match",
        prompt: "Une cada tipo de lista con su mejor uso:",
        pairs: {
          left: ["Lista con viñetas", "Lista numerada", "Lista multinivel"],
          right: ["Elementos sin orden específico", "Pasos en secuencia", "Esquemas jerárquicos"]
        },
        answer: { "Lista con viñetas": "Elementos sin orden específico", "Lista numerada": "Pasos en secuencia", "Lista multinivel": "Esquemas jerárquicos" }
      },
      {
        id: "tb-q12",
        type: "match",
        prompt: "Relaciona el programa con su extensión de archivo:",
        pairs: {
          left: ["Microsoft Word", "Microsoft Excel", "Google Docs (descargado)", "Imagen"],
          right: [".docx", ".xlsx", ".docx o .pdf", ".jpg o .png"]
        },
        answer: { "Microsoft Word": ".docx", "Microsoft Excel": ".xlsx", "Google Docs (descargado)": ".docx o .pdf", "Imagen": ".jpg o .png" }
      },
      {
        id: "tb-q13",
        type: "short",
        prompt: "Menciona tres diferencias entre Microsoft Word y Google Docs."
      },
      {
        id: "tb-q14",
        type: "short",
        prompt: "Explica cuándo usarías una lista con viñetas, una numerada y una multinivel. Da un ejemplo de cada una."
      },
      {
        id: "tb-q15",
        type: "relation",
        prompt: "Indica la extensión correcta para cada tipo de archivo:",
        pairs: {
          left: ["Documento Word", "Hoja de cálculo", "Imagen", "Presentación"],
          right: [".docx", ".xlsx", ".jpg", ".pptx"]
        },
        answer: {
          "Documento Word": ".docx",
          "Hoja de cálculo": ".xlsx",
          "Imagen": ".jpg",
          "Presentación": ".pptx"
        }
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));