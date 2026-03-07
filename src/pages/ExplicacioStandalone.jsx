import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTextWithCache } from '../utils/contentCache';
import { getContentPath } from '@/utils/getContentPath';
import { rewriteHtmlAssetUrls } from '../utils/rewriteHtmlAssetUrls';
import './ExplicacioStandalone.css';

const normalizeNumericId = (value, fallback = '0') => {
  const match = String(value || '').match(/(\d+)/);
  if (!match) return fallback;

  const parsed = Number.parseInt(match[1], 10);
  return Number.isNaN(parsed) ? fallback : String(parsed);
};

const buildCandidatePaths = ({ bloc, tema, punt }) => {
  const paddedPoint = String(Number.parseInt(punt, 10)).padStart(2, '0');
  return [
    getContentPath(`content/bloc-${bloc}/tema-${tema}/explicacions/punt-${paddedPoint}.html`),
    getContentPath(`content/bloc-${bloc}/tema-${tema}/esquemes/explicacions/punt-${paddedPoint}.html`),
  ];
};

const fetchFirstAvailableText = async (paths, options = {}) => {
  let lastError = null;

  for (const path of paths) {
    try {
      const html = await fetchTextWithCache(path, options);
      return { html, path };
    } catch (error) {
      if (error?.name === 'AbortError') {
        throw error;
      }

      lastError = error;
    }
  }

  throw lastError || new Error('No s\'ha pogut carregar el contingut de l\'explicació');
};

export default function ExplicacioStandalone() {
  const { bloc, tema, punt } = useParams();
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const normalizedParams = useMemo(() => ({
    bloc: normalizeNumericId(bloc),
    tema: normalizeNumericId(tema),
    punt: normalizeNumericId(punt),
  }), [bloc, tema, punt]);

  const pageTitle = `Bloc ${normalizedParams.bloc} · Tema ${normalizedParams.tema} · Punt ${String(Number.parseInt(normalizedParams.punt, 10)).padStart(2, '0')}`;

  useEffect(() => {
    document.title = `${pageTitle} | Mode lectura`;
  }, [pageTitle]);

  useEffect(() => {
    const controller = new AbortController();
    const candidatePaths = buildCandidatePaths(normalizedParams);

    const loadContent = async () => {
      try {
        setLoading(true);
        setError('');

        const { html: rawHtml, path } = await fetchFirstAvailableText(candidatePaths, { signal: controller.signal });
        setHtml(rewriteHtmlAssetUrls(rawHtml, path, { stripScripts: true, stripStyles: true, bodyOnly: true }));
      } catch (fetchError) {
        if (fetchError?.name === 'AbortError') return;
        setError(fetchError?.message || 'No s\'ha pogut carregar l\'explicació');
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadContent();

    return () => controller.abort();
  }, [normalizedParams]);

  return (
    <div className="explicacio-standalone-page">
      <header className="explicacio-standalone-header">
        <div className="explicacio-standalone-header__inner">
          <p className="explicacio-standalone-eyebrow">ADMINISTRATIU GENERALITAT DE CATALUNYA</p>
          <h1 className="explicacio-standalone-title">Mode lectura</h1>
          <p className="explicacio-standalone-meta">{pageTitle}</p>
        </div>
      </header>

      <main className="explicacio-standalone-main">
        <div className="explicacio-standalone-shell">
          {loading && <div className="loading"><p>Carregant explicació...</p></div>}
          {!loading && error && <div className="error"><p>{error}</p></div>}
          {!loading && !error && (
            <article
              className="explicacio-standalone-content explicacio-simplified"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </main>
    </div>
  );
}
