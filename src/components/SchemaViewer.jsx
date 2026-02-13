import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchemaViewer.css';

/**
 * SchemaViewer component
 * Displays a schema image from public/diagrams/
 */
export default function SchemaViewer() {
  const { blocId, temaId, schemaName } = useParams();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  // Extract bloc number from blocId (e.g., 'bloc-5' -> 5)
  const blocNumber = parseInt(blocId?.split('-')[1] || '0');
  
  // IMPORTANT: In Vite, public/ assets are served from root (/)
  // Correct path: /diagrams/bloc5/pressupost_trlp.png
  const imagePath = `/diagrams/bloc${blocNumber}/${schemaName}.png`;

  const handleImageError = () => {
    setImageError(true);
    console.error('Error carregant imatge:', imagePath);
  };

  const goBack = () => {
    navigate(`/bloc/${blocId}/${temaId}/esquemes`);
  };

  return (
    <div className="schema-viewer-page">
      {/* Header */}
      <div className="schema-viewer-header">
        <button className="back-button" onClick={goBack}>
          ← Tornar
        </button>
        <h2 className="schema-viewer-title">{schemaName}</h2>
      </div>

      {/* Content */}
      <div className="schema-viewer-content">
        {imageError ? (
          <div className="schema-error">
            <h3>Error carregant esquema</h3>
            <p>No s'ha pogut carregar l'esquema: <strong>{schemaName}</strong></p>
            <p className="error-path">Ruta: {imagePath}</p>
            <p className="error-hint">
              Verifica que el fitxer existeix a: <code>public/diagrams/bloc{blocNumber}/{schemaName}.png</code>
            </p>
            <button className="back-button" onClick={goBack}>
              Tornar a la llista
            </button>
          </div>
        ) : (
          <div className="schema-image-container">
            <img
              src={imagePath}
              alt={schemaName}
              className="schema-image"
              onError={handleImageError}
            />
          </div>
        )}
      </div>

      {/* Debug info */}
      <div className="schema-debug">
        <small>Ruta de la imatge: {imagePath}</small>
      </div>
    </div>
  );
}
