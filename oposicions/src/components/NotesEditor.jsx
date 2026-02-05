import React, { useState, useEffect } from 'react';
import './NotesEditor.css';

/**
 * NotesEditor Component
 * 
 * Simple note-taking interface for personal study notes.
 * Notes are stored in localStorage using the provided storageKey.
 * Supports basic Markdown syntax (user-typed, not rendered).
 * 
 * Props:
 *   - storageKey (string): localStorage key for these notes
 *   - title (string): Display title for the editor
 */
export default function NotesEditor({ storageKey, title }) {
  const [notes, setNotes] = useState('');
  const [isSaved, setIsSaved] = useState(true);

  // Load notes from localStorage on mount or when storageKey changes
  useEffect(() => {
    const savedNotes = localStorage.getItem(storageKey) || '';
    setNotes(savedNotes);
    setIsSaved(true);
  }, [storageKey]);

  // Handle notes change with auto-save
  const handleNotesChange = (e) => {
    const newNotes = e.target.value;
    setNotes(newNotes);
    setIsSaved(false);

    // Auto-save to localStorage after user stops typing (debounce)
    clearTimeout(handleNotesChange.saveTimer);
    handleNotesChange.saveTimer = setTimeout(() => {
      localStorage.setItem(storageKey, newNotes);
      setIsSaved(true);
    }, 1000);
  };

  return (
    <div className="notes-editor">
      <div className="notes-header">
        <h3 className="notes-title">{title}</h3>
        <span className={`save-status ${isSaved ? 'saved' : 'saving'}`}>
          {isSaved ? '✓ Guardat' : '⏳ Guardant...'}
        </span>
      </div>

      <textarea
        className="notes-textarea"
        value={notes}
        onChange={handleNotesChange}
        placeholder="Escriu les teves notes aquí. Es guarden automàticament."
        rows={15}
      />
    </div>
  );
}
