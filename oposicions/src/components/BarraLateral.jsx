import { NavLink } from 'react-router-dom';

/**
 * Barra lateral de navegació per al temari d'oposicions.
 *
 * Estructura actual:
 * - Procediment Administratiu
 *    · Vista general del temari
 *    · Flashcards
 *    · Casos pràctics
 *    · Links i referències
 *
 * (Altres blocs es poden afegir més endavant)
 */
const BarraLateral = () => {
  return (
    <nav
      style={{
        width: '240px',
        padding: '1rem',
        borderRight: '1px solid #ddd',
      }}
    >
      <h3>Temari</h3>

      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>

        {/* Procediment Administratiu */}
        <li>
          <NavLink to="/procediment">
            Procediment Administratiu
          </NavLink>

          <ul style={{ listStyleType: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
            <li>
              <NavLink to="/procediment/flashcards">
                Secció 1 · Flashcards
              </NavLink>
            </li>

            <li>
              <NavLink to="/procediment/casos">
                Secció 2 · Casos pràctics
              </NavLink>
            </li>

            <li>
              <NavLink to="/procediment/materials">
                Secció 3 · Links i referències
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Altres blocs (placeholder) */}
        <li style={{ marginTop: '1.5rem', color: '#999' }}>
          Funció Pública (pendent)
        </li>

      </ul>
    </nav>
  );
};

export default BarraLateral;
