const buildStorageKey = (quizKey) => `ask-explanations-${quizKey || 'default'}`;

let storageAdapter = {
  getItem: (key) => {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    return window.localStorage.getItem(key);
  },
  setItem: (key, value) => {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.setItem(key, value);
  },
  removeItem: (key) => {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.removeItem(key);
  },
};

export const setExplanationStorageAdapter = (adapter) => {
  if (!adapter) return;

  storageAdapter = {
    getItem: typeof adapter.getItem === 'function' ? adapter.getItem : storageAdapter.getItem,
    setItem: typeof adapter.setItem === 'function' ? adapter.setItem : storageAdapter.setItem,
    removeItem: typeof adapter.removeItem === 'function' ? adapter.removeItem : storageAdapter.removeItem,
  };
};

const readPayload = (quizKey) => {
  const key = buildStorageKey(quizKey);
  const raw = storageAdapter.getItem(key);

  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
};

const writePayload = (quizKey, payload) => {
  const key = buildStorageKey(quizKey);
  const hasData = payload && typeof payload === 'object' && Object.keys(payload).length > 0;

  if (!hasData) {
    storageAdapter.removeItem(key);
    return;
  }

  storageAdapter.setItem(key, JSON.stringify(payload));
};

export const getSavedExplanations = (quizKey) => readPayload(quizKey);

export const getSavedExplanation = (quizKey, questionId) => {
  if (!questionId) return null;
  const payload = readPayload(quizKey);
  return payload[questionId] || null;
};

export const saveExplanation = (quizKey, questionId, explanationPair) => {
  if (!questionId) return null;

  const payload = readPayload(quizKey);
  payload[questionId] = {
    explanationCorrect: explanationPair?.explanationCorrect || '',
    explanationIncorrect: explanationPair?.explanationIncorrect || '',
  };

  writePayload(quizKey, payload);
  return payload[questionId];
};

export const resetExplanation = (quizKey, questionId) => {
  if (!questionId) return;

  const payload = readPayload(quizKey);
  delete payload[questionId];
  writePayload(quizKey, payload);
};

export { buildStorageKey };
