import ContentPlaceholder from '../components/ContentPlaceholder';
import './AutoavaluacioPage.css';

const BLOCKS = [
  'Tests per bloc',
  'Tests per llei',
  'Simulacres complets',
  'Errors freqüents',
];

export default function AutoavaluacioPage() {
  return (
    <section className="autoavaluacio-page">
      <header className="autoavaluacio-header">
        <h1>Autoavaluació</h1>
        <p>Espai de preparació progressiva per mesurar coneixements i consolidar resultats.</p>
      </header>

      <div className="autoavaluacio-grid">
        {BLOCKS.map((title) => (
          <article key={title} className="autoavaluacio-card">
            <h2>{title}</h2>
            <ContentPlaceholder description="Mòdul pendent de publicació." />
          </article>
        ))}
      </div>
    </section>
  );
}
