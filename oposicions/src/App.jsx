import { Routes, Route } from 'react-router-dom';

import './App.css';

import Sidebar from './components/Sidebar';
import BlocPage from './components/BlocPage';
import WelcomePanel from './components/WelcomePanel';

export default function App() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1 className="app-title">Administratiu Generalitat de Catalunya</h1>
      </header>

      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<WelcomePanel />} />
          <Route path="/bloc/:blocId" element={<BlocPage />} />
          <Route path="/bloc/:blocId/:temaId/:seccio" element={<BlocPage />} />
        </Routes>
      </main>
    </div>
  );
}
