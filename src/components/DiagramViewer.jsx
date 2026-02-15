import { useParams, useNavigate } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import AccordionItem from './AccordionItem';
import './DiagramViewer.css';

/**
 * Fitxa configuration for Bloc 4 – Plataforma.
 * Extend this map to add more interactive diagram pages.
 */
const FITXES = {
  fitxa1: {
    title: 'Fitxa 1 — Què és la PSCP',
    image: '/diagrams/bloc4/fitxa1.png',
  },
};

export default function DiagramViewer() {
  const { fitxaId } = useParams();
  const navigate = useNavigate();

  const fitxa = FITXES[fitxaId];

  if (!fitxa) {
    return (
      <div className="diagram-viewer">
        <div className="dv-container">
          <p>Fitxa no trobada.</p>
          <button className="dv-back" onClick={() => navigate(-1)}>
            ← Tornar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="diagram-viewer">
      <div className="dv-container">
        {/* Top bar */}
        <div className="dv-topbar">
          <button
            className="dv-back"
            onClick={() => navigate('/bloc/bloc-4/fitxes')}
          >
            ← Tornar a Fitxes d'estudi
          </button>
          <h2 className="dv-title">{fitxa.title}</h2>
        </div>

        {/* Zoom/Pan viewer */}
        <TransformWrapper
          initialScale={1}
          minScale={0.3}
          maxScale={4}
          centerOnInit
          wheel={{ step: 0.08 }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="dv-controls">
                <button onClick={() => zoomIn()} title="Ampliar">＋</button>
                <button onClick={() => zoomOut()} title="Reduir">－</button>
                <button onClick={() => resetTransform()} title="Reset">⟲</button>
              </div>

              <div className="dv-canvas">
                <TransformComponent
                  wrapperStyle={{ width: '100%', height: '100%' }}
                  contentStyle={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <img
                    src={fitxa.image}
                    alt={fitxa.title}
                    className="dv-image"
                    draggable={false}
                  />
                </TransformComponent>
              </div>
            </>
          )}
        </TransformWrapper>

        {/* ── Anàlisi i ampliació (accordions) ── */}
        <hr className="dv-separator" />
        <div className="dv-extra">
          <h3 className="dv-extra-title">Anàlisi i ampliació</h3>
          <p className="dv-extra-subtitle">📚 Desenvolupament normatiu</p>
          <div className="dv-extra-body">
            <AccordionItem title="Art. 63 LCSP — Perfil de contractant">
              <div className="article-content">

                <p>
                  L'article 63 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic (LCSP)
                  regula el <strong>perfil de contractant</strong>, que constitueix l'instrument essencial
                  de publicitat electrònica de l'activitat contractual dels òrgans de contractació.
                </p>

                <h4>1️⃣ Concepte i finalitat</h4>

                <p>
                  El perfil de contractant és l'espai electrònic on cada òrgan de contractació
                  publica la informació relativa a la seva activitat contractual.
                </p>

                <p>La seva finalitat és garantir:</p>

                <ul>
                  <li>Transparència</li>
                  <li>Publicitat</li>
                  <li>Accés públic a la informació</li>
                  <li>Igualtat d'oportunitats entre licitadors</li>
                </ul>

                <p>
                  La LCSP estableix que el perfil de contractant ha de ser accessible mitjançant Internet
                  i permetre l'accés lliure, directe, complet i gratuït a la informació contractual.
                </p>

                <p>
                  En l'àmbit de Catalunya, aquest perfil s'integra dins la
                  <strong> Plataforma de Serveis de Contractació Pública (PSCP)</strong>.
                </p>

                <h4>2️⃣ Contingut obligatori</h4>

                <p>Segons l'article 63, ha d'incloure com a mínim:</p>

                <ul>
                  <li>Anuncis de licitació</li>
                  <li>Plecs de clàusules administratives i tècniques</li>
                  <li>Documents que regeixen la contractació</li>
                  <li>Anuncis d'adjudicació</li>
                  <li>Formalització del contracte</li>
                  <li>Modificacions contractuals</li>
                  <li>Pròrrogues</li>
                  <li>Resolucions i incidències rellevants</li>
                  <li>Contractes menors (amb informació específica)</li>
                </ul>

                <p>
                  És especialment rellevant que la documentació estigui disponible des del moment
                  de la publicació de l'anunci.
                </p>

                <h4>3️⃣ Publicitat amb efectes jurídics</h4>

                <p>
                  La publicació al perfil de contractant té <strong>plens efectes jurídics</strong>.
                </p>

                <ul>
                  <li>Marca l'inici del còmput de terminis</li>
                  <li>Garanteix la difusió oficial de la informació</li>
                  <li>Permet acreditar la data exacta de publicació</li>
                </ul>

                <p>La plataforma ha d'incorporar mecanismes que assegurin:</p>

                <ul>
                  <li>Integritat del contingut</li>
                  <li>Segell de temps</li>
                  <li>Certificació de publicació</li>
                </ul>

                <p>
                  Aquesta exigència connecta directament amb la contractació electrònica
                  i la seguretat jurídica.
                </p>

                <h4>4️⃣ Relació amb la Plataforma de Contractació</h4>

                <p>
                  El perfil de contractant s'ha d'allotjar a la Plataforma de Contractació del Sector Públic
                  o en una plataforma autonòmica interconnectada.
                </p>

                <p>
                  A Catalunya, la PSCP actua com a:
                </p>

                <ul>
                  <li>Seu electrònica de publicitat contractual</li>
                  <li>Sistema d'interconnexió amb la plataforma estatal</li>
                  <li>Instrument d'homogeneïtzació de la informació</li>
                </ul>

                <h4>5️⃣ Contractes menors</h4>

                <p>L'article 63 exigeix publicar almenys:</p>

                <ul>
                  <li>Objecte del contracte</li>
                  <li>Durada</li>
                  <li>Import d'adjudicació (IVA inclòs)</li>
                  <li>Identitat de l'adjudicatari</li>
                </ul>

                <p>
                  Amb periodicitat mínima trimestral. Aquest requisit reforça el control
                  del fraccionament indegut.
                </p>

                <div className="exam-key">
                  🎓 <strong>IDEA CLAU D'EXAMEN:</strong><br />
                  El perfil de contractant és l'instrument electrònic obligatori de publicitat
                  de l'activitat contractual, amb efectes jurídics plens i funció essencial
                  de transparència.
                </div>

              </div>
            </AccordionItem>
            <AccordionItem title="Art. 347 LCSP — Plataforma de contractació del sector públic">
              <div className="article-content">

                <p>
                  L'article 347 de la Llei 9/2017, de 8 de novembre, de contractes del sector públic (LCSP)
                  regula la <strong>Plataforma de Contractació del Sector Públic</strong>,
                  establint el marc jurídic del sistema electrònic oficial de publicitat contractual
                  a nivell estatal i la seva interconnexió amb les plataformes autonòmiques.
                </p>

                <h4>1️⃣ Concepte i naturalesa jurídica</h4>

                <p>
                  La Plataforma de Contractació del Sector Públic és el sistema electrònic
                  mitjançant el qual es dona publicitat oficial a l'activitat contractual
                  dels òrgans de contractació del sector públic.
                </p>

                <p><strong>No és un òrgan administratiu</strong>, sinó:</p>

                <ul>
                  <li>Un instrument tecnològic de publicitat</li>
                  <li>Un registre electrònic d'informació contractual</li>
                  <li>Un sistema d'interconnexió entre administracions</li>
                </ul>

                <p>
                  La seva naturalesa és instrumental: serveix per garantir el compliment
                  dels principis de la contractació pública.
                </p>

                <h4>2️⃣ Base normativa</h4>

                <p>L'article 347 estableix que:</p>

                <ul>
                  <li>La Plataforma estatal depèn del Ministeri competent en matèria d'Hisenda.</li>
                  <li>Tots els òrgans del sector públic estatal han de publicar-hi la seva activitat contractual.</li>
                  <li>Les comunitats autònomes poden disposar de plataformes pròpies interconnectades.</li>
                </ul>

                <p>Aquesta interconnexió garanteix:</p>

                <ul>
                  <li>Un sistema homogeni de publicitat</li>
                  <li>Coordinació territorial</li>
                  <li>Accés unificat a la informació contractual</li>
                </ul>

                <p>
                  En el cas de Catalunya, la <strong>Plataforma de Serveis de Contractació Pública (PSCP)</strong>
                  compleix aquesta funció autonòmica i està integrada en el sistema estatal.
                </p>

                <h4>3️⃣ Funcions principals</h4>

                <p>La Plataforma compleix diverses funcions essencials:</p>

                <p><strong>🔹 a) Publicitat electrònica</strong></p>

                <ul>
                  <li>Anuncis de licitació</li>
                  <li>Adjudicacions</li>
                  <li>Formalitzacions</li>
                  <li>Modificacions contractuals</li>
                </ul>

                <p>Aquesta publicitat és oficial i amb efectes jurídics.</p>

                <p><strong>🔹 b) Garantia d'integritat</strong></p>

                <ul>
                  <li>Integritat dels documents</li>
                  <li>Segell de temps</li>
                  <li>Traçabilitat de publicacions</li>
                </ul>

                <p>Aquest punt és clau en contractació electrònica.</p>

                <p><strong>🔹 c) Interconnexió</strong></p>

                <ul>
                  <li>Plataformes autonòmiques</li>
                  <li>Perfil de contractant</li>
                  <li>Sistemes de presentació electrònica d'ofertes</li>
                </ul>

                <h4>4️⃣ Efectes jurídics</h4>

                <p>Les publicacions efectuades a la plataforma tenen:</p>

                <ul>
                  <li>Valor oficial</li>
                  <li>Efectes de notificació pública</li>
                  <li>Còmput de terminis</li>
                </ul>

                <p>
                  La data de publicació certificada marca l'inici dels terminis
                  de presentació d'ofertes o recursos.
                </p>

                <p>
                  La plataforma no és només un repositori informatiu,
                  sinó un element amb conseqüències jurídiques directes.
                </p>

                <h4>5️⃣ Relació amb el perfil de contractant</h4>

                <p>L'article 347 està estretament vinculat amb l'article 63.</p>

                <ul>
                  <li><strong>Art. 63</strong> → regula el contingut del perfil.</li>
                  <li><strong>Art. 347</strong> → regula la plataforma que allotja aquests perfils.</li>
                </ul>

                <p>Aquesta relació és una pregunta típica d'examen.</p>

                <div className="exam-key">
                  🎓 <strong>IDEA CLAU D'EXAMEN:</strong><br />
                  La Plataforma de Contractació del Sector Públic és l'instrument electrònic oficial
                  de publicitat contractual, amb efectes jurídics plens, que integra els perfils
                  de contractant i garanteix la transparència i la seguretat jurídica.
                </div>

                <p style={{ marginTop: "1rem" }}>
                  ⚠️ <strong>Possible pregunta trampa:</strong><br />
                  La Plataforma resol recursos en matèria de contractació?<br />
                  <strong>No.</strong> Només és un instrument de publicitat i gestió electrònica.
                </p>

              </div>
            </AccordionItem>

            {/* ── 3. Principis ── */}
            <AccordionItem title="Principis que materialitza la PSCP">
              <div className="article-content">
                <ul className="dv-principle-list">
                  <li><strong>Publicitat</strong> — Difusió oficial i accessible de tota l'activitat contractual.</li>
                  <li><strong>Transparència</strong> — Visibilitat completa del procés de contractació.</li>
                  <li><strong>Concurrència</strong> — Participació oberta al màxim nombre de licitadors.</li>
                  <li><strong>Igualtat de tracte</strong> — Condicions idèntiques per a tots els operadors econòmics.</li>
                  <li><strong>No discriminació</strong> — Prohibició de criteris que excloguin arbitràriament.</li>
                  <li><strong>Eficiència en la despesa pública</strong> — Optimització dels recursos mitjançant la competència efectiva.</li>
                </ul>
                <div className="dv-highlight">
                  La PSCP no és només una eina tecnològica, sinó el mecanisme que materialitza
                  els principis estructurals de la contractació pública.
                </div>
              </div>
            </AccordionItem>

            {/* ── 4. Taula comparativa ── */}
            <AccordionItem title="PSCP i Plataforma estatal: diferències essencials">
              <div className="article-content">
                <div className="dv-table-wrapper">
                  <table className="dv-compare-table">
                    <thead>
                      <tr>
                        <th>PSCP (Catalunya)</th>
                        <th>Plataforma estatal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Àmbit autonòmic</td>
                        <td>Àmbit estatal</td>
                      </tr>
                      <tr>
                        <td>Gestionada per la Generalitat</td>
                        <td>Depèn del Ministeri competent en Hisenda</td>
                      </tr>
                      <tr>
                        <td>Integra els perfils de contractant catalans</td>
                        <td>Integra perfils del sector públic estatal</td>
                      </tr>
                      <tr>
                        <td>Interconnectada amb la plataforma estatal</td>
                        <td>Sistema central de coordinació</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="exam-key">
                  🎓 <strong>IDEA CLAU:</strong> Les plataformes no són alternatives, sinó sistemes
                  interconnectats dins d'un model multinivell de publicitat contractual.
                </div>
              </div>
            </AccordionItem>

            {/* ── 5. Integració electrònica ── */}
            <AccordionItem title="Integració amb la contractació electrònica">
              <div className="article-content">
                <p>
                  La PSCP no opera de forma aïllada. S'integra en el marc normatiu de la
                  contractació electrònica establert per la LCSP:
                </p>
                <ul className="dv-principle-list">
                  <li><strong>Art. 22 LCSP</strong> — Licitació electrònica com a principi general.</li>
                  <li><strong>Art. 138 LCSP</strong> — Règim de publicitat de les licitacions.</li>
                  <li><strong>Art. 157 LCSP</strong> — Presentació electrònica d'ofertes i sol·licituds de participació.</li>
                </ul>
                <p>
                  La plataforma actua com a infraestructura de relació electrònica segura
                  entre l'administració i els operadors econòmics.
                </p>
                <div className="dv-highlight">
                  La PSCP no és només un espai de publicitat, sinó també un entorn tecnològic
                  que permet la relació electrònica segura entre administració i empreses.
                </div>
              </div>
            </AccordionItem>

            {/* ── 6. Síntesi ── */}
            <AccordionItem title="Síntesi estructural">
              <div className="article-content">
                <p className="dv-sintesi-intro">La PSCP és:</p>
                <ul className="dv-sintesi-list">
                  <li>Instrument electrònic obligatori</li>
                  <li>Sistema oficial de publicitat contractual</li>
                  <li>Integrador del perfil de contractant</li>
                  <li>Amb efectes jurídics plens</li>
                  <li>Garant dels principis de transparència i concurrència</li>
                </ul>
              </div>
            </AccordionItem>

            {/* ── 7. Preguntes d'examen ── */}
            <AccordionItem title="Preguntes típiques d'examen">
              <div className="article-content">
                <div className="dv-qa-block">
                  <p className="dv-qa-q">La PSCP és un òrgan administratiu?</p>
                  <p className="dv-qa-a">No, és un instrument electrònic de publicitat.</p>
                </div>
                <div className="dv-qa-block">
                  <p className="dv-qa-q">Les publicacions a la PSCP tenen efectes jurídics?</p>
                  <p className="dv-qa-a">Sí, marquen el còmput de terminis.</p>
                </div>
                <div className="dv-qa-block">
                  <p className="dv-qa-q">El perfil de contractant és independent de la plataforma?</p>
                  <p className="dv-qa-a">No, s'allotja dins la plataforma corresponent.</p>
                </div>
              </div>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
}
