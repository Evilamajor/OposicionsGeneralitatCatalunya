import { Outlet } from 'react-router-dom';

/**
 * Primera secció del bloc de transparència.
 */
const SeccioTransparencia = () => {
  return (
    <div>
      <h3>Secció 1 de Transparència</h3>
      <Outlet />
    </div>
  );
};

export default SeccioTransparencia;