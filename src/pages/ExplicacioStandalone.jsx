import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  loadExplanationHtml,
  normalizeExplanationNumericId,
} from '../utils/explanationContent';
import { rewriteHtmlAssetUrls } from '../utils/rewriteHtmlAssetUrls';
import './ExplicacioStandalone.css';

export default function ExplicacioStandalone() {
  const { bloc, tema, punt } = useParams();
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const normalizedParams = useMemo(() => ({
    bloc: normalizeExplanationNumericId(bloc),
    tema: normalizeExplanationNumericId(tema),
    punt: normalizeExplanationNumericId(punt),
  }), [bloc, tema, punt]);

  const pageTitle = `Bloc ${normalizedParams.bloc} · Tema ${normalizedParams.tema} · Punt ${String(Number.parseInt(normalizedParams.punt, 10)).padStart(2, '0')}`;

  useEffect(() => {
    document.title = `${pageTitle} | Mode lectura`;
  }, [pageTitle]);

  useEffect(() => {
    const controller = new AbortController();

    const loadContent = async () => {
      try {
        setLoading(true);
        setError('');

        const { html: rawHtml, path } = await loadExplanationHtml({
          blocId: normalizedParams.bloc,
          temaId: normalizedParams.tema,
          pointId: normalizedParams.punt,
          signal: controller.signal,
        });
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
