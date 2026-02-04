import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blocks } from '../data';

// BlocPage is responsible for rendering the details of a single block.
// It looks up the block by the `blocId` route parameter and displays
// all associated topics.  Each topic is rendered as an anchor tag
// pointing to a static HTML explanation file in the `public` folder.
// The `target="_blank"` attribute causes the explanation to open in
// a new browser tab, as requested.
export default function BlocPage() {
  const { blocId } = useParams();
  const bloc = blocks.find((b) => b.id === blocId);

  if (!bloc) {
    return <div style={{ padding: '1rem' }}>Bloc no trobat.</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{bloc.title}</h2>
      <p>
        <Link to="/">← Tornar a la llista de blocs</Link>
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bloc.topics.map((topic) => (
          <li key={topic.id} style={{ marginBottom: '0.5rem' }}>
            {/* Use an anchor tag to open explanation in a new tab */}
            <a
              href={`/${topic.filename}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'blue', textDecoration: 'none' }}
            >
              {topic.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}