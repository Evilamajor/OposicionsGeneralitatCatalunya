import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { blocks as allBlocks } from '../data';

export default function Sidebar() {
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
      className="sidebar"
      aria-label="Sidebar"
      id="sidebar"
    >
      {/* Header */}
      <div className="sidebar-header">
        <h3 className="sidebar-title">Blocs</h3>
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
                          to={`/bloc/${bloc.id}/${t.id}/legislacio`}
                          onClick={() =>
                            navigate(`/bloc/${bloc.id}/${t.id}/legislacio`)
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
