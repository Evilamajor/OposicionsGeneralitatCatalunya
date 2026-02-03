import { NavLink, Outlet } from 'react-router-dom';
import temari from '../data/temari';

const LayoutPrincipal = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Barra lateral */}
      <aside
        style={{
          width: '300px',
          borderRight: '1px solid #ddd',
          padding: '1rem',
          overflowY: 'auto',
        }}
      >
        <h3>Temari C1</h3>

        {temari.map((bloc) => (
          <div key={bloc.id} style={{ marginBottom: '1rem' }}>
            <strong>{bloc.titol}</strong>

            <ul style={{ paddingLeft: '1rem' }}>
              {bloc.temes.map((tema) => (
                <li key={tema.id}>
                  <NavLink to={`/${bloc.id}/${tema.id}`}>
                    Tema {tema.numero} · {tema.titol}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Contingut principal */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPrincipal;
