import { NavLink, Outlet, useParams } from 'react-router-dom';
import temari from '../data/temari';

const Tema = () => {
  const { blocId, temaId } = useParams();

  const bloc = temari.find((b) => b.id === blocId);
  const tema = bloc?.temes.find((t) => t.id === temaId);

  if (!bloc || !tema) {
    return (
      <div style={{ padding: '1.5rem' }}>
        <h2>Tema no trobat</h2>
        <p style={{ color: '#777' }}>
          El tema seleccionat no existeix o no està disponible.
        </p>
        <NavLink to="/">Tornar al temari</NavLink>
      </div>
    );
  }

  return (
    <div style={{ padding: '1.5rem' }}>
      {/* Breadcrumbs */}
      <nav style={{ marginBottom: '0.75rem', fontSize: '0.9rem' }}>
        <NavLink to="/">Temari</NavLink>
        {' > '}
        <span>{bloc.titol}</span>
        {' > '}
        <span>Tema {tema.numero}</span>
      </nav>

      {/* Title */}
      <h2>
        Tema {tema.numero} · {tema.titol}
      </h2>

      {/* Tabs */}
      <nav
        style={{
          marginTop: '1rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid #ddd',
          paddingBottom: '0.5rem',
          display: 'flex',
          gap: '1rem',
        }}
      >
        {[
          { to: '.', label: 'Explicació', end: true },
          { to: 'flashcards', label: 'Flashcards' },
          { to: 'casos', label: 'Casos pràctics' },
          { to: 'links', label: 'Materials' },
        ].map(({ to, label, end }) => (
          <NavLink
            key={label}
            to={to}
            end={end}
            style={({ isActive }) => ({
              padding: '0.25rem 0.5rem',
              textDecoration: 'none',
              borderBottom: isActive
                ? '2px solid #000'
                : '2px solid transparent',
              fontWeight: isActive ? '600' : '400',
            })}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Section content */}
      <Outlet />
    </div>
  );
};

export default Tema;
