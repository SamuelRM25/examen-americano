// Banco de preguntas · Quinto Perito Contador (Computación II - Tablas dinámicas)
// Cubre: Clase 1 (Tablas dinámicas básicas) + Clase 2 (Slicers y Timelines)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.quinto_perito = {
    grade: "quinto_perito",
    title: "Quinto Perito Contador",
    subject: "Computación II (Tablas dinámicas y Dashboards)",
    duration: 30,
    questions: [
      {
        id: "qp-q1",
        type: "mc",
        prompt: "¿Qué es una tabla dinámica?",
        options: [
          "Una tabla que rota físicamente los datos",
          "Una herramienta que resume y analiza grandes volúmenes de datos sin modificar los originales",
          "Un gráfico de barras automático",
          "Un tipo de filtro permanente"
        ],
        answer: 1
      },
      {
        id: "qp-q2",
        type: "mc",
        prompt: "¿Cuántas áreas tiene el panel de campos de una tabla dinámica?",
        options: ["2", "3", "4", "6"],
        answer: 2
      },
      {
        id: "qp-q3",
        type: "mc",
        prompt: "¿Cuál es la operación PREDETERMINADA cuando arrastras un campo al área de Valores?",
        options: ["Promedio", "Contar", "Suma", "Máximo"],
        answer: 2
      },
      {
        id: "qp-q4",
        type: "mc",
        prompt: "Un 'slicer' (segmentación de datos) es:",
        options: [
          "Una hoja de cálculo adicional",
          "Un filtro visual con botones clicables",
          "Una tabla normal",
          "Un gráfico circular"
        ],
        answer: 1
      },
      {
        id: "qp-q5",
        type: "mc",
        prompt: "¿En qué pestaña se inserta un slicer?",
        options: ["Inicio", "Insertar", "Analizar (Herramientas de tabla dinámica)", "Datos"],
        answer: 2
      },
      {
        id: "qp-q6",
        type: "tf",
        prompt: "Las tablas dinámicas se actualizan automáticamente cuando cambian los datos originales.",
        answer: false
      },
      {
        id: "qp-q7",
        type: "tf",
        prompt: "Un slicer puede estar conectado a varias tablas dinámicas simultáneamente.",
        answer: true
      },
      {
        id: "qp-q8",
        type: "tf",
        prompt: "La Timeline (línea de tiempo) funciona con campos de tipo texto.",
        answer: false
      },
      {
        id: "qp-q9",
        type: "fill",
        prompt: "El área de ______ permite filtrar toda la tabla dinámica con un valor seleccionado.",
        answer: ["Filtros", "filtros"]
      },
      {
        id: "qp-q10",
        type: "fill",
        prompt: "Para conectar un slicer a varias tablas se usa la opción 'Conexiones de ______'.",
        answer: ["informes"]
      },
      {
        id: "qp-q11",
        type: "match",
        prompt: "Relaciona cada área del panel con su función:",
        pairs: {
          left: ["Filas", "Columnas", "Valores", "Filtros"],
          right: ["Valores únicos como filas", "Valores únicos como columnas", "Cálculos (suma, promedio...)", "Filtra toda la tabla"]
        },
        answer: { "Filas": "Valores únicos como filas", "Columnas": "Valores únicos como columnas", "Valores": "Cálculos (suma, promedio...)", "Filtros": "Filtra toda la tabla" }
      },
      {
        id: "qp-q12",
        type: "match",
        prompt: "Une el control visual con su función:",
        pairs: {
          left: ["Slicer", "Timeline", "Filtro tradicional"],
          right: ["Botones clicables para filtrar", "Filtro por fechas", "Menú desplegable clásico"]
        },
        answer: { "Slicer": "Botones clicables para filtrar", "Timeline": "Filtro por fechas", "Filtro tradicional": "Menú desplegable clásico" }
      },
      {
        id: "qp-q13",
        type: "short",
        prompt: "Explica qué es una tabla dinámica y menciona al menos 3 ventajas de usarla frente a una tabla normal."
      },
      {
        id: "qp-q14",
        type: "short",
        prompt: "Describe cómo crearías un dashboard básico en Excel combinando 2 tablas dinámicas, un slicer y una Timeline."
      },
      {
        id: "qp-q15",
        type: "relation",
        prompt: "Para cada operación de campo de valor, indica qué calcula:",
        pairs: {
          left: ["Suma", "Promedio", "Contar", "Máximo"],
          right: ["Total acumulado", "Media aritmética", "Cantidad de registros", "Valor más alto"]
        },
        answer: {
          "Suma": "Total acumulado",
          "Promedio": "Media aritmética",
          "Contar": "Cantidad de registros",
          "Máximo": "Valor más alto"
        }
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));