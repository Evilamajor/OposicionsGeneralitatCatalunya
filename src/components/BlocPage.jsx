import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { blocks } from '../data';
import NotesEditor from './NotesEditor';
import SchemaList from './SchemaList';
import AutoavaluacioSection from './AutoavaluacioSection';
import PlataformaPSCP from './PlataformaPSCP';
import FitxesEstudi from './FitxesEstudi';
import BusinessEnglishFitxes from './business-english/BusinessEnglishFitxes';
import './business-english/BusinessEnglishTheme.css';
import TopicDataProjects from './TopicDataProjects';
import SlideDeck from './SlideDeck';
import ComingSoon from './ComingSoon';
import SectionContainer from './SectionContainer';
import './BlocPage.css';

/**
 * Sanitize HTML loaded from content files.
 * These files are full HTML documents (<!DOCTYPE>, <html>, <head>, <body>).
 * When injected via dangerouslySetInnerHTML, their <style> tags apply globally
 * and the body { max-width: 900px; margin: 0 auto } rule constrains the page.
 * This function extracts only the <body> inner content, stripping all
 * document-level wrappers and <style> tags to prevent layout interference.
 */
function sanitizeHtmlContent(rawHtml) {
  // Extract content between <body> and </body> tags
  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const content = bodyMatch ? bodyMatch[1] : rawHtml;
  // Remove any remaining <style> tags that might appear in the body
  return content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
}

/**
 * Mapping of bloc IDs to their slide-deck markdown presentations.
 * Every bloc has a presentacio.md in public/content/<blocId>/.
 * Legacy PDF files (presentacioblocX.pdf) are no longer used.
 */
const SLIDE_MD_MAP = {
  'bloc-1': '/content/bloc-1/presentacio.md',
  'bloc-2': '/content/bloc-2/presentacio.md',
  'bloc-3': '/content/bloc-3/presentacio.md',
  'bloc-4': '/content/bloc-4/presentacio.md',
  'bloc-5': '/content/bloc-5/presentacio.md',
  'bloc-6': '/content/bloc-6/presentacio.md',
  'bloc-7': '/content/bloc-7/presentacio.md',
};

/**
 * Available sections for each tema.
 * Order: shared sections are interleaved with topic-specific ones so
 * the tab bar keeps a logical reading order for all blocs.
 */
const SECTIONS = [
  { id: 'fitxes', label: 'Fitxes d\'estudi' },
  { id: 'legislacio', label: 'Legislació' },
  { id: 'materials', label: 'Materials' },
  { id: 'presentacio', label: 'Presentació' },
  { id: 'casos-practics', label: 'Casos pràctics' },
];

/**
 * Bloc V has an additional section for Data Science projects.
 * This is added dynamically in the section list rendering.
 */
const BLOC5_EXTRA_SECTIONS = [
  { id: 'projectes', label: 'Projectes' },
];

/**
 * Business English uses its own section ids and English-only labels.
 */
const BUSINESS_ENGLISH_SECTIONS = [
  { id: 'fitxes',     label: 'Fitxes' },
  { id: 'vocabulary', label: 'Vocabulary' },
  { id: 'grammar',    label: 'Grammar' },
];

const SECTION_ALIASES = {
  powerpoints: 'presentacio',
  autoavaluacio: 'casos-practics',
};

const normalizeSectionId = (sectionId) => SECTION_ALIASES[sectionId] || sectionId;

/**
 * Sections that are transversal (shared at bloc level) for specific blocs.
 * Following the Bloc IV model, all blocs share: legislació, fitxes d'estudi (plataforma), materials.
 * All other sections remain per-tema.
 */
const BLOC_SHARED_SECTIONS = {
  'bloc-1': new Set(['fitxes', 'legislacio', 'materials', 'presentacio', 'casos-practics']),
  'bloc-2': new Set(['fitxes', 'legislacio', 'materials', 'presentacio', 'casos-practics']),
  'bloc-3': new Set(['fitxes', 'legislacio', 'materials', 'presentacio', 'casos-practics']),
  'bloc-4': new Set(['fitxes', 'legislacio', 'materials', 'presentacio', 'casos-practics']),
  'bloc-5': new Set(['fitxes', 'legislacio', 'materials', 'presentacio', 'casos-practics', 'projectes']),
  'bloc-6': new Set(['fitxes', 'legislacio', 'materials', 'presentacio', 'casos-practics']),
  'bloc-7': new Set(['fitxes', 'legislacio', 'materials', 'presentacio', 'casos-practics']),
  'business-english': new Set(['fitxes', 'vocabulary', 'grammar']),
};

/** Check whether a section is shared (transversal) for a given bloc */
const isShared = (blocId, sectionId) =>
  BLOC_SHARED_SECTIONS[blocId]?.has(normalizeSectionId(sectionId)) ?? false;

export default function BlocPage() {
  const { blocId, temaId, seccio } = useParams();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sectionsVisible, setSectionsVisible] = useState(true);
  const [topicsNavOpen, setTopicsNavOpen] = useState(false);
  const [fitxesKey, setFitxesKey] = useState(0);

  // Find current bloc
  const bloc = blocks.find((b) => b.id === blocId);
  
  // Find current tema
  const tema = bloc?.topics?.find((t) => t.id === temaId);

  // ── Redirect: if navigating to a shared section via a tema URL, go to bloc-level URL
  useEffect(() => {
    if (blocId && temaId && seccio && isShared(blocId, seccio)) {
      navigate(`/bloc/${blocId}/${normalizeSectionId(seccio)}`, { replace: true });
    }
  }, [blocId, temaId, seccio, navigate]);

  // ── Business English: redirect overview to cards ──
  useEffect(() => {
    if (blocId === 'business-english' && !temaId && !seccio) {
      navigate('/bloc/business-english/fitxes', { replace: true });
    }
  }, [blocId, temaId, seccio, navigate]);

  // Load HTML content when section is selected
  useEffect(() => {
    const normalizedSeccio = normalizeSectionId(seccio);

    // ── Bloc-level shared section (no temaId) ──
    const isBlocLevel = !temaId && normalizedSeccio && isShared(blocId, normalizedSeccio);

    if (isBlocLevel) {
      // Fitxes d'estudi rendered by component, no fetch needed
      if (['fitxes', 'vocabulary', 'grammar', 'projectes', 'presentacio', 'casos-practics'].includes(normalizedSeccio)) {
        setHtmlContent('');
        setLoading(false);
        setError(null);
        return;
      }

      // Fetch shared content at bloc level
      const contentUrl = `/content/${blocId}/${normalizedSeccio}.html`;
      setLoading(true);
      setError(null);
      fetch(contentUrl)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.text();
        })
        .then((html) => { setHtmlContent(sanitizeHtmlContent(html)); setLoading(false); })
        .catch((err) => { console.error(err); setError(err.message); setLoading(false); });
      return;
    }

    // ── Standard tema-level section ──
    if (!blocId || !temaId || !normalizedSeccio) {
      setHtmlContent('');
      setLoading(false);
      setError(null);
      return;
    }

    // Handle esquemes section separately (uses SchemaList component)
    if (normalizedSeccio === 'esquemes') {
      setHtmlContent('');
      setLoading(false);
      setError(null);
      return;
    }

    // PowerPoints section — rendered via SlideDeck component below
    if (normalizedSeccio === 'presentacio') {
      setHtmlContent('');
      setLoading(false);
      setError(null);
      return;
    }

    // Handle autoavaluacio section separately (uses AutoavaluacioSection component)
    if (normalizedSeccio === 'casos-practics') {
      setHtmlContent('');
      setLoading(false);
      setError(null);
      return;
    }

    // Handle fitxes section separately (uses PlataformaPSCP / FitxesEstudi component)
    if (normalizedSeccio === 'fitxes') {
      setHtmlContent('');
      setLoading(false);
      setError(null);
      return;
    }

    const contentUrl = `/content/${blocId}/${temaId}/${normalizedSeccio}.html`;
    
    setLoading(true);
    setError(null);
    
    fetch(contentUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`No s'ha pogut carregar el contingut (HTTP ${res.status})`);
        }
        return res.text();
      })
      .then((html) => {
        setHtmlContent(sanitizeHtmlContent(html));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading content:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [blocId, temaId, seccio]);

  // If bloc doesn't exist
  if (!bloc) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="error">
            <h3>Bloc no trobat</h3>
            <p>El bloc sol·licitat no existeix.</p>
          </div>
        </div>
      </div>
    );
  }

  // Build the full section list for this bloc
  const allSections = blocId === 'bloc-5'
    ? [...SECTIONS, ...BLOC5_EXTRA_SECTIONS]
    : SECTIONS;
  const normalizedSeccio = normalizeSectionId(seccio);

  // ── Bloc-level shared section view (e.g. /bloc/bloc-4/legislacio) ──
  // temaId is undefined, seccio is defined, and section is shared for this bloc
  const isBlocSharedView = !temaId && normalizedSeccio && isShared(blocId, normalizedSeccio);

  if (isBlocSharedView) {
    // Business English uses its own sections; other blocs filter from SECTIONS
    const sharedSections = blocId === 'business-english'
      ? BUSINESS_ENGLISH_SECTIONS
      : allSections.filter((s) => isShared(blocId, s.id));

    const sectionHeading = blocId === 'business-english'
      ? 'Business English — Common sections'
      : `${bloc.title} — Seccions comunes`;

    const isBeCollapsible = blocId === 'business-english';

    /* ── Business English: two-container layout ── */
    if (isBeCollapsible) {
      const commonSectionsNav = (
        <div className="be-nav-block">
          <h3 className="be-nav-subheading">Common sections</h3>
          <div className="be-tabs">
            {sharedSections.map((section) => (
              <NavLink
                key={section.id}
                to={`/bloc/${blocId}/${section.id}`}
                className={({ isActive }) =>
                  `be-tab ${isActive ? 'active' : ''}`
                }
                onClick={
                  section.id === 'fitxes'
                    ? () => setFitxesKey((k) => k + 1)
                    : undefined
                }
              >
                {section.label}
              </NavLink>
            ))}
          </div>
        </div>
      );

      return (
        <div className="bloc-page">
          {normalizedSeccio === 'fitxes' ? (
            /* Fitxes: BusinessEnglishFitxes owns both containers */
            <BusinessEnglishFitxes key={fitxesKey} />
          ) : (
            /* Vocabulary / Grammar: simple framework + content */
            <>
              <div className="be-framework-container">
                {commonSectionsNav}
              </div>
              <div className="bloc-contingut">
                {normalizedSeccio === 'vocabulary' && (
                  <ComingSoon sectionName="Vocabulary" hint="Vocabulary lists and exercises — coming soon." />
                )}
                {normalizedSeccio === 'grammar' && (
                  <ComingSoon sectionName="Grammar" hint="Grammar reference and practice — coming soon." />
                )}
              </div>
            </>
          )}

          <div className="notes-section">
            <NotesEditor
              storageKey={`notes-${blocId}`}
              title={`Notes del ${bloc.title}`}
            />
          </div>
        </div>
      );
    }

    /* ── Generic shared-section layout (non-BE blocs) ── */
    return (
      <div className="bloc-page">
        {/* Shared section tabs */}
        <div className="bloc-seccions">
          <h2>{sectionHeading}</h2>
          <div className="seccions-list">
            {sharedSections.map((section) => (
              <NavLink
                key={section.id}
                to={`/bloc/${blocId}/${section.id}`}
                className={({ isActive }) =>
                  `seccio-link ${isActive ? 'active' : ''}`
                }
              >
                {section.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Collapsible topic quick-nav */}
        {bloc.topics && bloc.topics.length > 0 && (
          <div className="bloc-topics-nav">
            <button
              className="topics-nav-toggle"
              onClick={() => setTopicsNavOpen(!topicsNavOpen)}
              aria-expanded={topicsNavOpen}
            >
              <span className={`topics-nav-chevron ${topicsNavOpen ? 'open' : ''}`}>›</span>
              <span>Seccions específiques per tema</span>
            </button>
            {topicsNavOpen && (
              <div className="topics-nav-grid">
                {bloc.topics.map((t) => (
                  <NavLink
                    key={t.id}
                    to={`/bloc/${blocId}/${t.id}/esquemes`}
                    className="topic-nav-card"
                  >
                    {t.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content area */}
        <div className="bloc-contingut">
          {normalizedSeccio === 'legislacio' && (
            <>
              {loading && <div className="loading"><p>Carregant contingut...</p></div>}
              {error && (
                <ComingSoon
                  sectionName="Legislació"
                  hint={`Fitxer esperat: /content/${blocId}/legislacio.html`}
                />
              )}
              {!loading && !error && htmlContent && (
                <div className="html-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
              )}
              {!loading && !error && !htmlContent && (
                <ComingSoon
                  sectionName={`Legislació (comú ${bloc.title})`}
                  hint={`Fitxer esperat: /content/${blocId}/legislacio.html`}
                />
              )}
            </>
          )}

          {normalizedSeccio === 'fitxes' && blocId === 'bloc-4' && <PlataformaPSCP />}
          {normalizedSeccio === 'fitxes' && blocId !== 'bloc-4' && <FitxesEstudi blocId={blocId} />}

          {normalizedSeccio === 'projectes' && blocId === 'bloc-5' && (
            <TopicDataProjects blocId={blocId} temaId={temaId} />
          )}

          {normalizedSeccio === 'materials' && (
            <>
              {loading && <div className="loading"><p>Carregant contingut...</p></div>}
              {error && (
                <ComingSoon
                  sectionName="Materials"
                  hint={`Fitxer esperat: /content/${blocId}/materials.html`}
                />
              )}
              {!loading && !error && htmlContent && (
                <div className="html-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
              )}
              {!loading && !error && !htmlContent && (
                <ComingSoon
                  sectionName={`Materials (comú ${bloc.title})`}
                  hint={`Fitxer esperat: /content/${blocId}/materials.html`}
                />
              )}
            </>
          )}

          {normalizedSeccio === 'presentacio' && (
            <SectionContainer title="Presentació" isEmpty={!SLIDE_MD_MAP[blocId]}>
              {SLIDE_MD_MAP[blocId] && <SlideDeck mdUrl={SLIDE_MD_MAP[blocId]} title={bloc.title} />}
            </SectionContainer>
          )}

          {normalizedSeccio === 'casos-practics' && (
            <SectionContainer title="Casos pràctics" isEmpty>
              <AutoavaluacioSection blocId={blocId} temaId={temaId} />
            </SectionContainer>
          )}
        </div>

        {/* Notes editor */}
        <div className="notes-section">
          <NotesEditor
            storageKey={`notes-${blocId}`}
            title={`Notes del ${bloc.title}`}
          />
        </div>
      </div>
    );
  }

  // ── Bloc overview (no tema, no seccio) — show SlideDeck ──
  if (!temaId) {
    const mdUrl = SLIDE_MD_MAP[blocId];

    return (
      <div className="bloc-page">
        {/* Slide-deck presentation (replaces legacy PDF viewer) */}
        {mdUrl ? (
          <SlideDeck mdUrl={mdUrl} title={bloc.title} />
        ) : (
          <div className="bloc-contingut">
            <ComingSoon sectionName={`Presentació ${bloc.title}`} />
          </div>
        )}

        {/* Notes editor */}
        <div className="notes-section">
          <NotesEditor
            storageKey={`notes-${blocId}`}
            title={`Notes del ${bloc.title}`}
          />
        </div>
      </div>
    );
  }

  // If tema doesn't exist
  if (!tema) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="error">
            <h3>Tema no trobat</h3>
            <p>El tema sol·licitat no existeix en aquest bloc.</p>
          </div>
        </div>
      </div>
    );
  }

  // Tema is selected - show sections and content
  return (
    <div className="bloc-page">
      {/* Section tabs */}
      <div className="bloc-seccions">
        <h2>{tema.label}</h2>
        
        {/* Toggle button for sections */}
        <button
          className="tabs-toggle"
          onClick={() => setSectionsVisible(!sectionsVisible)}
          aria-expanded={sectionsVisible}
          aria-label={sectionsVisible ? 'Amagar seccions' : 'Mostrar seccions'}
        >
          <span className={`toggle-chevron ${sectionsVisible ? 'open' : ''}`}>▼</span>
          <span>{sectionsVisible ? 'Amagar' : 'Mostrar'} seccions</span>
        </button>

        {/* Section links */}
        <div className={`seccions-list ${!sectionsVisible ? 'seccions-hidden' : ''}`}>
          {allSections.map((section) => {
            // Shared sections link to bloc-level URL (no temaId)
            const url = isShared(blocId, section.id)
              ? `/bloc/${blocId}/${section.id}`
              : `/bloc/${blocId}/${temaId}/${section.id}`;
            return (
              <NavLink
                key={section.id}
                to={url}
                className={({ isActive }) =>
                  `seccio-link ${isActive ? 'active' : ''}${isShared(blocId, section.id) ? ' seccio-shared' : ''}`
                }
              >
                {section.label}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Content area */}
      <div className="bloc-contingut">
        {!normalizedSeccio && (
          <SectionContainer title={tema.label} isEmpty emptyMessage="Selecciona una secció per veure el contingut." />
        )}

        {/* Slide deck for presentació section */}
        {!loading && !error && !htmlContent && normalizedSeccio === 'presentacio' && (
          SLIDE_MD_MAP[blocId]
            ? <SlideDeck mdUrl={SLIDE_MD_MAP[blocId]} title={bloc.title} />
            : <ComingSoon sectionName="Presentació" />
        )}

        {loading && (
          <div className="loading">
            <p>Carregant contingut...</p>
          </div>
        )}

        {error && (
          <ComingSoon
            sectionName={SECTIONS.find(s => s.id === normalizedSeccio)?.label}
            hint={`Fitxer esperat: /content/${blocId}/${temaId}/${normalizedSeccio}.html`}
          />
        )}

        {!loading && !error && htmlContent && (
          <div 
            className="html-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}

        {!loading && !error && !htmlContent && normalizedSeccio === 'esquemes' && (
          <SchemaList blocId={blocId} temaId={temaId} />
        )}

        {!loading && !error && !htmlContent && normalizedSeccio === 'casos-practics' && (
          <SectionContainer title="Casos pràctics" isEmpty />
        )}

        {!loading && !error && !htmlContent && normalizedSeccio === 'fitxes' && blocId === 'bloc-4' && (
          <PlataformaPSCP />
        )}

        {!loading && !error && !htmlContent && normalizedSeccio === 'fitxes' && blocId !== 'bloc-4' && (
          <FitxesEstudi blocId={blocId} />
        )}

        {!loading && !error && !htmlContent && normalizedSeccio === 'projectes' && blocId === 'bloc-5' && (
          <TopicDataProjects blocId={blocId} temaId={temaId} />
        )}
      </div>

      {/* Notes editor for this tema */}
      {temaId && (
        <div className="notes-section">
          <NotesEditor 
            storageKey={`notes-${blocId}-${temaId}`}
            title={`Notes de ${tema.label}`}
          />
        </div>
      )}
    </div>
  );
}
