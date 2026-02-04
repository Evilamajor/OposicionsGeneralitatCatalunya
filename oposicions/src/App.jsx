import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlocList from './components/BlocList';
import BlocPage from './components/BlocPage';

// The top-level component defines the application routes.  It
// renders a list of blocks on the root path and a page for a
// specific block on the `/bloc/:blocId` path.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BlocList />} />
      <Route path="/bloc/:blocId" element={<BlocPage />} />
    </Routes>
  );
}