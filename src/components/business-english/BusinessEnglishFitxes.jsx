import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './BusinessEnglishTheme.css';
import './BusinessEnglishFitxes.css';

/**
 * BusinessEnglishFitxes – loads UOC material catalogue from index.json,
 * groups by category, and renders an iframe viewer with fallback.
 *
 * Data source: /content/business-english/materials/index.json
 * Architecture is ready for Firebase / Supabase swap — just replace the fetch.
 */

const DATA_URL = '/content/business-english/materials/index.json';

/** Stable category display order */
const CATEGORY_ORDER = [
  'Meetings',
  'Presentations',
  'Communication',
  'Professional interaction',
  'Writing',
];

const CATEGORY_ICONS = {
  Meetings: '🤝',
  Presentations: '📊',
  Communication: '📞',
  'Professional interaction': '👥',
  Writing: '✉️',
};

const COMMON_SECTIONS = [
  { id: 'fitxes', label: 'Fitxes' },
  { id: 'vocabulary', label: 'Vocabulary' },
  { id: 'grammar', label: 'Grammar' },
];

/* ────────────────────────────────────────────────────────────────────────── */

export default function BusinessEnglishFitxes() {
  const iframeRef = useRef(null);

  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selected, setSelected] = useState(null);
  const [iframeBlocked, setIframeBlocked] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeLayer2, setActiveLayer2] = useState('common');
  const [activeLayer3, setActiveLayer3] = useState('fitxes');

  /* Auto-collapse navigation when user selects a material */
  useEffect(() => {
    if (selected) {
      setShowNavigation(false);
    }
  }, [selected]);

  /* ── Fetch catalogue ── */
  useEffect(() => {
    setLoading(true);
    fetch(DATA_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setMaterials(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading materials catalogue:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  /* ── Group materials by category (preserving order) ── */
  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = materials.filter((m) => m.category === cat);
    if (items.length) acc.push({ category: cat, items });
    return acc;
  }, []);

  /* ── Handlers ── */
  const openMaterial = (mat) => {
    setSelected(mat);
    setIframeBlocked(false);
    setActiveLayer2('specific');
    setActiveLayer3('uoc');
  };

  const handleIframeError = () => {
    setIframeBlocked(true);
  };

  /* ── Render ── */
  return (
    <>
      {/* ========================= */}
      {/* CONTAINER 1 — FRAMEWORK  */}
      {/* ========================= */}
      <div className="be-framework-container">
        <div
          className="be-collapsible-header"
          onClick={() => {
            const next = !showNavigation;
            setShowNavigation(next);
            if (!next) {
              setActiveLayer2(null);
              setActiveLayer3(null);
            }
          }}
        >
          {showNavigation ? '▼' : '▶'} Business English — Navigation
        </div>

        {showNavigation && (
          <div className="be-layer2">
            <div className="be-layer2-tabs">
              <span
                className={`be-layer2-tab ${activeLayer2 === 'common' ? 'active' : ''}`}
                onClick={() => {
                  setActiveLayer2('common');
                  setActiveLayer3(null);
                }}
              >
                Common sections
              </span>
              <span
                className={`be-layer2-tab ${activeLayer2 === 'specific' ? 'active' : ''}`}
                onClick={() => {
                  setActiveLayer2('specific');
                  setActiveLayer3('complementary');
                }}
              >
                Specific sections
              </span>
            </div>

            {activeLayer2 === 'common' && (
              <div className="be-layer3-tabs">
                {COMMON_SECTIONS.map((section) => (
                  <NavLink
                    key={section.id}
                    to={`/bloc/business-english/${section.id}`}
                    className={`be-layer3-tab ${activeLayer3 === section.id ? 'active' : ''}`}
                    onClick={() => setActiveLayer3(section.id)}
                  >
                    {section.label}
                  </NavLink>
                ))}
              </div>
            )}

            {activeLayer2 === 'specific' && (
              <div className="be-layer3-tabs">
                <span
                  className={`be-layer3-tab ${activeLayer3 === 'uoc' ? 'active' : ''}`}
                  onClick={() => setActiveLayer3('uoc')}
                >
                  UOC materials
                </span>
                <span
                  className={`be-layer3-tab ${activeLayer3 === 'complementary' ? 'active' : ''}`}
                  onClick={() => setActiveLayer3('complementary')}
                >
                  Complementary materials
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ========================= */}
      {/* CONTAINER 2 — CONTENT    */}
      {/* ========================= */}
      {activeLayer2 && activeLayer3 && (
        <div className="be-content-container">
          {activeLayer2 === 'common' && activeLayer3 === 'fitxes' && (
            <>
              {loading && <div className="be-loading">Loading materials…</div>}

              {!loading && error && (
                <div className="be-error">
                  <p>Could not load materials catalogue.</p>
                  <p className="be-error-detail">{error}</p>
                </div>
              )}

              {!loading && !error && (
                <>
                  {grouped.map(({ category, items }) => (
                    <section key={category} className="be-category">
                      <h3 className="be-category-heading">
                        <span className="be-category-icon" aria-hidden>
                          {CATEGORY_ICONS[category] || '📂'}
                        </span>
                        {category}
                      </h3>

                      <div className="be-card-grid">
                        {items.map((mat) => (
                          <div
                            key={mat.id}
                            className="be-card"
                            onClick={() => openMaterial(mat)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && openMaterial(mat)}
                          >
                            <span className="be-card-badge">📘 UOC material</span>
                            <h4 className="be-card-title">{mat.title}</h4>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </>
              )}
            </>
          )}

          {activeLayer2 === 'common' && activeLayer3 === 'vocabulary' && (
            <p className="be-placeholder-text">Vocabulary lists and exercises — coming soon.</p>
          )}

          {activeLayer2 === 'common' && activeLayer3 === 'grammar' && (
            <p className="be-placeholder-text">Grammar reference and practice — coming soon.</p>
          )}

          {activeLayer2 === 'specific' && activeLayer3 === 'uoc' && (
            <>
              {selected ? (
                <>
                  <h2 className="be-fitxa-title">📘 {selected.title}</h2>
                  {iframeBlocked ? (
                    <div className="be-fallback">
                      <span className="be-fallback-icon" aria-hidden>🚫</span>
                      <p>This material cannot be displayed inside the platform.</p>
                      <p>Click below to open it in a new tab.</p>
                      <a
                        href={selected.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="be-fallback-link"
                      >
                        Open in new tab ↗
                      </a>
                    </div>
                  ) : (
                    <iframe
                      ref={iframeRef}
                      src={selected.url}
                      title={selected.title}
                      className="be-iframe"
                      onError={handleIframeError}
                      sandbox="allow-scripts allow-same-origin allow-popups"
                    />
                  )}
                </>
              ) : (
                <p className="be-placeholder-text">Select a fitxa to view UOC materials.</p>
              )}
            </>
          )}

          {activeLayer2 === 'specific' && activeLayer3 === 'complementary' && (
            <div className="be-card-grid">
              <NavLink
                to="/business-english/internal-correspondence/practice"
                className="be-card be-card-link"
              >
                <span className="be-card-badge">✉️ Internal Correspondence</span>
                <h4 className="be-card-title">Sentence Reordering Practice</h4>
                <p className="be-placeholder-text">
                  Practice requesting information, giving information, and arranging meetings.
                </p>
              </NavLink>
            </div>
          )}

        </div>
      )}
    </>
  );
}
