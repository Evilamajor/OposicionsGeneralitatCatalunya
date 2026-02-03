import { useParams } from 'react-router-dom';
import mapaBlocs from '../../blocs/mapaBlocs';

/**
 * SeccioLinks.jsx
 *
 * Secció de materials, enllaços i referències d’un tema concret.
 *
 * El contingut real depèn de:
 *   blocId → temaId → links
 * definit a src/blocs/mapaBlocs.js
 */
const SeccioLinks = () => {
  const { blocId, temaId } = useParams();

  const Component = mapaBlocs?.[blocId]?.[temaId]?.links;

  if (!Component) {
    return (
      <section>
        <h3>Materials</h3>
        <p style={{ color: '#777' }}>
          Els materials i enllaços encara no estan disponibles per a aquest tema.
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

export default SeccioLinks;
