import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Sidebar from './components/Sidebar';
import BlocPage from './components/BlocPage';
import WelcomePanel from './components/WelcomePanel';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={`app-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <header className="app-header">
        <button
          className="sidebar-toggle"
          aria-label={sidebarCollapsed ? 'Open sidebar' : 'Close sidebar'}
          aria-expanded={!sidebarCollapsed}
          onClick={() => setSidebarCollapsed((s) => !s)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <h1 className="app-title">Oposicions — Blocs</h1>
      </header>

      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((s) => !s)} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<WelcomePanel />} />
          <Route path="/bloc/:blocId" element={<BlocPage />} />
          <Route path="/bloc/:blocId/:seccio" element={<BlocPage />} />

        </Routes>
      </main>
    </div>
  );
}
