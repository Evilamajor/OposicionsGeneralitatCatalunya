import { useEffect, useState } from 'react';
import { fetchTextWithCache } from '../../utils/contentCache';
import { rewriteHtmlAssetUrls } from '../../utils/rewriteHtmlAssetUrls';

export default function EmbeddedHtmlFrame({ src, title }) {
  const [html, setHtml] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!src) return undefined;

    const controller = new AbortController();

    const loadHtml = async () => {
      try {
        setError('');
        const rawHtml = await fetchTextWithCache(src, { signal: controller.signal });
        setHtml(rewriteHtmlAssetUrls(rawHtml, src));
      } catch (loadError) {
        if (loadError?.name === 'AbortError') return;
        setError(loadError?.message || 'No s\'ha pogut carregar el contingut');
      }
    };

    loadHtml();

    return () => controller.abort();
  }, [src]);

  if (!src) return null;
  if (error) return <p>{error}</p>;
  if (!html) return <p>Carregant contingut...</p>;

  return (
    <iframe
      srcDoc={html}
      title={title}
      className="bloc-embedded-frame"
    />
  );
}
