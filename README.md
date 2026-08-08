# 📚 Exámenes Colegio Americano

Plataforma de evaluación en línea para los cursos del Colegio Americano.

## 🚀 Características

- **9 cursos** disponibles con exámenes de 15 preguntas
- **5 tipos de pregunta**: opción múltiple, verdadero/falso, completar, unir columnas, desarrollo
- **30 minutos** de tiempo por examen
- **Acceso por código** único por curso
- **Persistencia local** (el estudiante puede continuar si cierra accidentalmente)
- **Descarga de resultados** en JSON para enviar al profesor
- **Diseño responsive** (móvil, tablet, desktop)
- **Sin servidor**: funciona 100% en GitHub Pages

## 📁 Estructura

```
examen-americano/
├── index.html              # Landing con los 9 cursos
├── examen.html             # Pantalla de examen
├── CODES.md                # 🔒 Códigos de acceso (solo profesor)
├── README.md
├── css/
│   ├── base.css
│   ├── theme.css
│   └── exam.css
└── js/
    ├── codes.js            # Mapa código → curso
    ├── exam-*.js           # Banco de preguntas (un archivo por curso)
    ├── exam-engine.js      # Motor del examen (timer, scoring)
    ├── landing.js          # Renderizado de la landing
    └── app.js              # Lógica principal del examen
```

## 🌐 Despliegue

1. Sube el contenido a GitHub en el repo `SamuelRM25/examen-americano`
2. Settings → Pages → Branch: `main` / `(root)`
3. URL final: `https://samuelrm25.github.io/examen-americano/`

## 🔐 Códigos de acceso

Ver [`CODES.md`](./CODES.md). Cada curso tiene un código único de 8 caracteres que el profesor entrega a sus estudiantes.

## ✏️ Agregar un examen nuevo

1. Crea `js/exam-{nombre_curso}.js` con la estructura:
   ```js
   const EXAMS = {
     nuevo_curso: {
       grade: "nuevo_curso",
       title: "...",
       subject: "...",
       duration: 30,
       questions: [...]
     }
   };
   ```
2. Agrega el código en `js/codes.js`
3. Incluye el script en `examen.html`
4. Suma el orden en `js/landing.js`

## 📊 Tipos de pregunta soportados

| Tipo | Código | Descripción |
|------|--------|-------------|
| Opción múltiple | `"mc"` | 4 opciones, una correcta |
| Verdadero/Falso | `"tf"` | Booleano |
| Completar | `"fill"` | Texto libre (case-insensitive, acepta varias respuestas válidas) |
| Unir columnas | `"match"` | Emparejar elementos de 2 listas |
| Desarrollo | `"short"` | Texto largo (recibe 1 punto automáticamente al responder) |

---

Hecho con ❤️ por **Prof. Samuel Ramírez** para el Colegio Americano.