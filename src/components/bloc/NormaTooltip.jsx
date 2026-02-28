import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { getNormativeInfo } from '../../utils/normativeDataResolver';

const getTooltipPosition = (targetElement) => {
  const rect = targetElement.getBoundingClientRect();
  const desiredWidth = 360;
  const margin = 12;

  const left = Math.min(
    Math.max(margin, rect.left + (rect.width / 2) - (desiredWidth / 2)),
    window.innerWidth - desiredWidth - margin,
  );

  const hasSpaceBottom = rect.bottom + 12 + 220 < window.innerHeight;
  const top = hasSpaceBottom
    ? rect.bottom + 10
    : Math.max(margin, rect.top - 220);

  return {
    top,
    left,
    width: desiredWidth,
  };
};

export default function NormaTooltip({ tipus, referencia, children }) {
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 360 });

  const info = useMemo(() => getNormativeInfo(tipus, referencia), [tipus, referencia]);

  useEffect(() => {
    if (!open || !triggerRef.current) return;
    setPosition(getTooltipPosition(triggerRef.current));
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onDocumentClick = (event) => {
      const triggerNode = triggerRef.current;
      const tooltipNode = tooltipRef.current;
      if (!triggerNode || !tooltipNode) return;

      const clickedInsideTrigger = triggerNode.contains(event.target);
      const clickedInsideTooltip = tooltipNode.contains(event.target);

      if (!clickedInsideTrigger && !clickedInsideTooltip) {
        setOpen(false);
      }
    };

    const onEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const onResize = () => {
      if (triggerRef.current) {
        setPosition(getTooltipPosition(triggerRef.current));
      }
    };

    document.addEventListener('mousedown', onDocumentClick);
    document.addEventListener('keydown', onEscape);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, true);

    return () => {
      document.removeEventListener('mousedown', onDocumentClick);
      document.removeEventListener('keydown', onEscape);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize, true);
    };
  }, [open]);

  const tooltip = open ? createPortal(
    <div
      ref={tooltipRef}
      role="dialog"
      aria-label={`Resum normatiu ${info.titol}`}
      style={{
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
        maxWidth: 'calc(100vw - 24px)',
        zIndex: 9999,
        background: '#ffffff',
        border: '1px solid #e7ebf2',
        borderRadius: '10px',
        boxShadow: '0 10px 24px rgba(15, 23, 42, 0.12)',
        padding: '12px 14px',
        color: '#0f172a',
        lineHeight: 1.35,
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: '8px', fontSize: '0.94rem' }}>{info.titol}</div>
      <div style={{ marginBottom: '8px', fontSize: '0.85rem' }}>
        <strong>Què regula:</strong> {info.resum}
      </div>
      <div style={{ marginBottom: '8px', fontSize: '0.85rem' }}>
        <strong>Idea clau:</strong> {info.ideaClau}
      </div>
      <div style={{ fontSize: '0.85rem' }}>
        <strong>Clau d’examen:</strong> {info.clauExamen}
      </div>
    </div>,
    document.body,
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={(event) => {
          event.stopPropagation();
          setOpen((value) => !value);
        }}
        style={{
          background: 'transparent',
          border: 0,
          padding: 0,
          margin: 0,
          color: '#1e4bd1',
          textDecoration: 'underline',
          textUnderlineOffset: '2px',
          cursor: 'pointer',
          font: 'inherit',
        }}
      >
        {children}
      </button>
      {tooltip}
    </>
  );
}
