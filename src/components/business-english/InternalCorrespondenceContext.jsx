import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { contextEmails } from './internalCorrespondenceContextData';
import './InternalCorrespondenceContext.css';

function WritingPanel({
  title,
  instruction,
  value,
  onChange,
  modelAnswer,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  return (
    <div className="icc-practice-panel">
      <button
        type="button"
        className="icc-practice-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="icc-practice-chevron">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div className="icc-practice-content">
          <p className="icc-practice-instruction">{instruction}</p>
          <textarea
            className="icc-practice-textarea"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Write your version here..."
          />
          <div className="icc-practice-counter">{value.length} characters</div>

          <button
            type="button"
            className="icc-model-toggle"
            onClick={() => setShowModelAnswer((prev) => !prev)}
          >
            {showModelAnswer ? 'Hide Model Answer' : 'Show Model Answer'}
          </button>

          {showModelAnswer && (
            <div className="icc-model-answer">
              {modelAnswer.split('\n').map((line, lineIndex) => (
                <p key={`${line}-${lineIndex}`} className="icc-line">
                  {line || '\u00A0'}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function InternalCorrespondenceContext() {
  const { section, id } = useParams();

  const items = contextEmails[section] || [];
  const index = Number.parseInt(id, 10);
  const email = Number.isInteger(index) ? items[index] : null;

  const storageKey = useMemo(() => `context-writing-${section}-${id}`, [section, id]);
  const [formalDraft, setFormalDraft] = useState('');
  const [shortDraft, setShortDraft] = useState('');

  useEffect(() => {
    if (!email) {
      return;
    }

    const saved = localStorage.getItem(storageKey);
    if (!saved) {
      setFormalDraft('');
      setShortDraft('');
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      setFormalDraft(parsed.formalDraft || '');
      setShortDraft(parsed.shortDraft || '');
    } catch {
      setFormalDraft('');
      setShortDraft('');
    }
  }, [storageKey, email]);

  useEffect(() => {
    if (!email) {
      return;
    }

    localStorage.setItem(
      storageKey,
      JSON.stringify({ formalDraft, shortDraft })
    );
  }, [formalDraft, shortDraft, storageKey, email]);

  if (!email) {
    return (
      <div className="icc-page">
        <div className="icc-card">
          <h2 className="icc-title">📧 Example Email</h2>
          <p className="icc-empty">No context example found for this sentence.</p>
          <Link to="/business-english/internal-correspondence/practice" className="icc-back-btn">
            Back to Practice
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="icc-page">
      <div className="icc-card">
        <h2 className="icc-title">📧 Example Email</h2>

        <p className="icc-subject">
          <strong>Subject:</strong> {email.subject}
        </p>

        <p className="icc-highlight">Sentence used: {email.sentence}</p>

        <div className="icc-body">
          {email.body.split('\n').map((line, lineIndex) => (
            <p key={`${line}-${lineIndex}`} className="icc-line">
              {line || '\u00A0'}
            </p>
          ))}
        </div>

        <div className="icc-practice-card">
          <h3 className="icc-practice-title">✍ Practice Your Writing</h3>

          <WritingPanel
            title="Rewrite in a more formal tone"
            instruction="Rewrite the email using a slightly more formal and polished register while preserving meaning."
            value={formalDraft}
            onChange={setFormalDraft}
            modelAnswer={email.formalVersion}
          />

          <WritingPanel
            title="Write a shorter internal version"
            instruction="Write a concise internal version that keeps only the essential information."
            value={shortDraft}
            onChange={setShortDraft}
            modelAnswer={email.shortVersion}
          />
        </div>

        <Link to="/business-english/internal-correspondence/practice" className="icc-back-btn">
          Back to Practice
        </Link>
      </div>
    </div>
  );
}
