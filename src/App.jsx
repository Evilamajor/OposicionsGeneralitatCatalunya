import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { useState, useCallback } from 'react';

import './App.css';

import Sidebar from './components/Sidebar';
import HomeSidebar from './components/HomeSidebar';
import IcsSidebar from './pages/ics/IcsSidebar';

import BlocPage from './components/BlocPage';
import AnnexPage from './components/AnnexPage';
import SchemaViewer from './components/SchemaViewer';
import FullscreenDiagramViewer from './components/FullscreenDiagramViewer';
import QuizRoutePage from './components/QuizRoutePage';
import AutoavaluacioPage from './pages/AutoavaluacioPage';
import NoticiesPage from './pages/NoticiesPage';
import CatalaNivellCPage from './pages/CatalaNivellCPage';
import CulturaCatalanaPage from './pages/CulturaCatalanaPage';
import HistoriaCatalanaPage from './pages/HistoriaCatalanaPage';
import LiteraturaCatalanaPage from './pages/LiteraturaCatalanaPage';
import ArtsPage from './pages/ArtsPage';
import AgendaCulturalPage from './pages/AgendaCulturalPage';
import InternalCorrespondencePractice from './components/business-english/InternalCorrespondencePractice';
import InternalCorrespondenceContext from './components/business-english/InternalCorrespondenceContext';
import BusinessEnglishFitxes from './components/BusinessEnglishFitxes';
import BusinessEnglishFitxaPage from './components/business-english/BusinessEnglishFitxaPage';
import HomeSelectorPage from './pages/HomeSelectorPage';
import IcsLayout from './pages/ics/IcsLayout';
import IcsPage from './pages/ics/IcsPage';
import IcsSectionIndexPage from './pages/ics/IcsSectionIndexPage';
import IcsTopicPage from './pages/ics/IcsTopicPage';
import IcsSpecificBlockPage from './pages/ics/IcsSpecificBlockPage';
import IcsCatalaJuridicPage from './pages/ics/IcsCatalaJuridicPage';

function buildGeneralitatRoutes(prefix = '') {
  return [
    <Route key={`${prefix}-be-root`} path={`${prefix}/bloc/business-english`} element={<Navigate to={`${prefix}/bloc/business-english/fitxes`} replace />} />,
    <Route key={`${prefix}-be-fitxes`} path={`${prefix}/bloc/business-english/fitxes`} element={<BusinessEnglishFitxes />} />,
    <Route key={`${prefix}-be-fitxa`} path={`${prefix}/bloc/business-english/fitxes/:fitxaId`} element={<BusinessEnglishFitxaPage />} />,
    <Route key={`${prefix}-be-fitxa-seccio`} path={`${prefix}/bloc/business-english/fitxes/:fitxaId/:seccio`} element={<BusinessEnglishFitxaPage />} />,
    <Route key={`${prefix}-schema`} path={`${prefix}/bloc/:blocId/:temaId/esquemes/:schemaName`} element={<SchemaViewer />} />,
    <Route key={`${prefix}-diagram-viewer`} path={`${prefix}/diagram-viewer/:blocId/:temaId/:punt`} element={<FullscreenDiagramViewer />} />,
    <Route key={`${prefix}-quiz`} path={`${prefix}/bloc/:blocId/tema/:temaId/preguntes/:punt`} element={<QuizRoutePage />} />,
    <Route key={`${prefix}-bloc-tema-seccio`} path={`${prefix}/bloc/:blocId/:temaId/:seccio`} element={<BlocPage />} />,
    <Route key={`${prefix}-bloc-root`} path={`${prefix}/bloc/:blocId`} element={<BlocPage />} />,
    <Route key={`${prefix}-annex`} path={`${prefix}/annex/:annexId`} element={<AnnexPage />} />,
    <Route key={`${prefix}-catala-nivell-c`} path={`${prefix}/annexos/catala-nivell-c`} element={<CatalaNivellCPage />} />,
    <Route key={`${prefix}-autoavaluacions`} path={`${prefix}/autoavaluacions`} element={<AutoavaluacioPage />} />,
    <Route key={`${prefix}-noticies`} path={`${prefix}/noticies`} element={<NoticiesPage />} />,
    <Route key={`${prefix}-cultura`} path={`${prefix}/annexos/cultura-catalana`} element={<CulturaCatalanaPage />} />,
    <Route key={`${prefix}-historia`} path={`${prefix}/annexos/cultura-catalana/historia`} element={<HistoriaCatalanaPage />} />,
    <Route key={`${prefix}-literatura`} path={`${prefix}/annexos/cultura-catalana/literatura`} element={<LiteraturaCatalanaPage />} />,
    <Route key={`${prefix}-arts`} path={`${prefix}/annexos/cultura-catalana/arts`} element={<ArtsPage />} />,
    <Route key={`${prefix}-agenda`} path={`${prefix}/annexos/cultura-catalana/agenda`} element={<AgendaCulturalPage />} />,
    <Route key={`${prefix}-be-practice`} path={`${prefix}/business-english/internal-correspondence/practice`} element={<InternalCorrespondencePractice />} />,
    <Route key={`${prefix}-be-context`} path={`${prefix}/business-english/internal-correspondence/context/:section/:id`} element={<InternalCorrespondenceContext />} />,
    <Route key={`${prefix}-forum-redirect`} path={`${prefix}/forum`} element={<Navigate to={`${prefix}/noticies`} replace />} />,
  ];
}

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isIcsRoute = location.pathname === '/ics' || location.pathname.startsWith('/ics/');
  const showHomeSelectorSidebar = location.pathname === '/';

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  return (
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

      {/* Floating sidebar toggle */}
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
        <Routes>
          <Route path="/" element={<HomeSelectorPage />} />
          <Route path="/ics/*" element={<IcsLayout />}>
            <Route index element={<IcsPage />} />
            <Route path="transversal" element={<IcsSectionIndexPage section="transversal" />} />
            <Route path="transversal/:temaId" element={<IcsTopicPage section="transversal" />} />
            <Route path="especific" element={<IcsSectionIndexPage section="especific" />} />
            <Route path="especific/:blocId" element={<IcsSpecificBlockPage />} />
            <Route path="especific/:blocId/:temaId" element={<IcsTopicPage section="especific" />} />
            <Route path="annexos/catala-juridic" element={<IcsCatalaJuridicPage />} />
            <Route path="annexos/catala-nivell-c" element={<CatalaNivellCPage />} />
            <Route path="annexos/autoavaluacions" element={<AutoavaluacioPage />} />
            <Route path="annexos/noticies" element={<NoticiesPage />} />
            <Route path="*" element={<Navigate to="/ics" replace />} />
          </Route>
          <Route path="/generalitat" element={<Navigate to="/generalitat/bloc/bloc-1" replace />} />
          {buildGeneralitatRoutes('/generalitat')}
          {buildGeneralitatRoutes('')}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
