export default function SectionContainer({
  title,
  children,
  isEmpty = false,
  emptyMessage = 'Contingut en preparació — coming soon',
}) {
  return (
    <section className="section-container">
      {title && <h3 className="section-container-title">{title}</h3>}
      {isEmpty ? (
        <div className="section-container-empty" role="status">
          {emptyMessage}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
