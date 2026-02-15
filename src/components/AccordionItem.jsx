import { useState } from 'react';
import './AccordionItem.css';

/**
 * Reusable accordion component.
 *
 * Props:
 *  - title  (string)   — header text displayed on the toggle bar
 *  - children (node)   — content rendered when expanded
 *
 * Supports any content inside: paragraphs, lists, links, highlighted
 * boxes, test questions, etc.
 */
export default function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-item ${open ? 'accordion-item--open' : ''}`}>
      <button
        className="accordion-item-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="accordion-item-chevron">{open ? '▼' : '▶'}</span>
        <span className="accordion-item-title">{title}</span>
      </button>
      <div className="accordion-item-panel">
        <div className="accordion-item-content">
          {children}
        </div>
      </div>
    </div>
  );
}
