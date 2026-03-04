export const buildNormativaReference = (type, reference, options = {}) => {
  const normalizedType = String(type || '').toUpperCase();
  const normalizedRef = String(reference || '').trim();
  const articleSeparator = options.compactArticle ? '' : ' ';

  if (normalizedType === 'CE') return `Art.${articleSeparator}${normalizedRef} CE`;
  if (normalizedType === 'EAC') return `Art.${articleSeparator}${normalizedRef} EAC`;
  if (normalizedType === 'LO') return `LO ${normalizedRef}`;
  return `STC ${normalizedRef}`;
};

export const buildNormativaKey = (type, reference) => (
  buildNormativaReference(type, reference, { compactArticle: true })
);

export const buildNormativaHeader = (type, reference) => (
  buildNormativaReference(type, reference)
);

export const buildNormativaTitle = (type, reference) => {
  const normalizedType = String(type || '').toUpperCase();
  const normalizedRef = String(reference || '').trim();

  if (normalizedType === 'CE') return `Article ${normalizedRef} Constitució Espanyola`;
  if (normalizedType === 'EAC') return `Article ${normalizedRef} Estatut d'Autonomia de Catalunya`;
  if (normalizedType === 'LO') return `LO ${normalizedRef} (llei orgànica)`;
  return `STC ${normalizedRef} (Tribunal Constitucional)`;
};
