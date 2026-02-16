import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './BusinessEnglishFitxaPage.css';

/* ── Fitxa metadata ── */
const FITXA_MAP = {
  meetings:        { numero: 1, title: 'Fitxa 1: Meetings',                              icon: '🤝' },
  presentations:   { numero: 2, title: 'Fitxa 2: Presentations',                          icon: '📊' },
  telephone:       { numero: 3, title: 'Fitxa 3: Telephone Skills',                       icon: '📞' },
  videoconference: { numero: 4, title: 'Fitxa 4: Videoconference & Discussions',           icon: '💻' },
  correspondence:  { numero: 5, title: 'Fitxa 5: Internal Correspondence',                icon: '✉️' },
  invitations:     { numero: 6, title: 'Fitxa 6: Invitations, Suggestions & Complaints',  icon: '📝' },
  openings:        { numero: 7, title: 'Fitxa 7: Openings & Closings',                    icon: '🔖' },
};

/* ── Sections available inside every fitxa ── */
const SECTIONS = [
  { id: 'vocabulary', label: 'Vocabulary' },
  { id: 'phrases',    label: 'Phrases' },
  { id: 'exercises',  label: 'Exercises' },
  { id: 'practice',   label: 'Practice' },
  { id: 'websites',   label: 'Websites' },
  { id: 'materials',  label: 'Materials' },
];

export default function BusinessEnglishFitxaPage() {
  const { fitxaId, seccio } = useParams();
  const navigate = useNavigate();

  /* Default to "vocabulary" when no section is selected */
  const activeSection = seccio || 'vocabulary';

  useEffect(() => {
    if (!seccio) {
      navigate(`/bloc/business-english/fitxes/${fitxaId}/vocabulary`, { replace: true });
    }
  }, [fitxaId, seccio, navigate]);

  const fitxa = FITXA_MAP[fitxaId];

  /* Unknown fitxaId */
  if (!fitxa) {
    return (
      <div className="be-fitxa-page">
        <div className="be-fitxa-content-card">
          <h3>Fitxa no trobada</h3>
          <p>La fitxa sol·licitada no existeix.</p>
          <button className="be-fitxa-back" onClick={() => navigate('/bloc/business-english/fitxes')}>
            ← Tornar a Business English
          </button>
        </div>
      </div>
    );
  }

  const sectionMeta = SECTIONS.find((s) => s.id === activeSection);

  return (
    <div className="be-fitxa-page">
      {/* Back button */}
      <button
        className="be-fitxa-back"
        onClick={() => navigate('/bloc/business-english/fitxes')}
      >
        ← Tornar a Business English
      </button>

      {/* Title */}
      <div className="be-fitxa-page-header">
        <span className="be-fitxa-page-icon">{fitxa.icon}</span>
        <h2 className="be-fitxa-page-title">{fitxa.title}</h2>
      </div>

      {/* Section tabs */}
      <div className="be-fitxa-seccions">
        <div className="seccions-list">
          {SECTIONS.map((s) => (
            <NavLink
              key={s.id}
              to={`/bloc/business-english/fitxes/${fitxaId}/${s.id}`}
              className={({ isActive }) =>
                `seccio-link${isActive ? ' active' : ''}`
              }
            >
              {s.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Section content – under construction */}
      <div className="be-fitxa-section-content">
        <div className="be-fitxa-uc-card">
          <span className="be-fitxa-uc-icon">🚧</span>
          <h3 className="be-fitxa-uc-title">
            {sectionMeta ? sectionMeta.label : activeSection}
          </h3>
          <p className="be-fitxa-uc-text">
            <em>This section is currently under construction.</em>
          </p>
        </div>
      </div>
    </div>
  );
}
