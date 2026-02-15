import { useNavigate } from 'react-router-dom';
import './PlataformaPSCP.css';

/**
 * PlataformaPSCP – secció dedicada a la Plataforma de Serveis de
 * Contractació Pública (PSCP) de la Generalitat de Catalunya.
 *
 * Explica què és, quins serveis ofereix, actors, flux del procediment,
 * riscos i control, tot relacionat amb la LCSP.
 */

/** Card definitions – add { numero, title } for scalable "Fitxa N:" prefix */
const FITXES_CARDS = [
  { numero: 1, key: 'pscp',     title: 'Què és la PSCP' },
  { numero: 2, key: 'serveis',  title: 'Serveis principals' },
  { numero: 3, key: 'actors',   title: 'Actors que hi intervenen' },
  { numero: 4, key: 'flux',     title: 'Flux del procediment dins la PSCP' },
  { numero: 5, key: 'riscos',   title: 'Riscos i control en la contractació electrònica' },
];

/** Helper to render the card title with "Fitxa N:" prefix */
function fitxaTitle(numero, title) {
  return `Fitxa ${numero}: ${title}`;
}

export default function PlataformaPSCP() {
  const navigate = useNavigate();

  return (
    <div className="plataforma-pscp">
      {/* Header */}
      <div className="plataforma-header">
        <h2 className="plataforma-title">
          Plataforma de Serveis de Contractació Pública (PSCP)
        </h2>
        <p className="plataforma-subtitle">
          Funcionament, serveis i relació amb la Llei de Contractes del Sector
          Públic.
        </p>
      </div>

      {/* Access buttons */}
      <div className="plataforma-accessos">
        <a
          href="https://contractaciopublica.cat"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-plataforma"
        >
          🌐 Accedir a la PSCP
        </a>
        <a
          href="https://contrataciondelestado.es/wps/portal/plataforma/inicio/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-plataforma"
        >
          🌐 Accedir a la Plataforma estatal
        </a>
      </div>
      <p className="plataforma-info">
        Àmbits oficials de publicitat electrònica de la contractació pública a Catalunya i a l’Estat.
      </p>

      {/* Cards grid */}
      <div className="plataforma-grid">
        {/* 1. Què és la PSCP */}
        <div
          className="plataforma-card plataforma-card--clickable"
          onClick={() => navigate('/bloc/bloc-4/fitxes/fitxa1')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/bloc/bloc-4/fitxes/fitxa1')}
        >
          <div className="plataforma-card-icon">🏛️</div>
          <h3 className="plataforma-card-title">{fitxaTitle(FITXES_CARDS[0].numero, FITXES_CARDS[0].title)}</h3>
          <div className="plataforma-card-body">
            <ul>
              <li>
                Plataforma oficial de publicitat i transparència contractual de
                la Generalitat de Catalunya.
              </li>
              <li>
                Obligació de publicació establerta a l'article 63 de la LCSP
                (Llei 9/2017, de 8 de novembre).
              </li>
              <li>
                Integra el <strong>perfil de contractant</strong> de tots els
                òrgans de contractació del sector públic català.
              </li>
            </ul>
            <div className="plataforma-legal-refs">
              <span className="legal-ref-badge">Art. 63 LCSP — Perfil de contractant</span>
              <span className="legal-ref-badge">Art. 347 LCSP — Plataforma de contractació del sector públic</span>
            </div>
          </div>
        </div>

        {/* 2. Serveis principals */}
        <div className="plataforma-card">
          <div className="plataforma-card-icon">⚙️</div>
          <h3 className="plataforma-card-title">{fitxaTitle(FITXES_CARDS[1].numero, FITXES_CARDS[1].title)}</h3>
          <p className="plataforma-card-legal-subtitle">Base jurídica principal segons LCSP</p>
          <div className="plataforma-card-body">
            <ul>
              <li>Publicació d'anuncis de licitació <span className="legal-ref-inline">arts. 135, 63</span></li>
              <li>Licitació electrònica <span className="legal-ref-inline">arts. 22, 138</span></li>
              <li>Presentació electrònica d'ofertes <span className="legal-ref-inline">art. 157</span></li>
              <li>Notificacions electròniques <span className="legal-ref-inline">art. 151</span></li>
              <li>Subscripcions i alertes personalitzades</li>
              <li>Estadístiques d'ús i dades obertes</li>
            </ul>
          </div>
        </div>

        {/* 3. Actors que hi intervenen */}
        <div className="plataforma-card">
          <div className="plataforma-card-icon">👥</div>
          <h3 className="plataforma-card-title">{fitxaTitle(FITXES_CARDS[2].numero, FITXES_CARDS[2].title)}</h3>
          <div className="plataforma-card-body">
            <ul>
              <li>
                <strong>Òrgans de contractació</strong> — publiquen licitacions
                i gestionen els procediments.
              </li>
              <li>
                <strong>Empreses licitadores</strong> — presenten ofertes i
                accedeixen a la documentació.
              </li>
              <li>
                <strong>Ciutadania</strong> — consulta licitacions i
                adjudicacions per transparència.
              </li>
              <li>
                <strong>Administradors de plataforma</strong> — mantenen la
                infraestructura i donen suport tècnic.
              </li>
            </ul>
            <p className="plataforma-card-legal-note">
              Responsabilitat de l'òrgan de contractació segons art. 61 LCSP.
            </p>
          </div>
        </div>

        {/* 4. Flux del procediment */}
        <div className="plataforma-card">
          <div className="plataforma-card-icon">🔄</div>
          <h3 className="plataforma-card-title">
            {fitxaTitle(FITXES_CARDS[3].numero, FITXES_CARDS[3].title)}
          </h3>
          <div className="plataforma-card-body">
            <div className="plataforma-flow">
              <span className="plataforma-flow-step">Publicació</span>
              <span className="plataforma-flow-arrow">→</span>
              <span className="plataforma-flow-step">Licitació</span>
              <span className="plataforma-flow-arrow">→</span>
              <span className="plataforma-flow-step">Valoració</span>
              <span className="plataforma-flow-arrow">→</span>
              <span className="plataforma-flow-step">Adjudicació</span>
              <span className="plataforma-flow-arrow">→</span>
              <span className="plataforma-flow-step">Formalització</span>
            </div>

            <p style={{ marginTop: '1rem' }}>Principis que garanteix:</p>
            <div className="plataforma-principles">
              <span className="plataforma-principle">✅ Publicitat</span>
              <span className="plataforma-principle">✅ Transparència</span>
              <span className="plataforma-principle">✅ Concurrència</span>
              <span className="plataforma-principle">✅ Igualtat</span>
            </div>
            <p className="plataforma-card-legal-note">
              Fases regulades principalment als arts. 116–153 LCSP.
            </p>
          </div>
        </div>

        {/* 5. Riscos i control */}
        <div className="plataforma-card plataforma-card--riscos">
          <div className="plataforma-card-icon">⚠️</div>
          <h3 className="plataforma-card-title">{fitxaTitle(FITXES_CARDS[4].numero, FITXES_CARDS[4].title)}</h3>
          <div className="plataforma-card-body">
            <p><strong>Principals riscos:</strong></p>
            <ul>
              <li>Fragmentació indeguda del contracte</li>
              <li>Abús del contracte menor</li>
              <li>Publicitat insuficient</li>
              <li>Manca de concurrència efectiva</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}><strong>Òrgans de control:</strong></p>
            <ul>
              <li>Sindicatura de Comptes</li>
              <li>Tribunal de Comptes</li>
              <li>Òrgans interns d'intervenció</li>
            </ul>
            <div className="plataforma-legal-refs">
              <span className="legal-ref-badge">Arts. 99, 118 LCSP i normativa de control extern</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
