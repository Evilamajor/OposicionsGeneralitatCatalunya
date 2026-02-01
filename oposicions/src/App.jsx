import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages representing major blocks of the opposition syllabus.
import AdministrativeProcedure from './pages/AdministrativeProcedure.jsx';
import PublicProcurement from './pages/PublicProcurement.jsx';
import CivilServiceLaw from './pages/CivilServiceLaw.jsx';
import AdministrativeOrganization from './pages/AdministrativeOrganization.jsx';
import Transparency from './pages/Transparency.jsx';
import DigitalAdministration from './pages/DigitalAdministration.jsx';

// The root component defines the routing structure for the study platform.
// It mirrors the routing approach used in the BusinessEnglish app but
// points to pages relevant for opposition preparation.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdministrativeProcedure />} />
        <Route path="/administrative-procedure" element={<AdministrativeProcedure />} />
        <Route path="/public-procurement" element={<PublicProcurement />} />
        <Route path="/civil-service-law" element={<CivilServiceLaw />} />
        <Route path="/administrative-organization" element={<AdministrativeOrganization />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/digital-administration" element={<DigitalAdministration />} />
      </Routes>
    </Router>
  );
}

export default App;
