import EmbeddedHtmlFrame from './EmbeddedHtmlFrame';

export default function LegislacioSection({ legislacioPath }) {
  return <EmbeddedHtmlFrame src={legislacioPath} title="Legislació del tema" />;
}
