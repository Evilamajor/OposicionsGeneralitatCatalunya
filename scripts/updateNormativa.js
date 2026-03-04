const fs = require('fs/promises');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_ROOT = path.join(ROOT_DIR, 'public', 'content');
const NORMATIVA_PATH = path.join(ROOT_DIR, 'src', 'data', 'normativaContent.js');
const BLOCK_DIRS = ['bloc-1', 'bloc-2', 'bloc-3', 'bloc-4', 'bloc-5', 'bloc-6', 'bloc-7'];
const TEXT_EXTENSIONS = new Set(['.html', '.md', '.txt', '.json']);

const PATTERNS = [
  {
    type: 'CE',
    regex: /\b(?:Art\.?|Article)\s*(\d+(?:\.\d+)*)\s*CE\b/gi,
    buildKey: (reference) => `Art.${reference} CE`,
  },
  {
    type: 'EAC',
    regex: /\b(?:Art\.?|Article)\s*(\d+(?:\.\d+)*)\s*EAC\b/gi,
    buildKey: (reference) => `Art.${reference} EAC`,
  },
  {
    type: 'LO',
    regex: /\bLO\s+(\d{1,3}\/\d{4})\b/gi,
    buildKey: (reference) => `LO ${reference}`,
  },
  {
    type: 'STC',
    regex: /\bSTC\s+(\d{1,3}\/\d{4})\b/gi,
    buildKey: (reference) => `STC ${reference}`,
  },
];

const normalizeReference = (value) => String(value || '').trim();

const buildTitle = (type, reference) => {
  if (type === 'CE') return `Article ${reference} Constitució Espanyola`;
  if (type === 'EAC') return `Article ${reference} Estatut d'Autonomia de Catalunya`;
  if (type === 'LO') return `LO ${reference} (llei orgànica)`;
  return `STC ${reference} (Tribunal Constitucional)`;
};

const buildSummary = (type, reference) => {
  if (type === 'CE') {
    return `Recull el contingut principal de l'article ${reference} de la Constitució Espanyola.`;
  }
  if (type === 'EAC') {
    return `Defineix el contingut bàsic de l'article ${reference} de l'Estatut d'Autonomia de Catalunya.`;
  }
  if (type === 'LO') {
    return `Llei orgànica ${reference} que desplega preceptes constitucionals en la matèria corresponent.`;
  }
  return `Sentència del Tribunal Constitucional ${reference} que fixa doctrina rellevant en el tema estudiat.`;
};

const buildKeyIdea = (type, reference) => {
  if (type === 'LO') {
    return `Identifica la norma orgànica de referència per a l'àmbit regulat per la LO ${reference}.`;
  }
  if (type === 'STC') {
    return `Resumeix el criteri interpretatiu clau establert pel TC en la STC ${reference}.`;
  }
  return `Identifica el principi jurídic central de l'article ${reference}.`;
};

const buildExamNote = (type, reference) => {
  if (type === 'STC') {
    return `Pregunta habitual per vincular doctrina constitucional i any de resolució (${reference}).`;
  }
  if (type === 'LO') {
    return `Sovint es demana relacionar la LO ${reference} amb la matèria regulada.`;
  }
  return `Sovint es pregunta per ubicar l'article ${reference} i el seu títol.`;
};

const buildContextTemari = (context) => {
  if (!context || (!context.bloc && !context.tema)) {
    return 'Relaciona aquest precepte amb el bloc del temari on apareix citat.';
  }

  const blocLabel = context.bloc ? `Bloc ${context.bloc}` : '';
  const temaLabel = context.tema ? `Tema ${context.tema}` : '';
  const location = [blocLabel, temaLabel].filter(Boolean).join(' · ');

  return `Referència detectada a ${location}. Enllaça-la amb el punt estudiat.`;
};

const buildErrorHabitual = (type, reference) => {
  if (type === 'STC') {
    return `Confondre la STC ${reference} amb altres sentències de numeració similar.`;
  }
  if (type === 'LO') {
    return `Barrejar la LO ${reference} amb altres lleis orgàniques del mateix període.`;
  }
  return `Confondre l'article ${reference} amb altres preceptes del mateix títol.`;
};

const buildAutoEntry = ({ type, reference, context }) => ({
  title: buildTitle(type, reference),
  summary: buildSummary(type, reference),
  keyIdea: buildKeyIdea(type, reference),
  examNote: buildExamNote(type, reference),
  contextTemari: buildContextTemari(context),
  errorHabitual: buildErrorHabitual(type, reference),
});

const isTextFile = (filePath) => TEXT_EXTENSIONS.has(path.extname(filePath).toLowerCase());

const collectTextFiles = async (dirPath) => {
  let entries = [];

  try {
    entries = await fs.readdir(dirPath, { withFileTypes: true });
  } catch (error) {
    return [];
  }

  const results = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      return collectTextFiles(fullPath);
    }
    if (entry.isFile() && isTextFile(fullPath)) {
      return [fullPath];
    }
    return [];
  }));

  return results.flat();
};

const extractContextFromPath = (filePath) => {
  const blocMatch = filePath.match(/bloc-(\d+)/i);
  const temaMatch = filePath.match(/tema-(\d+)/i);

  return {
    bloc: blocMatch ? blocMatch[1] : null,
    tema: temaMatch ? String(Number(temaMatch[1])) : null,
  };
};

const detectReferences = async (filePath) => {
  let content = '';

  try {
    content = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    return [];
  }

  const matches = [];
  const context = extractContextFromPath(filePath);

  PATTERNS.forEach((pattern) => {
    pattern.regex.lastIndex = 0;
    let match = pattern.regex.exec(content);
    while (match) {
      const reference = normalizeReference(match[1]);
      if (reference) {
        matches.push({
          key: pattern.buildKey(reference),
          type: pattern.type,
          reference,
          context,
        });
      }
      match = pattern.regex.exec(content);
    }
  });

  return matches;
};

const formatEntry = (entry) => ([
  `    title: ${JSON.stringify(entry.title)},`,
  `    summary: ${JSON.stringify(entry.summary)},`,
  `    keyIdea: ${JSON.stringify(entry.keyIdea)},`,
  `    examNote: ${JSON.stringify(entry.examNote)},`,
  `    contextTemari: ${JSON.stringify(entry.contextTemari)},`,
  `    errorHabitual: ${JSON.stringify(entry.errorHabitual)},`,
]);

const buildAutoGeneratedSection = (entries) => {
  const keys = Object.keys(entries).sort((a, b) => a.localeCompare(b, 'ca'));

  if (keys.length === 0) {
    return [
      'export const autoGeneratedNormativa = {',
      '  // Entrades generades automàticament: actualitza amb scripts/updateNormativa.js',
      '};',
    ].join('\n');
  }

  const lines = ['export const autoGeneratedNormativa = {'];

  keys.forEach((key) => {
    const entryLines = formatEntry(entries[key]);
    lines.push(`  '${key}': {`);
    lines.push(...entryLines);
    lines.push('  },');
  });

  lines.push('};');
  return lines.join('\n');
};

const updateNormativaFile = async (autoEntries) => {
  const fileContent = await fs.readFile(NORMATIVA_PATH, 'utf8');
  const autoSectionRegex = /export const autoGeneratedNormativa = \{[\s\S]*?\n\};/m;
  const replacement = buildAutoGeneratedSection(autoEntries);

  if (!autoSectionRegex.test(fileContent)) {
    throw new Error('No s’ha trobat la secció autoGeneratedNormativa al fitxer normativaContent.js.');
  }

  const updatedContent = fileContent.replace(autoSectionRegex, replacement);
  await fs.writeFile(NORMATIVA_PATH, updatedContent, 'utf8');
};

const run = async () => {
  const normativaModule = await import(pathToFileURL(NORMATIVA_PATH).href);
  const { normativaContent = {}, autoGeneratedNormativa = {} } = normativaModule;
  const baseKeys = new Set(
    Object.keys(normativaContent).filter((key) => !Object.prototype.hasOwnProperty.call(autoGeneratedNormativa, key)),
  );

  const contentFiles = (
    await Promise.all(BLOCK_DIRS.map((bloc) => collectTextFiles(path.join(CONTENT_ROOT, bloc))))
  ).flat();

  const detected = new Map();

  for (const filePath of contentFiles) {
    const references = await detectReferences(filePath);
    references.forEach((reference) => {
      if (!detected.has(reference.key)) {
        detected.set(reference.key, reference);
      }
    });
  }

  const autoEntries = Array.from(detected.values())
    .filter((reference) => !baseKeys.has(reference.key))
    .reduce((acc, reference) => {
      acc[reference.key] = buildAutoEntry(reference);
      return acc;
    }, {});

  const previousCount = Object.keys(autoGeneratedNormativa).length;
  const nextCount = Object.keys(autoEntries).length;

  await updateNormativaFile(autoEntries);

  if (nextCount === 0) {
    console.log('✅ No hi ha referències normatives pendents d’auto-generació.');
    return;
  }

  if (nextCount === previousCount) {
    console.log(`✅ Actualitzades ${nextCount} referències normatives auto-generades.`);
    return;
  }

  console.log(`✅ Auto-generades ${nextCount} referències normatives (abans ${previousCount}).`);
};

run().catch((error) => {
  console.error('❌ Error actualitzant normativa:', error);
  process.exitCode = 1;
});
