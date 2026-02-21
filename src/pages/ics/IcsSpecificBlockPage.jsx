import { Link, useParams } from 'react-router-dom';
import ContentPlaceholder from '../../components/ContentPlaceholder';
import { ICS_SPECIFIC_BLOCKS, ICS_SPECIFIC_SUBTITLE } from './icsConfig';

export default function IcsSpecificBlockPage() {
  const { blocId } = useParams();
  const block = ICS_SPECIFIC_BLOCKS.find((item) => item.id === blocId);

  if (!block) {
    return (
      <section style={{ padding: '2rem', maxWidth: 980 }}>
        <h1>Bloc no trobat</h1>
        <p>El bloc específic sol·licitat no existeix.</p>
        <Link to="/ics/especific">Tornar a l’índex específic</Link>
      </section>
    );
  }

  return (
    <section style={{ padding: '2rem', maxWidth: 980 }}>
      <h1>{block.title}</h1>
      <p>{ICS_SPECIFIC_SUBTITLE}</p>

      <ul>
        {block.topics.map((topic) => (
          <li key={topic.id}>
            <Link to={`/ics/especific/${block.id}/${topic.id}`}>{topic.title}</Link>
          </li>
        ))}
      </ul>

      <ContentPlaceholder description="🚧 Contingut en preparació — coming soon." />
    </section>
  );
}
