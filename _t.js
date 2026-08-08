const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const base = 'C:/Users/Samuel Ramirez/Documents/GitHub/examen-americano';
const dom = new JSDOM('<html><body></body></html>', { url: 'http://localhost/examen.html?code=AMR-TEST-0001&grade=test_rapido&student=Samuel', runScripts: 'dangerously' });
const w = dom.window;
['codes.js', 'exam-test_rapido.js', 'exam-engine.js'].forEach(f => {
  w.eval(fs.readFileSync(path.join(base, 'js', f), 'utf8'));
});

console.log('lookupCode(AMR-TEST-0001):', w.lookupCode('AMR-TEST-0001'));
console.log('getVisibleGrades() count:', w.getVisibleGrades().length, '(esperado 9, sin test_rapido)');

w.ExamEngine.start({
  code: 'AMR-TEST-0001', grade: 'test_rapido', student: 'Samuel',
  questions: w.EXAMS.test_rapido.questions, timeLimit: 300
});

const st = w.ExamEngine.getState();
console.log('Curso:', st.grade, '| Estudiante:', st.student, '| Preguntas:', st.questions.length, '| Tiempo:', st.timeLimit + 's');

// Responder todas correctamente
w.EXAMS.test_rapido.questions.forEach(q => {
  if (q.type === 'mc') w.ExamEngine.setAnswer(q.id, q.answer);
  else if (q.type === 'tf') w.ExamEngine.setAnswer(q.id, q.answer);
  else if (q.type === 'fill') w.ExamEngine.setAnswer(q.id, 'Mercurio');
  else w.ExamEngine.setAnswer(q.id, 'Hoy aprendi a hacer examenes.');
});

const score = w.ExamEngine.calculateScore();
console.log('Score:', score.score + '/' + score.total, '(' + score.percentage + '%)');
console.log('\n✓ Examen de prueba OK');