import { useParams, Link } from 'react-router-dom';
import { annexos } from '../data';
import ComingSoon from './ComingSoon';

/**
 * AnnexPage — renders annex content or a standardized placeholder.
 * When real content is added, replace <ComingSoon /> with the actual viewer.
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
    <div style={{ padding: '2rem', maxWidth: 720 }}>
      <h2>{annex.title}</h2>
      {annex.description && (
        <p style={{ color: '#6b7280', fontSize: '0.92rem', marginTop: '0.25rem' }}>
          {annex.description}
        </p>
      )}
      <ComingSoon sectionName={annex.title} />
    </div>
  );
}
