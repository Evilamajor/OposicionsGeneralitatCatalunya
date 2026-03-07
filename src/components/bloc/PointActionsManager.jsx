import { getAskRoute, getDiagramViewerRoute } from '../../constants/routes';
import { getBasePath } from '@/utils/basePath';

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

const extractPointId = (...nodes) => {
  for (const node of nodes) {
    const id = node?.id || '';
    const match = id.match(/^p(\d+)-/);
    if (match) return match[1];
  }
  return null;
};

export const applyExpVisibility = (activePointId, registry) => {
  registry.forEach(({ contentNode, button, chevronNode }, pointId) => {
    const isOpen = activePointId === pointId;
    contentNode.style.display = isOpen ? 'block' : 'none';
    button.classList.toggle('active', isOpen);
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (chevronNode) {
      chevronNode.textContent = isOpen ? '▾' : '▸';
    }
  });
};

const reorderDetailsSections = (container) => {
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

const reorderToggleSections = (container) => {
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

      pairs.push({ toggleNode: child, contentNode, rank });
    });

    pairs
      .sort((left, right) => left.rank - right.rank)
      .forEach(({ toggleNode, contentNode }) => {
        parent.appendChild(toggleNode);
        parent.appendChild(contentNode);
      });
  });
};

const sanitizeEsquemaSections = (container) => {
  const sectionNodes = container.querySelectorAll(
    ".schema-content, .content, [id$='-preguntes'], [id$='-diagrama'], [id$='-explicacio']",
  );

  sectionNodes.forEach((sectionNode) => {
    sectionNode.querySelectorAll('style, script').forEach((node) => node.remove());
  });
};

export const createPointActions = ({
  container,
  blocId,
  temaId,
  navigate,
  onTogglePoint,
}) => {
  reorderDetailsSections(container);
  reorderToggleSections(container);
  sanitizeEsquemaSections(container);
  container.querySelectorAll('script').forEach((scriptNode) => scriptNode.remove());

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

    if (!diagramaNode) grafButton.disabled = true;
    if (!preguntesNode) askButton.disabled = true;

    let inlineExpNode = explicacioNode;
    const fallbackExpHtml = explicacioNode?.innerHTML?.trim() || '(Explicació no disponible)';
    if (!inlineExpNode) {
      inlineExpNode = document.createElement('div');
      inlineExpNode.className = 'schema-inline-explicacio';
      inlineExpNode.innerHTML = fallbackExpHtml;
      frame.appendChild(inlineExpNode);
    }

    const paddedPoint = String(Number.parseInt(pointId, 10)).padStart(2, '0');
    inlineExpNode.dataset.sourceUrl = getBasePath(`content/${blocId}/${temaId}/explicacions/punt-${paddedPoint}.html`);
    inlineExpNode.dataset.fallbackSourceUrl = getBasePath(`content/${blocId}/${temaId}/esquemes/explicacions/punt-${paddedPoint}.html`);
    inlineExpNode.dataset.loaded = 'false';
    inlineExpNode.dataset.fallbackHtml = fallbackExpHtml;

    titleButton.addEventListener('click', () => {
      onTogglePoint(pointId);
    });

    grafButton.addEventListener('click', (event) => {
      event.stopPropagation();
      navigate(getDiagramViewerRoute(blocId, temaId, pointId));
    });

    askButton.addEventListener('click', (event) => {
      event.stopPropagation();
      navigate(getAskRoute(blocId, temaId, paddedPoint));
    });

    actions.append(grafButton, askButton);
    row.append(titleButton, actions);

    if (titleElement.tagName.toLowerCase() === 'h3') {
      titleElement.replaceWith(row);
    } else {
      frame.insertBefore(row, frame.firstChild);
      titleElement.remove();
    }

    if (diagramaNode) diagramaNode.style.display = 'none';
    if (preguntesNode) preguntesNode.style.display = 'none';

    inlineExpNode.classList.add('schema-inline-explicacio');
    inlineExpNode.style.display = 'none';

    registry.set(pointId, {
      contentNode: inlineExpNode,
      button: titleButton,
      chevronNode: chevron,
    });
  });

  return registry;
};
