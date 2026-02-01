import { Outlet } from 'react-router-dom';

/**
 * Primera secció del bloc de funció pública.
 */
const SeccioFuncioPublica = () => {
  return (
    <div>
      <h3>Secció 1 de Funció Pública</h3>
      <Outlet />
    </div>
  );
};

export default SeccioFuncioPublica;