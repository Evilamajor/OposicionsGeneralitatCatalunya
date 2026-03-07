import { contentPath } from './contentPath';

const textContentCache = new Map();

const isRootContentPath = (path) => typeof path === 'string' && /^\/?content\//.test(path);

const normalizeContentRequestPath = (path) => (isRootContentPath(path) ? contentPath(path) : path);

export const getCachedContent = (key) => textContentCache.get(key) || null;

export const setCachedContent = (key, value) => {
  textContentCache.set(key, value);
};

export const clearContentCache = () => {
  textContentCache.clear();
};

export const fetchTextWithCache = async (path, options = {}) => {
  const { signal, force = false } = options;
  const normalizedPath = normalizeContentRequestPath(path);

  if (!force) {
    const cached = getCachedContent(normalizedPath);
    if (cached !== null) {
      return cached;
    }
  }

  const response = await fetch(normalizedPath, { signal });
  if (!response.ok) {
    throw new Error(`No s'ha pogut carregar el contingut (${response.status})`);
  }

  const text = await response.text();
  setCachedContent(normalizedPath, text);
  return text;
};
