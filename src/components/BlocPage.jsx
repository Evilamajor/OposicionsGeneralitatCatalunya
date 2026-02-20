import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { blocks } from '../data';
import NotesEditor from './NotesEditor';
import AutoavaluacioSection from './AutoavaluacioSection';
import PlataformaPSCP from './PlataformaPSCP';
import FitxesEstudi from './FitxesEstudi';
import TopicDataProjects from './TopicDataProjects';
import SlideDeck from './SlideDeck';
import ComingSoon from './ComingSoon';
import './BlocPage.css';

const SLIDE_MD_MAP = {
  'bloc-1': '/content/bloc-1/presentacio.md',
  'bloc-2': '/content/bloc-2/presentacio.md',
  'bloc-3': '/content/bloc-3/presentacio.md',
  'bloc-4': '/content/bloc-4/presentacio.md',
  'bloc-5': '/content/bloc-5/presentacio.md',
  'bloc-6': '/content/bloc-6/presentacio.md',
  'bloc-7': '/content/bloc-7/presentacio.md',
};

const TOPIC_POWERPOINT_BLOCS = new Set(['bloc-1', 'bloc-2', 'bloc-3']);

const SECTIONS = [
  { id: 'esquemes', label: 'Esquemes' },
  { id: 'powerpoints', label: 'PowerPoints' },
  { id: 'fitxes', label: "Fitxes d'estudi" },
  { id: 'autoavaluacio', label: 'Autoavaluació' },
  { id: 'legislacio', label: 'Legislació' },
  { id: 'materials', label: 'Materials' },
];

export default function BlocPage() {
  const { blocId, temaId, seccio } = useParams();
  const navigate = useNavigate();
  const [sectionsVisible, setSectionsVisible] = useState(true);

  const bloc = blocks.find((b) => b.id === blocId);
  const tema = bloc?.topics?.find((t) => t.id === temaId);

  const schemaPath =
    blocId && temaId
      ? `/content/${blocId}/${temaId}/esquemes/desenvolupament-base.html`
      : null;

  const legislacioPath = blocId && temaId
    ? `/content/${blocId}/${temaId}/legislacio.html`
    : null;

  const materialsPath = blocId && temaId
    ? `/content/${blocId}/${temaId}/materials.html`
    : null;

  useEffect(() => {
    if (!blocId || !bloc) return;

    if (!temaId) {
      const firstTemaId = bloc.topics?.[0]?.id;
      if (firstTemaId) {
        navigate(`/bloc/${blocId}/${firstTemaId}/esquemes`, { replace: true });
      }
      return;
    }

    if (temaId && !seccio) {
      navigate(`/bloc/${blocId}/${temaId}/esquemes`, { replace: true });
      return;
    }

    if (seccio && !SECTIONS.some((s) => s.id === seccio)) {
      navigate(`/bloc/${blocId}/${temaId}/esquemes`, { replace: true });
    }
  }, [blocId, temaId, seccio, bloc, navigate]);

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

  if (!temaId || !tema) {
    return (
      <div className="bloc-page">
        <div className="bloc-contingut">
          <div className="loading">
            <p>Carregant tema...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bloc-page">
      <div className="bloc-seccions">
        <h2>{tema.label}</h2>

        <button
          className="tabs-toggle"
          onClick={() => setSectionsVisible(!sectionsVisible)}
          aria-expanded={sectionsVisible}
          aria-label={sectionsVisible ? 'Amagar seccions' : 'Mostrar seccions'}
        >
          <span className={`toggle-chevron ${sectionsVisible ? 'open' : ''}`}>▼</span>
          <span>{sectionsVisible ? 'Amagar' : 'Mostrar'} seccions</span>
        </button>

        <div className={`seccions-list ${!sectionsVisible ? 'seccions-hidden' : ''}`}>
          {SECTIONS.map((section) => (
            <NavLink
              key={section.id}
              to={`/bloc/${blocId}/${temaId}/${section.id}`}
              className={({ isActive }) => `seccio-link ${isActive ? 'active' : ''}`}
            >
              {section.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="bloc-contingut">
        {seccio === 'legislacio' && legislacioPath && (
          <iframe
            src={legislacioPath}
            title="Legislació del tema"
            style={{ width: '100%', minHeight: '1200px', border: 'none', borderRadius: '12px' }}
          />
        )}

        {seccio === 'esquemes' && schemaPath && (
          <iframe
            src={schemaPath}
            title="Esquema del tema"
            style={{ width: '100%', minHeight: '1200px', border: 'none', borderRadius: '12px' }}
          />
        )}

        {seccio === 'powerpoints' && (
          TOPIC_POWERPOINT_BLOCS.has(blocId)
            ? (
              <SlideDeck
                deckConfigUrl={`/content/${blocId}/${temaId}/powerpoints/config.json`}
                title={tema.label}
              />
            )
            : (
              SLIDE_MD_MAP[blocId]
                ? <SlideDeck mdUrl={SLIDE_MD_MAP[blocId]} title={bloc.title} />
                : <ComingSoon sectionName="PowerPoints" />
            )
        )}

        {seccio === 'fitxes' && blocId === 'bloc-4' && <PlataformaPSCP />}
        {seccio === 'fitxes' && blocId !== 'bloc-4' && <FitxesEstudi blocId={blocId} />}

        {seccio === 'autoavaluacio' && <AutoavaluacioSection blocId={blocId} temaId={temaId} />}

        {seccio === 'materials' && materialsPath && (
          <iframe
            src={materialsPath}
            title="Materials del tema"
            style={{ width: '100%', minHeight: '1200px', border: 'none', borderRadius: '12px' }}
          />
        )}

        {seccio === 'projectes' && blocId === 'bloc-5' && (
          <TopicDataProjects blocId={blocId} temaId={temaId} />
        )}
      </div>

      <div className="notes-section">
        <NotesEditor
          storageKey={`notes-${blocId}-${temaId}`}
          title={`Notes de ${tema.label}`}
        />
      </div>
    </div>
  );
}
