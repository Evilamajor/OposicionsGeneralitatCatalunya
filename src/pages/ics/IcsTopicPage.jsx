import { Link, useParams } from 'react-router-dom';
import ContentPlaceholder from '../../components/ContentPlaceholder';
import {
  ICS_SPECIFIC_BLOCKS,
  ICS_SPECIFIC_SUBTITLE,
  ICS_TRANSVERSAL_SUBTITLE,
  ICS_TRANSVERSAL_TOPICS,
} from './icsConfig';

function findSpecificTopic(blocId, temaId) {
  const block = ICS_SPECIFIC_BLOCKS.find((item) => item.id === blocId);
  if (!block) return { block: null, topic: null };

  const topic = block.topics.find((item) => item.id === temaId) || null;
  return { block, topic };
}

export default function IcsTopicPage({ section }) {
  const { temaId, blocId } = useParams();

  if (section === 'transversal') {
    const topic = ICS_TRANSVERSAL_TOPICS.find((item) => item.id === temaId);

    if (!topic) {
      return (
        <section style={{ padding: '2rem', maxWidth: 980 }}>
          <h1>Tema transversal no trobat</h1>
          <p>Aquest tema no existeix dins del temari transversal.</p>
          <Link to="/ics/transversal">Tornar a l’índex transversal</Link>
        </section>
      );
    }

    return (
      <section style={{ padding: '2rem', maxWidth: 980 }}>
        <h1>{topic.title}</h1>
        <p>{ICS_TRANSVERSAL_SUBTITLE}</p>
        <ContentPlaceholder description="🚧 Contingut en preparació — coming soon." />
      </section>
    );
  }

  const { block, topic } = findSpecificTopic(blocId, temaId);

  if (!block || !topic) {
    return (
      <section style={{ padding: '2rem', maxWidth: 980 }}>
        <h1>Tema específic no trobat</h1>
        <p>Aquest tema no existeix dins del temari específic ICS.</p>
        <Link to="/ics/especific">Tornar a l’índex específic</Link>
      </section>
    );
  }

  return (
    <section style={{ padding: '2rem', maxWidth: 980 }}>
      <h1>{topic.title}</h1>
      <p>{block.title}</p>
      <p>{ICS_SPECIFIC_SUBTITLE}</p>
      <ContentPlaceholder description="🚧 Contingut en preparació — coming soon." />
    </section>
  );
}
