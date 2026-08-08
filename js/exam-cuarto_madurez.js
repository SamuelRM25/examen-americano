// Banco de preguntas · Cuarto Bachillerato por Madurez (TIC)
// Cubre: Clase 1 (Hardware y software) + Clase 2 (Mantenimiento preventivo)

(function (w) {
  w.EXAMS = w.EXAMS || {};
  w.EXAMS.cuarto_madurez = {
    grade: "cuarto_madurez",
    title: "Cuarto Bachillerato por Madurez",
    subject: "TIC",
    duration: 30,
    questions: [
      {
        id: "cm-q1",
        type: "mc",
        prompt: "¿Cuál de estos componentes es HARDWARE?",
        options: ["Microsoft Windows", "Google Chrome", "Una memoria USB", "Microsoft Word"],
        answer: 2
      },
      {
        id: "cm-q2",
        type: "mc",
        prompt: "La CPU es considerada el 'cerebro' de la computadora porque:",
        options: [
          "Almacena archivos",
          "Procesa las instrucciones y coordina los componentes",
          "Muestra imágenes en el monitor",
          "Permite escribir textos"
        ],
        answer: 1
      },
      {
        id: "cm-q3",
        type: "mc",
        prompt: "La memoria RAM es:",
        options: [
          "Una memoria permanente que guarda archivos aunque se apague el equipo",
          "Una memoria temporal de trabajo que se borra al apagar",
          "Una pieza del teclado",
          "Un programa antivirus"
        ],
        answer: 1
      },
      {
        id: "cm-q4",
        type: "mc",
        prompt: "¿Cuál es el enemigo número uno de los componentes internos del equipo?",
        options: ["El polvo", "El calor excesivo", "La luz", "El sonido"],
        answer: 1
      },
      {
        id: "cm-q5",
        type: "mc",
        prompt: "Antes de abrir un equipo para limpiarlo internamente, lo primero que debes hacer es:",
        options: [
          "Conectar más cables",
          "Apagar y desconectar el equipo, y descargar la electricidad estática",
          "Encender el monitor",
          "Poner música"
        ],
        answer: 1
      },
      {
        id: "cm-q6",
        type: "tf",
        prompt: "La memoria RAM conserva la información de forma permanente aunque apagues la computadora.",
        answer: false
      },
      {
        id: "cm-q7",
        type: "tf",
        prompt: "La pasta térmica debe reemplazarse cada 2 a 3 años.",
        answer: true
      },
      {
        id: "cm-q8",
        type: "tf",
        prompt: "Es seguro usar un soplete de aire a alta presión para limpiar el interior del equipo.",
        answer: false
      },
      {
        id: "cm-q9",
        type: "fill",
        prompt: "La Unidad Central de _______ (CPU) procesa las instrucciones del equipo.",
        answer: ["Procesamiento", "procesamiento"]
      },
      {
        id: "cm-q10",
        type: "fill",
        prompt: "Antes de abrir el equipo, hay que descargarse de la energía _______.",
        answer: ["estática"]
      },
      {
        id: "cm-q11",
        type: "match",
        prompt: "Clasifica cada periférico como entrada, salida o mixto:",
        pairs: {
          left: ["Teclado", "Monitor", "Pantalla táctil", "Impresora"],
          right: ["Entrada", "Salida", "Mixto", "Salida"]
        },
        answer: { "Teclado": "Entrada", "Monitor": "Salida", "Pantalla táctil": "Mixto", "Impresora": "Salida" }
      },
      {
        id: "cm-q12",
        type: "match",
        prompt: "Relaciona el software con su categoría:",
        pairs: {
          left: ["Microsoft Word", "Windows 11", "Google Chrome", "BIOS/UEFI"],
          right: ["Aplicación", "Sistema operativo", "Aplicación", "Sistema (firmware)"]
        },
        answer: { "Microsoft Word": "Aplicación", "Windows 11": "Sistema operativo", "Google Chrome": "Aplicación", "BIOS/UEFI": "Sistema (firmware)" }
      },
      {
        id: "cm-q13",
        type: "short",
        prompt: "Explica con tus palabras la diferencia entre hardware y software. Da 3 ejemplos de cada uno."
      },
      {
        id: "cm-q14",
        type: "short",
        prompt: "Crea una rutina de mantenimiento preventivo (limpieza diaria, semanal, mensual, trimestral, semestral y anual)."
      },
      {
        id: "cm-q15",
        type: "relation",
        prompt: "Para cada componente, indica su función:",
        pairs: {
          left: ["CPU", "RAM", "SSD", "Placa base"],
          right: ["Procesa instrucciones", "Memoria temporal de trabajo", "Almacenamiento permanente", "Conecta todos los componentes"]
        },
        answer: {
          "CPU": "Procesa instrucciones",
          "RAM": "Memoria temporal de trabajo",
          "SSD": "Almacenamiento permanente",
          "Placa base": "Conecta todos los componentes"
        }
      }
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = w.EXAMS;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));