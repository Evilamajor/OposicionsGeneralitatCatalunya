import EmbeddedHtmlFrame from './EmbeddedHtmlFrame';

export default function MaterialsSection({ materialsPath }) {
  return <EmbeddedHtmlFrame src={materialsPath} title="Materials del tema" />;
}
