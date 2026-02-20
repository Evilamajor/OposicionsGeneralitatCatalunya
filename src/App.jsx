import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import './App.css';

import Sidebar from './components/Sidebar';

import WelcomePanel from './components/WelcomePanel';
import BlocPage from './components/BlocPage';
import AnnexPage from './components/AnnexPage';
import SchemaViewer from './components/SchemaViewer';
import DiagramViewer from './components/DiagramViewer';
import FullscreenDiagramViewer from './components/FullscreenDiagramViewer';
import QuizRoutePage from './components/QuizRoutePage';
import ForumPage from './pages/ForumPage';
import CulturaCatalanaPage from './pages/CulturaCatalanaPage';
import HistoriaCatalanaPage from './pages/HistoriaCatalanaPage';
import LiteraturaCatalanaPage from './pages/LiteraturaCatalanaPage';
import ArtsPage from './pages/ArtsPage';
import AgendaCulturalPage from './pages/AgendaCulturalPage';
import InternalCorrespondencePractice from './components/business-english/InternalCorrespondencePractice';
import InternalCorrespondenceContext from './components/business-english/InternalCorrespondenceContext';
import BusinessEnglishFitxes from './components/BusinessEnglishFitxes';
import BusinessEnglishFitxaPage from './components/business-english/BusinessEnglishFitxaPage';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Auto-collapse when navigating into a bloc, annex, or forum
  useEffect(() => {
    const isContentRoute = /^\/(bloc|annex|forum|annexos|diagram-viewer)/.test(location.pathname);
    if (isContentRoute) {
      setSidebarCollapsed(true);
    }
  }, [location.pathname]);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  return (
    <div className={`app-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <header className="app-header">
        <div className="header-sidebar-area">
          <Link to="/" className="inici-link">Inici</Link>
        </div>
        <div className="header-content-area">
          <h1 className="app-title">ADMINISTRATIU GENERALITAT DE CATALUNYA</h1>
        </div>
      </header>

      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

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
          <Route path="/" element={<WelcomePanel />} />
          <Route path="/bloc/business-english" element={<Navigate to="/bloc/business-english/fitxes" replace />} />
          <Route path="/bloc/business-english/fitxes" element={<BusinessEnglishFitxes />} />
          <Route path="/bloc/business-english/fitxes/:fitxaId" element={<BusinessEnglishFitxaPage />} />
          <Route path="/bloc/business-english/fitxes/:fitxaId/:seccio" element={<BusinessEnglishFitxaPage />} />
          <Route path="/bloc/:blocId/:temaId/esquemes/:schemaName" element={<SchemaViewer />} />
          <Route path="/diagram-viewer/:blocId/:temaId/:punt" element={<FullscreenDiagramViewer />} />
          <Route path="/bloc/:blocId/fitxes/:fitxaId" element={<DiagramViewer />} />
          <Route path="/bloc/:blocId/tema/:temaId/preguntes/:punt" element={<QuizRoutePage />} />
          <Route path="/bloc/:blocId/:temaId/:seccio" element={<BlocPage />} />
          <Route path="/bloc/:blocId" element={<BlocPage />} />
          <Route path="/annex/:annexId" element={<AnnexPage />} />
          <Route path="/annexos/cultura-catalana" element={<CulturaCatalanaPage />} />
          <Route path="/annexos/cultura-catalana/historia" element={<HistoriaCatalanaPage />} />
          <Route path="/annexos/cultura-catalana/literatura" element={<LiteraturaCatalanaPage />} />
          <Route path="/annexos/cultura-catalana/arts" element={<ArtsPage />} />
          <Route path="/annexos/cultura-catalana/agenda" element={<AgendaCulturalPage />} />
          <Route path="/business-english/internal-correspondence/practice" element={<InternalCorrespondencePractice />} />
          <Route path="/business-english/internal-correspondence/context/:section/:id" element={<InternalCorrespondenceContext />} />
          <Route path="/forum" element={<ForumPage />} />
        </Routes>
      </main>
    </div>
  );
}
