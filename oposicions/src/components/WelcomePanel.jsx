export default function WelcomePanel() {
  return (
    <section style={{
      padding: '40px 24px',
      maxWidth: 520,
      margin: '0 auto',
      textAlign: 'center',
      color: '#4b5563',
      lineHeight: 1.7,
    }}>
      <h2 style={{ color: '#1f2933', marginBottom: 12 }}>Temari d'oposicions</h2>

      <p style={{ fontSize: 14 }}>
        Selecciona un bloc del temari a la barra lateral esquerra
        per consultar les explicacions disponibles.
      </p>

      <p style={{ fontSize: 14, marginTop: 8 }}>
        Les explicacions s’obriran en una pestanya nova per facilitar
        la consulta i l’estudi simultani de diversos continguts.
      </p>
    </section>
  );
}
