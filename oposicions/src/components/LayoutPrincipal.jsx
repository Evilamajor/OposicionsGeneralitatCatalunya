import { Outlet } from 'react-router-dom';
import BarraLateral from './BarraLateral.jsx';

/**
 * Component de disposició principal (layout) que mostra una barra lateral persistent
 * i una àrea de contingut principal. Utilitza Outlet per renderitzar rutes filles.
 */
const LayoutPrincipal = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <BarraLateral />
      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPrincipal;