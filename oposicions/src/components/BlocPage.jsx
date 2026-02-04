import React from 'react';
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
  const { blocId, seccio } = useParams();
  const bloc = blocks.find((b) => b.id === blocId);

  if (!bloc) {
    return <p>Bloc no trobat.</p>;
  }

  const seccioActual = SECCIONS.find((s) => s.id === seccio);

  return (
    <section className="bloc-page">
      {/* 🔹 Seccions del bloc (a dalt) */}
      <div className="bloc-seccions">
        <h2>{bloc.title}</h2>

        <ul className="seccions-list">
          {SECCIONS.map((sec) => (
            <li key={sec.id}>
              <NavLink
                to={`/bloc/${blocId}/${sec.id}`}
                className={({ isActive }) =>
                  `seccio-link ${isActive ? 'active' : ''}`
                }
              >
                {sec.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Contingut del bloc (a sota) */}
      <div className="bloc-contingut">
        {seccio ? (
          <div className="preview-card">
            <h3>
              {bloc.title} · {seccioActual?.label}
            </h3>

            <div className="preview-placeholder">
              {/* Aquí després hi carregaràs HTML o components React */}
              <p>
                Contingut de la secció <strong>{seccio}</strong> del bloc.
              </p>
            </div>
          </div>
        ) : (
          <div className="preview-empty">
            Seleccioneu un apartat del bloc per començar a estudiar.
          </div>
        )}
      </div>
    </section>
  );
}
