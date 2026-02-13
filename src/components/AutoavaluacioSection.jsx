import './AutoavaluacioSection.css';

/**
 * AutoavaluacioSection component
 * Displays self-assessment resources for a specific topic
 * 
 * @param {string} blocId - The bloc identifier (e.g., 'bloc-5')
 * @param {string} temaId - The tema identifier (e.g., 'tema-16')
 */
export default function AutoavaluacioSection({ blocId, temaId }) {
  
  // In the future, this could load available resources from an API or config
  const resources = [
    {
      id: 'flashcards',
      title: 'Flashcards',
      description: 'Targetes de memòria per repassar conceptes clau del tema.',
      icon: '🗂️',
      available: false, // Set to true when resource is ready
    },
    {
      id: 'questions',
      title: 'Preguntes i respostes',
      description: 'Preguntes tipus examen amb respostes detallades.',
      icon: '❓',
      available: false,
    },
    {
      id: 'quiz',
      title: 'Quiz',
      description: 'Qüestionari interactiu per avaluar els teus coneixements.',
      icon: '✅',
      available: false,
    },
  ];

  const handleOpenResource = (resourceId) => {
    // TODO: Navigate to specific resource page or open modal
    console.log(`Opening resource: ${resourceId} for ${blocId}/${temaId}`);
    alert(`Funcionalitat en desenvolupament: ${resourceId}`);
  };

  const hasAvailableResources = resources.some(r => r.available);

  return (
    <div className="autoavaluacio-section">
      <div className="autoavaluacio-header">
        <h2 className="autoavaluacio-title">Autoavaluació del tema</h2>
        <p className="autoavaluacio-subtitle">
          Recursos per practicar i avaluar els teus coneixements
        </p>
      </div>

      {!hasAvailableResources && (
        <div className="autoavaluacio-placeholder">
          <div className="placeholder-icon">📚</div>
          <p className="placeholder-text">
            Contingut d'autoavaluació en preparació.
          </p>
          <p className="placeholder-subtext">
            Aviat podràs accedir a flashcards, preguntes i qüestionaris.
          </p>
        </div>
      )}

      <div className="autoavaluacio-resources">
        {resources.map((resource) => (
          <div 
            key={resource.id}
            className={`resource-card ${!resource.available ? 'disabled' : ''}`}
          >
            <div className="resource-icon">{resource.icon}</div>
            <div className="resource-content">
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
            </div>
            <button
              className="resource-button"
              onClick={() => handleOpenResource(resource.id)}
              disabled={!resource.available}
            >
              {resource.available ? 'Obrir recurs' : 'Pròximament'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
