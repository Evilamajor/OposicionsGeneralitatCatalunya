import ContentPlaceholder from '../components/ContentPlaceholder';
import './TransparenciaPage.css';

const TRANSPARENCIA_SECTIONS = [
  {
    id: 'execucio-pressupostaria',
    title: 'Execució pressupostària',
    description: 'Seguiment de despesa pública i evolució anual.',
  },
  {
    id: 'contractacio-publica',
    title: 'Contractació pública',
    description: 'Anàlisi de licitacions, adjudicacions i proveïdors.',
  },
  {
    id: 'dades-portal-transparencia',
    title: 'Dades del portal de transparència',
    description: 'Indicadors oberts i sèries temporals institucionals.',
  },
];

export default function TransparenciaPage() {
  return (
    <section className="transparencia-page">
      <header className="transparencia-header">
        <h1>Transparència</h1>
        <p>Àrea preparada per publicar anàlisi de dades amb enfocament institucional i traçable.</p>
      </header>

      <div className="transparencia-grid">
        {TRANSPARENCIA_SECTIONS.map((section) => (
          <article key={section.id} className="transparencia-card">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <ContentPlaceholder description="Bloc analític en preparació." />
          </article>
        ))}
      </div>
    </section>
  );
}
