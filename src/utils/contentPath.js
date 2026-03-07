/**
 * Builds GitHub Pages-safe URLs for files stored under public/content.
 *
 * Use this helper for any dynamic study resource: esquemes, explicacions,
 * preguntes, diagrames or auxiliary manifests. It accepts either a clean
 * relative path like `bloc-1/tema-1/esquemes/file.html` or a legacy path like
 * `/content/bloc-1/tema-1/esquemes/file.html` and always returns a URL rooted
 * at Vite's BASE_URL.
 */
export function contentPath(path = '') {
  const base = import.meta.env.BASE_URL || '/';
  const rawPath = String(path || '');

  if (!rawPath) {
    return `${base}content/`;
  }

  if (rawPath.startsWith(base)) {
    return rawPath;
  }

  const normalizedPath = rawPath
    .replace(/^\/+/, '')
    .replace(/^content\/+/, '');

  return `${base}content/${normalizedPath}`;
}