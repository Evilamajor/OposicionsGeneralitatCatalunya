import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { blocks } from '../data';
import NotesEditor from './NotesEditor';
// a src/components/BlocPage.jsx
import './BlocPage.css';
import BlocDiagram from './BlocDiagram';



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
          <div className="bloc-diagram-container">
            <BlocDiagram blocId={blocId} blocTitle={bloc.title} />
          </div>
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
