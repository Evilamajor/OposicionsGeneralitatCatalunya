import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ICS_SPECIFIC_BLOCKS, ICS_TRANSVERSAL_TOPICS } from './icsConfig';
import './IcsSidebar.css';

export default function IcsSidebar({ collapsed, onToggle }) {
  const [openSection, setOpenSection] = useState(null);

  const isTransversalOpen = openSection === 'transversal';
  const isEspecificOpen = openSection === 'especific';

  const toggleSection = (sectionId) => {
    setOpenSection((current) => (current === sectionId ? null : sectionId));
  };

  return (
    <aside className="sidebar ics-sidebar" aria-label="Navegació ICS" id="sidebar">
      <div className="sidebar-header">
        <button
          type="button"
          className="ics-section-toggle"
          onClick={() => toggleSection('transversal')}
          aria-expanded={isTransversalOpen}
          aria-controls="ics-transversal-panel"
        >
          <span className="ics-arrow" aria-hidden>{isTransversalOpen ? '▼' : '▶'}</span>
          <span className="sidebar-title ics-section-title">Temari transversal</span>
        </button>
      </div>

      <nav id="ics-transversal-panel" className={`ics-section-panel ${isTransversalOpen ? 'open' : ''}`}>
        <ul className="ics-topic-list">
          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink to="/ics/transversal" end>
                <span className="bloc-title">Índex transversal</span>
              </NavLink>
            </div>
          </li>
          {ICS_TRANSVERSAL_TOPICS.map((topic) => (
            <li key={topic.id} className="sidebar-block">
              <div className="bloc-header">
                <NavLink to={`/ics/transversal/${topic.id}`}>
                  <span className="bloc-title">{topic.title}</span>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-divider" />

      <div className="sidebar-header">
        <button
          type="button"
          className="ics-section-toggle"
          onClick={() => toggleSection('especific')}
          aria-expanded={isEspecificOpen}
          aria-controls="ics-especific-panel"
        >
          <span className="ics-arrow" aria-hidden>{isEspecificOpen ? '▼' : '▶'}</span>
          <span className="sidebar-title ics-section-title">Temari específic (Administratiu/iva)</span>
        </button>
      </div>

      <nav id="ics-especific-panel" className={`ics-section-panel ${isEspecificOpen ? 'open' : ''}`}>
        <ul>
          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink to="/ics/especific" end>
                <span className="bloc-title">Índex específic</span>
              </NavLink>
            </div>
          </li>
          {ICS_SPECIFIC_BLOCKS.map((block) => (
            <li key={block.id} className="sidebar-block">
              <div className="bloc-header">
                <NavLink to={`/ics/especific/${block.id}`} end>
                  <span className="bloc-title">{block.title}</span>
                </NavLink>
              </div>
              <ul className="topic-list ics-subtopic-list">
                {block.topics.map((topic) => (
                  <li key={`${block.id}-${topic.id}`}>
                    <NavLink to={`/ics/especific/${block.id}/${topic.id}`}>
                      <span className="topic-dot" aria-hidden>•</span>
                      <span className="topic-label">{topic.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-divider" />

      <div className="sidebar-header">
        <h3 className="sidebar-title">Annexos</h3>
      </div>

      <nav>
        <ul>
          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink to="/ics/annexos/catala-juridic">
                <span className="bloc-title">Català jurídic i administratiu</span>
              </NavLink>
            </div>
          </li>
          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink to="/ics/annexos/catala-nivell-c">
                <span className="bloc-title">Català nivell C</span>
              </NavLink>
            </div>
          </li>
          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink to="/ics/annexos/autoavaluacions">
                <span className="bloc-title">Autoavaluacions</span>
              </NavLink>
            </div>
          </li>
          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink
                to="/ics/annexos/noticies"
                onClick={() => { if (onToggle && !collapsed) onToggle(); }}
              >
                <span className="bloc-title">Notícies</span>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
