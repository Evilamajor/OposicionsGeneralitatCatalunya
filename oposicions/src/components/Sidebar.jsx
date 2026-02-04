import { NavLink } from 'react-router-dom';
import { blocks } from '../data';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Blocs</h3>

      <ul>
        {blocks.map((bloc) => (
          <li key={bloc.id}>
            <NavLink to={`/bloc/${bloc.id}`}>
              {bloc.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
