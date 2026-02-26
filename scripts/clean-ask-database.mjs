import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const DEFAULT_EXPLANATION_CORRECT =
  'Resposta correcta segons el contingut del tema i la normativa aplicable.';
const DEFAULT_EXPLANATION_INCORRECT =
  "Resposta incorrecta perquè no s'ajusta al contingut del tema ni al marc normatiu.";

const LETTER_TO_INDEX = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_ROOT = path.join(PROJECT_ROOT, 'src', 'data');
const CLEAN_REPORT_PATH = path.join(PROJECT_ROOT, 'audit-report-clean.json');

const report = {
  scannedFiles: 0,
  modifiedFiles: 0,
  totalQuestions: 0,
  errorsRemaining: 0,
  warnings: 0,
  explanationGenerated: 0,
  removedLegacyFiles: 0,
  summaryByFile: [],
};

function walkAskFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkAskFiles(fullPath, files);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('Ask.js')) {
      files.push(fullPath);
    }
  }

  return files;
}

function asTextOption(option) {
  if (typeof option === 'string') return option;
  if (option && typeof option === 'object') {
    if (typeof option.text === 'string') return option.text;
    if (typeof option.label === 'string') return option.label;
    if (typeof option.value === 'string') return option.value;
    if (typeof option.key === 'string') return option.key;
  }
  return String(option ?? '');
}

function normalizeCorrectAnswer(rawQuestion, options) {
  if (Array.isArray(rawQuestion?.options)) {
    const flagIndex = rawQuestion.options.findIndex(
      (option) => option && typeof option === 'object' && option.correct === true,
    );
    if (flagIndex >= 0) return flagIndex;
  }

  const rawValue =
    rawQuestion?.correctAnswer
    ?? rawQuestion?.correcta
    ?? rawQuestion?.correct
    ?? rawQuestion?.answer;

  if (typeof rawValue === 'number' && Number.isFinite(rawValue)) {
    if (rawValue >= 0 && rawValue <= 3) return rawValue;
    if (rawValue >= 1 && rawValue <= 4) return rawValue - 1;
    return null;
  }

  if (typeof rawValue === 'string') {
    const normalized = rawValue.trim().toUpperCase();
    if (LETTER_TO_INDEX[normalized] !== undefined) return LETTER_TO_INDEX[normalized];

    const numeric = Number(normalized);
    if (Number.isFinite(numeric)) {
      if (numeric >= 0 && numeric <= 3) return numeric;
      if (numeric >= 1 && numeric <= 4) return numeric - 1;
    }
  }

  const fallbackSafeIndex = options.length > 0 ? 0 : null;
  return fallbackSafeIndex;
}

function forceFourOptions(options, correctAnswer) {
  const result = [...options];
  let adjustedCorrect = correctAnswer;

  if (result.length === 2) {
    result.push('Cap de les anteriors', 'Totes les anteriors');
  }

  while (result.length < 4) {
    result.push(`Opció addicional ${result.length + 1}`);
  }

  if (result.length > 4) {
    if (typeof adjustedCorrect === 'number' && adjustedCorrect > 3) {
      adjustedCorrect = 0;
    }
    result.splice(4);
  }

  if (typeof adjustedCorrect !== 'number' || adjustedCorrect < 0 || adjustedCorrect > 3) {
    adjustedCorrect = 0;
  }

  return { options: result, correctAnswer: adjustedCorrect };
}

function normalizeQuestion(rawQuestion, index) {
  const optionsSource =
    Array.isArray(rawQuestion?.options)
      ? rawQuestion.options
      : Array.isArray(rawQuestion?.opcions)
        ? rawQuestion.opcions
        : Array.isArray(rawQuestion?.choices)
          ? rawQuestion.choices
          : [];

  const rawOptions = optionsSource.map(asTextOption);
  const normalizedCorrect = normalizeCorrectAnswer(rawQuestion, rawOptions);
  const { options, correctAnswer } = forceFourOptions(rawOptions, normalizedCorrect);

  const normalized = {
    id: index + 1,
    question: String(rawQuestion?.question ?? rawQuestion?.enunciat ?? rawQuestion?.prompt ?? ''),
    options,
    correctAnswer,
    type: String(rawQuestion?.type ?? rawQuestion?.category ?? rawQuestion?.tipus ?? 'concept'),
    explanationCorrect: String(
      rawQuestion?.explanationCorrect
      ?? rawQuestion?.explanation
      ?? rawQuestion?.explicacio
      ?? DEFAULT_EXPLANATION_CORRECT,
    ),
    explanationIncorrect: String(
      rawQuestion?.explanationIncorrect
      ?? DEFAULT_EXPLANATION_INCORRECT,
    ),
  };

  const warnings = [];
  if (!rawQuestion?.explanationCorrect) {
    warnings.push('missing explanationCorrect');
    report.explanationGenerated += 1;
  }
  if (!rawQuestion?.explanationIncorrect) {
    warnings.push('missing explanationIncorrect');
    report.explanationGenerated += 1;
  }

  const errors = [];
  if (!normalized.question.trim()) errors.push('question buida');
  if (!Array.isArray(normalized.options) || normalized.options.length !== 4) {
    errors.push('options.length != 4');
  }
  if (
    typeof normalized.correctAnswer !== 'number'
    || normalized.correctAnswer < 0
    || normalized.correctAnswer > 3
  ) {
    errors.push('correctAnswer invàlid');
  }

  return { normalized, warnings, errors };
}

function toValidIdentifier(filePath) {
  const name = path.basename(filePath, '.js').replace(/[^A-Za-z0-9_$]/g, '_');
  return /^[A-Za-z_$]/.test(name) ? name : `_${name}`;
}

function serializeAskArray(filePath, questions) {
  const identifier = toValidIdentifier(filePath);
  return `const ${identifier} = ${JSON.stringify(questions, null, 2)};\n\nexport default ${identifier};\n`;
}

function isLegacyTemaPath(filePath) {
  const normalized = filePath.split(path.sep).join('/');
  return /\/src\/data\/tema\d+\//.test(normalized);
}

async function loadQuestions(filePath) {
  const cacheKey = `${Date.now()}-${Math.random()}`;

  try {
    const moduleUrl = `${pathToFileURL(filePath).href}?cacheBust=${cacheKey}`;
    const mod = await import(moduleUrl);
    return mod?.default;
  } catch {
    const source = fs.readFileSync(filePath, 'utf8');
    const reExportMatch = source.match(/export\s+\{\s*default\s*\}\s+from\s+['"]([^'"]+)['"]/);

    if (!reExportMatch) {
      throw new Error('Import fallit i no és un fitxer reexport compatible');
    }

    const importTarget = reExportMatch[1];
    const resolvedNoExt = path.resolve(path.dirname(filePath), importTarget);
    const resolved = path.extname(resolvedNoExt) ? resolvedNoExt : `${resolvedNoExt}.js`;

    if (!fs.existsSync(resolved)) {
      throw new Error(`Reexport trencat: no existeix ${resolved}`);
    }

    const fallbackUrl = `${pathToFileURL(resolved).href}?cacheBust=${cacheKey}`;
    const fallbackModule = await import(fallbackUrl);
    return fallbackModule?.default;
  }
}

async function processFile(filePath) {
  const relative = path.relative(PROJECT_ROOT, filePath);
  const summary = {
    file: relative,
    modified: false,
    questions: 0,
    warnings: 0,
    errors: 0,
  };

  let loaded;
  try {
    loaded = await loadQuestions(filePath);
  } catch (error) {
    summary.errors += 1;
    report.errorsRemaining += 1;
    report.summaryByFile.push(summary);
    console.log(`✖ Import error -> ${relative}: ${error.message}`);
    return;
  }

  if (!Array.isArray(loaded)) {
    summary.errors += 1;
    report.errorsRemaining += 1;
    report.summaryByFile.push(summary);
    console.log(`✖ Estructura error -> ${relative}: no exporta array`);
    return;
  }

  const normalizedQuestions = [];
  loaded.forEach((question, index) => {
    const { normalized, warnings, errors } = normalizeQuestion(question, index);
    normalizedQuestions.push(normalized);

    if (warnings.length > 0) {
      summary.warnings += warnings.length;
      report.warnings += warnings.length;
    }

    if (errors.length > 0) {
      summary.errors += errors.length;
      report.errorsRemaining += errors.length;
    }
  });

  summary.questions = normalizedQuestions.length;
  report.totalQuestions += normalizedQuestions.length;

  const outputCode = serializeAskArray(filePath, normalizedQuestions);
  const previous = fs.readFileSync(filePath, 'utf8');

  if (previous !== outputCode) {
    fs.writeFileSync(filePath, outputCode, 'utf8');
    summary.modified = true;
    report.modifiedFiles += 1;
  }

  report.summaryByFile.push(summary);
}

function removeLegacyTemaFolders() {
  const entries = fs.readdirSync(DATA_ROOT, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (!/^tema\d+$/i.test(entry.name)) continue;

    const fullPath = path.join(DATA_ROOT, entry.name);
    const filesInside = walkAskFiles(fullPath, []);
    report.removedLegacyFiles += filesInside.length;
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`🧹 Eliminada carpeta legacy: src/data/${entry.name}`);
  }
}

async function main() {
  console.log('🚀 Clean ASK database\n');

  if (!fs.existsSync(DATA_ROOT)) {
    console.log(`✖ No existeix ${DATA_ROOT}`);
    process.exitCode = 1;
    return;
  }

  const askFiles = walkAskFiles(DATA_ROOT);
  report.scannedFiles = askFiles.length;

  for (const file of askFiles) {
    if (isLegacyTemaPath(file)) {
      continue;
    }
    await processFile(file);
  }

  removeLegacyTemaFolders();

  fs.writeFileSync(CLEAN_REPORT_PATH, JSON.stringify(report, null, 2), 'utf8');

  console.log('\n------------------------------');
  console.log(`Fitxers escanejats: ${report.scannedFiles}`);
  console.log(`Fitxers modificats: ${report.modifiedFiles}`);
  console.log(`Preguntes totals: ${report.totalQuestions}`);
  console.log(`Errors restants: ${report.errorsRemaining}`);
  console.log(`Warnings: ${report.warnings}`);
  console.log(`Informe generat a: ${CLEAN_REPORT_PATH}`);
}

main().catch((error) => {
  console.log(`✖ Error fatal clean script: ${error.message}`);
  process.exitCode = 1;
});
