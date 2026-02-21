import { useEffect, useMemo, useRef, useState } from 'react';
import './PowerPointViewer.css';
import Slide from './Slide';

const BASE_WIDTH = 1280;
const BASE_HEIGHT = 720;

const getStorageKey = (slideId) => `ppt_edits_bloc1_tema1_${slideId}`;
const CLOCK_STORAGE_KEY = 'ppt_clockOn_tema1';

export default function PowerPointViewer({ metadataUrl, title = 'PowerPoint' }) {
  const stageViewportRef = useRef(null);
  const stageCanvasRef = useRef(null);
  const [metadata, setMetadata] = useState(null);
  const [loadingMeta, setLoadingMeta] = useState(true);
  const [metaError, setMetaError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideHtml, setSlideHtml] = useState('');
  const [loadingSlide, setLoadingSlide] = useState(false);
  const [slideError, setSlideError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMemoryMode, setIsMemoryMode] = useState(false);
  const [showFullOverrideSlideId, setShowFullOverrideSlideId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [draftContent, setDraftContent] = useState(null);
  const [clockOn, setClockOn] = useState(() => {
    try {
      return localStorage.getItem(CLOCK_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = metadata?.slides ?? [];
  const currentSlide = slides[currentIndex] ?? null;
  const totalSlides = slides.length;
  const isCoverSlide = currentIndex === 0 || currentSlide?.id === 'slide-01' || /portada/i.test(currentSlide?.title || '');

  useEffect(() => {
    try {
      localStorage.setItem(CLOCK_STORAGE_KEY, String(clockOn));
    } catch {
      // ignore localStorage errors
    }
  }, [clockOn]);

  useEffect(() => {
    let cancelled = false;

    const loadMetadata = async () => {
      try {
        setLoadingMeta(true);
        setMetaError('');
        const response = await fetch(metadataUrl);
        if (!response.ok) {
          throw new Error(`No s'ha pogut carregar metadata (${response.status})`);
        }
        const payload = await response.json();
        if (!cancelled) {
          setMetadata(payload);
          setCurrentIndex(0);
        }
      } catch (error) {
        if (!cancelled) {
          setMetaError(error.message || 'Error carregant metadata');
        }
      } finally {
        if (!cancelled) {
          setLoadingMeta(false);
        }
      }
    };

    loadMetadata();

    return () => {
      cancelled = true;
    };
  }, [metadataUrl]);

  useEffect(() => {
    if (!currentSlide) {
      setSlideHtml('');
      return;
    }

    if (currentSlide.type === 'point') {
      setSlideHtml('');
      setLoadingSlide(false);
      setSlideError('');
      return;
    }

    if (isCoverSlide) {
      setSlideHtml(`<article class="ultra-slide title-slide"><h1>Tema 1 · La Constitució espanyola de 1978</h1></article>`);
      setLoadingSlide(false);
      setSlideError('');
      return;
    }

    let cancelled = false;

    const loadSlide = async () => {
      try {
        setLoadingSlide(true);
        setSlideError('');
        setIsTransitioning(true);
        const response = await fetch(currentSlide.file);
        if (!response.ok) {
          throw new Error(`No s'ha pogut carregar la diapositiva (${response.status})`);
        }
        const html = await response.text();
        if (!cancelled) {
          setSlideHtml(html);
        }
      } catch (error) {
        if (!cancelled) {
          setSlideError(error.message || 'Error carregant la diapositiva');
          setSlideHtml('');
        }
      } finally {
        if (!cancelled) {
          setLoadingSlide(false);
          window.setTimeout(() => setIsTransitioning(false), 150);
        }
      }
    };

    loadSlide();

    return () => {
      cancelled = true;
    };
  }, [currentSlide, isCoverSlide]);

  useEffect(() => {
    if (!clockOn || isEditing || totalSlides <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
    }, 20000);

    return () => window.clearInterval(timer);
  }, [clockOn, isEditing, totalSlides, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.target?.tagName === 'SELECT') return;

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else if (event.key === 'Home') {
        event.preventDefault();
        setCurrentIndex(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        setCurrentIndex(Math.max(totalSlides - 1, 0));
      } else if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        toggleFullscreen();
      } else if (event.key.toLowerCase() === 'm') {
        event.preventDefault();
        setIsMemoryMode((prev) => !prev);
      } else if (event.key === ' ') {
        event.preventDefault();
        setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, goToSlide]);

  useEffect(() => {
    const viewport = stageViewportRef.current;
    if (!viewport) return;

    const updateScale = () => {
      const { width, height } = viewport.getBoundingClientRect();
      const nextScale = Math.max(0.3, Math.min(width / BASE_WIDTH, height / BASE_HEIGHT));
      setScale(nextScale);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const progress = useMemo(() => {
    if (!totalSlides) return 0;
    return ((currentIndex + 1) / totalSlides) * 100;
  }, [currentIndex, totalSlides]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalSlides - 1;
  const isPointSlide = currentSlide?.type === 'point';
  const isCurrentSlideOverridden = showFullOverrideSlideId === currentSlide?.id;
  const shouldShowMemoryLayer = isPointSlide && isMemoryMode && !isCurrentSlideOverridden;

  const hasFullLayerContent = isPointSlide
    ? Boolean(
      currentSlide?.hasFullContent &&
      (currentSlide?.full?.ideaClau || currentSlide?.full?.estructura || currentSlide?.full?.aplicacio || currentSlide?.full?.controlFinal)
    )
    : false;

  const activePointLayer = shouldShowMemoryLayer
    ? currentSlide?.memory
    : (hasFullLayerContent ? currentSlide?.full : currentSlide?.memory);

  const showFullMissingWarning = isPointSlide && !shouldShowMemoryLayer && !hasFullLayerContent;

  useEffect(() => {
    if (!isPointSlide || !currentSlide?.id) {
      setDraftContent(null);
      setIsEditing(false);
      return;
    }

    try {
      const key = getStorageKey(currentSlide.id);
      const saved = localStorage.getItem(key);

      if (saved) {
        const parsed = JSON.parse(saved);
        setDraftContent(parsed);
      } else {
        setDraftContent(activePointLayer);
      }
    } catch {
      setDraftContent(activePointLayer);
    }
  }, [currentSlide, activePointLayer, isPointSlide]);

  const toggleFullscreen = async () => {
    const node = stageViewportRef.current;
    if (!node) return;

    try {
      if (!document.fullscreenElement) {
        await node.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // ignore fullscreen errors
    }
  };

  function goToSlide(nextIndex) {
    if (isEditing) {
      const confirmLeave = window.confirm('Tens canvis sense guardar. Vols continuar?');
      if (!confirmLeave) return;
      setIsEditing(false);
    }

    setCurrentIndex(Math.max(0, Math.min(nextIndex, totalSlides - 1)));
  }

  const handleSave = () => {
    if (!currentSlide?.id || !draftContent) return;
    const key = getStorageKey(currentSlide.id);
    localStorage.setItem(key, JSON.stringify(draftContent));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraftContent(currentSlide?.content || activePointLayer || null);
    setIsEditing(false);
  };

  const handleReset = () => {
    if (!currentSlide?.id) return;
    const key = getStorageKey(currentSlide.id);
    localStorage.removeItem(key);
    setDraftContent(currentSlide?.content || activePointLayer || null);
  };

  const toggleReveal = () => {
    if (!currentSlide?.id) return;
    setShowFullOverrideSlideId((prev) => (prev === currentSlide.id ? null : currentSlide.id));
  };

  if (loadingMeta) {
    return <div className="powerpoint-status">Carregant presentació...</div>;
  }

  if (metaError) {
    return <div className="powerpoint-status error">{metaError}</div>;
  }

  if (!totalSlides) {
    return <div className="powerpoint-status">No hi ha diapositives disponibles.</div>;
  }

  return (
    <section className={`powerpoint-viewer ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="powerpoint-toolbar">
        <div className="powerpoint-title-block">
          <h3>{metadata?.title || title}</h3>
          {metadata?.subtitle ? <p>{metadata.subtitle}</p> : null}
        </div>

        <div className="powerpoint-controls">
          <button type="button" onClick={() => goToSlide(currentIndex - 1)} disabled={!canGoPrev}>←</button>
          <button type="button" onClick={() => goToSlide(currentIndex + 1)} disabled={!canGoNext}>→</button>
          <select value={currentIndex} onChange={(e) => goToSlide(Number(e.target.value))}>
            {slides.map((slide, index) => (
              <option key={slide.id || slide.file || index} value={index}>
                {String(index + 1).padStart(2, '0')} · {slide.title || 'Diapositiva'}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => setIsDarkMode((prev) => !prev)}>{isDarkMode ? 'Light' : 'Dark'}</button>
          {!isEditing && (
            <button type="button" onClick={() => setIsEditing(true)}>Editar</button>
          )}
          {isEditing && (
            <>
              <button type="button" onClick={handleSave}>Guardar</button>
              <button type="button" onClick={handleCancel}>Cancel·lar</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </>
          )}
          <button type="button" onClick={() => setIsMemoryMode((prev) => !prev)}>{isMemoryMode ? 'Memòria ON' : 'Memòria OFF'}</button>
          {isMemoryMode && isPointSlide ? (
            <button type="button" onClick={toggleReveal}>{isCurrentSlideOverridden ? 'Amaga' : 'Mostra'}</button>
          ) : null}
          <button type="button" onClick={() => setClockOn((prev) => !prev)}>{clockOn ? 'Rellotge ON' : 'Rellotge OFF'}</button>
          <button type="button" onClick={toggleFullscreen}>{isFullscreen ? 'Sortir fullscreen' : 'Fullscreen'}</button>
        </div>
      </header>

      <div className="powerpoint-progress">
        <div style={{ width: `${progress}%` }} />
      </div>

      <div className="powerpoint-meta-row">
        <span>{String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
        {currentSlide?.section ? <span>{currentSlide.section}</span> : <span>Ultraresum</span>}
      </div>

      <div ref={stageViewportRef} className="powerpoint-stage-viewport">
        <div
          ref={stageCanvasRef}
          className={`powerpoint-stage-canvas ${isTransitioning ? 'transitioning' : ''}`}
          style={{ transform: `translate(-50%, -50%) scale(${scale})`, width: `${BASE_WIDTH}px`, height: `${BASE_HEIGHT}px` }}
        >
          {loadingSlide ? (
            <div className="powerpoint-slide-status">Carregant diapositiva...</div>
          ) : slideError ? (
            <div className="powerpoint-slide-status error">{slideError}</div>
          ) : isPointSlide ? (
            <div className="powerpoint-slide-html">
              <Slide
                content={draftContent || activePointLayer}
                isEditing={isEditing}
                draftContent={draftContent || activePointLayer}
                setDraftContent={setDraftContent}
                pointTitle={currentSlide?.title}
                pointSection={currentSlide?.section}
                pointSources={currentSlide?.sources}
                warningMessage={showFullMissingWarning ? '⚠ No s’ha trobat el text d’explicació d’aquest punt.' : ''}
              />
            </div>
          ) : (
            <div className="powerpoint-slide-html" dangerouslySetInnerHTML={{ __html: slideHtml }} />
          )}
        </div>
      </div>
    </section>
  );
}
