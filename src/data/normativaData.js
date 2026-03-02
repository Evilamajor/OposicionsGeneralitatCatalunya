export const normativeReferenceTypes = Object.freeze({
  CE: 'CE',
  EAC: 'EAC',
  STC: 'STC',
  LO: 'LO',
});

export const normativeTypeAliases = Object.freeze({
  ce: normativeReferenceTypes.CE,
  eac: normativeReferenceTypes.EAC,
  stc: normativeReferenceTypes.STC,
  lo: normativeReferenceTypes.LO,
});

export const inlineReferencePatterns = Object.freeze({
  stc: /\bSTC\s*(\d+)\s*\/\s*(\d{4})\b/gi,
  articleWithType: /\b(?:art(?:icle)?(?:s)?\.?\s*)(\d+(?:\.\d+){0,3})\s*(CE|EAC)\b/gi,
  articleBareType: /\b(\d+(?:\.\d+){0,3})\s*(CE|EAC)\b/gi,
  lo: /\bLO\s*(\d+\/(?:19|20)\d{2})\b/gi,
});
