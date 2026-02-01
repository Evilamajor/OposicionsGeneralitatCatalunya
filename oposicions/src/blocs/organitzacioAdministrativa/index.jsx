import { Outlet } from 'react-router-dom';

/**
 * Bloc de l'organització administrativa.
 */
const OrganitzacioAdministrativa = () => {
  return (
    <div>
      <h2>Organització Administrativa</h2>
      <Outlet />
    </div>
  );
};

export default OrganitzacioAdministrativa;