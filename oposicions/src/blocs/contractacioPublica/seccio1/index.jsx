import { Outlet } from 'react-router-dom';

/**
 * Primera secció del bloc de contractació pública.
 */
const SeccioContractacioPublica = () => {
  return (
    <div>
      <h3>Secció 1 de Contractació Pública</h3>
      <Outlet />
    </div>
  );
};

export default SeccioContractacioPublica;