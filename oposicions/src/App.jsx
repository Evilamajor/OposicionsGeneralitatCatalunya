import { Routes, Route } from 'react-router-dom';
import LayoutPrincipal from './components/LayoutPrincipal.jsx';

// Import bloc components and their nested sections and subtemes
import ProcedimentAdministratiu from './blocs/procedimentAdministratiu/index.jsx';
import SeccioProcedimentAdministratiu from './blocs/procedimentAdministratiu/seccio1/index.jsx';
import SubtemaProcedimentAdministratiu1 from './blocs/procedimentAdministratiu/seccio1/subtema1.jsx';
import SubtemaProcedimentAdministratiu2 from './blocs/procedimentAdministratiu/seccio1/subtema2.jsx';

import ContractacioPublica from './blocs/contractacioPublica/index.jsx';
import SeccioContractacioPublica from './blocs/contractacioPublica/seccio1/index.jsx';
import SubtemaContractacioPublica1 from './blocs/contractacioPublica/seccio1/subtema1.jsx';
import SubtemaContractacioPublica2 from './blocs/contractacioPublica/seccio1/subtema2.jsx';

import FuncioPublica from './blocs/funcioPublica/index.jsx';
import SeccioFuncioPublica from './blocs/funcioPublica/seccio1/index.jsx';
import SubtemaFuncioPublica1 from './blocs/funcioPublica/seccio1/subtema1.jsx';
import SubtemaFuncioPublica2 from './blocs/funcioPublica/seccio1/subtema2.jsx';

import OrganitzacioAdministrativa from './blocs/organitzacioAdministrativa/index.jsx';
import SeccioOrganitzacioAdministrativa from './blocs/organitzacioAdministrativa/seccio1/index.jsx';
import SubtemaOrganitzacioAdministrativa1 from './blocs/organitzacioAdministrativa/seccio1/subtema1.jsx';
import SubtemaOrganitzacioAdministrativa2 from './blocs/organitzacioAdministrativa/seccio1/subtema2.jsx';

import Transparencia from './blocs/transparencia/index.jsx';
import SeccioTransparencia from './blocs/transparencia/seccio1/index.jsx';
import SubtemaTransparencia1 from './blocs/transparencia/seccio1/subtema1.jsx';
import SubtemaTransparencia2 from './blocs/transparencia/seccio1/subtema2.jsx';

import AdministracioDigital from './blocs/administracioDigital/index.jsx';
import SeccioAdministracioDigital from './blocs/administracioDigital/seccio1/index.jsx';
import SubtemaAdministracioDigital1 from './blocs/administracioDigital/seccio1/subtema1.jsx';
import SubtemaAdministracioDigital2 from './blocs/administracioDigital/seccio1/subtema2.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPrincipal />}> 
        {/* Pàgina d'inici */}
        <Route index element={<div>Benvingut a la plataforma d'estudi d'oposicions.</div>} />
        {/* Bloc Procediment Administratiu */}
        <Route path="procediment-administratiu" element={<ProcedimentAdministratiu />}>
          <Route index element={<div>Introducció al procediment administratiu.</div>} />
          <Route path="seccio1" element={<SeccioProcedimentAdministratiu />}>
            <Route path="subtema1" element={<SubtemaProcedimentAdministratiu1 />} />
            <Route path="subtema2" element={<SubtemaProcedimentAdministratiu2 />} />
          </Route>
        </Route>
        {/* Bloc Contractació Pública */}
        <Route path="contractacio-publica" element={<ContractacioPublica />}>
          <Route index element={<div>Introducció a la contractació pública.</div>} />
          <Route path="seccio1" element={<SeccioContractacioPublica />}>
            <Route path="subtema1" element={<SubtemaContractacioPublica1 />} />
            <Route path="subtema2" element={<SubtemaContractacioPublica2 />} />
          </Route>
        </Route>
        {/* Bloc Funció Pública */}
        <Route path="funcio-publica" element={<FuncioPublica />}>
          <Route index element={<div>Introducció a la funció pública.</div>} />
          <Route path="seccio1" element={<SeccioFuncioPublica />}>
            <Route path="subtema1" element={<SubtemaFuncioPublica1 />} />
            <Route path="subtema2" element={<SubtemaFuncioPublica2 />} />
          </Route>
        </Route>
        {/* Bloc Organització Administrativa */}
        <Route path="organitzacio-administrativa" element={<OrganitzacioAdministrativa />}>
          <Route index element={<div>Introducció a l'organització administrativa.</div>} />
          <Route path="seccio1" element={<SeccioOrganitzacioAdministrativa />}>
            <Route path="subtema1" element={<SubtemaOrganitzacioAdministrativa1 />} />
            <Route path="subtema2" element={<SubtemaOrganitzacioAdministrativa2 />} />
          </Route>
        </Route>
        {/* Bloc Transparència */}
        <Route path="transparencia" element={<Transparencia />}>
          <Route index element={<div>Introducció a la transparència.</div>} />
          <Route path="seccio1" element={<SeccioTransparencia />}>
            <Route path="subtema1" element={<SubtemaTransparencia1 />} />
            <Route path="subtema2" element={<SubtemaTransparencia2 />} />
          </Route>
        </Route>
        {/* Bloc Administració Digital */}
        <Route path="administracio-digital" element={<AdministracioDigital />}>
          <Route index element={<div>Introducció a l'administració digital.</div>} />
          <Route path="seccio1" element={<SeccioAdministracioDigital />}>
            <Route path="subtema1" element={<SubtemaAdministracioDigital1 />} />
            <Route path="subtema2" element={<SubtemaAdministracioDigital2 />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;