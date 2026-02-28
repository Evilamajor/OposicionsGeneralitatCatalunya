import { NavLink } from 'react-router-dom';
import { getBlocTemaSectionRoute } from '../../constants/routes';

export default function BlocSectionsTabs({
  blocId,
  temaId,
  sections,
  sectionsVisible,
  onToggleVisibility,
}) {
  return (
    <>
      <button
        className="tabs-toggle"
        onClick={onToggleVisibility}
        aria-expanded={sectionsVisible}
        aria-label={sectionsVisible ? 'Amagar seccions' : 'Mostrar seccions'}
      >
        <span className={`toggle-chevron ${sectionsVisible ? 'open' : ''}`}>▼</span>
        <span>{sectionsVisible ? 'Amagar' : 'Mostrar'} seccions</span>
      </button>

      <div className={`seccions-list simplified-tabs ${!sectionsVisible ? 'seccions-hidden' : ''}`}>
        {sections.map((section) => (
          <NavLink
            key={section.id}
            to={getBlocTemaSectionRoute(blocId, temaId, section.id)}
            className={({ isActive }) => `seccio-link simplified-tab-link ${isActive ? 'active' : ''}`}
          >
            {section.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
