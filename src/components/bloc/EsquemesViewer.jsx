import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTextWithCache } from '../../utils/contentCache';
import { createPointActions, applyExpVisibility } from './PointActionsManager';

const PLACEHOLDER_TOC_TEXT = 'Navegació automàtica generada des dels títols h2 i h3.';
const PLACEHOLDER_ARTICLE_TEXT = 'Referència detectada automàticament al contingut original del punt.';

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
    if (match[1]) matches.push(`CE ${match[1]}`);
  }

  for (const match of text.matchAll(articleCeRegex)) {
    if (match[1]) matches.push(`CE ${match[1]}`);
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
  const refsContainer = rootNode.querySelector('aside .box .refs');
  if (!refsContainer) return;

  const detectedArticles = extractConstitutionArticles(rootNode);
  refsContainer.innerHTML = '';

  if (detectedArticles.length === 0) {
    const refNode = document.createElement('div');
    refNode.className = 'ref';

    const codeNode = document.createElement('code');
    codeNode.textContent = 'Sense referències CE detectades';

    const detailNode = document.createElement('span');
    detailNode.className = 'small';
    detailNode.textContent = 'No s’han detectat articles CE al text principal del punt.';

    refNode.append(codeNode, detailNode);
    refsContainer.appendChild(refNode);
    return;
  }

  detectedArticles.forEach((article) => {
    const refNode = document.createElement('div');
    refNode.className = 'ref';

    const codeNode = document.createElement('code');
    codeNode.textContent = article;

    const detailNode = document.createElement('span');
    detailNode.className = 'small';
    detailNode.textContent = 'Referència detectada al text del punt.';

    refNode.append(codeNode, detailNode);
    refsContainer.appendChild(refNode);
  });

  refsContainer
    .querySelectorAll('.small')
    .forEach((node) => {
      if (node.textContent?.includes(PLACEHOLDER_ARTICLE_TEXT)) {
        node.textContent = 'Referència detectada al text del punt.';
      }
    });
};

const enhanceExplicacioContent = (rootNode) => {
  if (!rootNode) return;
  buildDynamicToc(rootNode);
  updateEssentialArticles(rootNode);
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
        enhanceExplicacioContent(contentNode);
        contentNode.dataset.loaded = 'true';
      })
      .catch(() => {
        if (!isMounted) return;
        contentNode.innerHTML = fallbackHtml;
        enhanceExplicacioContent(contentNode);
        contentNode.dataset.loaded = 'true';
      });

    return () => {
      isMounted = false;
    };
  }, [active, activePoint]);

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
