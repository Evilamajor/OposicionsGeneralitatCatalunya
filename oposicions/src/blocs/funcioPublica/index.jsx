import { Outlet } from 'react-router-dom';

/**
 * Bloc de la funció pública.
 */
const FuncioPublica = () => {
  return (
    <div>
      <h2>Funció Pública</h2>
      <Outlet />
    </div>
  );
};

export default FuncioPublica;