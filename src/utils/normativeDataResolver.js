import { CEArticles } from '../data/constitucioCE';
import { EACArticles } from '../data/eac2006';
import { LOData } from '../data/lleisOrganiques';
import { jurisprudenciaTC } from '../data/jurisprudenciaTC';
import { normativaContent } from '../data/normativaContent';
import { buildNormativaHeader, buildNormativaKey } from './normativeReferenceFormatter.js';
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

const buildHeader = (tipus, referencia) => buildNormativaHeader(tipus, referencia);
const buildKey = (tipus, referencia) => buildNormativaKey(tipus, referencia);

const mapCentralEntry = (entry, fallbackTitle) => {
  if (!entry) return null;

  const oppositionPoints = Array.isArray(entry.oppositionPoints)
    ? entry.oppositionPoints.filter(Boolean)
    : [];

  return {
    titol: entry.titol || entry.title || fallbackTitle,
    queRegula: entry.queRegula || entry.summary || '',
    ideaClau: entry.ideaClau || entry.keyIdea || oppositionPoints[0] || '',
    contextTemari: entry.contextTemari || entry.context || '',
    clauExamen: entry.clauExamen || entry.examNote || oppositionPoints.slice(1).join(' ') || '',
    errorHabitual: entry.errorHabitual || '',
  };
};

const buildDirectKeyFallback = (entryKey) => applyNormativaTemplate({
  ...(fallbackByType.CE || {}),
  titol: String(entryKey || '').trim() || 'Referència normativa',
  queRegula: 'Referència normativa pendent de síntesi pedagògica.',
  ideaClau: 'Relaciona aquesta referència amb el punt del temari on apareix.',
  contextTemari: 'Entrada detectada dins del contingut injectat de l esquema o explicació.',
  clauExamen: 'Revisa la funció concreta de la norma dins del Tema 13.',
});

export const getNormativeInfo = (tipus, referencia) => {
  const normalizedType = String(tipus || '').toUpperCase();
  const normalizedRef = String(referencia || '').trim();

  const byType = {
    CE: CEArticles[normalizedRef],
    EAC: EACArticles[normalizedRef],
    LO: LOData[normalizedRef],
    STC: jurisprudenciaTC[normalizedRef],
  };

  const headerKey = buildHeader(normalizedType, normalizedRef);
  const lookupKey = buildKey(normalizedType, normalizedRef);
  const centralizedEntry = mapCentralEntry(normativaContent?.[lookupKey], headerKey);
  const source = centralizedEntry || byType[normalizedType];
  const fallback = applyNormativaTemplate({
    ...(fallbackByType[normalizedType] || fallbackByType.CE),
    titol: headerKey,
  });

  const merged = applyNormativaTemplate({
    ...fallback,
    ...(source || {}),
    titol: source?.titol || fallback.titol,
  });

  validateNormativaEntry(`${normalizedType}:${normalizedRef}`, merged);

  return merged;
};

export const getNormativeInfoByKey = (entryKey) => {
  const normalizedKey = String(entryKey || '').trim();
  const source = mapCentralEntry(normativaContent?.[normalizedKey], normalizedKey);
  const fallback = buildDirectKeyFallback(normalizedKey);
  const merged = applyNormativaTemplate({
    ...fallback,
    ...(source || {}),
    titol: source?.titol || fallback.titol,
  });

  validateNormativaEntry(`ENTRY:${normalizedKey}`, merged);

  return merged;
};
