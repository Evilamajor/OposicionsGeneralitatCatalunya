import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { sidebarConfig } from '../data';

const { blocks: allBlocks, annexos, blocsHeader, annexosHeader } = sidebarConfig;

// Filter out Business English from blocs – it now lives under ANNEXOS
const blocksOnly = allBlocks.filter((b) => b.id !== 'business-english');

export default function Sidebar({ collapsed, onToggle }) {
  const [expandedBlocId, setExpandedBlocId] = useState(null);
  const [annexosOpen, setAnnexosOpen] = useState(false);
  const navigate = useNavigate();
  const { blocId: activeBlockId } = useParams();

  // Auto-expand the current bloc when navigating
  useEffect(() => {
    if (activeBlockId) {
      setExpandedBlocId(activeBlockId);
    }
  }, [activeBlockId]);

  return (
    <aside
      className="sidebar"
      aria-label="Sidebar"
      id="sidebar"
    >
      {/* Header */}
      <div className="sidebar-header">
        <h3 className="sidebar-title">{blocsHeader}</h3>
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          {blocksOnly.map((bloc) => (
            <li key={bloc.id} className="sidebar-block">
              <div className="bloc-header">
                {/* Expand / collapse button */}
                <button
                  className={`bloc-toggle ${
                    expandedBlocId === bloc.id ? 'expanded' : ''
                  }`}
                  onClick={() =>
                    setExpandedBlocId(
                      expandedBlocId === bloc.id ? null : bloc.id
                    )
                  }
                  aria-expanded={expandedBlocId === bloc.id}
                  aria-label={`${
                    expandedBlocId === bloc.id ? 'Collapse' : 'Expand'
                  } ${bloc.title}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="chevron"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Bloc title (TEXT ONLY, no icon) */}
                <NavLink
                  to={`/bloc/${bloc.id}`}
                  className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                  onClick={() => {
                    navigate(`/bloc/${bloc.id}`);
                    setExpandedBlocId(bloc.id);
                    if (onToggle && !collapsed) onToggle(); // auto-collapse on nav
                  }}
                >
                  <span className="bloc-title">{bloc.title}</span>
                </NavLink>
              </div>

              {/* Topics */}
              {expandedBlocId === bloc.id &&
                bloc.topics &&
                bloc.topics.length > 0 && (
                  <ul className="topic-list">
                    {bloc.topics.map((t) => {
                      // All blocs now have legislació as shared section,
                      // so first topic-specific section is always esquemes
                      const firstSection = 'esquemes';
                      return (
                      <li key={t.id}>
                        <NavLink
                          to={`/bloc/${bloc.id}/${t.id}/${firstSection}`}
                          onClick={() =>
                            navigate(`/bloc/${bloc.id}/${t.id}/${firstSection}`)
                          }
                        >
                          <span
                            className="topic-dot"
                            aria-hidden
                          >
                            •
                          </span>
                          <span className="topic-label">
                            {t.label}
                          </span>
                        </NavLink>
                      </li>
                      );
                    })}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Divider between BLOCS and ANNEXOS */}
      <div className="sidebar-divider" />

      {/* ANNEXOS section */}
      <div className="sidebar-header">
        <button
          className={`bloc-toggle ${annexosOpen ? 'expanded' : ''}`}
          onClick={() => setAnnexosOpen(!annexosOpen)}
          aria-expanded={annexosOpen}
          aria-label={`${annexosOpen ? 'Collapse' : 'Expand'} Annexos`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="chevron"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h3 className="sidebar-title annexos-title" style={{ marginBottom: 0, cursor: 'pointer' }} onClick={() => setAnnexosOpen(!annexosOpen)}>{annexosHeader}</h3>
      </div>

      {annexosOpen && (
        <nav>
          <ul>
            {annexos.map((annex) => (
              <li key={annex.id} className="sidebar-block">
                <div className="bloc-header">
                  <NavLink
                    to={annex.route || `/annex/${annex.id}`}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    <span className="bloc-title">{annex.title}</span>
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Divider before FÒRUM */}
      <div className="sidebar-divider" />

      {/* FÒRUM – standalone top-level section */}
      <div className="sidebar-header">
        <NavLink
          to="/forum"
          className={({ isActive }) => `sidebar-forum-link${isActive ? ' active' : ''}`}
          onClick={() => { if (onToggle && !collapsed) onToggle(); }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sidebar-forum-icon"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="sidebar-title" style={{ marginBottom: 0 }}>Fòrum</h3>
        </NavLink>
      </div>
    </aside>
  );
}
