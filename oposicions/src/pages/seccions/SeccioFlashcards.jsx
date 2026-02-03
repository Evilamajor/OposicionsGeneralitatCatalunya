import { useParams } from 'react-router-dom';
import mapaBlocs from '../../blocs/mapaBlocs';

/**
 * SeccioFlashcards.jsx
 *
 * Secció Flashcards d’un tema concret.
 * El contingut real depèn de:
 *   blocId → temaId → flashcards
 * definit a src/blocs/mapaBlocs.js
 */
const SeccioFlashcards = () => {
  const { blocId, temaId } = useParams();

  const Component = mapaBlocs?.[blocId]?.[temaId]?.flashcards;

  if (!Component) {
    return (
      <section>
        <h3>Flashcards</h3>
        <p style={{ color: '#777' }}>
          Aquesta secció de flashcards encara no està disponible per a aquest tema.
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

export default SeccioFlashcards;
