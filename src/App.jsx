import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.css';

import Sidebar from './components/Sidebar';
import HomeSidebar from './components/HomeSidebar';
import IcsSidebar from './pages/ics/IcsSidebar';
import ErrorBoundary from './components/common/ErrorBoundary';
import useAppStore from './stores/useAppStore';

const BlocPage = lazy(() => import('./components/BlocPage'));
const AnnexPage = lazy(() => import('./components/AnnexPage'));
const SchemaViewer = lazy(() => import('./components/SchemaViewer'));
const FullscreenDiagramViewer = lazy(() => import('./components/FullscreenDiagramViewer'));
const QuizRoutePage = lazy(() => import('./components/QuizRoutePage'));
const ExplicacioStandalone = lazy(() => import('./pages/ExplicacioStandalone'));
const AutoavaluacioPage = lazy(() => import('./pages/AutoavaluacioPage'));
const TestNormativaPage = lazy(() => import('./pages/TestNormativaPage'));
const TestExamenPage = lazy(() => import('./pages/TestExamenPage'));
const CulturaCatalanaPage = lazy(() => import('./pages/CulturaCatalanaPage'));
const HistoriaCatalanaPage = lazy(() => import('./pages/HistoriaCatalanaPage'));
const LiteraturaCatalanaPage = lazy(() => import('./pages/LiteraturaCatalanaPage'));
const ArtsPage = lazy(() => import('./pages/ArtsPage'));
const AgendaCulturalPage = lazy(() => import('./pages/AgendaCulturalPage'));
const InternalCorrespondencePractice = lazy(() => import('./components/business-english/InternalCorrespondencePractice'));
const InternalCorrespondenceContext = lazy(() => import('./components/business-english/InternalCorrespondenceContext'));
const BusinessEnglishFitxes = lazy(() => import('./components/BusinessEnglishFitxes'));
const BusinessEnglishFitxaPage = lazy(() => import('./components/business-english/BusinessEnglishFitxaPage'));
const HomeSelectorPage = lazy(() => import('./pages/HomeSelectorPage'));
const IcsLayout = lazy(() => import('./pages/ics/IcsLayout'));
const IcsPage = lazy(() => import('./pages/ics/IcsPage'));
const IcsSectionIndexPage = lazy(() => import('./pages/ics/IcsSectionIndexPage'));
const IcsTopicPage = lazy(() => import('./pages/ics/IcsTopicPage'));
const IcsSpecificBlockPage = lazy(() => import('./pages/ics/IcsSpecificBlockPage'));
const IcsCatalaJuridicPage = lazy(() => import('./pages/ics/IcsCatalaJuridicPage'));

function buildGeneralitatRoutes(prefix = '') {
  return [
    <Route key={`${prefix}-be-root`} path={`${prefix}/bloc/business-english`} element={<Navigate to={`${prefix}/bloc/business-english/fitxes`} replace />} />,
    <Route key={`${prefix}-be-fitxes`} path={`${prefix}/bloc/business-english/fitxes`} element={<BusinessEnglishFitxes />} />,
    <Route key={`${prefix}-be-fitxa`} path={`${prefix}/bloc/business-english/fitxes/:fitxaId`} element={<BusinessEnglishFitxaPage />} />,
    <Route key={`${prefix}-be-fitxa-seccio`} path={`${prefix}/bloc/business-english/fitxes/:fitxaId/:seccio`} element={<BusinessEnglishFitxaPage />} />,
    <Route key={`${prefix}-schema`} path={`${prefix}/bloc/:blocId/:temaId/esquemes/:schemaName`} element={<SchemaViewer />} />,
    <Route key={`${prefix}-diagram-viewer`} path={`${prefix}/diagram-viewer/:blocId/:temaId/:punt`} element={<FullscreenDiagramViewer />} />,
    <Route key={`${prefix}-ask`} path={`${prefix}/bloc/:blocId/:temaId/ask/:punt`} element={<QuizRoutePage />} />,
    <Route key={`${prefix}-quiz`} path={`${prefix}/bloc/:blocId/tema/:temaId/preguntes/:punt`} element={<QuizRoutePage />} />,
    <Route key={`${prefix}-bloc-tema-seccio`} path={`${prefix}/bloc/:blocId/:temaId/:seccio`} element={<BlocPage />} />,
    <Route key={`${prefix}-bloc-root`} path={`${prefix}/bloc/:blocId`} element={<BlocPage />} />,
    <Route key={`${prefix}-annex`} path={`${prefix}/annex/:annexId`} element={<AnnexPage />} />,
    <Route key={`${prefix}-test-normativa`} path={`${prefix}/annexos/test-normativa`} element={<TestNormativaPage />} />,
    <Route key={`${prefix}-test-examen`} path={`${prefix}/annexos/test-examen`} element={<TestExamenPage />} />,
    <Route key={`${prefix}-autoavaluacions`} path={`${prefix}/autoavaluacions`} element={<AutoavaluacioPage />} />,
    <Route key={`${prefix}-cultura`} path={`${prefix}/annexos/cultura-catalana`} element={<CulturaCatalanaPage />} />,
    <Route key={`${prefix}-historia`} path={`${prefix}/annexos/cultura-catalana/historia`} element={<HistoriaCatalanaPage />} />,
    <Route key={`${prefix}-literatura`} path={`${prefix}/annexos/cultura-catalana/literatura`} element={<LiteraturaCatalanaPage />} />,
    <Route key={`${prefix}-arts`} path={`${prefix}/annexos/cultura-catalana/arts`} element={<ArtsPage />} />,
    <Route key={`${prefix}-agenda`} path={`${prefix}/annexos/cultura-catalana/agenda`} element={<AgendaCulturalPage />} />,
    <Route key={`${prefix}-be-practice`} path={`${prefix}/business-english/internal-correspondence/practice`} element={<InternalCorrespondencePractice />} />,
    <Route key={`${prefix}-be-context`} path={`${prefix}/business-english/internal-correspondence/context/:section/:id`} element={<InternalCorrespondenceContext />} />,
    <Route key={`${prefix}-forum-redirect`} path={`${prefix}/forum`} element={<Navigate to={`${prefix}/annexos/test-normativa`} replace />} />,
  ];
}

export default function App() {
  const sidebarCollapsed = useAppStore((state) => state.sidebarCollapsed);
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isIcsRoute = location.pathname === '/ics' || location.pathname.startsWith('/ics/');
  const isStandaloneExplanationRoute = location.pathname.startsWith('/explicacio/bloc/');
  const showHomeSelectorSidebar = location.pathname === '/';

  const appRoutes = (
    <Routes>
      <Route path="/" element={<HomeSelectorPage />} />
      <Route path="/explicacio/bloc/:bloc/tema/:tema/punt/:punt" element={<ExplicacioStandalone />} />
      <Route path="/ics/*" element={<IcsLayout />}>
        <Route index element={<IcsPage />} />
        <Route path="transversal" element={<IcsSectionIndexPage section="transversal" />} />
        <Route path="transversal/:temaId" element={<IcsTopicPage section="transversal" />} />
        <Route path="especific" element={<IcsSectionIndexPage section="especific" />} />
        <Route path="especific/:blocId" element={<IcsSpecificBlockPage />} />
        <Route path="especific/:blocId/:temaId" element={<IcsTopicPage section="especific" />} />
        <Route path="annexos/catala-juridic" element={<IcsCatalaJuridicPage />} />
        <Route path="annexos/test-normativa" element={<TestNormativaPage />} />
        <Route path="annexos/test-examen" element={<TestExamenPage />} />
        <Route path="*" element={<Navigate to="/ics" replace />} />
      </Route>
      <Route path="/generalitat" element={<Navigate to="/generalitat/bloc/bloc-1" replace />} />
      {buildGeneralitatRoutes('/generalitat')}
      {buildGeneralitatRoutes('')}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  if (isStandaloneExplanationRoute) {
    return (
      <ErrorBoundary>
        <main className="standalone-main-content">
          <Suspense fallback={<div className="loading"><p>Carregant contingut...</p></div>}>
            {appRoutes}
          </Suspense>
        </main>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className={`app-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''} ${isHomePage ? 'home-route' : ''}`}>
        {!isHomePage && (
          <header className="app-header">
            <div className="header-sidebar-area">
              <Link to="/" className="inici-link">Inici</Link>
            </div>
            <div className="header-content-area">
              <h1 className="app-title">ADMINISTRATIU GENERALITAT DE CATALUNYA</h1>
            </div>
          </header>
        )}

        {showHomeSelectorSidebar
          ? <HomeSidebar />
          : isIcsRoute
            ? <IcsSidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
            : <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />}

        <button
          className="sidebar-toggle-btn"
          onClick={toggleSidebar}
          aria-label={sidebarCollapsed ? 'Obrir barra lateral' : 'Tancar barra lateral'}
          title={sidebarCollapsed ? 'Obrir navegació' : 'Tancar navegació'}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sidebar-toggle-chevron"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <main className="main-content">
          <Suspense fallback={<div className="loading"><p>Carregant contingut...</p></div>}>
            {appRoutes}
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}
