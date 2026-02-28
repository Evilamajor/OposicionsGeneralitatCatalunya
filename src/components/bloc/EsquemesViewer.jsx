import { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { fetchTextWithCache } from '../../utils/contentCache';
import {
  legalStudyRegistry,
  jurisprudenciaConstitucional,
  jurisprudenciaFallbackText,
  buildDefaultMiniCheck,
} from '../../data/studyMaterialKnowledgeBase';
import { bloc1Tema1Normativa } from '../../data/bloc1Tema1Normativa';
import { bloc1Tema2Normativa } from '../../data/bloc1Tema2Normativa';
import { LOData } from '../../data/lleisOrganiques';
import { jurisprudenciaTC } from '../../data/jurisprudenciaTC';
import NormativePillHeader from './NormativePillHeader';
import { createPointActions, applyExpVisibility } from './PointActionsManager';

const PLACEHOLDER_TOC_TEXT = 'Navegació automàtica generada des dels títols h2 i h3.';

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

const slugify = (text = '') => text
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');

const ensureAnchorId = (heading, fallbackPrefix = 'sec') => {
  if (heading.id) return heading.id;
  const generatedId = slugify(heading.textContent) || fallbackPrefix;
  heading.id = generatedId;
  return generatedId;
};

const isInside = (node, selector) => Boolean(node.closest(selector));

const getHeadingTarget = (heading) => {
  if (heading.tagName === 'H2') {
    const section = heading.closest('section');
    if (section) {
      if (!section.id) {
        section.id = slugify(heading.textContent) || 'sec';
      }
      return section.id;
    }
  }

  return ensureAnchorId(heading, 'subsec');
};

const normalizeArticleKey = (rawArticle = '') => rawArticle
  .split('.')
  .map((segment) => {
    if (!segment) return segment;
    const parsed = Number.parseInt(segment, 10);
    return Number.isNaN(parsed) ? segment : String(parsed);
  })
  .join('.');

const normalizeArticleLabel = (articleKey) => `CE ${articleKey}`;

const getAsideBoxByTitle = (rootNode, titleText) => {
  const boxes = rootNode.querySelectorAll('aside .box');
  return Array.from(boxes).find((box) => {
    const heading = box.querySelector('h3');
    return heading?.textContent?.trim().toLowerCase() === titleText.toLowerCase();
  }) || null;
};

const createSmallLine = (label, content) => {
  const detailNode = document.createElement('span');
  detailNode.className = 'small';

  const strongNode = document.createElement('strong');
  strongNode.textContent = `${label}: `;

  detailNode.append(strongNode, content);
  return detailNode;
};

const extractStcReferences = (boxNode) => {
  if (!boxNode) return [];

  const text = boxNode.textContent || '';
  const stcRegex = /STC\s*(\d+)\s*\/\s*(\d{4})/gi;
  const found = [];
  const seen = new Set();

  for (const match of text.matchAll(stcRegex)) {
    const normalized = `${match[1]}/${match[2]}`;
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    found.push(normalized);
  }

  return found;
};

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

const buildDynamicToc = (rootNode) => {
  const tocLinks = rootNode.querySelector('.toc-links');
  if (!tocLinks) return;

  const main = rootNode.querySelector('main') || rootNode;
  const headings = Array.from(main.querySelectorAll('h1, h2, h3, h4'))
    .filter((heading) => !isInside(heading, 'nav.toc, aside'));

  tocLinks.innerHTML = '';

  if (headings.length === 0) return;

  headings.forEach((heading) => {
    const targetId = getHeadingTarget(heading);
    if (!targetId) return;

    const anchor = document.createElement('a');
    anchor.href = `#${targetId}`;
    anchor.textContent = heading.textContent.replace(/\s+/g, ' ').trim();

    if (heading.tagName === 'H3' || heading.tagName === 'H4') {
      anchor.classList.add('toc-sub');
    }

    tocLinks.appendChild(anchor);
  });

  const tocHint = rootNode.querySelector('nav.toc .small');
  if (tocHint && tocHint.textContent?.includes(PLACEHOLDER_TOC_TEXT)) {
    tocHint.textContent = `Navegació automàtica (${headings.length} seccions detectades).`;
  }
};

const extractConstitutionArticles = (rootNode) => {
  const main = rootNode.querySelector('main') || rootNode;
  const clonedMain = main.cloneNode(true);
  clonedMain.querySelectorAll('nav, aside, script, style').forEach((node) => node.remove());

  const text = clonedMain.textContent || '';
  const matches = [];

  const directCeRegex = /\bCE\s*(\d+(?:\.\d+){0,3})\b/gi;
  const articleCeRegex = /\b(?:Art(?:icle)?\.?)\s*(\d+(?:\.\d+){0,3})\s*CE\b/gi;

  for (const match of text.matchAll(directCeRegex)) {
    if (match[1]) matches.push(normalizeArticleKey(match[1]));
  }

  for (const match of text.matchAll(articleCeRegex)) {
    if (match[1]) matches.push(normalizeArticleKey(match[1]));
  }

  const unique = [];
  const seen = new Set();

  matches.forEach((article) => {
    if (seen.has(article)) return;
    seen.add(article);
    unique.push(article);
  });

  return unique;
};

const updateEssentialArticles = (rootNode) => {
  const articlesBox = getAsideBoxByTitle(rootNode, 'Articles imprescindibles');
  if (!articlesBox) return [];

  const refsContainer = articlesBox.querySelector('.refs') || articlesBox;
  if (!refsContainer) return [];

  const detectedArticles = extractConstitutionArticles(rootNode);
  const ceRegistry = legalStudyRegistry.CE?.articles || {};
  refsContainer.innerHTML = '';

  if (detectedArticles.length === 0) {
    const refNode = document.createElement('div');
    refNode.className = 'ref';

    const codeNode = document.createElement('code');
    codeNode.textContent = 'Sense referències CE detectades';

    const detailNode = createSmallLine('Detecció', 'No s’han detectat articles CE al text principal del punt.');

    refNode.append(codeNode, detailNode);
    refsContainer.appendChild(refNode);
    return [];
  }

  detectedArticles.forEach((articleKey) => {
    const article = normalizeArticleLabel(articleKey);
    const articleData = ceRegistry[articleKey];

    const refNode = document.createElement('div');
    refNode.className = 'ref';

    const codeNode = document.createElement('code');
    codeNode.textContent = article;

    refNode.appendChild(codeNode);

    if (!articleData) {
      refNode.appendChild(createSmallLine('Estat', 'Article pendent de documentar'));
      refsContainer.appendChild(refNode);
      return;
    }

    refNode.appendChild(createSmallLine('Què diu', articleData.queRegula));
    refNode.appendChild(createSmallLine('Idea clau d’examen', articleData.ideaClau));
    refNode.appendChild(createSmallLine('Per què és important en aquest punt', articleData.contextTemari));
    refNode.appendChild(createSmallLine('Pregunta típica', articleData.clauExamen));

    refsContainer.appendChild(refNode);
  });

  return detectedArticles;
};

const updateJurisprudencia = (rootNode) => {
  const jurisprudenciaBox = getAsideBoxByTitle(rootNode, 'Jurisprudència rellevant');
  if (!jurisprudenciaBox) return [];

  const detectedStc = extractStcReferences(jurisprudenciaBox);
  jurisprudenciaBox.querySelectorAll('.ref, .note').forEach((node) => node.remove());

  if (detectedStc.length === 0) {
    const refNode = document.createElement('div');
    refNode.className = 'ref';
    refNode.appendChild(createSmallLine('Criteri', jurisprudenciaFallbackText));
    jurisprudenciaBox.appendChild(refNode);
    return [];
  }

  detectedStc.forEach((stcCode) => {
    const refNode = document.createElement('div');
    refNode.className = 'ref';

    const data = jurisprudenciaConstitucional[stcCode];

    const codeNode = document.createElement('code');
    codeNode.textContent = `STC ${stcCode}`;

    refNode.appendChild(codeNode);
    refNode.appendChild(createSmallLine('Què regula', data?.queRegula || 'Sentència citada al punt que cal revisar en relació amb el precepte constitucional aplicable.'));
    refNode.appendChild(createSmallLine('Idea nuclear', data?.ideaClau || 'Revisa la doctrina constitucional principal vinculada al punt.'));
    refNode.appendChild(createSmallLine('Per què pot sortir a examen', data?.clauExamen || 'Pot aparèixer com a pregunta de doctrina constitucional associada al tema.'));

    jurisprudenciaBox.appendChild(refNode);
  });

  return detectedStc;
};

const updateExamMiniCheck = (rootNode, detectedArticles) => {
  const miniCheckBox = getAsideBoxByTitle(rootNode, 'Mini-check d’examen');
  if (!miniCheckBox) return;

  const ceRegistry = legalStudyRegistry.CE?.articles || {};
  const firstKnownArticleKey = detectedArticles.find((key) => Boolean(ceRegistry[key]));
  const firstArticleData = firstKnownArticleKey ? ceRegistry[firstKnownArticleKey] : null;
  const firstArticleLabel = firstKnownArticleKey ? normalizeArticleLabel(firstKnownArticleKey) : null;

  const checklist = buildDefaultMiniCheck({
    articleLabel: firstArticleLabel,
    articleData: firstArticleData,
  });

  miniCheckBox.querySelectorAll('.note, .ref').forEach((node) => node.remove());

  const noteNode = document.createElement('div');
  noteNode.className = 'note';

  const titleNode = document.createElement('strong');
  titleNode.textContent = '🎯 Recorda:';

  const listNode = document.createElement('ul');

  const rows = [
    ['Article clau', checklist.articleClau],
    ['Principi nuclear', checklist.principiNuclear],
    ['Possible error habitual', checklist.errorHabitual],
    ['Diferència amb concepte similar', checklist.diferenciaConcepte],
  ];

  rows.forEach(([label, content]) => {
    const itemNode = document.createElement('li');

    const strongNode = document.createElement('strong');
    strongNode.textContent = `${label}: `;

    itemNode.append(strongNode, content);
    listNode.appendChild(itemNode);
  });

  noteNode.append(titleNode, listNode);
  miniCheckBox.appendChild(noteNode);
};

const enhanceExplicacioContent = (rootNode, context) => {
  if (!rootNode) return;
  renderNormativaHeader(rootNode, context);
  buildDynamicToc(rootNode);
  const detectedArticles = updateEssentialArticles(rootNode);
  updateJurisprudencia(rootNode);
  updateExamMiniCheck(rootNode, detectedArticles);
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
        contentNode.innerHTML = html || fallbackHtml;
        enhanceExplicacioContent(contentNode, { blocId, temaId });
        contentNode.dataset.loaded = 'true';
      })
      .catch(() => {
        if (!isMounted) return;
        contentNode.innerHTML = fallbackHtml;
        enhanceExplicacioContent(contentNode, { blocId, temaId });
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
