import { Link } from 'react-router-dom';
import ContentPlaceholder from '../../components/ContentPlaceholder';
import {
  ICS_SPECIFIC_BLOCKS,
  ICS_SPECIFIC_SUBTITLE,
  ICS_TRANSVERSAL_SUBTITLE,
  ICS_TRANSVERSAL_TOPICS,
} from './icsConfig';

export default function IcsSectionIndexPage({ section }) {
  const isTransversal = section === 'transversal';
  const title = isTransversal ? 'Temari transversal' : 'Temari específic (Administratiu/iva)';
  const subtitle = isTransversal ? ICS_TRANSVERSAL_SUBTITLE : ICS_SPECIFIC_SUBTITLE;

  return (
    <section style={{ padding: '2rem', maxWidth: 980 }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>

      {isTransversal ? (
        <ul>
          {ICS_TRANSVERSAL_TOPICS.map((topic) => (
            <li key={topic.id}>
              <Link to={`/ics/transversal/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {ICS_SPECIFIC_BLOCKS.map((block) => (
            <li key={block.id}>
              <Link to={`/ics/especific/${block.id}`}>{block.title}</Link>
            </li>
          ))}
        </ul>
      )}

      <ContentPlaceholder description="🚧 Contingut en preparació — coming soon." />
    </section>
  );
}
