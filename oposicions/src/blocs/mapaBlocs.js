import ProcedimentExplicacio from './procedimentAdministratiu/index.jsx';
import ProcedimentFlashcards from './procedimentAdministratiu/flashcards.jsx';
import ProcedimentCasos from './procedimentAdministratiu/casos.jsx';
import ProcedimentMaterials from './procedimentAdministratiu/materials.jsx';

const mapaBlocs = {
  'dret-administratiu-general': {
    '5': {
      titol: 'Acte administratiu',
      explicacio: 'html',
      flashcards: 'html',
      casos: 'html',
      materials: 'html',
    },

    '6': {
      titol: 'Nul·litat i anul·labilitat',
      explicacio: 'html',
      flashcards: 'html',
      casos: 'html',
      materials: 'html',
    },

    '7': {
      titol: 'Procediment administratiu comú',
      explicacio: ProcedimentExplicacio,
      flashcards: ProcedimentFlashcards,
      casos: ProcedimentCasos,
      materials: ProcedimentMaterials,
    },
  },
};

export default mapaBlocs;
