import { Routes, Route } from 'react-router-dom';
import LayoutPrincipal from './components/LayoutPrincipal.jsx';

// Procediment Administratiu – vistes principals
import ProcedimentAdministratiu from './blocs/procedimentAdministratiu/index.jsx';
import ProcedimentApartat from './blocs/procedimentAdministratiu/apartat.jsx';
import ProcedimentFlashcards from './blocs/procedimentAdministratiu/flashcards.jsx';
import ProcedimentCasos from './blocs/procedimentAdministratiu/casos.jsx';
import ProcedimentMaterials from './blocs/procedimentAdministratiu/materials.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPrincipal />}>

        {/* Pàgina d'inici */}
        <Route
          index
          element={<div>Benvingut a la plataforma d’estudi d’oposicions.</div>}
        />

        {/* Procediment Administratiu */}
        <Route path="procediment">
          {/* Índex del temari */}
          <Route index element={<ProcedimentAdministratiu />} />

          {/* Apartats del temari */}
          <Route path="apartat/:id" element={<ProcedimentApartat />} />

          {/* Modes d’estudi */}
          <Route path="flashcards" element={<ProcedimentFlashcards />} />
          <Route path="casos" element={<ProcedimentCasos />} />
          <Route path="materials" element={<ProcedimentMaterials />} />
        </Route>

        {/* Altres blocs (preparats, però no desenvolupats) */}
        <Route
          path="funcio-publica"
          element={<div>Funció Pública (pendent de desenvolupament)</div>}
        />

        <Route
          path="contractacio-publica"
          element={<div>Contractació Pública (pendent de desenvolupament)</div>}
        />

      </Route>
    </Routes>
  );
}

export default App;
