import { Routes, Route } from 'react-router-dom';

import './App.css';

import Sidebar from './components/Sidebar';
import BlocPage from './components/BlocPage';
import WelcomePanel from './components/WelcomePanel';

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<WelcomePanel />} />
          <Route path="/bloc/:blocId" element={<BlocPage />} />
        </Routes>
      </main>
    </div>
  );
}
