// Banco de preguntas · Quinto Bachillerato en Computación (Programación Web)
// Cubre: Clase 1 (HTML estructura) + Clase 2 (HTML enlaces, imágenes, listas)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.quinto_bachillerato = {
    grade: "quinto_bachillerato",
    title: "Quinto Bachillerato en Computación",
    subject: "Computación II (Programación Web: HTML)",
    duration: 30,
    questions: [
      {
        id: "qb-q1",
        type: "mc",
        prompt: "¿Qué es HTML?",
        options: [
          "Un lenguaje para programar aplicaciones de escritorio",
          "Un lenguaje para crear la estructura y el contenido de páginas web",
          "Una base de datos",
          "Un sistema operativo"
        ],
        answer: 1
      },
      {
        id: "qb-q2",
        type: "mc",
        prompt: "¿Cuál es la declaración que indica que un documento usa HTML5?",
        options: ["<!HTML5>", "<!DOCTYPE html>", "<DOCTYPE5>", "<?html?>"],
        answer: 1
      },
      {
        id: "qb-q3",
        type: "mc",
        prompt: "¿Qué etiqueta representa el encabezado más importante?",
        options: ["<h6>", "<heading>", "<h1>", "<header>"],
        answer: 2
      },
      {
        id: "qb-q4",
        type: "mc",
        prompt: "Para abrir un enlace en una nueva pestaña se usa el atributo:",
        options: ['target="_self"', 'target="_blank"', 'target="_new"', 'window="new"'],
        answer: 1
      },
      {
        id: "qb-q5",
        type: "mc",
        prompt: "¿Qué etiqueta se usa para insertar una imagen?",
        options: ["<image>", "<img>", "<picture>", "<src>"],
        answer: 1
      },
      {
        id: "qb-q6",
        type: "tf",
        prompt: "El atributo 'id' puede repetirse en varios elementos de la misma página.",
        answer: false
      },
      {
        id: "qb-q7",
        type: "tf",
        prompt: "La etiqueta <img> necesita etiqueta de cierre.",
        answer: false
      },
      {
        id: "qb-q8",
        type: "tf",
        prompt: "El atributo 'alt' de la etiqueta <img> es importante para accesibilidad y SEO.",
        answer: true
      },
      {
        id: "qb-q9",
        type: "fill",
        prompt: "Los comentarios en HTML se escriben entre <!-- y ______.",
        answer: ["-->"]
      },
      {
        id: "qb-q10",
        type: "fill",
        prompt: "La etiqueta <______> agrupa contenido en bloque y ocupa todo el ancho disponible.",
        answer: ["div"]
      },
      {
        id: "qb-q11",
        type: "match",
        prompt: "Relaciona cada etiqueta con su función:",
        pairs: {
          left: ["<a>", "<img>", "<ul>", "<p>"],
          right: ["Enlace", "Imagen", "Lista no ordenada", "Párrafo"]
        },
        answer: { "<a>": "Enlace", "<img>": "Imagen", "<ul>": "Lista no ordenada", "<p>": "Párrafo" }
      },
      {
        id: "qb-q12",
        type: "match",
        prompt: "Une el atributo con su uso en <a> o <img>:",
        pairs: {
          left: ["href", "src", "alt", "target"],
          right: ["URL de destino del enlace", "Origen de la imagen", "Texto alternativo", "Dónde se abre el enlace"]
        },
        answer: { "href": "URL de destino del enlace", "src": "Origen de la imagen", "alt": "Texto alternativo", "target": "Dónde se abre el enlace" }
      },
      {
        id: "qb-q13",
        type: "short",
        prompt: "Escribe la estructura mínima de un documento HTML5 con título 'Mi página' y un encabezado <h1> que diga 'Hola mundo'."
      },
      {
        id: "qb-q14",
        type: "short",
        prompt: "Explica la diferencia entre ruta relativa y ruta absoluta para imágenes o enlaces. Da un ejemplo de cada una."
      },
      {
        id: "qb-q15",
        type: "relation",
        prompt: "Para cada etiqueta, indica si es de bloque o en línea:",
        pairs: {
          left: ["<div>", "<span>", "<h1>", "<p>"],
          right: ["Bloque", "En línea", "Bloque", "Bloque"]
        },
        answer: {
          "<div>": "Bloque",
          "<span>": "En línea",
          "<h1>": "Bloque",
          "<p>": "Bloque"
        }
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));