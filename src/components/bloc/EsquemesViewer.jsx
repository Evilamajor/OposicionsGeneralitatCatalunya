import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../../stores/useAppStore';
import { fetchTextWithCache } from '../../utils/contentCache';
import { createPointActions, applyExpVisibility } from './PointActionsManager';

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

export default function EsquemesViewer({ blocId, temaId, schemaPath, active }) {
  const navigate = useNavigate();
  const [esquemesHtml, setEsquemesHtml] = useState('');
  const [esquemesError, setEsquemesError] = useState('');
  const [isLoadingEsquemes, setIsLoadingEsquemes] = useState(false);
  const openExpPointId = useAppStore((state) => state.openExpPointId);
  const setOpenExpPointId = useAppStore((state) => state.setOpenExpPointId);

  const esquemesContainerRef = useRef(null);
  const expSectionsRegistryRef = useRef(new Map());

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
      openExpPointId,
      onTogglePoint: (pointId) => {
        setOpenExpPointId(openExpPointId === pointId ? null : pointId);
      },
    });

    expSectionsRegistryRef.current = registry;

    return () => {
      expSectionsRegistryRef.current = new Map();
    };
  }, [active, esquemesHtml, blocId, temaId, navigate]);

  useEffect(() => {
    if (!active) return;

    const registry = expSectionsRegistryRef.current;
    if (!registry || registry.size === 0) return;
    applyExpVisibility(openExpPointId, registry);
  }, [active, openExpPointId]);

  useEffect(() => {
    if (!active || !openExpPointId) return;

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

    fetchTextWithCache(sourceUrl)
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
  }, [active, openExpPointId]);

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
