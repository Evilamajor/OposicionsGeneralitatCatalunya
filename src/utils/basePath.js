const ABSOLUTE_URL_PATTERN = /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i;

export function getBasePath(path = '') {
  const basePath = import.meta.env.BASE_URL || '/';
  const rawPath = String(path || '');

  if (!rawPath) {
    return basePath;
  }

  if (ABSOLUTE_URL_PATTERN.test(rawPath)) {
    return rawPath;
  }

  if (rawPath.startsWith(basePath)) {
    return rawPath;
  }

  const normalizedPath = rawPath.replace(/^\/+/, '');
  return `${basePath}${normalizedPath}`;
}
