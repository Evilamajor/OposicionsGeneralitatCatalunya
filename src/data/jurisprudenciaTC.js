import { normalizeNormativaDataset } from '../templates/normativaTemplate.js';

const rawJurisprudenciaTC = {
  '6/1981': {
    titol: 'STC 6/1981 (1981)',
    queRegula: 'Força normativa de la Constitució com a norma jurídica directament aplicable.',
    ideaClau: 'Supremacia constitucional i vinculació de tots els poders públics.',
    contextTemari: 'Base del Tema 1 en jerarquia normativa i control constitucional.',
    clauExamen: 'Relacionar supremacia constitucional amb efectes de les decisions del TC.',
    errorHabitual: 'Tractar la Constitució com a declaració política sense eficàcia jurídica directa.',
  },
  '11/1981': {
    titol: 'STC 11/1981 (1981)',
    queRegula: 'Doctrina del contingut essencial dels drets fonamentals.',
    ideaClau: 'La regulació legal dels drets no pot buidar-ne el nucli essencial.',
    contextTemari: 'Rellevant en garanties dels drets del títol I CE.',
    clauExamen: 'Pregunta típica sobre límit material del legislador en drets fonamentals.',
    errorHabitual: 'Confondre limitació proporcional del dret amb vulneració del contingut essencial.',
  },
  '32/1981': {
    titol: 'STC 32/1981 (1981)',
    queRegula: 'Garantia constitucional de l’autonomia local en el marc de l’Estat territorial.',
    ideaClau: 'L’autonomia local és garantia institucional, no simple delegació estatal.',
    contextTemari: 'Connecta amb articles 137, 140, 141 i 142 CE.',
    clauExamen: 'Distingir autonomia local constitucional de competències atribuïdes per llei.',
    errorHabitual: 'Equiparar autonomia local amb sobirania política pròpia.',
  },
  '76/1983': {
    titol: 'STC 76/1983 (1983)',
    queRegula: 'Límits de l’harmonització estatal i protecció de l’autonomia territorial.',
    ideaClau: 'L’Estat no pot buidar l’autogovern autonòmic sota cobertura harmonitzadora.',
    contextTemari: 'Clau en repartiment competencial Estat-CCAA.',
    clauExamen: 'Pregunta recurrent sobre abast de les bases estatals i desenvolupament autonòmic.',
    errorHabitual: 'Confondre harmonització excepcional amb competència estatal ordinària.',
  },
  '31/2010': {
    titol: 'STC 31/2010 (2010)',
    queRegula: 'Control de constitucionalitat de l’EAC 2006 i delimitació de la seva eficàcia jurídica.',
    ideaClau: 'Interpreta l’Estatut conforme a la CE i fixa límits en matèria institucional i competencial.',
    contextTemari: 'Eix central del Tema 2 sobre naturalesa jurídica de l’EAC i bloc de constitucionalitat.',
    clauExamen: 'Identificar àmbits interpretats o anul·lats i el seu impacte en el sistema autonòmic.',
    errorHabitual: 'Llegir la sentència com anul·lació global de l’Estatut en lloc de control selectiu.',
  },
};

export const jurisprudenciaTC = normalizeNormativaDataset(rawJurisprudenciaTC);
