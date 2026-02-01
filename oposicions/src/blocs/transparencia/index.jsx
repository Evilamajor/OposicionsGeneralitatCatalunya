import { Outlet } from 'react-router-dom';

/**
 * Bloc de transparència.
 */
const Transparencia = () => {
  return (
    <div>
      <h2>Transparència</h2>
      <Outlet />
    </div>
  );
};

export default Transparencia;