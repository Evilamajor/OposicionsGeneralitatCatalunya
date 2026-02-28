export const normativaTemplate = {
  titol: '',
  queRegula: '',
  ideaClau: '',
  contextTemari: '',
  clauExamen: '',
  errorHabitual: '',
};

const REQUIRED_FIELDS = Object.keys(normativaTemplate);
const ALLOWED_FIELDS = new Set(REQUIRED_FIELDS);
const warnedEntries = new Set();

const normalizeText = (value) => {
  if (value === null || value === undefined) return '';
  return String(value).trim();
};

const isDevEnvironment = () => {
  if (typeof import.meta !== 'undefined' && import.meta?.env) {
    return Boolean(import.meta.env.DEV);
  }

  if (typeof process !== 'undefined' && process?.env?.NODE_ENV) {
    return process.env.NODE_ENV !== 'production';
  }

  return false;
};

const warnInvalidNormativaEntry = (entryId, message) => {
  if (!isDevEnvironment()) return;
  if (typeof window === 'undefined') return;
  if (!window?.console?.warn) return;

  const key = `${entryId}::${message}`;
  if (warnedEntries.has(key)) return;
  warnedEntries.add(key);

  console.warn(`[NormativaTemplate] ${entryId} — ${message}`);
};

export const applyNormativaTemplate = (entry = {}) => {
  const normalized = { ...normativaTemplate };

  REQUIRED_FIELDS.forEach((field) => {
    normalized[field] = normalizeText(entry[field]);
  });

  return normalized;
};

export const validateNormativaEntry = (entryId, entry = {}) => {
  const normalized = applyNormativaTemplate(entry);
  const missingFields = REQUIRED_FIELDS.filter((field) => !normalized[field]);
  const unexpectedFields = Object.keys(entry).filter((field) => !ALLOWED_FIELDS.has(field));

  if (missingFields.length > 0) {
    warnInvalidNormativaEntry(entryId, `Camps obligatoris absents o buits: ${missingFields.join(', ')}`);
  }

  if (unexpectedFields.length > 0) {
    warnInvalidNormativaEntry(entryId, `Camps no permesos detectats: ${unexpectedFields.join(', ')}`);
  }

  return missingFields.length === 0 && unexpectedFields.length === 0;
};

export const normalizeNormativaDataset = (dataset = {}, options = {}) => Object.entries(dataset).reduce(
  (acc, [key, rawEntry]) => {
    const titleBuilder = options?.titleBuilder;
    const entryWithTitle = {
      ...(rawEntry || {}),
      titol: rawEntry?.titol || (titleBuilder ? titleBuilder(key, rawEntry || {}) : ''),
    };

    const normalizedEntry = applyNormativaTemplate(entryWithTitle);

    validateNormativaEntry(key, entryWithTitle);

    acc[key] = normalizedEntry;

    return acc;
  },
  {},
);
