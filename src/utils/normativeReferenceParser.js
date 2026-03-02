import { inlineReferencePatterns, normativeReferenceTypes } from '../data/normativaData';

const pushMatch = (collector, start, end, tipus, referencia, label) => {
  collector.push({
    start,
    end,
    tipus,
    referencia,
    label,
  });
};

const dedupeAndSortMatches = (matches) => {
  const sorted = [...matches].sort((a, b) => a.start - b.start || b.end - a.end);
  const result = [];
  let lastEnd = -1;

  sorted.forEach((match) => {
    if (match.start < lastEnd) return;
    result.push(match);
    lastEnd = match.end;
  });

  return result;
};

const collectRegexMatches = (text, regex, mapper) => {
  const matches = [];
  for (const match of text.matchAll(regex)) {
    const normalized = mapper(match);
    if (!normalized) continue;
    matches.push(normalized);
  }
  return matches;
};

export const parseNormativeReferences = (text = '') => {
  const candidates = [];

  const stcMatches = collectRegexMatches(text, inlineReferencePatterns.stc, (match) => {
    const full = match[0];
    const start = match.index ?? -1;
    if (start < 0) return null;

    const referencia = `${match[1]}/${match[2]}`;
    return {
      start,
      end: start + full.length,
      tipus: normativeReferenceTypes.STC,
      referencia,
      label: `STC ${referencia}`,
    };
  });

  const articleWithTypeMatches = collectRegexMatches(text, inlineReferencePatterns.articleWithType, (match) => {
    const full = match[0];
    const start = match.index ?? -1;
    if (start < 0) return null;

    const referencia = match[1];
    const tipus = String(match[2] || '').toUpperCase();
    if (!referencia || !tipus) return null;

    return {
      start,
      end: start + full.length,
      tipus,
      referencia,
      label: `Art. ${referencia} ${tipus}`,
    };
  });

  const articleBareTypeMatches = collectRegexMatches(text, inlineReferencePatterns.articleBareType, (match) => {
    const full = match[0];
    const start = match.index ?? -1;
    if (start < 0) return null;

    const referencia = match[1];
    const tipus = String(match[2] || '').toUpperCase();
    if (!referencia || !tipus) return null;

    return {
      start,
      end: start + full.length,
      tipus,
      referencia,
      label: `Art. ${referencia} ${tipus}`,
    };
  });

  const loMatches = collectRegexMatches(text, inlineReferencePatterns.lo, (match) => {
    const full = match[0];
    const start = match.index ?? -1;
    if (start < 0) return null;

    const referencia = match[1];
    return {
      start,
      end: start + full.length,
      tipus: normativeReferenceTypes.LO,
      referencia,
      label: `LO ${referencia}`,
    };
  });

  stcMatches.forEach((match) => pushMatch(candidates, match.start, match.end, match.tipus, match.referencia, match.label));
  articleWithTypeMatches.forEach((match) => pushMatch(candidates, match.start, match.end, match.tipus, match.referencia, match.label));
  articleBareTypeMatches.forEach((match) => pushMatch(candidates, match.start, match.end, match.tipus, match.referencia, match.label));
  loMatches.forEach((match) => pushMatch(candidates, match.start, match.end, match.tipus, match.referencia, match.label));

  return dedupeAndSortMatches(candidates);
};
