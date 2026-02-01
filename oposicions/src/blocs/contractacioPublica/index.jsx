import { Outlet } from 'react-router-dom';

/**
 * Bloc de la contractació pública.
 */
const ContractacioPublica = () => {
  return (
    <div>
      <h2>Contractació Pública</h2>
      <Outlet />
    </div>
  );
};

export default ContractacioPublica;