import { Outlet } from 'react-router-dom';

/**
 * Bloc d'administració digital.
 */
const AdministracioDigital = () => {
  return (
    <div>
      <h2>Administració Digital</h2>
      <Outlet />
    </div>
  );
};

export default AdministracioDigital;