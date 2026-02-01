import { Outlet } from 'react-router-dom';

/**
 * Primera secció del bloc d'administració digital.
 */
const SeccioAdministracioDigital = () => {
  return (
    <div>
      <h3>Secció 1 d'Administració Digital</h3>
      <Outlet />
    </div>
  );
};

export default SeccioAdministracioDigital;