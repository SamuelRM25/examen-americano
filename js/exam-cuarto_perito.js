// Banco de preguntas · Cuarto Perito Contador (Computación I - Excel)
// Cubre: Clase 1 (Excel básico) + Clase 2 (Función SI)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.cuarto_perito = {
    grade: "cuarto_perito",
    title: "Cuarto Perito Contador",
    subject: "Computación I (Excel - Funciones básicas y SI)",
    duration: 30,
    questions: [
      {
        id: "cp-q1",
        type: "mc",
        prompt: "¿Cómo se identifica una celda en Excel?",
        options: [
          "Por un número únicamente",
          "Por una letra únicamente",
          "Por la letra de la columna y el número de la fila (ej. D10)",
          "Por un color"
        ],
        answer: 2
      },
      {
        id: "cp-q2",
        type: "mc",
        prompt: "¿Cuál es la sintaxis correcta de la función SUMA?",
        options: ["SUMA = (rango)", "=SUMA(rango)", "SUMA(rango)", "=SUMA = rango"],
        answer: 1
      },
      {
        id: "cp-q3",
        type: "mc",
        prompt: "La referencia absoluta en Excel se escribe así:",
        options: ["A1", "$A$1", "&A1&", "@A1"],
        answer: 1
      },
      {
        id: "cp-q4",
        type: "mc",
        prompt: "¿Cuál es la sintaxis correcta de la función SI?",
        options: [
          "=SI(valor_si_verdadero, prueba_lógica, valor_si_falso)",
          "=SI(prueba_lógica, valor_si_verdadero, valor_si_falso)",
          "SI(prueba_lógica, valor_si_verdadero)",
          "=SI.prueba(valor)"
        ],
        answer: 1
      },
      {
        id: "cp-q5",
        type: "mc",
        prompt: "¿Qué operador significa 'distinto de' en Excel?",
        options: ["!=", "<>", "><", "#"],
        answer: 1
      },
      {
        id: "cp-q6",
        type: "tf",
        prompt: "Toda fórmula en Excel debe comenzar con el signo igual (=).",
        answer: true
      },
      {
        id: "cp-q7",
        type: "tf",
        prompt: "La cantidad de funciones SI anidadas que puedes usar es ilimitada.",
        answer: false
      },
      {
        id: "cp-q8",
        type: "tf",
        prompt: "Los textos dentro de la función SI van entre comillas dobles.",
        answer: true
      },
      {
        id: "cp-q9",
        type: "fill",
        prompt: "Para alternar entre referencia relativa y absoluta se usa la tecla ______.",
        answer: ["F4"]
      },
      {
        id: "cp-q10",
        type: "fill",
        prompt: "La función ______() devuelve la fecha actual del sistema.",
        answer: ["HOY"]
      },
      {
        id: "cp-q11",
        type: "match",
        prompt: "Relaciona cada función con su resultado:",
        pairs: {
          left: ["=SUMA(A1:A5)", "=PROMEDIO(A1:A5)", "=MAX(A1:A5)", "=MIN(A1:A5)"],
          right: ["Suma los valores", "Calcula la media", "Valor máximo", "Valor mínimo"]
        },
        answer: { "=SUMA(A1:A5)": "Suma los valores", "=PROMEDIO(A1:A5)": "Calcula la media", "=MAX(A1:A5)": "Valor máximo", "=MIN(A1:A5)": "Valor mínimo" }
      },
      {
        id: "cp-q12",
        type: "match",
        prompt: "Une cada operador con su significado:",
        pairs: {
          left: [">", "<", ">=", "<=", "<>", "="],
          right: ["Mayor que", "Menor que", "Mayor o igual", "Menor o igual", "Distinto de", "Igual a"]
        },
        answer: { ">": "Mayor que", "<": "Menor que", ">=": "Mayor o igual", "<=": "Menor o igual", "<>": "Distinto de", "=": "Igual a" }
      },
      {
        id: "cp-q13",
        type: "short",
        prompt: "Explica la diferencia entre referencia relativa y referencia absoluta. Da un ejemplo donde sea útil cada una."
      },
      {
        id: "cp-q14",
        type: "short",
        prompt: "Escribe una fórmula SI que muestre 'Aprobado' si la nota en A1 es mayor o igual a 60, y 'Reprobado' en caso contrario."
      },
      {
        id: "cp-q15",
        type: "relation",
        prompt: "Para cada función indica qué devuelve:",
        pairs: {
          left: ["SUMA", "PROMEDIO", "MAX", "MIN", "CONTAR"],
          right: ["Suma total", "Media aritmética", "Valor más alto", "Valor más bajo", "Cantidad de números"]
        },
        answer: {
          "SUMA": "Suma total",
          "PROMEDIO": "Media aritmética",
          "MAX": "Valor más alto",
          "MIN": "Valor más bajo",
          "CONTAR": "Cantidad de números"
        }
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));