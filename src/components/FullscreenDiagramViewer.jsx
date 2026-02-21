import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './FullscreenDiagramViewer.css';

export default function FullscreenDiagramViewer() {
  const { blocId, temaId, punt } = useParams();
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);

  const backToEsquemes = `/bloc/${blocId}/${temaId}/esquemes`;

  const sources = useMemo(() => {
    const normalizedPunt = String(punt || '').trim();
    const numeric = Number.parseInt(normalizedPunt, 10);
    const paddedPoint = Number.isNaN(numeric)
      ? normalizedPunt
      : String(numeric).padStart(2, '0');

    return [
      `/content/${blocId}/${temaId}/esquemes/diagrames/punt-${paddedPoint}.png`,
      `/content/${blocId}/${temaId}/diagrama/${normalizedPunt}.png`,
    ];
  }, [blocId, temaId, punt]);

  const src = sources[sourceIndex] || sources[0];

  const title = `Diagrama · ${blocId}/${temaId} · punt ${punt}`;

  return (
    <div className="fullscreen-diagram-page">
      <div className="fullscreen-diagram-topbar">
        <button className="fullscreen-diagram-back" onClick={() => navigate(backToEsquemes)}>
          ← Back
        </button>
        <h2 className="fullscreen-diagram-title">{title}</h2>
      </div>

      <div className="fullscreen-diagram-body">
        {hasError ? (
          <div className="fullscreen-diagram-fallback">En construcció</div>
        ) : (
          <TransformWrapper
            initialScale={1}
            minScale={0.2}
            maxScale={6}
            centerOnInit
            wheel={{ step: 0.08 }}
          >
            {({ zoomIn, zoomOut, resetTransform, centerView }) => (
              <>
                <div className="fullscreen-diagram-controls">
                  <button onClick={() => zoomIn()}>+</button>
                  <button onClick={() => zoomOut()}>-</button>
                  <button onClick={() => resetTransform()}>Reset</button>
                  <button onClick={() => centerView(1)}>Fit</button>
                </div>

                <div className="fullscreen-diagram-canvas">
                  <TransformComponent
                    wrapperStyle={{ width: '100%', height: '100%' }}
                    contentStyle={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <img
                      src={src}
                      alt={title}
                      className="fullscreen-diagram-image"
                      draggable={false}
                      onError={() => {
                        const hasNextSource = sourceIndex < sources.length - 1;
                        if (hasNextSource) {
                          setSourceIndex((current) => current + 1);
                          return;
                        }
                        setHasError(true);
                      }}
                    />
                  </TransformComponent>
                </div>
              </>
            )}
          </TransformWrapper>
        )}
      </div>
    </div>
  );
}
