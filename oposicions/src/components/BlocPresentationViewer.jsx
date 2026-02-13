import React, { useState, useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './BlocPresentationViewer.css';

/**
 * Generic PDF presentation viewer component
 * Reusable for any bloc that needs a slide-by-slide PDF viewer
 *
 * @param {string} pdfUrl - URL to the PDF file (e.g., '/content/bloc-5/presentaciobloc5.pdf')
 * @param {string} [title] - Optional title for error messages (defaults to 'Presentació')
 */
export default function BlocPresentationViewer({ pdfUrl, title = 'Presentació' }) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.5);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resolvedUrl, setResolvedUrl] = useState(null);
  const containerRef = useRef(null);
  const documentRef = useRef(null);

  // Resolve PDF URL with Vite BASE_URL support
  useEffect(() => {
    // Construct full URL with Vite BASE_URL if in production or non-root deployment
    const baseUrl = import.meta.env.BASE_URL || '/';
    const fullUrl = pdfUrl.startsWith('/') 
      ? `${baseUrl.replace(/\/$/, '')}${pdfUrl}`
      : `${baseUrl}${pdfUrl}`;

    setResolvedUrl(fullUrl);

    // Extract bloc ID from URL for targeted debugging
    const blocMatch = pdfUrl.match(/bloc-(\d+)/);
    const blocNum = blocMatch ? blocMatch[1] : 'unknown';
    
    // Debug logging: show what URL is being loaded
    console.group(`🎬 BlocPresentationViewer [BLOC ${blocNum}] - PDF Loading Debug`);
    console.log('📍 Input pdfUrl:', pdfUrl);
    console.log('🌐 window.location.origin:', window.location.origin);
    console.log('📦 import.meta.env.BASE_URL:', baseUrl);
    console.log('🔗 Resolved full URL:', fullUrl);
    console.log('✅ Ready to fetch from:', new URL(fullUrl, window.location.origin).href);
    
    // Specific warning for blocs 3 and 5
    if (blocNum === '3' || blocNum === '5') {
      console.warn(`⚠️ ATTENTION: Loading Bloc ${blocNum} - verify this is correct PDF`);
      console.warn('Expected file:', pdfUrl);
    }
    console.groupEnd();
  }, [pdfUrl]);

  // Handle PDF document load
  const onDocumentLoadSuccess = ({ numPages: pages }) => {
    const blocMatch = pdfUrl.match(/bloc-(\d+)/);
    const blocNum = blocMatch ? blocMatch[1] : 'unknown';
    console.log(`✓ Bloc ${blocNum} PDF loaded successfully with ${pages} pages`);
    setNumPages(pages);
    setCurrentPage(1);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    const errorMsg = `Error loading presentation: ${error.message || 'Unknown error'}`;
    const blocMatch = pdfUrl.match(/bloc-(\d+)/);
    const blocNum = blocMatch ? blocMatch[1] : 'unknown';
    
    // Specifically log bloc 3 and 5 errors
    const isProblematicBloc = blocNum === '3' || blocNum === '5';
    
    console.error(`❌ PDF Load Error [BLOC ${blocNum}]${isProblematicBloc ? ' ⚠️ PROBLEMATIC BLOC' : ''}:`, {
      message: error.message,
      name: error.name,
      blocNum,
      pdfUrl,
      resolvedUrl,
      origin: window.location.origin,
      note: isProblematicBloc ? 'Check if file exists at the correct path' : null
    });
    
    setError(errorMsg);
    setLoading(false);
  };

  // Handle fullscreen changes (native)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Navigation handlers
  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(numPages || prev, prev + 1));
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  const resetZoom = () => {
    setScale(1.5);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen?.() ||
          containerRef.current.webkitRequestFullscreen?.() ||
          containerRef.current.mozRequestFullScreen?.() ||
          containerRef.current.msRequestFullscreen?.();
      } catch (err) {
        console.error('Fullscreen request failed:', err);
      }
    } else {
      try {
        await document.exitFullscreen?.() ||
          document.webkitExitFullscreen?.() ||
          document.mozCancelFullScreen?.() ||
          document.msExitFullscreen?.();
      } catch (err) {
        console.error('Exit fullscreen failed:', err);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === '+' || e.key === '=') {
      e.preventDefault();
      zoomIn();
    } else if (e.key === '-') {
      e.preventDefault();
      zoomOut();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === '0') {
      e.preventDefault();
      resetZoom();
    }
  };

  // Add keyboard listener to container
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [numPages]);

  return (
    <div
      className={`presentation-viewer ${isFullscreen ? 'fullscreen' : ''}`}
      ref={containerRef}
      tabIndex="0"
    >
      {/* ✨ Modern Presentation Toolbar */}
      <div className="presentation-toolbar">
        <div className="toolbar-section toolbar-left">
          <button
            className="nav-btn prev-btn"
            onClick={goToPrevious}
            disabled={currentPage <= 1}
            title="Previous slide (← or ↑)"
            aria-label="Previous slide"
          >
            ← Anterior
          </button>
          <button
            className="nav-btn next-btn"
            onClick={goToNext}
            disabled={!numPages || currentPage >= numPages}
            title="Next slide (→ or ↓)"
            aria-label="Next slide"
          >
            Següent →
          </button>
        </div>

        <div className="toolbar-section toolbar-center">
          <span className="page-indicator">
            {currentPage} / {numPages || '?'}
          </span>
          <label htmlFor="page-input" className="sr-only">
            Go to page
          </label>
          <input
            id="page-input"
            type="number"
            min="1"
            max={numPages || 1}
            value={currentPage}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (!isNaN(value) && value >= 1 && value <= (numPages || 1)) {
                setCurrentPage(value);
              }
            }}
            className="page-jump-input"
            title="Jump to page"
            placeholder="Jump to..."
          />
        </div>

        <div className="toolbar-section toolbar-right">
          <button
            className="nav-btn zoom-out-btn"
            onClick={zoomOut}
            disabled={scale <= 0.75}
            title="Zoom out (–)"
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="zoom-indicator">{Math.round(scale * 100)}%</span>
          <button
            className="nav-btn zoom-in-btn"
            onClick={zoomIn}
            disabled={scale >= 3}
            title="Zoom in (+)"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            className="nav-btn reset-btn"
            onClick={resetZoom}
            title="Reset zoom (0)"
            aria-label="Reset zoom"
          >
            ⟲
          </button>
          <button
            className={`nav-btn fullscreen-btn ${isFullscreen ? 'active' : ''}`}
            onClick={toggleFullscreen}
            title="Fullscreen (F)"
            aria-label={`${isFullscreen ? 'Exit' : 'Enter'} fullscreen`}
          >
            ⛶
          </button>
        </div>
      </div>

      {/* 🎯 Slide Container with Side Arrows */}
      <div className="slide-container">
        {/* Left Arrow */}
        <button
          className="arrow-nav arrow-left"
          onClick={goToPrevious}
          disabled={currentPage <= 1}
          title="Previous slide"
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Main PDF Display Area */}
        <div className="pdf-container">
          {loading && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Carregant {title.toLowerCase()}...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <div className="error-icon">⚠️</div>
              <p className="error-text">{error}</p>
              <div className="error-hint">
                <strong>Debug Info:</strong>
                <div>📍 Requested: <code>{pdfUrl}</code></div>
                <div>🔗 Resolved: <code>{resolvedUrl}</code></div>
              </div>
            </div>
          )}

          {!error && resolvedUrl && (
            <div className="pdf-slide-wrapper">
              <div className="pdf-viewer">
                <Document
                  file={resolvedUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={<div className="loading-hint">Carregant PDF...</div>}
                  ref={documentRef}
                >
                  <Page
                    pageNumber={currentPage}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={true}
                  />
                </Document>
              </div>
            </div>
          )}
        </div>

        {/* Right Arrow */}
        <button
          className="arrow-nav arrow-right"
          onClick={goToNext}
          disabled={!numPages || currentPage >= numPages}
          title="Next slide"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* 🔵 Slide Indicator Dots */}
      {!error && numPages && (
        <div className="slide-dots">
          {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              className={`dot ${pageNum === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(pageNum)}
              title={`Go to slide ${pageNum}`}
              aria-label={`Go to slide ${pageNum}`}
            />
          ))}
        </div>
      )}

      {/* 📖 Keyboard Help Hint (hidden in fullscreen) */}
      {!isFullscreen && (
        <div className="help-hint">
          <p>
            <strong>Dreceres:</strong> ← → (anterior/següent) | + − (zoom) | 0 (reiniciar) | F (pantalla completa)
          </p>
        </div>
      )}
    </div>
  );
}
