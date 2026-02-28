import { lazy, Suspense } from 'react';
import ComingSoon from '../ComingSoon';
import { SLIDE_MD_MAP, TOPIC_POWERPOINT_BLOCS } from '../../constants/sections';

const SlideDeck = lazy(() => import('../SlideDeck'));
const PowerPointViewer = lazy(() => import('../PowerPointViewer'));

export default function PowerPointsSection({
  active,
  blocId,
  blocTitle,
  temaLabel,
  powerpointMode,
  powerpointMetadataUrl,
  powerpointConfigUrl,
}) {
  if (!active) return null;

  const loadingFallback = (
    <div className="loading">
      <p>Carregant presentació...</p>
    </div>
  );

  if (TOPIC_POWERPOINT_BLOCS.has(blocId)) {
    if (powerpointMode === 'checking') {
      return loadingFallback;
    }

    return (
      <Suspense fallback={loadingFallback}>
        {powerpointMode === 'metadata' ? (
          <PowerPointViewer
            metadataUrl={powerpointMetadataUrl}
            title={temaLabel}
          />
        ) : (
          <SlideDeck
            deckConfigUrl={powerpointConfigUrl}
            title={temaLabel}
          />
        )}
      </Suspense>
    );
  }

  if (SLIDE_MD_MAP[blocId]) {
    return (
      <Suspense fallback={loadingFallback}>
        <SlideDeck mdUrl={SLIDE_MD_MAP[blocId]} title={blocTitle} />
      </Suspense>
    );
  }

  return <ComingSoon sectionName="PowerPoints" />;
}
