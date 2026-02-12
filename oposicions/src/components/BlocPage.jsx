import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { blocks } from '../data';
import NotesEditor from './NotesEditor';
import BlocDiagram from './BlocDiagram';
import BlocPresentationViewer from './BlocPresentationViewer';
// a src/components/BlocPage.jsx
import './BlocPage.css';

/**
 * Mapping of bloc IDs to their presentation PDF URLs
 * Supports Blocs I-VII (bloc-1 through bloc-7)
 * 
 * NOTE: Some files have typos in original upload:
 * - bloc-3: "presetaciobloc3.pdf" (should be "presentacio" but file exists with typo)
 * - bloc-5: "presetaciobloc5.pdf" (should be "presentacio" but file exists with typo)
 */
const BLOC_PDF_MAP = {
  'bloc-1': '/content/bloc-1/presentaciobloc1.pdf',
  'bloc-2': '/content/bloc-2/presentaciobloc2.pdf',
  'bloc-3': '/content/bloc-3/presetaciobloc3.pdf',  // ⚠️ Typo in filename: "presetacio" not "presentacio"
  'bloc-4': '/content/bloc-4/presentaciobloc4.pdf',
  'bloc-5': '/content/bloc-5/presetaciobloc5.pdf',  // ⚠️ Typo in filename: "presetacio" not "presentacio"
  'bloc-6': '/content/bloc-6/presentaciobloc6.pdf',
  'bloc-7': '/content/bloc-7/presentaciobloc7.pdf',
};



/**
 * Seccions metodològiques comunes a tots els blocs
 */
const SECCIONS = [
  { id: 'legislacio', label: 'Legislació' },
  { id: 'contingut', label: 'Contingut' },
  { id: 'powerpoint', label: 'PowerPoint' },
  { id: 'casos', label: 'Casos pràctics' },
  { id: 'materials', label: 'Materials' },
  { id: 'chatgpt', label: 'ChatGPT' },
];

export default function BlocPage() {
  const { blocId, temaId, seccio } = useParams();
  const [htmlContent, setHtmlContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tabsVisible, setTabsVisible] = useState(!seccio);

  const bloc = blocks.find((b) => b.id === blocId);
  const tema = bloc?.topics?.find((t) => t.id === temaId);

  // Debug logging for bloc selection
  useEffect(() => {
    console.group('🎯 BlocPage Debug Info');
    console.log('📍 Route param blocId:', blocId);
    console.log('📋 Bloc found:', bloc?.title || 'NOT FOUND');
    console.log('📊 Mapped PDF URL:', BLOC_PDF_MAP[blocId] || 'UNDEFINED - Check mapping!');
    console.table({
      'Requested blocId': blocId,
      'Bloc exists': !!bloc,
      'PDF mapped': !!BLOC_PDF_MAP[blocId],
      'Has temaId': !!temaId,
    });
    console.groupEnd();
  }, [blocId, bloc]);

  if (!bloc) {
    return <p>Bloc no trobat.</p>;
  }

  // Collapse tabs when a section is selected
  useEffect(() => {
    setTabsVisible(!seccio);
  }, [seccio]);

  // Load HTML content when blocId, temaId, or seccio changes
  useEffect(() => {
    if (!temaId || !seccio) {
      setHtmlContent(null);
      return;
    }

    setLoading(true);
    setError(null);

    // Construct path: /content/bloc-1/tema-1/legislacio.html
    const path = `/content/${blocId}/${temaId}/${seccio}.html`;

    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((html) => {
        // Extract body content to avoid nested body tags
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        const bodyContent = bodyMatch ? bodyMatch[1] : html;
        setHtmlContent(bodyContent);
        setLoading(false);
      })
      .catch((err) => {
        setError(`No es pot carregar: ${seccio}`);
        setHtmlContent(null);
        setLoading(false);
      });
  }, [blocId, temaId, seccio]);

  const seccioActual = SECCIONS.find((s) => s.id === seccio);

  return (
    <section className="bloc-page">
      {temaId && tema && (
        <div className="bloc-seccions">
          {seccio && (
            <button
              className="tabs-toggle"
              onClick={() => setTabsVisible((v) => !v)}
              aria-expanded={tabsVisible}
              aria-controls="seccions-tabs"
            >
              {tabsVisible ? 'Amagar seccions' : 'Mostrar seccions'}
              <span className={`toggle-chevron ${tabsVisible ? 'open' : ''}`} aria-hidden="true">&#9662;</span>
            </button>
          )}
          <ul
            id="seccions-tabs"
            className={`seccions-list ${!tabsVisible && seccio ? 'seccions-hidden' : ''}`}
            role="tablist"
          >
            {SECCIONS.map((sec) => (
              <li key={sec.id} role="presentation">
                <NavLink
                  to={`/bloc/${blocId}/${temaId}/${sec.id}`}
                  className={({ isActive }) =>
                    `seccio-link ${isActive ? 'active' : ''}`
                  }
                  role="tab"
                >
                  {sec.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🔹 Content area */}
      <div className="bloc-contingut">
        {!temaId ? (
          (() => {
            const pdfUrl = BLOC_PDF_MAP[blocId];
            if (!pdfUrl) {
              console.error(`❌ PDF not mapped for blocId: ${blocId}`);
              return (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 'calc(100vh - 120px)',
                  color: '#ff6b6b',
                  textAlign: 'center',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                  <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    ⚠️ PDF not mapped for this bloc
                  </p>
                  <p style={{ fontSize: '12px', color: '#a0a0a0' }}>
                    blocId: <code style={{ background: '#2a2a2a', padding: '4px 8px', borderRadius: '4px' }}>{blocId}</code>
                  </p>
                </div>
              );
            }
            // Add cache-busting version param
            const pdfUrlWithVersion = `${pdfUrl}?v=1`;
            return (
              <BlocPresentationViewer
                pdfUrl={pdfUrlWithVersion}
                title={`Presentació · ${bloc.title}`}
              />
            );
          })()
        ) : !seccio ? (
          <NotesEditor 
            storageKey={`notes_bloc_${blocId}_tema_${temaId}`}
            title={`📘 Notes personals del tema – ${tema?.label}`}
          />
        ) : (
          <div className="preview-card">
            {loading && <p className="loading">Carregant...</p>}
            {error && (
              <p className="error">
                {error}
              </p>
            )}

            {htmlContent && (
              <div
                className="html-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
