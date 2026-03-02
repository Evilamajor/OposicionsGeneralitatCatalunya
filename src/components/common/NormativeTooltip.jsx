import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { getNormativeInfo } from '../../utils/normativeDataResolver';
import './NormativeTooltip.css';

const getTooltipPosition = (targetElement) => {
  const rect = targetElement.getBoundingClientRect();
  const desiredWidth = 360;
  const margin = 12;

  const left = Math.min(
    Math.max(margin, rect.left + (rect.width / 2) - (desiredWidth / 2)),
    window.innerWidth - desiredWidth - margin,
  );

  const hasSpaceBottom = rect.bottom + 12 + 260 < window.innerHeight;
  const top = hasSpaceBottom
    ? rect.bottom + 10
    : Math.max(margin, rect.top - 260);

  return {
    top,
    left,
    width: desiredWidth,
  };
};

const renderField = (label, value) => {
  if (!value) return null;

  return (
    <div className="normative-tooltip-row">
      <strong>{label}:</strong> {value}
    </div>
  );
};

export default function NormativeTooltip({ tipus, referencia, children }) {
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
      className="normative-tooltip-shell"
      style={{
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
      }}
    >
      <div
        ref={tooltipRef}
        className="normative-tooltip-bubble"
        role="dialog"
        aria-label={`Resum normatiu ${info.titol}`}
      >
        {info.titol && (
          <div className="normative-tooltip-title">
            {info.titol}
          </div>
        )}
        {renderField('Què regula', info.queRegula)}
        {renderField('Idea clau', info.ideaClau)}
        {renderField('Context dins del temari', info.contextTemari)}
        {renderField('Clau d’examen', info.clauExamen)}
        {renderField('Error habitual', info.errorHabitual)}
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
        className="normative-tooltip-trigger"
      >
        {children}
      </button>
      {tooltip}
    </>
  );
}
