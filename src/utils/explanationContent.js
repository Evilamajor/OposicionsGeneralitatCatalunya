import { contentPath } from '@/utils/contentPath';
import { fetchTextWithCache } from './contentCache';

export const normalizeExplanationNumericId = (value, fallback = '0') => {
  const match = String(value || '').match(/(\d+)/);
  if (!match) return fallback;

  const parsed = Number.parseInt(match[1], 10);
  return Number.isNaN(parsed) ? fallback : String(parsed);
};

export const buildExplanationCandidatePaths = ({ blocId, temaId, pointId }) => {
  const bloc = normalizeExplanationNumericId(blocId);
  const tema = normalizeExplanationNumericId(temaId);
  const punt = normalizeExplanationNumericId(pointId);
  const paddedPoint = String(Number.parseInt(punt, 10)).padStart(2, '0');

  return [
    contentPath(`bloc-${bloc}/tema-${tema}/esquemes/explicacions/punt-${paddedPoint}.html`),
    contentPath(`bloc-${bloc}/tema-${tema}/explicacions/punt-${paddedPoint}.html`),
  ];
};

export const isPlaceholderExplanationHtml = (html = '') => {
  const normalizedHtml = String(html || '').toLowerCase();

  return normalizedHtml.includes("contingut pendent d'elaborar")
    || normalizedHtml.includes('apunts per completar');
};

export const loadExplanationHtml = async ({ blocId, temaId, pointId, signal }) => {
  const paths = buildExplanationCandidatePaths({ blocId, temaId, pointId });
  let lastError = null;
  let placeholderResult = null;

  for (const path of paths) {
    try {
      console.log('Loading explanation:', path);
      const html = await fetchTextWithCache(path, { signal });

      if (isPlaceholderExplanationHtml(html)) {
        placeholderResult ||= { html, path };
        continue;
      }

      return { html, path };
    } catch (error) {
      if (error?.name === 'AbortError') {
        throw error;
      }

      lastError = error;
    }
  }

  if (placeholderResult) {
    return placeholderResult;
  }

  throw lastError || new Error("No s'ha pogut carregar el contingut de l'explicació");
};