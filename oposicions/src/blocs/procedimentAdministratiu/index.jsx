import { Outlet } from 'react-router-dom';

/**
 * Bloc del procediment administratiu.
 * Mostra el títol del bloc i una sortida per a les rutes filles (seccions i subtemes).
 */
const ProcedimentAdministratiu = () => {
  return (
    <div>
      <h2>Procediment Administratiu</h2>
      <Outlet />
    </div>
  );
};

export default ProcedimentAdministratiu;