import { CEArticles } from './constitucioCE';

export const legalStudyRegistry = {
  CE: {
    label: 'Constitució Espanyola de 1978',
    articles: CEArticles,
  },
};

export const jurisprudenciaConstitucional = {
  '31/2010': {
    titol: 'STC 31/2010 (2010)',
    queRegula: 'Controla la constitucionalitat de l’EAC 2006 i delimita l’abast de diversos preceptes.',
    ideaClau: 'Interpreta l’Estatut conforme a la CE i fixa límits institucionals i competencials.',
    contextTemari: 'Sentència de referència del Tema 2 sobre naturalesa jurídica de l’EAC.',
    clauExamen: 'Identificar els principals criteris doctrinals de la sentència i el seu impacte.',
    errorHabitual: 'Presentar-la com una anul·lació global de l’Estatut en lloc d’un control selectiu.',
  },
};

export const jurisprudenciaFallbackText = 'No hi ha jurisprudència constitucional estructural rellevant per a aquest punt. L’estudi es centra en preceptes constitucionals.';

export const buildDefaultMiniCheck = ({ articleLabel, articleData }) => ({
  articleClau: articleLabel || 'Per identificar segons el contingut del punt',
  principiNuclear: articleData?.ideaClau || 'Concretar el principi constitucional que ordena el punt.',
  errorHabitual: articleData?.errorHabitual || 'Memoritzar el número d’article sense entendre exactament què regula.',
  diferenciaConcepte: articleData?.contextTemari || 'Relacionar la norma amb el context del temari per evitar confusions conceptuals.',
});
