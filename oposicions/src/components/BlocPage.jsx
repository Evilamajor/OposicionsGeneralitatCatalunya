import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { blocks } from '../data';
// a src/components/BlocPage.jsx
import './BlocPage.css';


/**
 * Seccions metodològiques comunes a tots els blocs
 */
const SECCIONS = [
  { id: 'legislacio', label: 'Legislació' },
  { id: 'contingut', label: 'Contingut' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'casos', label: 'Casos pràctics' },
  { id: 'materials', label: 'Materials' },
];

export default function BlocPage() {
  const { blocId, temaId, seccio } = useParams();
  const [htmlContent, setHtmlContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const bloc = blocks.find((b) => b.id === blocId);
  const tema = bloc?.topics?.find((t) => t.id === temaId);

  if (!bloc) {
    return <p>Bloc no trobat.</p>;
  }

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
      {/* 🔹 Tema selection (at top) */}
      <div className="bloc-seccions">
        <h2>{bloc.title}</h2>

        {bloc.topics && bloc.topics.length > 0 && (
          <div className="temes-list">
            <label htmlFor="tema-select" className="tema-label">
              Tema:
            </label>
            <select
              id="tema-select"
              value={temaId || ''}
              onChange={(e) => {
                const selectedTemaId = e.target.value;
                if (selectedTemaId) {
                  window.location.href = `/bloc/${blocId}/${selectedTemaId}/legislacio`;
                }
              }}
              className="tema-select"
            >
              <option value="">— Selecciona un tema —</option>
              {bloc.topics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {temaId && tema && (
          <ul className="seccions-list">
            {SECCIONS.map((sec) => (
              <li key={sec.id}>
                <NavLink
                  to={`/bloc/${blocId}/${temaId}/${sec.id}`}
                  className={({ isActive }) =>
                    `seccio-link ${isActive ? 'active' : ''}`
                  }
                >
                  {sec.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 🔹 Content area (below) */}
      <div className="bloc-contingut">
        {!temaId ? (
          <div className="preview-empty">
            Selecciona un tema per veure el contingut.
          </div>
        ) : !seccio ? (
          <div className="preview-empty">
            Selecciona una secció per veure el contingut.
          </div>
        ) : (
          <div className="preview-card">
            <h3>
              {bloc.title} · {tema?.label} · {seccioActual?.label}
            </h3>

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
