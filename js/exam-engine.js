// Motor del examen: timer, navegación, scoring, persistencia

const ExamEngine = (function () {
  const STORAGE_PREFIX = "exam_americano_";
  let state = {
    code: null,
    grade: null,
    student: "",
    questions: [],
    answers: {},
    startedAt: null,
    finishedAt: null,
    durationSeconds: 0,
    timeLimit: 30 * 60,
    timerId: null,
    currentIndex: 0
  };

  function getStorageKey(code) {
    return STORAGE_PREFIX + (code || "current");
  }

  function save() {
    try {
      const data = { ...state };
      data.timerId = null;
      localStorage.setItem(getStorageKey(state.code), JSON.stringify(data));
    } catch (e) {
      console.error("save error", e);
    }
  }

  function load(code) {
    try {
      const raw = localStorage.getItem(getStorageKey(code));
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function start({ code, grade, student, questions, timeLimit }) {
    state = {
      code, grade, student,
      questions: questions.slice(),
      answers: {},
      startedAt: new Date().toISOString(),
      finishedAt: null,
      durationSeconds: 0,
      timeLimit: timeLimit || 30 * 60,
      timerId: null,
      currentIndex: 0
    };
    save();
    startTimer();
  }

  function resume(saved) {
    state = { ...saved, timerId: null };
    startTimer();
  }

  function startTimer() {
    if (state.timerId) clearInterval(state.timerId);
    const startMs = Date.now();
    state.timerId = setInterval(() => {
      state.durationSeconds = Math.floor((Date.now() - startMs) / 1000);
      const remaining = state.timeLimit - state.durationSeconds;
      if (typeof window.onTick === "function") window.onTick(remaining);
      if (remaining <= 0) {
        finish(true);
      }
    }, 1000);
  }

  function setAnswer(qId, value) {
    state.answers[qId] = value;
    save();
  }

  function goTo(index) {
    if (index < 0 || index >= state.questions.length) return;
    state.currentIndex = index;
    if (typeof window.onRender === "function") window.onRender();
  }

  function next() { goTo(state.currentIndex + 1); }
  function prev() { goTo(state.currentIndex - 1); }

  function isCorrect(question, given) {
    if (given === undefined || given === null || given === "") return false;
    const ans = question.answer;
    switch (question.type) {
      case "mc":
        return given === ans;
      case "tf":
        return given === ans;
      case "fill": {
        if (Array.isArray(given)) {
          return ans.some(a => given.some(g => String(g).trim().toLowerCase() === String(a).trim().toLowerCase()));
        }
        const normalized = String(given).trim().toLowerCase();
        if (!Array.isArray(ans)) return normalized === String(ans).trim().toLowerCase();
        return ans.some(a => normalized === String(a).trim().toLowerCase());
      }
      case "match":
      case "relation": {
        if (typeof given !== "object") return false;
        const targetPairs = ans || {};
        const total = Object.keys(targetPairs).length || (question.pairs && question.pairs.left.length) || 0;
        if (total === 0) return false;
        let correct = 0;
        for (const k of Object.keys(targetPairs)) {
          if (given[k] === targetPairs[k]) correct++;
        }
        return correct === total;
      }
      case "short":
        return true;
      default:
        return false;
    }
  }

  function calculateScore() {
    let score = 0;
    let total = state.questions.length;
    const detail = [];
    for (const q of state.questions) {
      const given = state.answers[q.id];
      let earned = 0;
      if (q.type === "short") {
        earned = 1;
      } else if (isCorrect(q, given)) {
        earned = 1;
      }
      score += earned;
      detail.push({ id: q.id, type: q.type, given, earned });
    }
    return { score, total, percentage: total ? Math.round((score / total) * 100) : 0, detail };
  }

  function finish(byTimeout) {
    state.finishedAt = new Date().toISOString();
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = null;
    const result = calculateScore();
    const payload = {
      student: state.student,
      grade: state.grade,
      code: state.code,
      startedAt: state.startedAt,
      finishedAt: state.finishedAt,
      durationSeconds: state.durationSeconds,
      byTimeout: !!byTimeout,
      score: result.score,
      total: result.total,
      percentage: result.percentage
    };
    save();
    try {
      localStorage.setItem(getStorageKey(state.code) + "_result", JSON.stringify(payload));
    } catch (e) {}
    if (typeof window.onFinish === "function") window.onFinish(payload, result);
  }

  function getState() { return { ...state }; }

  function getCurrent() { return state.questions[state.currentIndex]; }

  function formatTime(seconds) {
    if (seconds < 0) seconds = 0;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function downloadResults(payload) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resultado_${payload.code}_${payload.student.replace(/\s+/g, "_")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return { start, resume, setAnswer, next, prev, goTo, finish, getState, getCurrent, formatTime, downloadResults, load, calculateScore };
})();

if (typeof window !== "undefined") window.ExamEngine = ExamEngine;
if (typeof module !== "undefined") module.exports = ExamEngine;