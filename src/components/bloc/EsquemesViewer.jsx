import { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchTextWithCache } from '../../utils/contentCache';
import { rewriteHtmlAssetUrls } from '../../utils/rewriteHtmlAssetUrls';
import { loadExplanationHtml } from '../../utils/explanationContent';
import { getStandaloneExplanationRoute } from '../../constants/routes';
import {
  jurisprudenciaConstitucional,
} from '../../data/studyMaterialKnowledgeBase';
import { bloc1Tema1Normativa } from '../../data/bloc1Tema1Normativa';
import { bloc1Tema2Normativa } from '../../data/bloc1Tema2Normativa';
import { bloc1Tema3Normativa } from '../../data/bloc1Tema3Normativa';
import { LOData } from '../../data/lleisOrganiques';
import { jurisprudenciaTC } from '../../data/jurisprudenciaTC';
import NormativeTooltip from '../common/NormativeTooltip';
import { parseNormativeReferences } from '../../utils/normativeReferenceParser';
import NormativePillHeader from './NormativePillHeader';
import { createPointActions, applyExpVisibility } from './PointActionsManager';
import { isDev } from '../../utils/env';

// Editing features are available only in development
// to prevent users from modifying content on the public site.
const EDIT_MODE_ENABLED = isDev;

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

const resolveRelativeUrls = (htmlString, htmlPath) => rewriteHtmlAssetUrls(htmlString, htmlPath, { bodyOnly: true });

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

const buildExplanationHash = (pointId) => {
  const punt = extractNumericId(pointId, '0').padStart(2, '0');
  return `punt-${punt}-explicacio`;
};

const parseExplanationHash = (hashValue = '') => {
  const normalizedHash = String(hashValue || '').replace(/^#/, '');
  const match = normalizedHash.match(/^punt-(\d{2})-explicacio$/i);
  if (!match) return null;

  return String(Number.parseInt(match[1], 10));
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
  '.normative-inline-entry',
  '.norma',
  '.toc',
  'aside',
].join(', ');

const TEMA13_ENTRY_PATTERNS = [
  { entryKey: 'LCSP_art_15_1', regex: /\barticle\s+15\.1(?:\s+LCSP|\s+de la\s+Llei\s+9\/2017(?:,\s*de\s*8\s*de\s*novembre,\s*de\s*contractes\s+del\s+sector\s+public)?)\b/gi },
  { entryKey: 'LCSP_art_16', regex: /\barticle\s+16(?:\s+LCSP|\s+de la\s+Llei\s+9\/2017(?:,\s*de\s*8\s*de\s*novembre,\s*de\s*contractes\s+del\s+sector\s+public)?)\b/gi },
  { entryKey: 'LCSP_art_39_2_c', regex: /\barticle\s+39\.2\.c(?:\s+LCSP|\s+de la\s+Llei\s+9\/2017(?:,\s*de\s*8\s*de\s*novembre,\s*de\s*contractes\s+del\s+sector\s+public)?)\b/gi },
  { entryKey: 'LCSP_art_2_1', regex: /\barticle\s+2\.1(?:\s+LCSP|\s+de la\s+Llei\s+9\/2017(?:,\s*de\s*contractes\s+del\s+sector\s+public)?)\b/gi },
  { entryKey: 'LCSP_art_1', regex: /\barticle\s+1(?:\s+LCSP|\s+de la\s+LCSP|\s+de la\s+Llei\s+9\/2017(?:,\s*de\s*contractes\s+del\s+sector\s+public)?)\b/gi },
  { entryKey: 'CE_art_105_b', regex: /\barticle\s+105\.b(?:\s+de la\s+Constituci(?:ó|o)\s+espanyola|\s+CE)\b/gi },
  { entryKey: 'CE_art_149_1_18', regex: /\barticle\s+149\.1\.18(?:\s+de la\s+Constituci(?:ó|o)\s+espanyola|\s+CE)\b/gi },
  { entryKey: 'DIRECTIVA_2014_23_UE', regex: /\bDirectiva\s+2014\/23\/UE\b/gi },
  { entryKey: 'DIRECTIVA_2014_24_UE', regex: /\bDirectiva\s+2014\/24\/UE\b/gi },
  { entryKey: 'DIRECTIVA_2014_25_UE', regex: /\bDirectiva\s+2014\/25\/UE\b/gi },
  { entryKey: 'LCSP', regex: /\bLlei\s+9\/2017(?:,\s*de\s*8\s*de\s*novembre)?(?:,\s*de\s*contractes\s+del\s+sector\s+public)?(?:\s*\(LCSP\))?\b/gi },
  { entryKey: 'LLEI_19_2014', regex: /\bLlei\s+19\/2014\b/gi },
  { entryKey: 'TFUE', regex: /\b(?:Tractat\s+de\s+Funcionament\s+de\s+la\s+Uni(?:ó|o)\s+Europea\s*\(TFUE\)|TFUE)\b/gi },
  { entryKey: 'PERFIL_CONTRACTANT', regex: /\bperfil\s+del\s+contractant\b/gi },
  { entryKey: 'PSCP', regex: /\b(?:Plataforma\s+de\s+Serveis\s+de\s+Contractaci(?:ó|o)\s+P(?:ú|u)blica\s*\(PSCP\)|PSCP)\b/gi },
  { entryKey: 'DOUE', regex: /\b(?:Diari\s+Oficial\s+de\s+la\s+Uni(?:ó|o)\s+Europea\s*\(DOUE\)|DOUE)\b/gi },
];

const createEntryMatch = (entryKey, label, start, end) => ({
  entryKey,
  label,
  start,
  end,
});

const dedupeStructuredNormativeMatches = (matches) => {
  const sorted = [...matches].sort((first, second) => first.start - second.start || second.end - first.end);
  const result = [];
  let lastEnd = -1;

  sorted.forEach((match) => {
    if (match.start < lastEnd) return;
    result.push(match);
    lastEnd = match.end;
  });

  return result;
};

const collectTema13NormativeMatches = (text, context = {}) => {
  if (context?.blocId !== 'bloc-4' || context?.temaId !== 'tema-13') {
    return [];
  }

  const matches = [];

  TEMA13_ENTRY_PATTERNS.forEach(({ entryKey, regex }) => {
    for (const match of text.matchAll(regex)) {
      const label = match[0];
      const start = match.index ?? -1;
      if (start < 0 || !label) continue;
      matches.push(createEntryMatch(entryKey, label, start, start + label.length));
    }
  });

  return dedupeStructuredNormativeMatches(matches);
};

const replaceTextNodeWithStructuredNormativeRefs = (textNode, matches) => {
  const text = textNode.nodeValue || '';
  if (matches.length === 0) return;

  const fragment = document.createDocumentFragment();
  let lastIndex = 0;

  matches.forEach((match) => {
    if (match.start > lastIndex) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.start)));
    }

    const mountNode = document.createElement('span');
    mountNode.className = 'normative-inline-entry';
    mountNode.dataset.entryKey = match.entryKey;
    mountNode.dataset.label = match.label;
    fragment.appendChild(mountNode);

    lastIndex = match.end;
  });

  if (lastIndex < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
  }

  textNode.parentNode?.replaceChild(fragment, textNode);
};

const mountStructuredNormativeTooltips = (rootNode, context) => {
  if (Array.isArray(rootNode.__structuredNormativeRoots)) {
    rootNode.__structuredNormativeRoots.forEach((root) => root.unmount());
  }

  rootNode.__structuredNormativeRoots = [];

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
    const matches = collectTema13NormativeMatches(textNode.nodeValue || '', context);
    if (matches.length === 0) return;
    replaceTextNodeWithStructuredNormativeRefs(textNode, matches);
  });

  rootNode.querySelectorAll('.norma[data-norma], .normative-inline-entry').forEach((mountNode) => {
    const entryKey = mountNode.dataset.norma || mountNode.dataset.entryKey;
    const label = mountNode.dataset.label || mountNode.textContent?.trim() || '';
    if (!entryKey || !label) return;

    const root = createRoot(mountNode);
    root.render(
      <NormativeTooltip entryKey={entryKey}>
        {label}
      </NormativeTooltip>,
    );

    rootNode.__structuredNormativeRoots.push(root);
  });

  return rootNode.__structuredNormativeRoots.length;
};

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
  if (blocId !== 'bloc-1' || !['tema-1', 'tema-2', 'tema-3'].includes(temaId)) return;

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
  const pointNormativaMap = {
    'tema-1': bloc1Tema1Normativa,
    'tema-2': bloc1Tema2Normativa,
    'tema-3': bloc1Tema3Normativa,
  };
  const pointNormativa = (pointNormativaMap[temaId] || {})[pointNumber];
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

  const usesEAC = temaId === 'tema-2' || temaId === 'tema-3';

  const categories = usesEAC
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
        title: 'LLEIS ORGÀNIQUES',
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
  const structuredTooltipCount = mountStructuredNormativeTooltips(rootNode, context);
  mountInlineNormativeTooltips(rootNode);

  if (context?.blocId === 'bloc-4' && context?.temaId === 'tema-13') {
    const explicitCount = rootNode.querySelectorAll('.norma[data-norma]').length;
    console.debug('[normativa] Tema 13 tooltips enhanced', {
      explicitCount,
      structuredTooltipCount,
    });
  }
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

  const createOpenTabButton = () => {
    const openTabButton = document.createElement('button');
    openTabButton.type = 'button';
    openTabButton.className = 'btn-open-tab';
    setButtonLabel(openTabButton, '🔗 Obrir en nova pestanya');
    openTabButton.addEventListener('click', () => {
      const standaloneUrl = getStandaloneExplanationRoute(blocId, temaId, pointId);
      window.open(standaloneUrl, '_blank', 'noopener,noreferrer');
    });
    return openTabButton;
  };

  const renderControls = () => {
    controlsNode.innerHTML = '';

    if (!EDIT_MODE_ENABLED) {
      controlsNode.append(createOpenTabButton());
      return;
    }

    if (!isEditing) {
      const editButton = document.createElement('button');
      editButton.type = 'button';
      setButtonLabel(editButton, '✏️ Edició');
      editButton.addEventListener('click', () => {
        isEditing = true;
        renderControls();
        renderEditor();
      });
      controlsNode.append(editButton, createOpenTabButton());
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

    controlsNode.append(saveButton, cancelButton, restoreButton, createOpenTabButton());
  };

  renderControls();
  renderPreview();
};

export default function EsquemesViewer({ blocId, temaId, schemaPath, active }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [esquemesHtml, setEsquemesHtml] = useState('');
  const [esquemesError, setEsquemesError] = useState('');
  const [isLoadingEsquemes, setIsLoadingEsquemes] = useState(false);
  const [activePoint, setActivePoint] = useState(null);

  const usesTema1CardLayout = blocId === 'bloc-4' && ['tema-13', 'tema-14', 'tema-15'].includes(temaId);

  const esquemesContainerRef = useRef(null);
  const expSectionsRegistryRef = useRef(new Map());

  const handleToggle = useCallback((pointId) => {
    setActivePoint((previousPointId) => (previousPointId === pointId ? null : pointId));
  }, []);

  useEffect(() => {
    setActivePoint(null);
  }, [blocId, temaId, schemaPath]);

  useEffect(() => {
    if (!active) return;

    const pointFromHash = parseExplanationHash(location.hash);
    if (!pointFromHash) return;

    setActivePoint(pointFromHash);
  }, [active, location.hash, blocId, temaId, schemaPath]);

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
    if (!active || typeof window === 'undefined') return;

    const currentHashPoint = parseExplanationHash(window.location.hash);

    if (!activePoint) {
      if (currentHashPoint) {
        const url = new URL(window.location.href);
        url.hash = '';
        window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}`);
      }
      return;
    }

    const nextHash = buildExplanationHash(activePoint);
    if (window.location.hash === `#${nextHash}`) return;

    const url = new URL(window.location.href);
    url.hash = nextHash;
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}#${nextHash}`);
  }, [active, activePoint]);

  useEffect(() => {
    if (!active || !activePoint) return;

    const registry = expSectionsRegistryRef.current;
    if (!registry || registry.size === 0) return;

    const activeEntry = registry.get(activePoint);
    if (!activeEntry) return;

    const { contentNode } = activeEntry;
    const sourceUrl = contentNode.dataset.sourceUrl;
    const fallbackSourceUrl = contentNode.dataset.fallbackSourceUrl;
    const fallbackHtml = contentNode.dataset.fallbackHtml || '(Explicació no disponible)';
    const alreadyLoaded = contentNode.dataset.loaded === 'true';

    if (!sourceUrl || alreadyLoaded) return;

    let isMounted = true;

    loadExplanationHtml({
      blocId,
      temaId,
      pointId: activePoint,
    })
      .then(({ html, path }) => {
        if (!isMounted) return;

        const originalHtml = html || fallbackHtml;
        const resolvedHtml = resolveRelativeUrls(originalHtml, path || sourceUrl);

        if (!EDIT_MODE_ENABLED) {
          contentNode.innerHTML = resolvedHtml;
          enhanceExplicacioContent(contentNode, { blocId, temaId });
          contentNode.dataset.loaded = 'true';
          return;
        }

        mountEditableExplanation({
          contentNode,
          blocId,
          temaId,
          pointId: activePoint,
          originalHtml: resolvedHtml,
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
    <div className={`esquema-content-wrapper ${usesTema1CardLayout ? 'esquema-content-wrapper--tema1-cards' : ''}`}>
      <div
        ref={esquemesContainerRef}
        className="html-content"
        dangerouslySetInnerHTML={{ __html: esquemesHtml }}
      />
    </div>
  );
}
