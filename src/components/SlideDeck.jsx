/**
 * SlideDeck — container that loads a Marp-style markdown file
 * and renders it as a navigable slide presentation with transitions.
 *
 * Props:
 *   @param {string} mdUrl — URL to the .md file (relative to public/)
 *   @param {string} [title] — optional deck label
 */
import { useState, useEffect, useCallback, useRef } from 'react';
import parseMarkdownSlides from '../utils/parseMarkdownSlides';
import Slide from './Slide';
import './SlideDeck.css';

export default function SlideDeck({ mdUrl, title }) {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [printMode, setPrintMode] = useState(false);
  const deckRef = useRef(null);

  /* ── Load & parse markdown ── */
  useEffect(() => {
    setLoading(true);
    setError(null);

    const baseUrl = import.meta.env.BASE_URL || '/';
    const fullUrl = mdUrl.startsWith('/')
      ? `${baseUrl.replace(/\/$/, '')}${mdUrl}`
      : `${baseUrl}${mdUrl}`;

    fetch(fullUrl + '?v=' + Date.now())
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((md) => {
        const parsed = parseMarkdownSlides(md);
        setSlides(parsed);
        setCurrent(0);
        setPrevIndex(0);
        setLoading(false);
      })
      .catch((err) => {
        console.error('SlideDeck load error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [mdUrl]);

  /* ── Navigation ── */
  const total = slides.length;
  const go = useCallback(
    (dir) => setCurrent((c) => {
      const next = Math.max(0, Math.min(total - 1, c + dir));
      setPrevIndex(c);
      return next;
    }),
    [total],
  );
  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);
  const goTo = useCallback((idx) => {
    setCurrent((c) => { setPrevIndex(c); return idx; });
  }, []);

  /* ── Keyboard ── */
  useEffect(() => {
    const handler = (e) => {
      if (printMode) return;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      if (e.key === 'End') { e.preventDefault(); goTo(total - 1); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, total, printMode, goTo]);

  /* ── Print / PDF export ── */
  const handlePrint = useCallback(() => {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      const restore = () => {
        setPrintMode(false);
        window.removeEventListener('afterprint', restore);
      };
      window.addEventListener('afterprint', restore);
    }, 300);
  }, []);

  /* ── Progress bar width ── */
  const progress = total > 1 ? (current / (total - 1)) * 100 : 100;

  /* ── Render ── */
  if (loading) {
    return (
      <div className="slidedeck-status">
        <div className="slidedeck-spinner" />
        <p>Carregant presentació…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="slidedeck-status slidedeck-status--error">
        <p>No s'ha pogut carregar la presentació.</p>
        <p className="slidedeck-error-detail">{error}</p>
      </div>
    );
  }

  if (!slides.length) return null;

  /* ── Print mode: render all slides stacked for PDF pages ── */
  if (printMode) {
    return (
      <div className="slidedeck slidedeck--print" ref={deckRef}>
        {slides.map((s) => (
          <Slide
            key={s.index}
            index={s.index}
            total={total}
            title={s.title}
            subtitle={s.subtitle}
            blocks={s.blocks}
            slideType={s.slideType}
            active={true}
          />
        ))}
      </div>
    );
  }

  /* ── Normal mode ── */
  const slide = slides[current];
  const direction = current > prevIndex ? 'right' : 'left';

  /* Dot pagination: show max ~20 dots, collapse middle for large decks */
  const MAX_DOTS = 20;
  const showAllDots = total <= MAX_DOTS;

  return (
    <div className="slidedeck" ref={deckRef}>
      {/* Toolbar */}
      <div className="slidedeck-toolbar">
        <span className="slidedeck-title">{title || 'Presentació'}</span>
        <div className="slidedeck-controls">
          <span className="slidedeck-indicator">
            {current + 1} / {total}
          </span>
          <button
            className="slidedeck-btn"
            onClick={handlePrint}
            title="Exportar a PDF"
            aria-label="Exportar a PDF"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="slidedeck-progress">
        <div className="slidedeck-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Stage */}
      <div className="slidedeck-stage">
        {/* Left arrow */}
        <button
          className="slidedeck-nav slidedeck-nav--prev"
          onClick={prev}
          disabled={current === 0}
          aria-label="Diapositiva anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Slide */}
        <div className="slidedeck-viewport" key={current}>
          <Slide
            index={slide.index}
            total={total}
            title={slide.title}
            subtitle={slide.subtitle}
            blocks={slide.blocks}
            slideType={slide.slideType}
            active={true}
            direction={direction}
          />
        </div>

        {/* Right arrow */}
        <button
          className="slidedeck-nav slidedeck-nav--next"
          onClick={next}
          disabled={current === total - 1}
          aria-label="Diapositiva següent"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots / mini progress */}
      <div className="slidedeck-dots">
        {showAllDots
          ? slides.map((_, i) => (
              <button
                key={i}
                className={`slidedeck-dot ${i === current ? 'slidedeck-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Anar a la diapositiva ${i + 1}`}
              />
            ))
          : (
            <div className="slidedeck-minibar">
              <div
                className="slidedeck-minibar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          )
        }
      </div>
    </div>
  );
}
