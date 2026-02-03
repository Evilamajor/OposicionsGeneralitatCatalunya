import ProcedimentExplicacio from './procedimentAdministratiu/index.jsx';
import ProcedimentFlashcards from './procedimentAdministratiu/flashcards.jsx';
import ProcedimentCasos from './procedimentAdministratiu/casos.jsx';
import ProcedimentMaterials from './procedimentAdministratiu/materials.jsx';

/**
 * Mapa que relaciona:
 * blocId → temaId → secció → component
 *
 * Només cal omplir els temes que existeixen.
 * La resta poden quedar buits o amb placeholders.
 */
const mapaBlocs = {
  bloc2: {
    tema7: {
      explicacio: ProcedimentExplicacio,
      flashcards: ProcedimentFlashcards,
      casos: ProcedimentCasos,
      links: ProcedimentMaterials,
    },
  },
};

export default mapaBlocs;
