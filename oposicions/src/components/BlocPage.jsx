import React from 'react';
import { useParams } from 'react-router-dom';
import { blocks } from '../data';

export default function BlocPage() {
  const { blocId } = useParams();
  const bloc = blocks.find((b) => b.id === blocId);

  if (!bloc) {
    return <p>Bloc no trobat.</p>;
  }

  return (
    <section>
      <h2>{bloc.title}</h2>

      <ul>
        {bloc.topics.map((topic) => (
          <li key={topic.id}>
            <a
              href={`/${topic.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {topic.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
