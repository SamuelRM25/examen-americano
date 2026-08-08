// Códigos de acceso para los exámenes del Colegio Americano
// 9 cursos · 1 examen por curso · 15 preguntas cada uno

const ACCESS_CODES = {
  "AMR-PB-SXGL": { grade: "primero_basico",         label: "Primero Básico",          subject: "TAC (Mecanografía)" },
  "AMR-SB-OBXK": { grade: "segundo_basico",         label: "Segundo Básico",          subject: "TAC (Mecanografía)" },
  "AMR-TB-TQIC": { grade: "tercero_basico",         label: "Tercero Básico",          subject: "TAC (Procesamiento de textos)" },
  "AMR-CM-KQJL": { grade: "cuarto_madurez",         label: "Cuarto Bachillerato por Madurez", subject: "TIC" },
  "AMR-CP-AJML": { grade: "cuarto_perito",          label: "Cuarto Perito Contador",  subject: "Computación I (Excel)" },
  "AMR-QP-BZIG": { grade: "quinto_perito",          label: "Quinto Perito Contador",  subject: "Computación II (Tablas dinámicas)" },
  "AMR-SP-RATH": { grade: "sexto_pc",               label: "Sexto Perito Contador",   subject: "Computación III (Excel avanzado)" },
  "AMR-CS-ZWYP": { grade: "cuarto_secretariado",    label: "Cuarto Secretariado",     subject: "Computación I (Archivos, OCR)" },
  "AMR-QB-KZXY": { grade: "quinto_bachillerato",    label: "Quinto Bachillerato en Computación", subject: "Computación II (Programación Web)" }
};

function lookupCode(code) {
  if (!code) return null;
  const key = String(code).trim().toUpperCase();
  return ACCESS_CODES[key] || null;
}

function getGradeMeta(gradeId) {
  for (const k of Object.keys(ACCESS_CODES)) {
    const v = ACCESS_CODES[k];
    if (v.grade === gradeId) return { code: k, ...v };
  }
  return null;
}

if (typeof window !== "undefined") {
  window.ACCESS_CODES = ACCESS_CODES;
  window.lookupCode = lookupCode;
  window.getGradeMeta = getGradeMeta;
}

if (typeof module !== "undefined") {
  module.exports = { ACCESS_CODES, lookupCode, getGradeMeta };
}