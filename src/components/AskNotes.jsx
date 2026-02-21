import { useEffect, useState } from 'react';
import './AskNotes.css';

function AskNotes({ storageKey }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setContent(saved);
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, content);
  }, [content, storageKey]);

  return (
    <div className="ask-notes-container">
      <h3>📝 Notes del simulacre</h3>
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Escriu aquí reflexions, errors detectats, articles a repassar..."
      />
    </div>
  );
}

export default AskNotes;