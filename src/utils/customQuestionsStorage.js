const parseScope = (scopeKey) => {
  const raw = String(scopeKey || '').toLowerCase();
  const match = raw.match(/(bloc\d+)[-_](tema\d+)[-_](punt\d+)/);

  if (!match) {
    return {
      bloc: 'bloc-default',
      tema: 'tema-default',
      punt: 'punt-default',
    };
  }

  return {
    bloc: match[1],
    tema: match[2],
    punt: match[3],
  };
};

export const buildCustomQuestionsStorageKey = (scopeKey) => {
  const { bloc, tema, punt } = parseScope(scopeKey);
  return `custom-questions-${bloc}-${tema}-${punt}`;
};

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

export const setCustomQuestionsStorageAdapter = (adapter) => {
  if (!adapter) return;

  storageAdapter = {
    getItem: typeof adapter.getItem === 'function' ? adapter.getItem : storageAdapter.getItem,
    setItem: typeof adapter.setItem === 'function' ? adapter.setItem : storageAdapter.setItem,
    removeItem: typeof adapter.removeItem === 'function' ? adapter.removeItem : storageAdapter.removeItem,
  };
};

const readPayload = (scopeKey) => {
  const storageKey = buildCustomQuestionsStorageKey(scopeKey);
  const raw = storageAdapter.getItem(storageKey);

  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writePayload = (scopeKey, questions) => {
  const storageKey = buildCustomQuestionsStorageKey(scopeKey);

  if (!Array.isArray(questions) || questions.length === 0) {
    storageAdapter.removeItem(storageKey);
    return;
  }

  storageAdapter.setItem(storageKey, JSON.stringify(questions));
};

export const getCustomQuestions = (scopeKey) => readPayload(scopeKey);

export const saveCustomQuestions = (scopeKey, questions) => {
  writePayload(scopeKey, questions);
};

export const addCustomQuestion = (scopeKey, question) => {
  const current = readPayload(scopeKey);
  const next = [...current, question];
  writePayload(scopeKey, next);
  return next;
};

export const removeCustomQuestion = (scopeKey, questionId) => {
  const current = readPayload(scopeKey);
  const next = current.filter((question) => question?.id !== questionId);
  writePayload(scopeKey, next);
  return next;
};
