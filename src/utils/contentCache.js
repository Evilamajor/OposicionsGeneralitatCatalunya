const textContentCache = new Map();

export const getCachedContent = (key) => textContentCache.get(key) || null;

export const setCachedContent = (key, value) => {
  textContentCache.set(key, value);
};

export const clearContentCache = () => {
  textContentCache.clear();
};

export const fetchTextWithCache = async (path, options = {}) => {
  const { signal, force = false } = options;

  if (!force) {
    const cached = getCachedContent(path);
    if (cached !== null) {
      return cached;
    }
  }

  const response = await fetch(path, { signal });
  if (!response.ok) {
    throw new Error(`No s'ha pogut carregar el contingut (${response.status})`);
  }

  const text = await response.text();
  setCachedContent(path, text);
  return text;
};
