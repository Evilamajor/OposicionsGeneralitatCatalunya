export default function MaterialsSection({ materialsPath }) {
  if (!materialsPath) return null;

  return (
    <iframe
      src={materialsPath}
      title="Materials del tema"
      className="bloc-embedded-frame"
    />
  );
}
