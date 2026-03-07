import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { sidebarConfig } from '../data';

const { blocks: allBlocks, blocsHeader } = sidebarConfig;

// Keep only the official bloc navigation in BLOCS section
const blocksOnly = allBlocks.filter((b) => b.id !== 'business-english');

export default function Sidebar({ collapsed, onToggle }) {
  const [expandedBlocId, setExpandedBlocId] = useState(null);
  const { blocId: activeBlockId } = useParams();
  const location = useLocation();
  const basePath = location.pathname.startsWith('/generalitat') ? '/generalitat' : '';

  const withBasePath = (path) => `${basePath}${path}`;

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

                {/* Bloc title (toggle only, not navigable) */}
                <div
                  className={activeBlockId === bloc.id ? 'active' : ''}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setExpandedBlocId(
                      expandedBlocId === bloc.id ? null : bloc.id
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setExpandedBlocId(
                        expandedBlocId === bloc.id ? null : bloc.id
                      );
                    }
                  }}
                >
                  <span className="bloc-title">{bloc.title}</span>
                </div>
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
                          to={withBasePath(`/bloc/${bloc.id}/${t.id}/${firstSection}`)}
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
    </aside>
  );
}
