import { useNavigate } from 'react-router-dom';
import './CulturaCatalanaPage.css';

export default function ArtsPage() {
  const navigate = useNavigate();

  return (
    <div className="cultura-subpage">
      <button className="cultura-back" onClick={() => navigate('/annexos/cultura-catalana')}>
        ← Tornar a Cultura catalana
      </button>

      <div className="cultura-subpage-header">
        <span className="cultura-subpage-icon" aria-hidden>🎨</span>
        <h1 className="cultura-subpage-title">Arts</h1>
      </div>

      <p className="cultura-subpage-desc">
        Pintura, escultura, arquitectura i altres expressions artístiques catalanes.
      </p>

      <div className="cultura-placeholder">
        <span className="cultura-placeholder-icon" aria-hidden>🚧</span>
        <p className="cultura-placeholder-text">
          <em>Contingut en preparació</em>
        </p>
      </div>
    </div>
  );
}
