/**
 * Slide — renders a single presentation slide with type-based layout.
 *
 * Props:
 *   @param {number}   index      — 0-based slide index
 *   @param {number}   total      — total slide count
 *   @param {string}   title      — main heading (h1)
 *   @param {string}   [subtitle] — secondary heading (h2)
 *   @param {Array}    blocks     — content blocks (see parseMarkdownSlides)
 *   @param {string}   [slideType] — slide classification
 *   @param {boolean}  [active]   — is this the currently visible slide
 *   @param {string}   [direction] — 'left' or 'right' for transition direction
 */
import React from 'react';

/* ── inline-markdown helpers ── */

function inlineMarkdown(text) {
  if (!text) return text;
  let out = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/__(.+?)__/g, '<strong>$1</strong>');
  out = out.replace(/\*(.+?)\*/g, '<em>$1</em>');
  out = out.replace(/(?<!\w)_(.+?)_(?!\w)/g, '<em>$1</em>');
  out = out.replace(/`(.+?)`/g, '<code>$1</code>');
  return out;
}

function Inline({ text }) {
  return <span dangerouslySetInnerHTML={{ __html: inlineMarkdown(text) }} />;
}

/* ── block renderers ── */

function renderHeading(block, key) {
  const Tag = `h${Math.min(block.level, 6)}`;
  return (
    <Tag key={key} className={`slide-h${block.level}`}>
      <Inline text={block.text} />
    </Tag>
  );
}

function renderParagraph(block, key) {
  return (
    <p key={key} className="slide-paragraph">
      <Inline text={block.text} />
    </p>
  );
}

function renderList(block, key) {
  const Tag = block.ordered ? 'ol' : 'ul';
  return (
    <Tag key={key} className="slide-list">
      {block.items.map((item, i) => (
        <li key={i}><Inline text={item} /></li>
      ))}
    </Tag>
  );
}

function renderBlockquote(block, key) {
  const joined = block.lines.join(' ');
  const isIdea = /idea\s+clau/i.test(joined);
  const isWarning = /no\s+poden|atenció|avís/i.test(joined);
  const isNota = /nota[:.]?/i.test(joined);
  const variant = isIdea ? 'idea' : isWarning ? 'warning' : isNota ? 'note' : 'note';
  const icon = isIdea ? '💡' : isWarning ? '⚠️' : '📌';

  return (
    <div key={key} className={`slide-callout slide-callout--${variant}`}>
      <span className="slide-callout-icon" aria-hidden="true">{icon}</span>
      <div className="slide-callout-body">
        {block.lines.map((line, i) => (
          <p key={i}><Inline text={line} /></p>
        ))}
      </div>
    </div>
  );
}

function renderTable(block, key) {
  return (
    <div key={key} className="slide-table-wrap">
      <table className="slide-table">
        <thead>
          <tr>
            {block.headers.map((h, i) => <th key={i}><Inline text={h} /></th>)}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => <td key={ci}><Inline text={cell} /></td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderDiagram(block, key) {
  if (block.variant === 'flow') {
    return (
      <div key={key} className="slide-diagram slide-diagram--flow">
        {block.items.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flow-step">{step}</div>
            {i < block.items.length - 1 && <div className="flow-arrow">→</div>}
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (block.variant === 'adop') {
    return (
      <div key={key} className="slide-diagram slide-diagram--timeline">
        {block.items.map((step, i) => (
          <div className="timeline-step" key={i}>
            <div className="timeline-number">{i + 1}</div>
            <div className="timeline-label">{step}</div>
            {i < block.items.length - 1 && <div className="timeline-connector" />}
          </div>
        ))}
      </div>
    );
  }

  if (block.variant === 'cycle') {
    return (
      <div key={key} className="slide-diagram slide-diagram--cycle">
        {block.items.map((step, i) => (
          <div className="cycle-step" key={i}>
            <div className="cycle-number">{i + 1}</div>
            <div className="cycle-label">{step}</div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function renderBlock(block, key) {
  switch (block.type) {
    case 'heading':    return renderHeading(block, key);
    case 'paragraph':  return renderParagraph(block, key);
    case 'list':       return renderList(block, key);
    case 'blockquote': return renderBlockquote(block, key);
    case 'table':      return renderTable(block, key);
    case 'diagram':    return renderDiagram(block, key);
    default:           return null;
  }
}

/* ── component ── */

export default function Slide({ index, total, title, subtitle, blocks, slideType = 'content', active, direction }) {
  const isTitleSlide = slideType === 'title';
  const typeClass = `slide--${slideType}`;
  const dirClass = direction ? `slide--exit-${direction}` : '';

  return (
    <div
      className={`slide ${typeClass} ${active ? 'slide--active' : ''} ${dirClass}`}
      aria-hidden={!active}
      data-slide={index}
    >
      <div className="slide-inner">
        {title && (
          <h1 className="slide-title">
            <Inline text={title} />
            <span className="slide-title-accent" aria-hidden="true" />
          </h1>
        )}

        {subtitle && (
          <h2 className="slide-subtitle">
            <Inline text={subtitle} />
          </h2>
        )}

        {blocks.length > 0 && (
          <div className="slide-body">
            {blocks.map((b, i) => renderBlock(b, `b-${i}`))}
          </div>
        )}
      </div>

      {/* Slide number */}
      <div className="slide-number" aria-label={`Diapositiva ${index + 1} de ${total}`}>
        {index + 1} / {total}
      </div>
    </div>
  );
}
