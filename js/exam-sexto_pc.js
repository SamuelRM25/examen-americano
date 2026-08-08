// Banco de preguntas · Sexto Perito Contador (Computación III - Excel avanzado)
// Cubre: Clase 1 (INDICE + COINCIDIR) + Clase 2 (BUSCARX / XLOOKUP)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.sexto_pc = {
    grade: "sexto_pc",
    title: "Sexto Perito Contador",
    subject: "Computación III (Funciones avanzadas de Excel)",
    duration: 30,
    questions: [
      {
        id: "sp-q1",
        type: "mc",
        prompt: "¿Qué devuelve la función INDICE?",
        options: [
          "La posición de un valor dentro de un rango",
          "El valor ubicado en una fila y columna determinadas de un rango",
          "La suma de un rango",
          "El promedio de un rango"
        ],
        answer: 1
      },
      {
        id: "sp-q2",
        type: "mc",
        prompt: "¿Qué devuelve la función COINCIDIR?",
        options: [
          "El valor de una celda",
          "La posición numérica de un valor dentro de un rango",
          "La suma de una columna",
          "Una imagen"
        ],
        answer: 1
      },
      {
        id: "sp-q3",
        type: "mc",
        prompt: "¿Qué valor del argumento 'tipo_de_coincidencia' en COINCIDIR indica búsqueda EXACTA?",
        options: ["1", "0", "-1", "2"],
        answer: 1
      },
      {
        id: "sp-q4",
        type: "mc",
        prompt: "BUSCARX (XLOOKUP) está disponible en:",
        options: [
          "Excel 2010",
          "Excel 2016",
          "Excel 2021, Microsoft 365 y Excel para la web",
          "Solo Excel para Mac"
        ],
        answer: 2
      },
      {
        id: "sp-q5",
        type: "mc",
        prompt: "Para hacer una búsqueda hacia la IZQUIERDA, la mejor opción moderna es:",
        options: ["BUSCARV", "BUSCARH", "BUSCARX", "SUMA"],
        answer: 2
      },
      {
        id: "sp-q6",
        type: "tf",
        prompt: "INDICE combinado con COINCIDIR es más flexible que BUSCARV.",
        answer: true
      },
      {
        id: "sp-q7",
        type: "tf",
        prompt: "BUSCARX puede reemplazar a BUSCARV, BUSCARH y BUSCAR.",
        answer: true
      },
      {
        id: "sp-q8",
        type: "tf",
        prompt: "BUSCARX solo puede buscar hacia la derecha, igual que BUSCARV.",
        answer: false
      },
      {
        id: "sp-q9",
        type: "fill",
        prompt: "En COINCIDIR, el valor ______ indica coincidencia exacta.",
        answer: ["0", "cero"]
      },
      {
        id: "sp-q10",
        type: "fill",
        prompt: "En BUSCARX, para búsqueda inversa (de abajo hacia arriba) se usa -1 como ______ argumento.",
        answer: ["sexto", "6", "6º"]
      },
      {
        id: "sp-q11",
        type: "match",
        prompt: "Relaciona cada función con su propósito:",
        pairs: {
          left: ["INDICE", "COINCIDIR", "BUSCARX", "SI.ERROR"],
          right: ["Devuelve valor por fila y columna", "Devuelve la posición de un valor", "Búsqueda moderna flexible", "Maneja errores como #N/A"]
        },
        answer: { "INDICE": "Devuelve valor por fila y columna", "COINCIDIR": "Devuelve la posición de un valor", "BUSCARX": "Búsqueda moderna flexible", "SI.ERROR": "Maneja errores como #N/A" }
      },
      {
        id: "sp-q12",
        type: "match",
        prompt: "Une los modos de búsqueda de BUSCARX con su significado:",
        pairs: {
          left: ["1", "-1", "2", "-2"],
          right: ["Búsqueda normal (de arriba hacia abajo)", "Búsqueda inversa (última coincidencia)", "Búsqueda binaria ascendente", "Búsqueda binaria descendente"]
        },
        answer: { "1": "Búsqueda normal (de arriba hacia abajo)", "-1": "Búsqueda inversa (última coincidencia)", "2": "Búsqueda binaria ascendente", "-2": "Búsqueda binaria descendente" }
      },
      {
        id: "sp-q13",
        type: "short",
        prompt: "Explica por qué INDICE+COINCIDIR es más flexible que BUSCARV. Da al menos 2 ventajas."
      },
      {
        id: "sp-q14",
        type: "short",
        prompt: "Escribe una fórmula BUSCARX que busque el producto 'Cuaderno' en A2:A100 y devuelva su precio de B2:B100. Si no lo encuentra debe mostrar 'No existe'."
      },
      {
        id: "sp-q15",
        type: "relation",
        prompt: "Para cada función moderna, indica qué reemplaza:",
        pairs: {
          left: ["BUSCARX", "SI.CONJUNTO (IFS)", "MATRIZ.DINAMICO"],
          right: ["BUSCARV/BUSCARH/BUSCAR", "SI anidados", "Fórmulas que devuelven varios valores"]
        },
        answer: {
          "BUSCARX": "BUSCARV/BUSCARH/BUSCAR",
          "SI.CONJUNTO (IFS)": "SI anidados",
          "MATRIZ.DINAMICO": "Fórmulas que devuelven varios valores"
        }
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));