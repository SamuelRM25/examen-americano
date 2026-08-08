// Banco de preguntas · Cuarto Secretariado (Computación I - Archivos y OCR)
// Cubre: Clase 1 (Gestión de archivos en Windows) + Clase 2 (Digitalización y OCR)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.cuarto_secretariado = {
    grade: "cuarto_secretariado",
    title: "Cuarto Secretariado",
    subject: "Computación I (Archivos, OCR, Correo, Agenda)",
    duration: 30,
    questions: [
      {
        id: "cs-q1",
        type: "mc",
        prompt: "¿Cuál es el atajo para abrir el Explorador de archivos en Windows?",
        options: ["Ctrl + E", "Win + E", "Alt + F4", "Ctrl + Shift + N"],
        answer: 1
      },
      {
        id: "cs-q2",
        type: "mc",
        prompt: "Para RENOMBRAR rápidamente un archivo seleccionado en Windows se usa la tecla:",
        options: ["F1", "F2", "F5", "Supr"],
        answer: 1
      },
      {
        id: "cs-q3",
        type: "mc",
        prompt: "¿Qué hace la combinación Ctrl + X?",
        options: [
          "Copia el archivo (deja el original)",
          "Corta el archivo (lo mueve al pegar)",
          "Pega el archivo",
          "Cierra el archivo"
        ],
        answer: 1
      },
      {
        id: "cs-q4",
        type: "mc",
        prompt: "¿Qué significa OCR?",
        options: [
          "Office Computer Reader",
          "Optical Character Recognition (Reconocimiento Óptico de Caracteres)",
          "Online Cloud Resource",
          "Open Code Repository"
        ],
        answer: 1
      },
      {
        id: "cs-q5",
        type: "mc",
        prompt: "Para aplicar OCR gratis usando Google, ¿qué se hace?",
        options: [
          "Imprimir el documento",
          "Subir la imagen/PDF a Google Drive y abrirlo con Google Docs",
          "Enviarlo por correo",
          "Ponerlo en una USB"
        ],
        answer: 1
      },
      {
        id: "cs-q6",
        type: "tf",
        prompt: "La extensión .xlsx corresponde a un archivo de Microsoft Excel.",
        answer: true
      },
      {
        id: "cs-q7",
        type: "tf",
        prompt: "Los archivos eliminados con la tecla Supr van a la Papelera de reciclaje, desde donde se pueden recuperar.",
        answer: true
      },
      {
        id: "cs-q8",
        type: "tf",
        prompt: "El OCR funciona perfectamente con cualquier tipo de letra manuscrita, sin importar la calidad.",
        answer: false
      },
      {
        id: "cs-q9",
        type: "fill",
        prompt: "Los archivos eliminados van a la Papelera de ______.",
        answer: ["reciclaje"]
      },
      {
        id: "cs-q10",
        type: "fill",
        prompt: "La app gratuita de Microsoft para escanear documentos con el celular se llama Microsoft ______.",
        answer: ["Lens"]
      },
      {
        id: "cs-q11",
        type: "match",
        prompt: "Relaciona la extensión con el tipo de archivo:",
        pairs: {
          left: [".docx", ".xlsx", ".pdf", ".jpg"],
          right: ["Documento Word", "Hoja de cálculo", "Documento portable", "Imagen"]
        },
        answer: { ".docx": "Documento Word", ".xlsx": "Hoja de cálculo", ".pdf": "Documento portable", ".jpg": "Imagen" }
      },
      {
        id: "cs-q12",
        type: "match",
        prompt: "Une cada atajo con su acción:",
        pairs: {
          left: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "F2"],
          right: ["Copiar", "Pegar", "Cortar", "Renombrar"]
        },
        answer: { "Ctrl + C": "Copiar", "Ctrl + V": "Pegar", "Ctrl + X": "Cortar", "F2": "Renombrar" }
      },
      {
        id: "cs-q13",
        type: "short",
        prompt: "Explica qué es el OCR y para qué sirve. Da un ejemplo de uso en una oficina."
      },
      {
        id: "cs-q14",
        type: "short",
        prompt: "Describe paso a paso cómo digitalizarías un documento en papel y le aplicarías OCR usando herramientas gratuitas."
      },
      {
        id: "cs-q15",
        type: "relation",
        prompt: "Para cada herramienta OCR, indica su disponibilidad:",
        pairs: {
          left: ["Google Docs (Drive)", "Microsoft Lens", "OnlineOCR.net", "Tesseract"],
          right: ["Gratis, en la nube", "App móvil gratuita", "Web gratuita", "Open source (código abierto)"]
        },
        answer: {
          "Google Docs (Drive)": "Gratis, en la nube",
          "Microsoft Lens": "App móvil gratuita",
          "OnlineOCR.net": "Web gratuita",
          "Tesseract": "Open source (código abierto)"
        }
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));