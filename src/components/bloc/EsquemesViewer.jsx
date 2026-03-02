import { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { fetchTextWithCache } from '../../utils/contentCache';
import {
  jurisprudenciaConstitucional,
} from '../../data/studyMaterialKnowledgeBase';
import { bloc1Tema1Normativa } from '../../data/bloc1Tema1Normativa';
import { bloc1Tema2Normativa } from '../../data/bloc1Tema2Normativa';
import { LOData } from '../../data/lleisOrganiques';
import { jurisprudenciaTC } from '../../data/jurisprudenciaTC';
import NormativeTooltip from '../common/NormativeTooltip';
import { parseNormativeReferences } from '../../utils/normativeReferenceParser';
import NormativePillHeader from './NormativePillHeader';
import { createPointActions, applyExpVisibility } from './PointActionsManager';

const EDIT_MODE_ENABLED = import.meta.env.VITE_ENABLE_EXPLANATION_EDIT !== '0';

/**
 * INFORME TÈCNIC D'AUDITORIA — Material d'estudi (Bloc 1, punts 1-24)
 *
 * Com funciona actualment:
 * - Es carrega HTML estàtic de cada punt des de public/content/.../explicacions/punt-XX.html.
 * - Es detecten articles CE per regex sobre text del <main> i es reescriu l'aside.
 * - El resultat anterior mostrava únicament etiquetes com “Referència detectada al text del punt.”
 *   i mini-checks genèrics, sense orientació real de memòria ni d'examen tipus test.
 *
 * Per què era insuficient per a estudi d'oposicions:
 * - No explicava què regula cada article ni la seva funció dins del punt.
 * - No ajudava a transformar una referència legal en preguntes test plausibles.
 * - La jurisprudència sense STC quedava en un missatge buit (“Sense STC específica”) poc útil.
 *
 * Limitacions detectades:
 * - Detecció basada en regex textual (pot captar falsos positius o no distingir context normatiu).
 * - Absència d'una base de coneixement jurídica modular (CE/EAC/LCSP/39/2015/40/2015).
 * - Dependència de placeholders injectats en HTML d'origen.
 *
 * Redisseny aplicat:
 * - Motor de coneixement modular (registry de normes) + fitxer específic CE.
 * - Render per article amb: resum, idea clau, relació temari i pregunta test.
 * - Jurisprudència amb missatge estructural quan no hi ha STC i targetes útils quan n'hi ha.
 * - Mini-check reformulat en format “Recorda” orientat a memorització i error habitual.
 */

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
      // keep original value
    }
  });

  const hasBody = parsed.body && parsed.body.innerHTML.trim().length > 0;
  return hasBody ? parsed.body.innerHTML : htmlString;
};

const extractNumericId = (value, fallback = '0') => {
  const match = String(value || '').match(/(\d+)/);
  if (!match) return fallback;

  const parsed = Number.parseInt(match[1], 10);
  return Number.isNaN(parsed) ? fallback : String(parsed);
};

const buildExplanationStorageKey = ({ blocId, temaId, pointId }) => {
  const bloc = extractNumericId(blocId, '0');
  const tema = extractNumericId(temaId, '0');
  const punt = extractNumericId(pointId, '0');
  return `bloc${bloc}-tema${tema}-punt${punt}`;
};

const INLINE_NORMATIVE_SKIP_SELECTOR = [
  'a',
  'button',
  'code',
  'pre',
  'script',
  'style',
  '.pillrow',
  '.normative-tooltip-trigger',
  '.normative-inline-ref',
  '.toc',
  'aside',
].join(', ');

const replaceTextNodeWithNormativeRefs = (textNode, matches) => {
  const text = textNode.nodeValue || '';
  if (matches.length === 0) return;

  const fragment = document.createDocumentFragment();
  let lastIndex = 0;

  matches.forEach((match) => {
    if (match.start > lastIndex) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.start)));
    }

    const mountNode = document.createElement('span');
    mountNode.className = 'normative-inline-ref';
    mountNode.dataset.tipus = match.tipus;
    mountNode.dataset.referencia = match.referencia;
    mountNode.dataset.label = match.label;
    fragment.appendChild(mountNode);

    lastIndex = match.end;
  });

  if (lastIndex < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
  }

  textNode.parentNode?.replaceChild(fragment, textNode);
};

const mountInlineNormativeTooltips = (rootNode) => {
  if (Array.isArray(rootNode.__inlineNormativeRoots)) {
    rootNode.__inlineNormativeRoots.forEach((root) => root.unmount());
  }

  rootNode.__inlineNormativeRoots = [];

  const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let currentNode = walker.nextNode();

  while (currentNode) {
    const parent = currentNode.parentElement;
    if (!parent || parent.closest(INLINE_NORMATIVE_SKIP_SELECTOR)) {
      currentNode = walker.nextNode();
      continue;
    }

    const rawText = currentNode.nodeValue || '';
    if (!rawText.trim()) {
      currentNode = walker.nextNode();
      continue;
    }

    textNodes.push(currentNode);
    currentNode = walker.nextNode();
  }

  textNodes.forEach((textNode) => {
    const matches = parseNormativeReferences(textNode.nodeValue || '');
    if (matches.length === 0) return;
    replaceTextNodeWithNormativeRefs(textNode, matches);
  });

  rootNode.querySelectorAll('.normative-inline-ref').forEach((mountNode) => {
    const tipus = mountNode.dataset.tipus;
    const referencia = mountNode.dataset.referencia;
    const label = mountNode.dataset.label;
    if (!tipus || !referencia || !label) return;

    const root = createRoot(mountNode);
    root.render(
      <NormativeTooltip tipus={tipus} referencia={referencia}>
        {label}
      </NormativeTooltip>,
    );

    rootNode.__inlineNormativeRoots.push(root);
  });
};

const normalizeTextLabel = (value = '') => String(value)
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9\s]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const extractPointNumber = (rootNode) => {
  const h1Text = rootNode.querySelector('header h1')?.textContent || '';
  const h1Match = h1Text.match(/PUNT\s*(\d{1,2})/i);
  if (h1Match) return Number.parseInt(h1Match[1], 10);

  const crumbsText = rootNode.querySelector('.crumbs')?.textContent || '';
  const crumbsMatch = crumbsText.match(/Punt\s*(\d{1,2})/i);
  if (crumbsMatch) return Number.parseInt(crumbsMatch[1], 10);

  return null;
};

const renderNormativaHeader = (rootNode, { blocId, temaId }) => {
  if (blocId !== 'bloc-1' || !['tema-1', 'tema-2'].includes(temaId)) return;

  const pillRow = rootNode.querySelector('header .pillrow');
  if (!pillRow) return;

  const pointNumber = extractPointNumber(rootNode);
  if (!pointNumber) return;

  /**
   * INFORME TÈCNIC D'AUDITORIA — Capçalera normativa CE/LO/STC
   *
   * Estat anterior:
   * - Les etiquetes de capçalera (“CE referències normatives”, “LO normativa orgànica”,
   *   “Jurisprudència doctrina rellevant”) estaven hardcodejades als HTML de cada punt.
   * - No hi havia lectura de dades específiques per punt, ni arrays reals de CE/LO/STC.
   * - Resultat: element decoratiu, sense utilitat de repàs ràpid ni fixació normativa per test.
   *
   * Solució aplicada:
   * - Renderització intel·ligent des de dades centralitzades (Tema 1 i Tema 2 + catàlegs LO/STC).
   * - Missatge justificat quan no hi ha LO o STC rellevant (mai categories buides).
  * - Auditoria 2026-02-28: cap component de tooltip ha de consumir camps legacy
  *   (`resum`, `relacioTemari`, `preguntaTipus`, `ideaNuclear`, etc.).
   *
   * Auditoria específica Tema 2 (EAC):
   * - Les capçaleres CE/EAC/Jurisprudència estaven majoritàriament hardcodejades com placeholders.
   * - No depenien d'una matriu normativa per punt (excepte alguns casos puntuals manuals).
   * - Per oposicions, això no permetia identificar ràpidament arquitectura CE–EAC ni STC clau.
   */
  const pointNormativa = temaId === 'tema-1'
    ? bloc1Tema1Normativa[pointNumber]
    : bloc1Tema2Normativa[pointNumber];
  if (!pointNormativa) return;

  const ceReferences = (pointNormativa.ce || []).map((article) => ({
    tipus: 'CE',
    referencia: article,
    label: `Art. ${article} CE`,
  }));

  const eacReferences = (pointNormativa.eac || []).map((article) => ({
    tipus: 'EAC',
    referencia: article,
    label: `Art. ${article} EAC`,
  }));

  const loReferences = (pointNormativa.lo || []).map((loId) => {
    const loData = LOData[loId];
    return {
      tipus: 'LO',
      referencia: loId,
      label: loData?.titol || `LO ${loId}`,
    };
  });

  const stcReferences = (pointNormativa.stc || []).map((stcId) => {
    const stcData = jurisprudenciaTC[stcId] || jurisprudenciaConstitucional[stcId];
    return {
      tipus: 'STC',
      referencia: stcId,
      label: stcData?.titol || `STC ${stcId}`,
    };
  });

  const categories = [
    ...(temaId === 'tema-2'
      ? [
        {
          title: 'CONSTITUCIÓ ESPANYOLA',
          references: ceReferences,
          fallback: 'No hi ha preceptes constitucionals definits per a aquest punt.',
        },
        {
          title: 'ESTATUT D’AUTONOMIA (EAC 2006)',
          references: eacReferences,
          fallback: 'No hi ha preceptes estatutaris específics rellevants en aquest punt.',
        },
        {
          title: 'LLEI ORGÀNICA D’APROVACIÓ',
          references: loReferences,
          fallback: 'No hi ha normativa orgànica específica rellevant en aquest punt.',
        },
        {
          title: 'JURISPRUDÈNCIA CONSTITUCIONAL',
          references: stcReferences,
          fallback: 'No consta jurisprudència constitucional estructural rellevant en aquest punt.',
        },
      ]
      : [
        {
          title: 'CONSTITUCIÓ ESPANYOLA',
          references: ceReferences,
          fallback: 'No hi ha preceptes constitucionals definits per a aquest punt.',
        },
        {
          title: 'LLEIS ORGÀNIQUES',
          references: loReferences,
          fallback: 'No hi ha normativa orgànica específica rellevant en aquest punt.',
        },
        {
          title: 'JURISPRUDÈNCIA',
          references: stcReferences,
          fallback: 'No consta jurisprudència constitucional estructural rellevant en aquest punt.',
        },
      ]),
  ];

  if (pillRow.__normativeRoot) {
    pillRow.__normativeRoot.unmount();
  }

  const root = createRoot(pillRow);
  root.render(<NormativePillHeader categories={categories} />);
  pillRow.__normativeRoot = root;
};

const removeExamIdeasSection = (rootNode) => {
  const targetSelectors = [
    'section.idees-clau',
    'section#exam',
    'section.exam',
    'section[id*="idees-clau"]',
    '[id*="idees-clau-dexamen"]',
  ];

  rootNode.querySelectorAll(targetSelectors.join(', ')).forEach((node) => {
    const section = node.closest('section') || node;
    section.remove();
  });

  rootNode.querySelectorAll('section').forEach((section) => {
    const heading = section.querySelector('h1, h2, h3, h4');
    const headingText = normalizeTextLabel(heading?.textContent || '');
    if (headingText.includes('idees clau d examen')) {
      section.remove();
    }
  });

  rootNode.querySelectorAll('a[href*="#exam"], a[href*="idees-clau"]').forEach((anchor) => {
    anchor.remove();
  });

  rootNode.querySelectorAll('li').forEach((listItem) => {
    const text = normalizeTextLabel(listItem.textContent || '');
    if (text.includes('idees clau d examen')) {
      listItem.remove();
    }
  });
};

const simplifyExplanationStructure = (rootNode) => {
  rootNode.classList.add('explicacio-simplified');

  rootNode.querySelectorAll('nav.toc, .toc, aside, iframe').forEach((node) => {
    node.remove();
  });

  removeExamIdeasSection(rootNode);

  rootNode.querySelectorAll('.layout').forEach((layoutNode) => {
    layoutNode.classList.add('layout-single-column');
  });
};

const enhanceExplicacioContent = (rootNode, context) => {
  if (!rootNode) return;
  simplifyExplanationStructure(rootNode);
  renderNormativaHeader(rootNode, context);
  mountInlineNormativeTooltips(rootNode);
};

const mountEditableExplanation = ({
  contentNode,
  blocId,
  temaId,
  pointId,
  originalHtml,
}) => {
  const storageKey = buildExplanationStorageKey({ blocId, temaId, pointId });

  let savedHtml = null;
  try {
    savedHtml = window.localStorage.getItem(storageKey);
  } catch {
    savedHtml = null;
  }

  let isEditing = false;
  const originalContent = originalHtml || '';
  let content = savedHtml ?? originalContent;

  contentNode.innerHTML = '';

  const controlsNode = document.createElement('div');
  controlsNode.className = 'edit-controls';

  const contentHost = document.createElement('div');
  contentHost.className = 'schema-editable-content';

  contentNode.append(controlsNode, contentHost);

  const renderPreview = () => {
    contentHost.innerHTML = content || '';
    enhanceExplicacioContent(contentHost, { blocId, temaId });
  };

  const renderEditor = () => {
    contentHost.innerHTML = '';
    const textarea = document.createElement('textarea');
    textarea.className = 'edit-textarea';
    textarea.value = content;
    textarea.addEventListener('input', (event) => {
      content = event.target.value;
    });
    contentHost.appendChild(textarea);
  };

  const setButtonLabel = (button, label) => {
    button.textContent = label;
  };

  const renderControls = () => {
    controlsNode.innerHTML = '';

    if (!isEditing) {
      const editButton = document.createElement('button');
      editButton.type = 'button';
      setButtonLabel(editButton, '✏️ Edició');
      editButton.addEventListener('click', () => {
        isEditing = true;
        renderControls();
        renderEditor();
      });
      controlsNode.appendChild(editButton);
      return;
    }

    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    setButtonLabel(saveButton, '💾 Guardar');
    saveButton.addEventListener('click', () => {
      try {
        window.localStorage.setItem(storageKey, content);
      } catch {
        // ignore localStorage errors
      }
      isEditing = false;
      renderControls();
      renderPreview();
    });

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    setButtonLabel(cancelButton, '❌ Cancel·lar');
    cancelButton.addEventListener('click', () => {
      content = originalContent;
      isEditing = false;
      renderControls();
      renderPreview();
    });

    const restoreButton = document.createElement('button');
    restoreButton.type = 'button';
    setButtonLabel(restoreButton, '🔄 Restaurar original');
    restoreButton.addEventListener('click', () => {
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // ignore localStorage errors
      }
      content = originalContent;
      isEditing = false;
      renderControls();
      renderPreview();
    });

    controlsNode.append(saveButton, cancelButton, restoreButton);
  };

  renderControls();
  renderPreview();
};

export default function EsquemesViewer({ blocId, temaId, schemaPath, active }) {
  const navigate = useNavigate();
  const [esquemesHtml, setEsquemesHtml] = useState('');
  const [esquemesError, setEsquemesError] = useState('');
  const [isLoadingEsquemes, setIsLoadingEsquemes] = useState(false);
  const [activePoint, setActivePoint] = useState(null);

  const esquemesContainerRef = useRef(null);
  const expSectionsRegistryRef = useRef(new Map());

  const handleToggle = useCallback((pointId) => {
    setActivePoint((previousPointId) => (previousPointId === pointId ? null : pointId));
  }, []);

  useEffect(() => {
    setActivePoint(null);
  }, [blocId, temaId, schemaPath]);

  useEffect(() => {
    if (!active || !schemaPath) {
      setEsquemesHtml('');
      setEsquemesError('');
      setIsLoadingEsquemes(false);
      return;
    }

    const controller = new AbortController();

    const loadEsquemes = async () => {
      try {
        setIsLoadingEsquemes(true);
        setEsquemesError('');
        const rawHtml = await fetchTextWithCache(schemaPath, { signal: controller.signal });
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
  }, [active, schemaPath]);

  useEffect(() => {
    if (!active || !esquemesHtml || !esquemesContainerRef.current) return;

    const registry = createPointActions({
      container: esquemesContainerRef.current,
      blocId,
      temaId,
      navigate,
      onTogglePoint: handleToggle,
    });

    expSectionsRegistryRef.current = registry;

    return () => {
      expSectionsRegistryRef.current = new Map();
    };
  }, [active, esquemesHtml, blocId, temaId, navigate, handleToggle]);

  useEffect(() => {
    if (!active) return;

    const registry = expSectionsRegistryRef.current;
    if (!registry || registry.size === 0) return;
    applyExpVisibility(activePoint, registry);
  }, [active, activePoint]);

  useEffect(() => {
    if (!active || !activePoint) return;

    const registry = expSectionsRegistryRef.current;
    if (!registry || registry.size === 0) return;

    const activeEntry = registry.get(activePoint);
    if (!activeEntry) return;

    const { contentNode } = activeEntry;
    const sourceUrl = contentNode.dataset.sourceUrl;
    const fallbackHtml = contentNode.dataset.fallbackHtml || '(Explicació no disponible)';
    const alreadyLoaded = contentNode.dataset.loaded === 'true';

    if (!sourceUrl || alreadyLoaded) return;

    let isMounted = true;

    fetchTextWithCache(sourceUrl)
      .then((html) => {
        if (!isMounted) return;

        const originalHtml = html || fallbackHtml;

        if (!EDIT_MODE_ENABLED) {
          contentNode.innerHTML = originalHtml;
          enhanceExplicacioContent(contentNode, { blocId, temaId });
          contentNode.dataset.loaded = 'true';
          return;
        }

        mountEditableExplanation({
          contentNode,
          blocId,
          temaId,
          pointId: activePoint,
          originalHtml,
        });

        contentNode.dataset.loaded = 'true';
      })
      .catch(() => {
        if (!isMounted) return;

        if (!EDIT_MODE_ENABLED) {
          contentNode.innerHTML = fallbackHtml;
          enhanceExplicacioContent(contentNode, { blocId, temaId });
          contentNode.dataset.loaded = 'true';
          return;
        }

        mountEditableExplanation({
          contentNode,
          blocId,
          temaId,
          pointId: activePoint,
          originalHtml: fallbackHtml,
        });

        contentNode.dataset.loaded = 'true';
      });

    return () => {
      isMounted = false;
    };
  }, [active, activePoint, blocId, temaId]);

  if (!active || !schemaPath) return null;

  if (isLoadingEsquemes) {
    return (
      <div className="loading">
        <p>Carregant esquema...</p>
      </div>
    );
  }

  if (esquemesError) {
    return (
      <div className="error">
        <p>{esquemesError}</p>
      </div>
    );
  }

  return (
    <div className="esquema-content-wrapper">
      <div
        ref={esquemesContainerRef}
        className="html-content"
        dangerouslySetInnerHTML={{ __html: esquemesHtml }}
      />
    </div>
  );
}
