import { useParams, Link } from 'react-router-dom';
import { annexos } from '../data';

/**
 * Placeholder page for Annexos.
 * TODO: implement full content pages when annex materials are ready.
 */
export default function AnnexPage() {
  const { annexId } = useParams();
  const annex = annexos.find((a) => a.id === annexId);

  if (!annex) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Annex no trobat</h2>
        <p>L'annex sol·licitat no existeix.</p>
        <Link to="/">← Tornar a l'inici</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 640 }}>
      <h2>{annex.title}</h2>
      <p style={{ color: '#6b7280', marginTop: '1rem' }}>
        🚧 Contingut en preparació — <em>coming soon</em>.
      </p>
      <p style={{ color: '#9ca3af', fontSize: 13, marginTop: '0.5rem' }}>
        Aquesta secció d'annexos conté materials complementaris que no formen part
        del temari oficial però són útils per a la preparació.
      </p>
      {/* TODO: render annex topics / content when available */}
    </div>
  );
}
