import { NavLink } from 'react-router-dom';
import './HomeSidebar.css';

export default function HomeSidebar() {
  return (
    <aside className="sidebar home-sidebar" aria-label="Selector d'itinerari" id="sidebar">
      <div className="sidebar-header home-sidebar-section-header">
        <h3 className="sidebar-title">OPOSICIONS ADMINISTRATIU GENERALITAT</h3>
      </div>

      <nav>
        <ul>
          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink to="/generalitat" className={({ isActive }) => (isActive ? 'active' : '')} end>
                <span className="bloc-title">Convocatòria 2026</span>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>

      <div className="sidebar-divider" />

      <div className="sidebar-header home-sidebar-section-header">
        <h3 className="sidebar-title">ANNEXOS</h3>
      </div>

      <nav>
        <ul>
          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink to="/generalitat/annex/annex-a" className={({ isActive }) => (isActive ? 'active' : '')}>
                <span className="bloc-title">Català jurídic i administratiu</span>
              </NavLink>
            </div>
          </li>

          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink to="/generalitat/annexos/test-normativa" className={({ isActive }) => (isActive ? 'active' : '')}>
                <span className="bloc-title">Test de normativa</span>
              </NavLink>
            </div>
          </li>

          <li className="sidebar-block">
            <div className="bloc-header">
              <NavLink to="/generalitat/annexos/test-examen" className={({ isActive }) => (isActive ? 'active' : '')}>
                <span className="bloc-title">Test examen</span>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}