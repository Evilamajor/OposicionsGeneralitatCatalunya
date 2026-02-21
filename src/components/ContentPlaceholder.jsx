import './ContentPlaceholder.css';

export default function ContentPlaceholder({
  title = 'Contingut en preparació',
  description = 'Aquest apartat estarà disponible properament.',
}) {
  return (
    <section className="content-placeholder" role="status" aria-live="polite">
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
