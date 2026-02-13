import { useState } from 'react';
import './DiagramListViewer.css';

/**
 * DiagramListViewer component
 * Displays a list of diagrams and shows the selected one
 * 
 * @param {Array} diagrams - Array of diagram objects with { name, src }
 */
export default function DiagramListViewer({ diagrams = [] }) {
  const [selectedDiagram, setSelectedDiagram] = useState(diagrams[0] || null);

  if (!diagrams || diagrams.length === 0) {
    return (
      <div className="diagram-list-viewer">
        <p className="no-diagrams">No hi ha esquemes disponibles per aquest tema.</p>
      </div>
    );
  }

  return (
    <div className="diagram-list-viewer">
      <h3 className="diagram-title">Esquemes disponibles</h3>
      
      {/* Diagram list */}
      <div className="diagram-list">
        {diagrams.map((diagram, index) => (
          <button
            key={index}
            className={`diagram-button ${selectedDiagram?.src === diagram.src ? 'active' : ''}`}
            onClick={() => setSelectedDiagram(diagram)}
          >
            {diagram.name}
          </button>
        ))}
      </div>

      {/* Diagram viewer */}
      {selectedDiagram && (
        <div className="diagram-viewer">
          <img 
            src={selectedDiagram.src} 
            alt={selectedDiagram.name}
            className="diagram-image"
          />
        </div>
      )}
    </div>
  );
}
