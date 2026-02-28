import { CEArticles } from '../data/constitucioCE';
import { EACArticles } from '../data/eac2006';
import { LOData } from '../data/lleisOrganiques';
import { jurisprudenciaTC } from '../data/jurisprudenciaTC';
import { applyNormativaTemplate, validateNormativaEntry } from '../templates/normativaTemplate';

const fallbackByType = {
  CE: {
    titol: '',
    queRegula: 'Article constitucional pendent de síntesi pedagògica.',
    ideaClau: 'Revisa l’abast del precepte en el context del punt.',
    contextTemari: 'Connecta el precepte amb el punt del temari que estàs estudiant.',
    clauExamen: 'Pot aparèixer com a identificació de principi o garantia constitucional.',
    errorHabitual: '',
  },
  EAC: {
    titol: '',
    queRegula: 'Article estatutari pendent de síntesi pedagògica.',
    ideaClau: 'Relaciona’l amb el bloc de constitucionalitat CE–EAC.',
    contextTemari: 'Enllaça l’article amb l’organització institucional o el repartiment competencial.',
    clauExamen: 'Sovint es pregunta en clau de distribució competencial o institucional.',
    errorHabitual: '',
  },
  LO: {
    titol: '',
    queRegula: 'Llei orgànica pendent de síntesi pedagògica.',
    ideaClau: 'Identifica la seva funció de desplegament constitucional o estatutari.',
    contextTemari: 'Relaciona la llei orgànica amb el punt concret del bloc que estàs revisant.',
    clauExamen: 'Pregunta habitual de correspondència entre norma i matèria.',
    errorHabitual: '',
  },
  STC: {
    titol: '',
    queRegula: 'Sentència constitucional pendent de síntesi pedagògica.',
    ideaClau: 'Revisa la doctrina nuclear aplicada al tema.',
    contextTemari: 'Vincula la sentència amb la part del temari on delimita competències o drets.',
    clauExamen: 'Pot aparèixer com a pregunta de jurisprudència clàssica.',
    errorHabitual: '',
  },
};

const buildHeader = (tipus, referencia) => {
  if (tipus === 'CE') return `Art. ${referencia} CE`;
  if (tipus === 'EAC') return `Art. ${referencia} EAC`;
  if (tipus === 'LO') return `LO ${referencia}`;
  return `STC ${referencia}`;
};

export const getNormativeInfo = (tipus, referencia) => {
  const normalizedType = String(tipus || '').toUpperCase();
  const normalizedRef = String(referencia || '').trim();

  const byType = {
    CE: CEArticles[normalizedRef],
    EAC: EACArticles[normalizedRef],
    LO: LOData[normalizedRef],
    STC: jurisprudenciaTC[normalizedRef],
  };

  const source = byType[normalizedType];
  const fallback = applyNormativaTemplate({
    ...(fallbackByType[normalizedType] || fallbackByType.CE),
    titol: buildHeader(normalizedType, normalizedRef),
  });

  const merged = applyNormativaTemplate({
    ...fallback,
    ...(source || {}),
    titol: source?.titol || fallback.titol,
  });

  validateNormativaEntry(`${normalizedType}:${normalizedRef}`, merged);

  return merged;
};
