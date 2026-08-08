// Banco de preguntas · Segundo Básico (TAC - Mecanografía)
// Cubre: Clase 1 (Párrafos y estructura) + Clase 2 (Conectores y cohesión)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.segundo_basico = {
    grade: "segundo_basico",
    title: "Segundo Básico",
    subject: "TAC (Mecanografía)",
    duration: 30,
    questions: [
      {
        id: "sb-q1",
        type: "mc",
        prompt: "¿Qué es un párrafo?",
        options: [
          "Una sola oración larga",
          "Una unidad de texto sobre una sola idea, formada por una o varias oraciones",
          "Un título del documento",
          "Una lista numerada"
        ],
        answer: 1
      },
      {
        id: "sb-q2",
        type: "mc",
        prompt: "La sangría es:",
        options: [
          "El espacio al inicio de la primera línea de un párrafo",
          "Una marca de agua al final del texto",
          "Un tipo de letra cursiva",
          "El título del documento"
        ],
        answer: 0
      },
      {
        id: "sb-q3",
        type: "mc",
        prompt: "¿Cuál de estos NO es un tipo de párrafo según su función?",
        options: ["Párrafo de inicio", "Párrafo de desarrollo", "Párrafo de cierre", "Párrafo de imagen"],
        answer: 3
      },
      {
        id: "sb-q4",
        type: "mc",
        prompt: "La oración que presenta la idea principal del párrafo se llama:",
        options: ["Oración temática", "Oración de cierre", "Oración subordinada", "Conector"],
        answer: 0
      },
      {
        id: "sb-q5",
        type: "mc",
        prompt: "¿Qué conector usarías para indicar CONTRASTE?",
        options: ["Además", "Sin embargo", "Por lo tanto", "En primer lugar"],
        answer: 1
      },
      {
        id: "sb-q6",
        type: "tf",
        prompt: "Un párrafo bien escrito debe tratar una sola idea principal.",
        answer: true
      },
      {
        id: "sb-q7",
        type: "tf",
        prompt: "La palabra 'La' es un conector.",
        answer: false
      },
      {
        id: "sb-q8",
        type: "tf",
        prompt: "Un párrafo coherente es aquel cuyas ideas tienen sentido lógico entre sí.",
        answer: true
      },
      {
        id: "sb-q9",
        type: "fill",
        prompt: "Un párrafo bien escrito debe tratar _______ sola idea principal.",
        answer: ["una"]
      },
      {
        id: "sb-q10",
        type: "fill",
        prompt: "'Por lo tanto' es un conector de _______.",
        answer: ["consecuencia"]
      },
      {
        id: "sb-q11",
        type: "match",
        prompt: "Une cada conector con su tipo:",
        pairs: {
          left: ["Además", "Sin embargo", "Porque", "Por ejemplo"],
          right: ["Adición", "Contraste", "Causa", "Ejemplo"]
        },
        answer: { "Además": "Adición", "Sin embargo": "Contraste", "Porque": "Causa", "Por ejemplo": "Ejemplo" }
      },
      {
        id: "sb-q12",
        type: "match",
        prompt: "Relaciona el tipo de párrafo con su función:",
        pairs: {
          left: ["Inicio", "Desarrollo", "Cierre"],
          right: ["Captura la atención", "Amplía la idea principal", "Resume o concluye"]
        },
        answer: { "Inicio": "Captura la atención", "Desarrollo": "Amplía la idea principal", "Cierre": "Resume o concluye" }
      },
      {
        id: "sb-q13",
        type: "short",
        prompt: "Explica la diferencia entre coherencia y cohesión en un párrafo. Da un ejemplo de cada una."
      },
      {
        id: "sb-q14",
        type: "short",
        prompt: "Escribe un párrafo de 5 oraciones sobre 'La importancia de la lectura'. Indica cuál es la oración temática, cuáles son de desarrollo y cuál es de cierre."
      },
      {
        id: "sb-q15",
        type: "relation",
        prompt: "Para cada conector, indica su tipo (adición, causa, consecuencia, contraste o ejemplo):",
        pairs: {
          left: ["Además", "Sin embargo", "Porque", "Por lo tanto", "Por ejemplo"],
          right: ["Adición", "Contraste", "Causa", "Consecuencia", "Ejemplo"]
        },
        answer: {
          "Además": "Adición",
          "Sin embargo": "Contraste",
          "Porque": "Causa",
          "Por lo tanto": "Consecuencia",
          "Por ejemplo": "Ejemplo"
        }
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));