import { NavLink } from 'react-router-dom';

/**
 * Barra lateral de navegació per al temari d'oposicions.
 * En aquesta fase només es mostren els blocs actius:
 * - Procediment Administratiu
 * - Funció Pública
 *
 * Estructura de navegació:
 * Bloc → Secció → Subtema
 */
const BarraLateral = () => {
  return (
    <nav style={{ width: '240px', padding: '1rem', borderRight: '1px solid #ddd' }}>
      <h3>Temari</h3>

      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>

        {/* Procediment Administratiu */}
        <li>
          <NavLink to="/procediment-administratiu">
            Procediment Administratiu
          </NavLink>

          <ul style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
            <li>
              <NavLink to="/procediment-administratiu/seccio1">
                Secció 1
              </NavLink>

              <ul style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
                <li>
                  <NavLink to="/procediment-administratiu/seccio1/subtema1">
                    Subtema 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/procediment-administratiu/seccio1/subtema2">
                    Subtema 2
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Funció Pública */}
        <li style={{ marginTop: '1rem' }}>
          <NavLink to="/funcio-publica">
            Funció Pública
          </NavLink>

          <ul style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
            <li>
              <NavLink to="/funcio-publica/seccio1">
                Secció 1
              </NavLink>

              <ul style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
                <li>
                  <NavLink to="/funcio-publica/seccio1/subtema1">
                    Subtema 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/funcio-publica/seccio1/subtema2">
                    Subtema 2
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  );
};

export default BarraLateral;
