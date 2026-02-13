import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { blocks } from '../data';
import BlocPresentationViewer from './BlocPresentationViewer';
import NotesEditor from './NotesEditor';
import SchemaList from './SchemaList';
import AutoavaluacioSection from './AutoavaluacioSection';
import TopicDataProjects from './TopicDataProjects';
import './BlocPage.css';

/**
 * Mapping of bloc IDs to their presentation PDF files
 */
const PRESENTATION_MAP = {
  'bloc-1': '/content/bloc-1/presentaciobloc1.pdf',
  'bloc-2': '/content/bloc-2/presentaciobloc2.pdf',
  'bloc-3': '/content/bloc-3/presetaciobloc3.pdf', // Note: typo in filename
  'bloc-4': '/content/bloc-4/presentaciobloc4.pdf',
  'bloc-5': '/content/bloc-5/presentaciobloc5.pdf',
  'bloc-6': '/content/bloc-6/presentaciobloc6.pdf',
  'bloc-7': '/content/bloc-7/presentaciobloc7.pdf',
};

/**
 * Available sections for each tema
 */
const SECTIONS = [
  { id: 'legislacio', label: 'Legislació' },
  { id: 'esquemes', label: 'Esquemes' },
  { id: 'powerpoints', label: 'PowerPoints' },
  { id: 'pdfs', label: 'PDFs' },
  { id: 'projectes-dades', label: 'Projectes de dades' },
  { id: 'autoavaluacio', label: 'Autoavaluació' },
  { id: 'materials', label: 'Materials' },
];

export default function BlocPage() {
  const { blocId, temaId, seccio } = useParams();
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sectionsVisible, setSectionsVisible] = useState(true);

  // Find current bloc
  const bloc = blocks.find((b) => b.id === blocId);
  
  // Find current tema
  const tema = bloc?.topics?.find((t) => t.id === temaId);

  // Load HTML content when tema and section are selected
  useEffect(() => {
    if (!blocId || !temaId || !seccio) {
      setHtmlContent('');
      setLoading(false);
      setError(null);
      return;
    }

    // Handle esquemes section separately (uses SchemaList component)
    if (seccio === 'esquemes') {
      setHtmlContent('');
      setLoading(false);
      setError(null);
      return;
    }

    // Show placeholder for PDFs section
    if (seccio === 'pdfs') {
      setHtmlContent('<div style="padding: 2rem; text-align: center; color: #666;"><p>Contingut en preparació</p></div>');
      setLoading(false);
      setError(null);
      return;
    }

    // Handle autoavaluacio section separately (uses AutoavaluacioSection component)
    if (seccio === 'autoavaluacio') {
      setHtmlContent('');
      setLoading(false);
      setError(null);
      return;
    }

    // Handle projectes-dades section separately (uses TopicDataProjects component)
    if (seccio === 'projectes-dades') {
      setHtmlContent('');
      setLoading(false);
      setError(null);
      return;
    }

    const contentUrl = `/content/${blocId}/${temaId}/${seccio}.html`;
    
    setLoading(true);
    setError(null);
    
    fetch(contentUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`No s'ha pogut carregar el contingut (HTTP ${res.status})`);
        }
        return res.text();
      })
      .then((html) => {
        setHtmlContent(html);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading content:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [blocId, temaId, seccio]);

  // If bloc doesn't exist
  if (!bloc) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="error">
            <h3>Bloc no trobat</h3>
            <p>El bloc sol·licitat no existeix.</p>
          </div>
        </div>
      </div>
    );
  }

  // If only bloc is selected (no tema), show bloc overview
  if (!temaId) {
    const pdfUrl = PRESENTATION_MAP[blocId];
    
    return (
      <div className="bloc-page">
        {/* Presentation viewer */}
        {pdfUrl ? (
          <BlocPresentationViewer 
            pdfUrl={pdfUrl} 
            title={`Presentació ${bloc.title}`}
          />
        ) : (
          <div className="bloc-contingut">
            <div className="preview-empty">
              <p>No hi ha presentació disponible per aquest bloc.</p>
            </div>
          </div>
        )}

        {/* Notes editor */}
        <div className="notes-section">
          <NotesEditor 
            storageKey={`notes-${blocId}`}
            title={`Notes del ${bloc.title}`}
          />
        </div>
      </div>
    );
  }

  // If tema doesn't exist
  if (!tema) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="error">
            <h3>Tema no trobat</h3>
            <p>El tema sol·licitat no existeix en aquest bloc.</p>
          </div>
        </div>
      </div>
    );
  }

  // Tema is selected - show sections and content
  return (
    <div className="bloc-page">
      {/* Section tabs */}
      <div className="bloc-seccions">
        <h2>{tema.label}</h2>
        
        {/* Toggle button for sections */}
        <button
          className="tabs-toggle"
          onClick={() => setSectionsVisible(!sectionsVisible)}
          aria-expanded={sectionsVisible}
          aria-label={sectionsVisible ? 'Amagar seccions' : 'Mostrar seccions'}
        >
          <span className={`toggle-chevron ${sectionsVisible ? 'open' : ''}`}>▼</span>
          <span>{sectionsVisible ? 'Amagar' : 'Mostrar'} seccions</span>
        </button>

        {/* Section links */}
        <div className={`seccions-list ${!sectionsVisible ? 'seccions-hidden' : ''}`}>
          {SECTIONS.map((section) => (
            <NavLink
              key={section.id}
              to={`/bloc/${blocId}/${temaId}/${section.id}`}
              className={({ isActive }) => 
                `seccio-link ${isActive ? 'active' : ''}`
              }
            >
              {section.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="bloc-contingut">
        {!seccio && (
          <div className="preview-empty">
            <p>Selecciona una secció per veure el contingut.</p>
          </div>
        )}

        {loading && (
          <div className="loading">
            <p>Carregant contingut...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <h3>Error carregant contingut</h3>
            <p>{error}</p>
            <p style={{ fontSize: '13px', marginTop: '0.5rem' }}>
              Ruta: <code>/content/{blocId}/{temaId}/{seccio}.html</code>
            </p>
          </div>
        )}

        {!loading && !error && htmlContent && (
          <div 
            className="html-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}

        {!loading && !error && !htmlContent && seccio === 'esquemes' && (
          <SchemaList blocId={blocId} temaId={temaId} />
        )}

        {!loading && !error && !htmlContent && seccio === 'autoavaluacio' && (
          <AutoavaluacioSection blocId={blocId} temaId={temaId} />
        )}

        {!loading && !error && !htmlContent && seccio === 'projectes-dades' && (
          <TopicDataProjects blocId={blocId} temaId={temaId} />
        )}
      </div>

      {/* Notes editor for this tema */}
      {temaId && (
        <div className="notes-section">
          <NotesEditor 
            storageKey={`notes-${blocId}-${temaId}`}
            title={`Notes de ${tema.label}`}
          />
        </div>
      )}
    </div>
  );
}
