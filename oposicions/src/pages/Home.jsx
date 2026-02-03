/**
 * Home.jsx
 *
 * Pàgina inicial de la plataforma d’estudi d’oposicions.
 * Serveix com a punt d’entrada abans d’accedir a un tema concret.
 */
const Home = () => {
  return (
    <div style={{ padding: '1.5rem' }}>
      <h2>Plataforma d’estudi d’oposicions</h2>

      <p>
        Benvingut/da a la plataforma d’estudi. Des del menú lateral pots
        seleccionar un bloc del temari i accedir a cada tema amb diferents
        modes d’estudi:
      </p>

      <ul>
        <li>📘 Explicació teòrica del tema</li>
        <li>🧠 Flashcards per memoritzar conceptes clau</li>
        <li>📝 Casos pràctics similars als d’examen</li>
        <li>🔗 Materials i enllaços oficials</li>
      </ul>

      <p style={{ marginTop: '1rem', color: '#555' }}>
        Recomanació: comença seleccionant un tema del temari a la barra lateral
        per iniciar l’estudi.
      </p>
    </div>
  );
};

export default Home;
