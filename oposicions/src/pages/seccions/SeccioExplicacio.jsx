import { useParams } from 'react-router-dom';
import mapaBlocs from '../../blocs/mapaBlocs';

/**
 * SeccioExplicacio.jsx
 *
 * Secció d’explicació teòrica d’un tema concret.
 *
 * El contingut real depèn de:
 *   blocId → temaId → explicacio
 * definit a src/blocs/mapaBlocs.js
 */
const SeccioExplicacio = () => {
  const { blocId, temaId } = useParams();

  const Component = mapaBlocs?.[blocId]?.[temaId]?.explicacio;

  if (!Component) {
    return (
      <section>
        <h3>Explicació</h3>
        <p style={{ color: '#777' }}>
          Aquesta explicació encara no està disponible per a aquest tema.
        </p>
      </section>
    );
  }

  return (
    <section>
      <Component />
    </section>
  );
};

export default SeccioExplicacio;
