import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blocks, ALLOWED_BLOC_SECTIONS } from '../data';
import NotesEditor from './NotesEditor';
import useAppStore from '../stores/useAppStore';
import ContentUnavailable from './common/ContentUnavailable';
import BlocSectionsTabs from './bloc/BlocSectionsTabs';
import EsquemesViewer from './bloc/EsquemesViewer';
import PowerPointsSection from './bloc/PowerPointsSection';
import MaterialsSection from './bloc/MaterialsSection';
import LegislacioSection from './bloc/LegislacioSection';
import { DEFAULT_TOPIC_SECTION, TOPIC_POWERPOINT_BLOCS } from '../constants/sections';
import './BlocPage.css';

export default function BlocPage() {
  const { blocId, temaId, seccio } = useParams();
  const navigate = useNavigate();
  const [sectionsVisible, setSectionsVisible] = useState(false);
  const [powerpointMode, setPowerpointMode] = useState('config');
  const resetOpenExpPointId = useAppStore((state) => state.resetOpenExpPointId);

  const bloc = blocks.find((b) => b.id === blocId);
  const tema = bloc?.topics?.find((t) => t.id === temaId);
  const temaLabel = tema?.label || temaId || 'Tema';
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

  const powerpointMetadataUrl = blocId && temaId
    ? `/content/${blocId}/${temaId}/powerpoints/metadata.json`
    : null;

  const powerpointConfigUrl = blocId && temaId
    ? `/content/${blocId}/${temaId}/powerpoints/config.json`
    : null;

  useEffect(() => {
    if (!blocId || !bloc) return;

    if (!temaId) {
      const firstTemaId = bloc.topics?.[0]?.id;
      if (firstTemaId) {
        navigate(`/bloc/${blocId}/${firstTemaId}/${DEFAULT_TOPIC_SECTION}`, { replace: true });
      }
      return;
    }

    if (temaId && !seccio) {
      navigate(`/bloc/${blocId}/${temaId}/${DEFAULT_TOPIC_SECTION}`, { replace: true });
      return;
    }

    if (seccio && !sections.some((s) => s.id === seccio)) {
      navigate(`/bloc/${blocId}/${temaId}/${DEFAULT_TOPIC_SECTION}`, { replace: true });
    }
  }, [blocId, temaId, seccio, bloc, navigate, sections]);

  useEffect(() => {
    setSectionsVisible(false);
  }, [blocId, temaId, seccio]);

  useEffect(() => {
    resetOpenExpPointId();
  }, [blocId, temaId, seccio]);

  useEffect(() => {
    if (
      seccio !== 'powerpoints'
      || !blocId
      || !temaId
      || !TOPIC_POWERPOINT_BLOCS.has(blocId)
      || !powerpointMetadataUrl
    ) {
      setPowerpointMode('config');
      return;
    }

    let isMounted = true;
    setPowerpointMode('checking');

    fetch(powerpointMetadataUrl, { method: 'HEAD' })
      .then((response) => {
        if (!isMounted) return;
        setPowerpointMode(response.ok ? 'metadata' : 'config');
      })
      .catch(() => {
        if (!isMounted) return;
        setPowerpointMode('config');
      });

    return () => {
      isMounted = false;
    };
  }, [seccio, blocId, temaId, powerpointMetadataUrl]);

  if (!bloc) {
    return <ContentUnavailable message="El bloc sol·licitat no existeix." />;
  }

  if (!temaId) {
    return <ContentUnavailable message="Tema no informat." />;
  }

  if (!tema) {
    return <ContentUnavailable message="Contingut no disponible per al tema seleccionat." />;
  }

  return (
    <div className="bloc-page">
      <div className="bloc-seccions">
        <h2>{tema.label}</h2>
        <BlocSectionsTabs
          blocId={blocId}
          temaId={temaId}
          sections={sections}
          sectionsVisible={sectionsVisible}
          onToggleVisibility={() => setSectionsVisible((current) => !current)}
        />
      </div>

      <div className="bloc-contingut">
        <LegislacioSection legislacioPath={seccio === 'legislacio' ? legislacioPath : null} />

        <EsquemesViewer
          blocId={blocId}
          temaId={temaId}
          schemaPath={schemaPath}
          active={seccio === 'esquemes'}
        />

        <PowerPointsSection
          active={seccio === 'powerpoints'}
          blocId={blocId}
          blocTitle={bloc.title}
          temaLabel={temaLabel}
          powerpointMode={powerpointMode}
          powerpointMetadataUrl={powerpointMetadataUrl}
          powerpointConfigUrl={powerpointConfigUrl}
        />

        <MaterialsSection materialsPath={seccio === 'materials' ? materialsPath : null} />
      </div>

      <div className="notes-section">
        <NotesEditor
          storageKey={`notes-${blocId}-${temaId}`}
          title={`Notes de ${temaLabel}`}
        />
      </div>
    </div>
  );
}
