export function getBasePath(path = '') {
  const basePath = import.meta.env.BASE_URL || '/';
  const normalizedPath = String(path).replace(/^\/+/, '');

  return `${basePath}${normalizedPath}`;
}
