import { Outlet } from 'react-router-dom';

/**
 * Primera secció del procediment administratiu.
 * Serveix com a contenidor per als subtemes de la secció 1.
 */
const SeccioProcedimentAdministratiu = () => {
  return (
    <div>
      <h3>Secció 1 del Procediment Administratiu</h3>
      <Outlet />
    </div>
  );
};

export default SeccioProcedimentAdministratiu;