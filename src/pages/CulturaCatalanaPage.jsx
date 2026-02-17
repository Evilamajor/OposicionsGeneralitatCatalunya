import { useNavigate } from 'react-router-dom';
import './CulturaCatalanaPage.css';

const SECTIONS = [
  {
    id: 'historia',
    title: 'Història Catalana',
    description: 'Principals fets històrics, personatges i etapes de la història de Catalunya.',
    icon: '🏰',
    route: '/annexos/cultura-catalana/historia',
  },
  {
    id: 'literatura',
    title: 'Literatura Catalana',
    description: 'Autors, obres i corrents literaris de la tradició catalana.',
    icon: '📖',
    route: '/annexos/cultura-catalana/literatura',
  },
  {
    id: 'arts',
    title: 'Arts',
    description: 'Pintura, escultura, arquitectura i altres expressions artístiques catalanes.',
    icon: '🎨',
    route: '/annexos/cultura-catalana/arts',
  },
  {
    id: 'agenda',
    title: 'Agenda Cultural',
    description: 'Festes, tradicions, calendari cultural i patrimoni immaterial.',
    icon: '🗓️',
    route: '/annexos/cultura-catalana/agenda',
  },
];

export default function CulturaCatalanaPage() {
  const navigate = useNavigate();

  return (
    <div className="cultura-page">
      {/* Header */}
      <header className="cultura-header">
        <h1 className="cultura-title">Cultura catalana</h1>
        <p className="cultura-subtitle">
          Context històric, literari i artístic de Catalunya
        </p>
      </header>

      {/* Cards grid */}
      <div className="cultura-grid">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className="cultura-card"
            onClick={() => navigate(section.route)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(section.route)}
          >
            <span className="cultura-card-icon" aria-hidden>{section.icon}</span>
            <h2 className="cultura-card-title">{section.title}</h2>
            <p className="cultura-card-desc">{section.description}</p>
            <span className="cultura-card-arrow" aria-hidden>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
