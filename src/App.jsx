import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import './App.css';

import Sidebar from './components/Sidebar';

import WelcomePanel from './components/WelcomePanel';
import BlocPage from './components/BlocPage';
import AnnexPage from './components/AnnexPage';
import SchemaViewer from './components/SchemaViewer';
import DiagramViewer from './components/DiagramViewer';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Auto-collapse when navigating into a bloc or annex
  useEffect(() => {
    const isContentRoute = /^\/(bloc|annex)\//.test(location.pathname);
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
          <Route path="/bloc/:blocId/:temaId/esquemes/:schemaName" element={<SchemaViewer />} />
          <Route path="/bloc/:blocId/fitxes/:fitxaId" element={<DiagramViewer />} />
          <Route path="/bloc/:blocId/:temaId/:seccio" element={<BlocPage />} />
          <Route path="/bloc/:blocId/:seccio" element={<BlocPage />} />
          <Route path="/bloc/:blocId" element={<BlocPage />} />
          <Route path="/annex/:annexId" element={<AnnexPage />} />
        </Routes>
      </main>
    </div>
  );
}
