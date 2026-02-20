const STYLE_ID = 'unified-esquema-diagram-runtime-style';

function ensureStyleTag() {
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    .diagram-runtime {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .diagram-runtime-controls {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .diagram-runtime-controls button {
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      color: #0f172a;
      font-size: 0.9rem;
      padding: 6px 10px;
      border-radius: 8px;
      cursor: pointer;
    }

    .diagram-runtime-controls button:hover {
      background: #eef2ff;
    }

    .diagram-runtime-container {
      width: 100%;
      height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .diagram-runtime-viewport {
      width: 100%;
      height: 100%;
      min-height: 0;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffffff;
      border: 1px solid #dbe3ef;
      border-radius: 10px;
      cursor: grab;
      touch-action: none;
    }

    .diagram-runtime-viewport.is-dragging {
      cursor: grabbing;
    }

    .diagram-runtime-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      user-select: none;
      -webkit-user-drag: none;
      transform-origin: top left;
      transition: transform 0.08s ease-out;
      will-change: transform;
      display: block;
    }
  `;

  document.head.appendChild(style);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function createDiagramViewer(sectionElement, imageSrc, blocId, temaId, point) {
  sectionElement.innerHTML = `
    <div class="diagram-runtime">
      <div class="diagram-runtime-controls">
        <button type="button" data-action="zoom-in">+</button>
        <button type="button" data-action="zoom-out">-</button>
        <button type="button" data-action="reset">Reset</button>
        <button type="button" data-action="fit">Fit</button>
        <button type="button" data-action="open">Open</button>
      </div>
      <div class="diagram-runtime-container">
        <div class="diagram-runtime-viewport">
          <img src="${imageSrc}" alt="Diagrama punt ${point}" class="diagram-runtime-image" />
        </div>
      </div>
    </div>
  `;

  const viewport = sectionElement.querySelector('.diagram-runtime-viewport');
  const image = sectionElement.querySelector('.diagram-runtime-image');
  if (!viewport || !image) {
    sectionElement.innerHTML = 'En construcció';
    return () => {};
  }

  let zoom = 1;
  let offset = { x: 0, y: 0 };
  const minZoom = 1;
  const maxZoom = 4;

  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let velocity = { x: 0, y: 0 };
  let inertiaFrame = null;

  const stopInertia = () => {
    if (inertiaFrame) {
      cancelAnimationFrame(inertiaFrame);
      inertiaFrame = null;
    }
  };

  const clampOffset = (x, y, currentZoom) => {
    const containerRect = viewport.getBoundingClientRect();
    const imageWidth = image.clientWidth;
    const imageHeight = image.clientHeight;

    if (!containerRect.width || !containerRect.height || !imageWidth || !imageHeight) {
      return { x, y };
    }

    const scaledWidth = imageWidth * currentZoom;
    const scaledHeight = imageHeight * currentZoom;

    const maxShiftX = Math.max(0, (scaledWidth - containerRect.width) / 2);
    const maxShiftY = Math.max(0, (scaledHeight - containerRect.height) / 2);

    return {
      x: clamp(x, -maxShiftX, maxShiftX),
      y: clamp(y, -maxShiftY, maxShiftY),
    };
  };

  const render = () => {
    image.style.transform = `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`;
  };

  const applyOffset = (nextX, nextY) => {
    offset = clampOffset(nextX, nextY, zoom);
    render();
  };

  const handleFit = () => {
    stopInertia();
    zoom = 1;
    offset = { x: 0, y: 0 };
    render();
  };

  const scheduleFit = () => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        handleFit();
      }, 0);
    });
  };

  const onZoomIn = () => {
    stopInertia();
    zoom = clamp(zoom * 1.2, minZoom, maxZoom);
    applyOffset(offset.x, offset.y);
  };

  const onZoomOut = () => {
    stopInertia();
    zoom = clamp(zoom / 1.2, minZoom, maxZoom);
    applyOffset(offset.x, offset.y);
  };

  const onOpen = () => {
    window.location.assign(`/diagram-viewer/${blocId}/${temaId}/${point}`);
  };

  const onMouseDown = (event) => {
    stopInertia();
    isDragging = true;
    dragStart = {
      x: event.clientX - offset.x,
      y: event.clientY - offset.y,
    };
    velocity = { x: 0, y: 0 };
    viewport.classList.add('is-dragging');
  };

  const onMouseMove = (event) => {
    if (!isDragging) return;

    const nextX = event.clientX - dragStart.x;
    const nextY = event.clientY - dragStart.y;
    const clamped = clampOffset(nextX, nextY, zoom);

    velocity = {
      x: clamped.x - offset.x,
      y: clamped.y - offset.y,
    };

    offset = clamped;
    render();
  };

  const onMouseUp = () => {
    if (!isDragging) return;

    isDragging = false;
    viewport.classList.remove('is-dragging');

    const friction = 0.95;
    const animate = () => {
      velocity.x *= friction;
      velocity.y *= friction;

      if (Math.abs(velocity.x) < 0.1 && Math.abs(velocity.y) < 0.1) {
        stopInertia();
        return;
      }

      const next = clampOffset(offset.x + velocity.x, offset.y + velocity.y, zoom);
      if (next.x === offset.x) velocity.x = 0;
      if (next.y === offset.y) velocity.y = 0;

      offset = next;
      render();
      inertiaFrame = requestAnimationFrame(animate);
    };

    inertiaFrame = requestAnimationFrame(animate);
  };

  const onWheel = (event) => {
    event.preventDefault();
    stopInertia();

    const zoomIntensity = 0.1;
    const nextZoom = clamp(zoom - event.deltaY * zoomIntensity * 0.01, minZoom, maxZoom);
    if (nextZoom === zoom) return;

    zoom = nextZoom;
    applyOffset(offset.x, offset.y);
  };

  const onResize = () => {
    applyOffset(offset.x, offset.y);
  };

  const resizeObserver = new ResizeObserver(onResize);

  image.addEventListener('error', () => {
    sectionElement.innerHTML = 'En construcció';
  }, { once: true });
  image.addEventListener('load', scheduleFit, { once: true });
  if (image.complete) {
    scheduleFit();
  }

  const zoomInButton = sectionElement.querySelector('[data-action="zoom-in"]');
  const zoomOutButton = sectionElement.querySelector('[data-action="zoom-out"]');
  const resetButton = sectionElement.querySelector('[data-action="reset"]');
  const fitButton = sectionElement.querySelector('[data-action="fit"]');
  const openButton = sectionElement.querySelector('[data-action="open"]');

  zoomInButton?.addEventListener('click', onZoomIn);
  zoomOutButton?.addEventListener('click', onZoomOut);
  resetButton?.addEventListener('click', scheduleFit);
  fitButton?.addEventListener('click', scheduleFit);
  openButton?.addEventListener('click', onOpen);

  viewport.addEventListener('mousedown', onMouseDown);
  viewport.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('resize', onResize);
  resizeObserver.observe(viewport);

  return () => {
    stopInertia();
    zoomInButton?.removeEventListener('click', onZoomIn);
    zoomOutButton?.removeEventListener('click', onZoomOut);
    resetButton?.removeEventListener('click', scheduleFit);
    fitButton?.removeEventListener('click', scheduleFit);
    openButton?.removeEventListener('click', onOpen);
    viewport.removeEventListener('mousedown', onMouseDown);
    viewport.removeEventListener('wheel', onWheel);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('resize', onResize);
    resizeObserver.disconnect();
  };
}

function getPointFromSectionId(sectionId = '') {
  const match = sectionId.match(/^p(\d+)-diagrama$/);
  return match ? match[1] : null;
}

export function initEsquemaDiagramRuntime({ container, blocId, temaId }) {
  if (!container || !blocId || !temaId) return () => {};

  ensureStyleTag();

  const cleanupMap = new Map();

  const openDiagramIfNeeded = (section) => {
    if (!section || section.dataset.diagramRuntimeLoaded === 'true') {
      if (section && section.dataset.diagramRuntimeLoaded === 'true') {
        const point = getPointFromSectionId(section.id);
        if (!point) return;
        const imageSrc = `/content/${blocId}/${temaId}/diagrama/${point}.png`;
        const image = new Image();
        image.onload = () => {
          const fit = section.__diagramRuntimeFit;
          if (typeof fit === 'function') fit();
        };
        image.src = imageSrc;
      }
      return;
    }

    const point = getPointFromSectionId(section.id);
    if (!point) return;

    const imageSrc = `/content/${blocId}/${temaId}/diagrama/${point}.png`;
    const probe = new Image();
    probe.onload = () => {
      const cleanup = createDiagramViewer(section, imageSrc, blocId, temaId, point);
      cleanupMap.set(section.id, cleanup);
      section.dataset.diagramRuntimeLoaded = 'true';
      section.__diagramRuntimeFit = () => {
        const fitBtn = section.querySelector('[data-action="fit"]');
        fitBtn?.click();
      };
    };
    probe.onerror = () => {
      section.textContent = 'En construcció';
      section.dataset.diagramRuntimeLoaded = 'true';
    };
    probe.src = imageSrc;
  };

  const onClick = (event) => {
    const toggle = event.target.closest('.toggle, .schema-toggle');
    if (!toggle) return;

    const section = toggle.nextElementSibling;
    if (!section || !section.id) return;

    const point = getPointFromSectionId(section.id);
    if (!point) return;

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (section.style.display === 'block') {
          openDiagramIfNeeded(section);
        }
      }, 0);
    });
  };

  container.addEventListener('click', onClick, false);

  return () => {
    container.removeEventListener('click', onClick, false);
    cleanupMap.forEach((cleanup) => cleanup());
    cleanupMap.clear();
  };
}
