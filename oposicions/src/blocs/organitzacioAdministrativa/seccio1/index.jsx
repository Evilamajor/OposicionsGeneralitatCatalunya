import { Outlet } from 'react-router-dom';

/**
 * Primera secció del bloc d'organització administrativa.
 */
const SeccioOrganitzacioAdministrativa = () => {
  return (
    <div>
      <h3>Secció 1 d'Organització Administrativa</h3>
      <Outlet />
    </div>
  );
};

export default SeccioOrganitzacioAdministrativa;