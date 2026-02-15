import { useNavigate } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import './SchemaList.css';

/**
 * Available diagrams for each bloc
 * Manually maintained list - update when adding new PNG files to public/diagrams/
 */
const AVAILABLE_DIAGRAMS = {
  5: ['pressupost_trlp'], // Add diagram names here without .png extension
};

/**
 * SchemaList component
 * Displays available schemas for a given bloc and tema
 * 
 * @param {string} blocId - The bloc identifier (e.g., 'bloc-5')
 * @param {string} temaId - The tema identifier (e.g., 'tema-16')
 */
export default function SchemaList({ blocId, temaId }) {
  const navigate = useNavigate();

  // Extract bloc number from blocId (e.g., 'bloc-5' -> 5)
  const blocNumber = parseInt(blocId?.split('-')[1] || '0');
  
  // Get list of available diagrams for this bloc
  const diagrams = AVAILABLE_DIAGRAMS[blocNumber] || [];

  if (diagrams.length === 0) {
    return (
      <div className="schema-list-container">
        <ComingSoon sectionName="Esquemes" />
      </div>
    );
  }

  const handleSchemaClick = (schemaName) => {
    navigate(`/bloc/${blocId}/${temaId}/esquemes/${schemaName}`);
  };

  return (
    <div className="schema-list-container">
      <h3 className="schema-list-title">Esquemes disponibles</h3>
      <div className="schema-list">
        {diagrams.map((diagramName) => (
          <button
            key={diagramName}
            className="schema-button"
            onClick={() => handleSchemaClick(diagramName)}
          >
            {diagramName}
          </button>
        ))}
      </div>
    </div>
  );
}
