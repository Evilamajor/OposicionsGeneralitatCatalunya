import { useParams } from 'react-router-dom';
import mapaBlocs from '../../blocs/mapaBlocs';

/**
 * SeccioCasos.jsx
 *
 * Secció de casos pràctics d’un tema concret.
 *
 * El contingut real depèn de:
 *   blocId → temaId → casos
 * definit a src/blocs/mapaBlocs.js
 */
const SeccioCasos = () => {
  const { blocId, temaId } = useParams();

  const Component = mapaBlocs?.[blocId]?.[temaId]?.casos;

  if (!Component) {
    return (
      <section>
        <h3>Casos pràctics</h3>
        <p style={{ color: '#777' }}>
          Aquesta secció de casos pràctics encara no està disponible per a aquest tema.
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

export default SeccioCasos;
