import { useState } from 'react';
import './TopicDataProjects.css';

/**
 * Data science projects mapped to topics
 */
const DATA_PROJECTS = [
  {
    id: 'projet-1',
    title: "Anàlisi de l'estructura de la despesa",
    description: "Exploració de la classificació econòmica i funcional del pressupost.",
    relatedTopic: 'Tema 16',
    file: '05.584-PRA2.Rmd',
    available: true
  },
  {
    id: 'projecte-2',
    title: 'Execució pressupostària',
    description: 'Anàlisi de desviacions entre pressupost inicial i executat.',
    relatedTopic: 'Tema 17',
    file: null,
    available: false
  },
  {
    id: 'projecte-3',
    title: 'Control financer',
    description: 'Indicadors de control i responsabilitat comptable.',
    relatedTopic: 'Tema 18',
    file: null,
    available: false
  }
];

export default function TopicDataProjects({ blocId, temaId }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    if (!project.available) {
      alert('Aquest projecte estarà disponible pròximament');
      return;
    }

    // TODO: Implement project opening logic
    // For now, just show info about the project file
    console.log('Opening project:', project);
    alert(`Projecte: ${project.title}\nFitxer: ${project.file}\n\nAquesta funcionalitat s'implementarà per obrir el fitxer des de la carpeta datascience/`);
  };

  // Check if any projects are available
  const hasAvailableProjects = DATA_PROJECTS.some(p => p.available);

  return (
    <div className="topic-data-projects">
      {/* Header */}
      <div className="projects-header">
        <h2 className="projects-title">Projectes de dades del tema</h2>
        <p className="projects-subtitle">
          Aplicació pràctica del temari mitjançant anàlisi de dades amb R.
        </p>
      </div>

      {/* Projects grid */}
      <div className="projects-grid">
        {DATA_PROJECTS.map((project) => (
          <div 
            key={project.id}
            className={`project-card ${!project.available ? 'disabled' : ''}`}
          >
            {/* Project icon */}
            <div className="project-icon">
              📊
            </div>

            {/* Project content */}
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">
                {project.description}
              </p>

              <div className="project-meta">
                <span className="project-topic">
                  🎯 {project.relatedTopic}
                </span>
                {project.file && (
                  <span className="project-file">
                    📄 {project.file}
                  </span>
                )}
              </div>
            </div>

            {/* Project action */}
            <button
              className="project-button"
              onClick={() => handleOpenProject(project)}
              disabled={!project.available}
            >
              {project.available ? 'Obrir projecte' : 'Pròximament'}
            </button>

            {/* Availability badge */}
            {!project.available && (
              <div className="project-badge">
                En preparació
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Info section */}
      <div className="projects-info">
        <div className="info-box">
          <h4>ℹ️ Sobre els projectes</h4>
          <p>
            Els projectes de dades ofereixen una aplicació pràctica dels conceptes teòrics 
            del temari. Cadascun inclou:
          </p>
          <ul>
            <li>Anàlisi exploratòria amb R</li>
            <li>Visualitzacions interactives</li>
            <li>Interpretació aplicada al sector públic</li>
            <li>Codi documentat i reutilitzable</li>
          </ul>
        </div>

        <div className="info-box">
          <h4>🔧 Tecnologies utilitzades</h4>
          <ul>
            <li>R / RStudio</li>
            <li>tidyverse (dplyr, ggplot2)</li>
            <li>R Markdown</li>
            <li>Dades obertes de la Generalitat</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
