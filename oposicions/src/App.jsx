import { Routes, Route } from 'react-router-dom';
import LayoutPrincipal from './components/LayoutPrincipal.jsx';

import Home from './pages/Home.jsx';
import Tema from './pages/Tema.jsx';

import SeccioExplicacio from './pages/seccions/SeccioExplicacio.jsx';
import SeccioFlashcards from './pages/seccions/SeccioFlashcards.jsx';
import SeccioCasos from './pages/seccions/SeccioCasos.jsx';
import SeccioLinks from './pages/seccions/SeccioLinks.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPrincipal />}>
        <Route index element={<Home />} />

        <Route path=":blocId/:temaId" element={<Tema />}>
          <Route index element={<SeccioExplicacio />} />
          <Route path="flashcards" element={<SeccioFlashcards />} />
          <Route path="casos" element={<SeccioCasos />} />
          <Route path="links" element={<SeccioLinks />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
