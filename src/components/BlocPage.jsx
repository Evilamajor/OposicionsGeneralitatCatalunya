import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { blocks, ALLOWED_BLOC_SECTIONS } from '../data';
import NotesEditor from './NotesEditor';
import SlideDeck from './SlideDeck';
import PowerPointViewer from './PowerPointViewer';
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

export default function BlocPage() {
  const { blocId, temaId, seccio } = useParams();
  const navigate = useNavigate();
  const [sectionsVisible, setSectionsVisible] = useState(false);
  const [esquemesHtml, setEsquemesHtml] = useState('');
  const [esquemesError, setEsquemesError] = useState('');
  const [isLoadingEsquemes, setIsLoadingEsquemes] = useState(false);
  const [openExpPointId, setOpenExpPointId] = useState(null);
  const esquemesContainerRef = useRef(null);
  const expSectionsRegistryRef = useRef(new Map());

  const bloc = blocks.find((b) => b.id === blocId);
  const tema = bloc?.topics?.find((t) => t.id === temaId);
  const sections = useMemo(() => ALLOWED_BLOC_SECTIONS, []);

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

    if (seccio && !sections.some((s) => s.id === seccio)) {
      navigate(`/bloc/${blocId}/${temaId}/esquemes`, { replace: true });
    }
  }, [blocId, temaId, seccio, bloc, navigate, sections]);

  useEffect(() => {
    setSectionsVisible(false);
  }, [blocId, temaId, seccio]);

  useEffect(() => {
    setOpenExpPointId(null);
    expSectionsRegistryRef.current = new Map();
  }, [blocId, temaId, seccio]);

  useEffect(() => {
    if (seccio !== 'esquemes' || !schemaPath) {
      setEsquemesHtml('');
      setEsquemesError('');
      setIsLoadingEsquemes(false);
      return;
    }

    const controller = new AbortController();

    const resolveRelativeUrls = (htmlString, htmlPath) => {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(htmlString, 'text/html');
      const baseDir = htmlPath.slice(0, htmlPath.lastIndexOf('/') + 1);
      const baseUrl = `${window.location.origin}${baseDir}`;

      parsed.querySelectorAll('[src], [href]').forEach((element) => {
        const attrName = element.hasAttribute('src') ? 'src' : 'href';
        const value = element.getAttribute(attrName);

        if (!value) return;

        const isAbsolute = /^(https?:|data:|mailto:|tel:|#|\/)/i.test(value);
        if (isAbsolute) return;

        try {
          const resolved = new URL(value, baseUrl).pathname;
          element.setAttribute(attrName, resolved);
        } catch {
          // keep original value when URL resolution fails
        }
      });

      const hasBody = parsed.body && parsed.body.innerHTML.trim().length > 0;
      return hasBody ? parsed.body.innerHTML : htmlString;
    };

    const loadEsquemes = async () => {
      try {
        setIsLoadingEsquemes(true);
        setEsquemesError('');
        const response = await fetch(schemaPath, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`No s'ha pogut carregar l'esquema (${response.status})`);
        }

        const rawHtml = await response.text();
        setEsquemesHtml(resolveRelativeUrls(rawHtml, schemaPath));
      } catch (error) {
        if (error.name === 'AbortError') return;
        setEsquemesError(error.message || 'Error carregant l\'esquema');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingEsquemes(false);
        }
      }
    };

    loadEsquemes();

    return () => controller.abort();
  }, [blocId, temaId, seccio, schemaPath]);

  useEffect(() => {
    if (seccio !== 'esquemes' || !esquemesHtml || !esquemesContainerRef.current) {
      return;
    }

    const container = esquemesContainerRef.current;

    const normalizeSectionLabel = (text = '') => text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();

    const getSectionRank = (text = '') => {
      const normalized = normalizeSectionLabel(text);
      if (normalized.includes('explicacio')) return 0;
      if (normalized.includes('diagrama')) return 1;
      if (normalized.includes('preguntes')) return 2;
      return Number.MAX_SAFE_INTEGER;
    };

    const reorderDetailsSections = () => {
      const detailsByParent = new Map();
      container.querySelectorAll('details > summary').forEach((summary) => {
        const details = summary.parentElement;
        const parent = details?.parentElement;
        if (!details || !parent) return;
        const rank = getSectionRank(summary.textContent || '');
        if (rank === Number.MAX_SAFE_INTEGER) return;
        if (!detailsByParent.has(parent)) {
          detailsByParent.set(parent, []);
        }
        detailsByParent.get(parent).push({ details, rank });
      });

      detailsByParent.forEach((entries, parent) => {
        entries
          .sort((left, right) => left.rank - right.rank)
          .forEach(({ details }) => parent.appendChild(details));
      });
    };

    const reorderToggleSections = () => {
      const toggleParents = new Set();
      container.querySelectorAll('.toggle, .schema-toggle').forEach((toggle) => {
        if (toggle.parentElement) {
          toggleParents.add(toggle.parentElement);
        }
      });

      toggleParents.forEach((parent) => {
        const pairs = [];
        Array.from(parent.children).forEach((child) => {
          if (!(child.classList?.contains('toggle') || child.classList?.contains('schema-toggle'))) {
            return;
          }

          const rank = getSectionRank(child.textContent || '');
          if (rank === Number.MAX_SAFE_INTEGER) return;

          const contentNode = child.nextElementSibling;
          if (!contentNode) return;

          pairs.push({
            toggleNode: child,
            contentNode,
            rank,
          });
        });

        pairs
          .sort((left, right) => left.rank - right.rank)
          .forEach(({ toggleNode, contentNode }) => {
            parent.appendChild(toggleNode);
            parent.appendChild(contentNode);
          });
      });
    };

    const unwrapDocumentMarkup = (node) => {
      if (!node) return;
      const htmlNode = node.querySelector(':scope > html') || node.querySelector('html');
      if (!htmlNode) return;

      const bodyNode = htmlNode.querySelector('body');
      node.innerHTML = bodyNode ? bodyNode.innerHTML : htmlNode.innerHTML;
    };

    const sanitizeSectionNode = (node) => {
      if (!node) return;
      unwrapDocumentMarkup(node);

      node.querySelectorAll('style').forEach((styleNode) => {
        styleNode.remove();
      });

      node.querySelectorAll('script').forEach((scriptNode) => {
        scriptNode.remove();
      });
    };

    const sanitizeEsquemaSections = () => {
      const sectionNodes = container.querySelectorAll(
        ".schema-content, .content, [id$='-preguntes'], [id$='-diagrama'], [id$='-explicacio']",
      );

      sectionNodes.forEach((sectionNode) => {
        sanitizeSectionNode(sectionNode);
      });
    };

    const extractPointId = (...nodes) => {
      for (const node of nodes) {
        const id = node?.id || '';
        const match = id.match(/^p(\d+)-/);
        if (match) return match[1];
      }
      return null;
    };

    const applyExpVisibility = (activePointId, registry) => {
      registry.forEach(({ contentNode, button }, pointId) => {
        const isOpen = activePointId === pointId;
        contentNode.style.display = isOpen ? 'block' : 'none';
        button.classList.toggle('active', isOpen);
        button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    };

    const renderPointActions = () => {
      const registry = new Map();
      const frames = container.querySelectorAll('.frame, .schema-frame');

      frames.forEach((frame) => {
        frame.querySelectorAll('.point-content').forEach((body) => {
          while (body.firstChild) {
            frame.appendChild(body.firstChild);
          }
          body.remove();
        });

        const titleElement = frame.querySelector('h3') || frame.querySelector('.point-title');
        if (!titleElement) return;

        const explicacioNode = frame.querySelector("[id$='-explicacio']");
        const diagramaNode = frame.querySelector("[id$='-diagrama']");
        const preguntesNode = frame.querySelector("[id$='-preguntes']");
        const pointId = extractPointId(explicacioNode, diagramaNode, preguntesNode);

        if (!pointId) return;

        const pointTitle = titleElement.textContent?.trim() || `Punt ${pointId}`;

        frame.querySelectorAll('.toggle, .schema-toggle, .point-toggle').forEach((toggleNode) => {
          toggleNode.remove();
        });

        const row = document.createElement('div');
        row.className = 'schema-point-row';

        const titleButton = document.createElement('button');
        titleButton.type = 'button';
        titleButton.className = 'schema-point-toggle';
        titleButton.setAttribute('aria-expanded', 'false');

        const chevron = document.createElement('span');
        chevron.className = 'schema-point-chevron';
        chevron.textContent = '▸';

        const titleLabel = document.createElement('span');
        titleLabel.className = 'schema-point-title';
        titleLabel.textContent = pointTitle;

        titleButton.append(chevron, titleLabel);

        const actions = document.createElement('div');
        actions.className = 'schema-point-actions';

        const grafButton = document.createElement('button');
        grafButton.type = 'button';
        grafButton.className = 'schema-point-action graf';
        grafButton.textContent = 'GRAF';

        const askButton = document.createElement('button');
        askButton.type = 'button';
        askButton.className = 'schema-point-action ask';
        askButton.textContent = 'ASK';
        if (!diagramaNode) {
          grafButton.disabled = true;
        }
        if (!preguntesNode) {
          askButton.disabled = true;
        }

        let inlineExpNode = explicacioNode;
        const fallbackExpHtml = explicacioNode?.innerHTML?.trim() || '(Explicació no disponible)';
        if (!inlineExpNode) {
          inlineExpNode = document.createElement('div');
          inlineExpNode.className = 'schema-inline-explicacio';
          inlineExpNode.innerHTML = fallbackExpHtml;
          frame.appendChild(inlineExpNode);
        }

        const paddedPoint = String(Number.parseInt(pointId, 10)).padStart(2, '0');
        inlineExpNode.dataset.sourceUrl = `/content/${blocId}/${temaId}/esquemes/explicacions/punt-${paddedPoint}.html`;
        inlineExpNode.dataset.loaded = 'false';
        inlineExpNode.dataset.fallbackHtml = fallbackExpHtml;

        titleButton.addEventListener('click', () => {
          setOpenExpPointId((current) => (current === pointId ? null : pointId));
        });

        grafButton.addEventListener('click', (event) => {
          event.stopPropagation();
          navigate(`/diagram-viewer/${blocId}/${temaId}/${pointId}`);
        });

        askButton.addEventListener('click', (event) => {
          event.stopPropagation();
          navigate(`/bloc/${blocId}/tema/${temaId}/preguntes/${pointId}`);
        });

        actions.append(grafButton, askButton);
        row.append(titleButton, actions);

        if (titleElement.tagName.toLowerCase() === 'h3') {
          titleElement.replaceWith(row);
        } else {
          frame.insertBefore(row, frame.firstChild);
          titleElement.remove();
        }

        if (diagramaNode) {
          diagramaNode.style.display = 'none';
        }
        if (preguntesNode) {
          preguntesNode.style.display = 'none';
        }

        inlineExpNode.classList.add('schema-inline-explicacio');
        inlineExpNode.style.display = 'none';
        registry.set(pointId, { contentNode: inlineExpNode, button: titleButton, chevronNode: chevron });
      });

      expSectionsRegistryRef.current = registry;
      applyExpVisibility(openExpPointId, registry);
    };

    reorderDetailsSections();
    reorderToggleSections();
    sanitizeEsquemaSections();

    container.querySelectorAll('script').forEach((scriptNode) => scriptNode.remove());
    renderPointActions();

    return () => {
      expSectionsRegistryRef.current = new Map();
    };
  }, [seccio, esquemesHtml, blocId, temaId, navigate]);

  useEffect(() => {
    if (seccio !== 'esquemes') return;

    const registry = expSectionsRegistryRef.current;
    if (!registry || registry.size === 0) return;

    registry.forEach(({ contentNode, button, chevronNode }, pointId) => {
      const isOpen = openExpPointId === pointId;
      contentNode.style.display = isOpen ? 'block' : 'none';
      button.classList.toggle('active', isOpen);
      button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (chevronNode) {
        chevronNode.textContent = isOpen ? '▾' : '▸';
      }
    });
  }, [openExpPointId, seccio]);

  useEffect(() => {
    if (seccio !== 'esquemes' || !openExpPointId) return;

    const registry = expSectionsRegistryRef.current;
    if (!registry || registry.size === 0) return;

    const activeEntry = registry.get(openExpPointId);
    if (!activeEntry) return;

    const { contentNode } = activeEntry;
    const sourceUrl = contentNode.dataset.sourceUrl;
    const fallbackHtml = contentNode.dataset.fallbackHtml || '(Explicació no disponible)';
    const alreadyLoaded = contentNode.dataset.loaded === 'true';

    if (!sourceUrl || alreadyLoaded) return;

    let isMounted = true;

    fetch(sourceUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Explanation file not found');
        }
        return response.text();
      })
      .then((html) => {
        if (!isMounted) return;
        contentNode.innerHTML = html || fallbackHtml;
        contentNode.dataset.loaded = 'true';
      })
      .catch(() => {
        if (!isMounted) return;
        contentNode.innerHTML = fallbackHtml;
        contentNode.dataset.loaded = 'true';
      });

    return () => {
      isMounted = false;
    };
  }, [openExpPointId, seccio]);

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

        <div className={`seccions-list simplified-tabs ${!sectionsVisible ? 'seccions-hidden' : ''}`}>
          {sections.map((section) => (
            <NavLink
              key={section.id}
              to={`/bloc/${blocId}/${temaId}/${section.id}`}
              className={({ isActive }) => `seccio-link simplified-tab-link ${isActive ? 'active' : ''}`}
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
            className="bloc-embedded-frame"
          />
        )}

        {seccio === 'esquemes' && schemaPath && (
          isLoadingEsquemes ? (
            <div className="loading">
              <p>Carregant esquema...</p>
            </div>
          ) : esquemesError ? (
            <div className="error">
              <p>{esquemesError}</p>
            </div>
          ) : (
            <div className="esquema-content-wrapper">
              <div
                ref={esquemesContainerRef}
                className="html-content"
                dangerouslySetInnerHTML={{ __html: esquemesHtml }}
              />
            </div>
          )
        )}

        {seccio === 'powerpoints' && (
          TOPIC_POWERPOINT_BLOCS.has(blocId)
            ? (
              blocId === 'bloc-1' && temaId === 'tema-1'
                ? (
                  <PowerPointViewer
                    metadataUrl={`/content/${blocId}/${temaId}/powerpoints/metadata.json`}
                    title={tema.label}
                  />
                )
                : (
                  <SlideDeck
                    deckConfigUrl={`/content/${blocId}/${temaId}/powerpoints/config.json`}
                    title={tema.label}
                  />
                )
            )
            : (
              SLIDE_MD_MAP[blocId]
                ? <SlideDeck mdUrl={SLIDE_MD_MAP[blocId]} title={bloc.title} />
                : <ComingSoon sectionName="PowerPoints" />
            )
        )}

        {seccio === 'materials' && materialsPath && (
          <iframe
            src={materialsPath}
            title="Materials del tema"
            className="bloc-embedded-frame"
          />
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
