(function () {
  const NORMA_SKIP_SELECTOR = [
    'a',
    'button',
    'code',
    'pre',
    'script',
    'style',
    '.pillrow',
    '.toc',
    '.norma',
    '.norma-tooltip',
  ].join(', ');

  const normaState = {
    registry: null,
    registryPromise: null,
    tooltip: null,
    activeTrigger: null,
    hideTimer: null,
  };

  function slugify(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  function ensureHeadingIds(main) {
    const headings = [];
    const sections = Array.from(main.querySelectorAll('section'));

    sections.forEach((section) => {
      const firstH2 = section.querySelector('h2');
      if (firstH2) {
        if (!section.id) {
          section.id = slugify(firstH2.textContent) || 'sec';
        }
        headings.push(firstH2);
      }

      const h3s = Array.from(section.querySelectorAll('h3'));
      h3s.forEach((heading) => {
        if (!heading.id) {
          heading.id = slugify(heading.textContent) || 'subsec';
        }
        headings.push(heading);
      });
    });

    return headings;
  }

  function buildToc(main) {
    const tocLinks = document.querySelector('.toc-links');
    if (!tocLinks) return;
    tocLinks.innerHTML = '';

    const headings = ensureHeadingIds(main);
    headings.forEach((heading) => {
      const isH3 = heading.tagName === 'H3';
      const targetId = isH3 ? heading.id : (heading.closest('section') && heading.closest('section').id);
      if (!targetId) return;

      const anchor = document.createElement('a');
      anchor.href = '#' + targetId;
      anchor.textContent = heading.textContent.replace(/\s+/g, ' ').trim();
      if (isH3) anchor.classList.add('toc-sub');
      tocLinks.appendChild(anchor);
    });
  }

  function normalizeCallouts(main) {
    const callouts = Array.from(main.querySelectorAll('.callout'));
    callouts.forEach((callout) => {
      if (callout.classList.contains('danger')) {
        callout.classList.remove('danger');
        callout.classList.add('warn');
      }

      const text = callout.textContent.toLowerCase();
      if (!callout.classList.contains('warn') && !callout.classList.contains('ok')) {
        if (text.includes('pregunta trampa') || text.includes('trampa') || text.includes('important')) {
          callout.classList.add('warn');
        } else if (text.includes('idea examen') || text.includes('idea d’examen') || text.includes('idea d\'examen') || text.includes('idea força')) {
          callout.classList.add('ok');
        }
      }
    });
  }

  function normalizeExamSection(main) {
    const sections = Array.from(main.querySelectorAll('section'));
    sections.forEach((section) => {
      const title = section.querySelector('h2, h3');
      const text = title ? title.textContent.toLowerCase() : '';
      if (section.id === 'exam' || /idea clau d.?examen|idees clau d.?examen|resum/i.test(text)) {
        section.classList.add('exam');
      }
    });
  }

  function normalizeNormaKey(value) {
    return String(value || '').trim();
  }

  function sanitizeReferenceSegment(value) {
    return String(value || '')
      .trim()
      .replace(/\.$/, '')
      .replace(/\./g, '_')
      .replace(/[^a-zA-Z0-9_]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');
  }

  function getSiteBasePath() {
    if (document.currentScript && document.currentScript.src) {
      try {
        var scriptUrl = new URL(document.currentScript.src, window.location.href);
        var scriptMarkerIndex = scriptUrl.pathname.indexOf('/js/');
        if (scriptMarkerIndex >= 0) {
          return scriptUrl.pathname.slice(0, scriptMarkerIndex + 1);
        }
      } catch (error) {
        console.warn('No s\'ha pogut deduir el base path del runtime públic', error);
      }
    }

    var contentMarkerIndex = window.location.pathname.indexOf('/content/');
    if (contentMarkerIndex >= 0) {
      return window.location.pathname.slice(0, contentMarkerIndex + 1);
    }

    return '/';
  }

  function loadNormaRegistry() {
    if (normaState.registry) return Promise.resolve(normaState.registry);

    if (!normaState.registryPromise) {
      normaState.registryPromise = fetch(getSiteBasePath() + 'data/normativa-articles.json')
        .then(function (response) {
          if (!response.ok) {
            throw new Error('No s\'ha pogut carregar el registre normatiu');
          }
          return response.json();
        })
        .then(function (payload) {
          const normativaArticles = payload || {};
          console.log('Loaded normativa:', normativaArticles);
          normaState.registry = normativaArticles;
          return normaState.registry;
        })
        .catch(function () {
          normaState.registry = {};
          return normaState.registry;
        });
    }

    return normaState.registryPromise;
  }

  function ensureTooltipNode() {
    if (normaState.tooltip) return normaState.tooltip;

    const tooltip = document.createElement('div');
    tooltip.className = 'norma-tooltip';
    tooltip.hidden = true;
    tooltip.innerHTML = [
      '<div class="norma-tooltip__title"></div>',
      '<div class="norma-tooltip__summary"></div>',
      '<div class="norma-tooltip__points"></div>',
      '<div class="norma-tooltip__context"></div>',
    ].join('');

    tooltip.addEventListener('mouseenter', function () {
      clearTimeout(normaState.hideTimer);
    });

    tooltip.addEventListener('mouseleave', function () {
      scheduleHideTooltip();
    });

    document.body.appendChild(tooltip);
    normaState.tooltip = tooltip;
    return tooltip;
  }

  function renderTooltipContent(data) {
    const tooltip = ensureTooltipNode();
    const titleNode = tooltip.querySelector('.norma-tooltip__title');
    const summaryNode = tooltip.querySelector('.norma-tooltip__summary');
    const pointsNode = tooltip.querySelector('.norma-tooltip__points');
    const contextNode = tooltip.querySelector('.norma-tooltip__context');

    titleNode.textContent = data.title || '';
    summaryNode.textContent = data.summary || '';
    contextNode.textContent = data.context || '';
    pointsNode.innerHTML = '';

    if (Array.isArray(data.oppositionPoints) && data.oppositionPoints.length > 0) {
      const heading = document.createElement('div');
      heading.className = 'norma-tooltip__label';
      heading.textContent = 'Claus d\'oposicio';
      pointsNode.appendChild(heading);

      const list = document.createElement('ul');
      data.oppositionPoints.forEach(function (item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
      });
      pointsNode.appendChild(list);
    }
  }

  function positionTooltip(triggerNode) {
    const tooltip = ensureTooltipNode();
    const rect = triggerNode.getBoundingClientRect();
    const tooltipWidth = Math.min(380, window.innerWidth - 24);
    tooltip.style.width = tooltipWidth + 'px';
    tooltip.hidden = false;

    const tooltipRect = tooltip.getBoundingClientRect();
    const margin = 12;
    const left = Math.min(
      Math.max(margin, rect.left + (rect.width / 2) - (tooltipRect.width / 2)),
      window.innerWidth - tooltipRect.width - margin
    );
    const top = rect.bottom + 12 + tooltipRect.height <= window.innerHeight
      ? rect.bottom + 10
      : Math.max(margin, rect.top - tooltipRect.height - 10);

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  }

  function hideTooltip() {
    clearTimeout(normaState.hideTimer);
    if (normaState.tooltip) {
      normaState.tooltip.hidden = true;
    }
    if (normaState.activeTrigger) {
      normaState.activeTrigger.classList.remove('norma--active');
    }
    normaState.activeTrigger = null;
  }

  function scheduleHideTooltip() {
    clearTimeout(normaState.hideTimer);
    normaState.hideTimer = window.setTimeout(hideTooltip, 120);
  }

  function showTooltip(triggerNode) {
    const key = normalizeNormaKey(triggerNode.dataset.norma);
    if (!key) return;

    loadNormaRegistry().then(function (registry) {
      const payload = registry[key];
      if (!payload) return;

      clearTimeout(normaState.hideTimer);
      if (normaState.activeTrigger && normaState.activeTrigger !== triggerNode) {
        normaState.activeTrigger.classList.remove('norma--active');
      }

      normaState.activeTrigger = triggerNode;
      triggerNode.classList.add('norma--active');
      renderTooltipContent(payload);
      positionTooltip(triggerNode);
    });
  }

  function bindNormaNode(node) {
    if (!node || node.dataset.normaBound === 'true') return;
    node.dataset.normaBound = 'true';
    node.setAttribute('tabindex', node.getAttribute('tabindex') || '0');
    node.setAttribute('role', node.getAttribute('role') || 'button');

    node.addEventListener('mouseenter', function () {
      showTooltip(node);
    });

    node.addEventListener('mouseleave', function () {
      scheduleHideTooltip();
    });

    node.addEventListener('focus', function () {
      showTooltip(node);
    });

    node.addEventListener('blur', function () {
      scheduleHideTooltip();
    });

    node.addEventListener('click', function (event) {
      event.preventDefault();
      if (normaState.activeTrigger === node && normaState.tooltip && !normaState.tooltip.hidden) {
        hideTooltip();
        return;
      }
      showTooltip(node);
    });

    node.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showTooltip(node);
      }
      if (event.key === 'Escape') {
        hideTooltip();
      }
    });
  }

  function createNormaMatch(key, label, start, end) {
    return { key: key, label: label, start: start, end: end };
  }

  function dedupeNormaMatches(matches) {
    const sorted = matches.slice().sort(function (first, second) {
      if (first.start !== second.start) return first.start - second.start;
      return second.end - first.end;
    });
    const result = [];
    let lastEnd = -1;

    sorted.forEach(function (match) {
      if (match.start < lastEnd) return;
      result.push(match);
      lastEnd = match.end;
    });

    return result;
  }

  function collectNormaMatches(text) {
    const matches = [];
    const lcspRegex = /\b(?:art(?:icle)?\.?\s*)(\d+(?:\.\d+)*(?:\.[a-z])?)\s*(?:de la\s+)?LCSP\b/gi;
    const ceRegex = /\b(?:art(?:icle)?\.?\s*)(\d+(?:\.\d+)*(?:\.[a-z])?)\s*(?:de la\s+Constitucio(?:\s+espanyola)?|CE)\b/gi;
    const ceBareRegex = /\b(\d+(?:\.\d+)*(?:\.[a-z])?)\s*CE\b/gi;

    [
      { regex: lcspRegex, prefix: 'LCSP_art_' },
      { regex: ceRegex, prefix: 'CE_art_' },
      { regex: ceBareRegex, prefix: 'CE_art_' },
    ].forEach(function (entry) {
      for (const match of text.matchAll(entry.regex)) {
        const full = match[0];
        const start = typeof match.index === 'number' ? match.index : -1;
        const reference = match[1];
        if (start < 0 || !reference) continue;
        matches.push(
          createNormaMatch(
            entry.prefix + sanitizeReferenceSegment(reference),
            full,
            start,
            start + full.length
          )
        );
      }
    });

    return dedupeNormaMatches(matches);
  }

  function replaceTextNodeWithNormaRefs(textNode, matches) {
    const text = textNode.nodeValue || '';
    const fragment = document.createDocumentFragment();
    let cursor = 0;

    matches.forEach(function (match) {
      if (match.start > cursor) {
        fragment.appendChild(document.createTextNode(text.slice(cursor, match.start)));
      }

      const span = document.createElement('span');
      span.className = 'norma';
      span.dataset.norma = match.key;
      span.textContent = match.label;
      fragment.appendChild(span);
      cursor = match.end;
    });

    if (cursor < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(cursor)));
    }

    if (textNode.parentNode) {
      textNode.parentNode.replaceChild(fragment, textNode);
    }
  }

  function autoWrapNormaReferences(rootNode) {
    const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let currentNode = walker.nextNode();

    while (currentNode) {
      const parent = currentNode.parentElement;
      if (parent && !parent.closest(NORMA_SKIP_SELECTOR) && (currentNode.nodeValue || '').trim()) {
        textNodes.push(currentNode);
      }
      currentNode = walker.nextNode();
    }

    textNodes.forEach(function (textNode) {
      const matches = collectNormaMatches(textNode.nodeValue || '');
      if (matches.length > 0) {
        replaceTextNodeWithNormaRefs(textNode, matches);
      }
    });
  }

  function initializeNormaTooltips(rootNode) {
    autoWrapNormaReferences(rootNode);
    rootNode.querySelectorAll('.norma[data-norma]').forEach(function (node) {
      bindNormaNode(node);
    });

    document.addEventListener('mousedown', function (event) {
      const target = event.target;
      if (target && target.closest('.norma, .norma-tooltip')) return;
      hideTooltip();
    });

    window.addEventListener('resize', function () {
      if (normaState.activeTrigger) {
        positionTooltip(normaState.activeTrigger);
      }
    });

    window.addEventListener('scroll', function () {
      if (normaState.activeTrigger) {
        positionTooltip(normaState.activeTrigger);
      }
    }, true);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');
    const tooltipRoot = document.querySelector('.layout') || document.body;
    if (!main) return;
    console.log('Normativa tooltip system loaded');
    normalizeCallouts(main);
    normalizeExamSection(main);
    buildToc(main);
    initializeNormaTooltips(tooltipRoot);
  });
})();
