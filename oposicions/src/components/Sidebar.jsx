import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { blocks as allBlocks } from '../data';

export default function Sidebar({ collapsed = false, onToggle }) {
  const [expandedBlocId, setExpandedBlocId] = useState(null);
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
      className={`sidebar ${collapsed ? 'collapsed' : ''}`}
      aria-label="Sidebar"
      id="sidebar"
    >
      {/* Header */}
      <div className="sidebar-header">
        <h3 className="sidebar-title">Blocs</h3>
        <div className="sidebar-actions">
          <button
            className="icon-btn"
            onClick={onToggle}
            aria-label="Toggle sidebar"
          >
            {collapsed ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6h12v12H6z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          {allBlocks.map((bloc) => (
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
                    {bloc.topics.map((t) => (
                      <li key={t.id}>
                        <NavLink
                          to={`/bloc/${bloc.id}`}
                          onClick={() =>
                            navigate(`/bloc/${bloc.id}`)
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
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
