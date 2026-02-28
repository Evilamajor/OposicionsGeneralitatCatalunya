export default function LegislacioSection({ legislacioPath }) {
  if (!legislacioPath) return null;

  return (
    <iframe
      src={legislacioPath}
      title="Legislació del tema"
      className="bloc-embedded-frame"
    />
  );
}
