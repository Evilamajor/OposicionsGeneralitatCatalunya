import { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ContentPlaceholder from '../components/ContentPlaceholder';
import { BLOC_SECTIONS, getBlocById, isValidBlocId, isValidBlocSection } from '../data';
import './BlocSectionPage.css';

const SECTION_DESCRIPTIONS = {
  esquemes: 'Esquemes i mapes conceptuals del bloc.',
  powerpoints: 'Presentacions i materials de suport visual.',
  legislacio: 'Normativa i referències legals de consulta.',
  materials: 'Documents complementaris i recursos addicionals.',
};

function normalizeItems(payload) {
  if (!payload || !Array.isArray(payload.items)) {
    return [];
  }

  return payload.items.filter((item) => item && item.title && item.href);
}

export default function BlocSectionPage() {
  const { blocId, section } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);

  const bloc = getBlocById(blocId);
  const sectionMeta = useMemo(
    () => BLOC_SECTIONS.find((candidate) => candidate.id === section),
    [section],
  );

  useEffect(() => {
    if (!isValidBlocId(blocId) || !isValidBlocSection(section)) {
      return;
    }

    const controller = new AbortController();

    async function loadSectionManifest() {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch(`/content/bloc-${blocId}/${section}/index.json`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          if (response.status === 404) {
            setItems([]);
            return;
          }

          throw new Error('No s\'ha pogut carregar la secció.');
        }

        const payload = await response.json();
        setItems(normalizeItems(payload));
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Error carregant la secció.');
          setItems([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadSectionManifest();

    return () => controller.abort();
  }, [blocId, section]);

  if (!isValidBlocId(blocId) || !isValidBlocSection(section)) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="bloc-section-page">
      <header className="bloc-section-header">
        <h1>{bloc?.title || `Bloc ${blocId}`}</h1>
        <h2>{sectionMeta?.label}</h2>
        <p>{SECTION_DESCRIPTIONS[section]}</p>
      </header>

      {isLoading && <div className="bloc-section-loading">Carregant contingut...</div>}

      {!isLoading && error && (
        <ContentPlaceholder
          title="No s'ha pogut carregar la secció"
          description={error}
        />
      )}

      {!isLoading && !error && items.length === 0 && (
        <ContentPlaceholder
          title="Contingut en preparació"
          description="Aquesta secció encara no disposa de materials publicats."
        />
      )}

      {!isLoading && !error && items.length > 0 && (
        <div className="bloc-section-grid">
          {items.map((item) => (
            <article key={item.href} className="bloc-section-card">
              <h3>{item.title}</h3>
              {item.description ? <p>{item.description}</p> : null}
              <a
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noreferrer' : undefined}
              >
                Obre recurs
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
