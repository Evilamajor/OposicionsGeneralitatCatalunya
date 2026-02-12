import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Sidebar from './components/Sidebar';
import BlocPage from './components/BlocPage';
import WelcomePanel from './components/WelcomePanel';
import AnnexPage from './components/AnnexPage';

export default function App() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-sidebar-area">
          <Link to="/" className="inici-link">Inici</Link>
        </div>
        <div className="header-content-area">
          <h1 className="app-title">ADMINISTRATIU GENERALITAT DE CATALUNYA</h1>
        </div>
      </header>

      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<WelcomePanel />} />
          <Route path="/bloc/:blocId/:temaId/:seccio" element={<BlocPage />} />
          <Route path="/bloc/:blocId/:temaId" element={<BlocPage />} />
          <Route path="/bloc/:blocId" element={<BlocPage />} />
          <Route path="/annex/:annexId" element={<AnnexPage />} />
        </Routes>
      </main>
    </div>
  );
}
