import React from 'react';
import { Link } from 'react-router-dom';
import { blocks } from '../data';

// BlocList renders the homepage which lists all available blocks.  Each
// block is rendered as a link to its own page.  When clicked, the
// user is taken to a route such as `/bloc/bloc1` where the topics
// belonging to that block are displayed.
export default function BlocList() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Llista de Blocs</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {blocks.map((bloc) => (
          <li key={bloc.id} style={{ marginBottom: '0.5rem' }}>
            <Link
              to={`/bloc/${bloc.id}`}
              style={{ textDecoration: 'none', color: 'blue' }}
            >
              {bloc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}