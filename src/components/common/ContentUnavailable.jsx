export default function ContentUnavailable({ title = 'Contingut no disponible', message = 'No s\'ha trobat el contingut sol·licitat.' }) {
  return (
    <div className="bloc-page">
      <div className="bloc-contingut">
        <div className="error">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
