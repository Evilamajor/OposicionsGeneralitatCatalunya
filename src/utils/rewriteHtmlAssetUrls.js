import { getBasePath } from './basePath';

export function rewriteHtmlAssetUrls(htmlString, htmlPath, options = {}) {
  const { stripScripts = false, stripStyles = false, bodyOnly = false } = options;
  const parser = new DOMParser();
  const parsed = parser.parseFromString(htmlString, 'text/html');
  const baseDir = htmlPath.slice(0, htmlPath.lastIndexOf('/') + 1);
  const baseUrl = new URL(baseDir, window.location.origin);

  if (stripScripts) {
    parsed.querySelectorAll('script').forEach((node) => node.remove());
  }

  if (stripStyles) {
    parsed.querySelectorAll('style').forEach((node) => node.remove());
  }

  parsed.querySelectorAll('[src], [href]').forEach((element) => {
    const attrName = element.hasAttribute('src') ? 'src' : 'href';
    const value = element.getAttribute(attrName);

    if (!value) return;
    if (/^(https?:|data:|mailto:|tel:|#)/i.test(value)) return;

    try {
      if (value.startsWith('/')) {
        element.setAttribute(attrName, getBasePath(value));
        return;
      }

      const resolved = new URL(value, baseUrl);
      element.setAttribute(attrName, `${resolved.pathname}${resolved.search}${resolved.hash}`);
    } catch {
      // Keep original value if resolution fails.
    }
  });

  if (bodyOnly) {
    return parsed.body?.innerHTML?.trim() || htmlString;
  }

  return `<!DOCTYPE html>\n${parsed.documentElement.outerHTML}`;
}
