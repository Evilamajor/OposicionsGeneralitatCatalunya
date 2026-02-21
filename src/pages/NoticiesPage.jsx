import './NoticiesPage.css';

export default function NoticiesPage() {
  return (
    <section className="noticies-page">
      <header className="noticies-header">
        <h1>Notícies</h1>
        <p>Actualitzacions sobre l’estat del procés de selecció.</p>
      </header>

      <div className="noticies-placeholder" role="status" aria-live="polite">
        🚧 Contingut en preparació — coming soon.
      </div>
    </section>
  );
}
