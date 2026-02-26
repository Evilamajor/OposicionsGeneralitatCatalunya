import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'src', 'data');
const OUTPUT_PATH = path.join(PROJECT_ROOT, 'audit-report.json');

const INDEX_TO_LETTER = ['A', 'B', 'C', 'D'];

const report = {
  scannedFiles: 0,
  loadedFiles: 0,
  totalQuestions: 0,
  validQuestions: 0,
  invalidQuestions: 0,
  structureErrors: 0,
  explanationMissing: 0,
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

function isString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isQuestionValid(question) {
  const errors = [];
  const warnings = [];

  if (typeof question?.id !== 'number') {
    errors.push('id no és number');
  }

  if (!isString(question?.question)) {
    errors.push('question no és string');
  }

  if (!Array.isArray(question?.options)) {
    errors.push('options no és array');
  } else if (question.options.length !== 4) {
    errors.push('options.length != 4');
  }

  if (typeof question?.correctAnswer !== 'number') {
    errors.push('correctAnswer no és number');
  } else if (question.correctAnswer < 0 || question.correctAnswer > 3) {
    errors.push('correctAnswer fora de rang');
  } else if (Array.isArray(question?.options) && question.correctAnswer >= question.options.length) {
    errors.push('correctAnswer no correspon a opció existent');
  }

  if (!isString(question?.type)) {
    errors.push('type no és string');
  }

  if (!isString(question?.explanationCorrect)) {
    warnings.push('Falta explanationCorrect');
  }

  if (!isString(question?.explanationIncorrect)) {
    warnings.push('Falta explanationIncorrect');
  }

  if (
    Object.prototype.hasOwnProperty.call(question, 'correct')
    || Object.prototype.hasOwnProperty.call(question, 'correcta')
    || Object.prototype.hasOwnProperty.call(question, 'answer')
  ) {
    errors.push('Conté camps legacy (correct/correcta/answer)');
  }

  return { errors, warnings };
}

async function analyzeFile(filePath) {
  const relative = path.relative(PROJECT_ROOT, filePath);
  const fileSummary = {
    file: relative,
    questions: 0,
    validQuestions: 0,
    invalidQuestions: 0,
    structureErrors: 0,
    explanationMissing: 0,
    importError: null,
  };

  let questions;
  try {
    const mod = await import(`${pathToFileURL(filePath).href}?t=${Date.now()}-${Math.random()}`);
    questions = mod?.default;
  } catch (error) {
    fileSummary.importError = error.message;
    fileSummary.structureErrors += 1;
    report.structureErrors += 1;
    report.summaryByFile.push(fileSummary);
    console.log(`✖ Error importació -> ${relative}: ${error.message}`);
    return;
  }

  if (!Array.isArray(questions)) {
    fileSummary.importError = 'El default export no és un array';
    fileSummary.structureErrors += 1;
    report.structureErrors += 1;
    report.summaryByFile.push(fileSummary);
    console.log(`✖ Error estructura -> ${relative}: default export no és array`);
    return;
  }

  report.loadedFiles += 1;
  fileSummary.questions = questions.length;
  report.totalQuestions += questions.length;

  questions.forEach((question, index) => {
    const number = index + 1;
    const { errors, warnings } = isQuestionValid(question);

    warnings.forEach((warning) => {
      report.explanationMissing += 1;
      fileSummary.explanationMissing += 1;
      console.log(`⚠ ${relative} · Pregunta ${number} -> ${warning}`);
    });

    if (errors.length === 0) {
      report.validQuestions += 1;
      fileSummary.validQuestions += 1;
      const optionLabel = INDEX_TO_LETTER[question.correctAnswer] || String(question.correctAnswer);
      console.log(`✔ Pregunta ${number} correcta → Opció ${optionLabel}`);
      return;
    }

    report.invalidQuestions += 1;
    fileSummary.invalidQuestions += 1;

    errors.forEach((errorMessage) => {
      report.structureErrors += 1;
      fileSummary.structureErrors += 1;
      if (errorMessage.includes('options.length')) {
        console.log(`✖ Error estructura → ${errorMessage}`);
      } else if (errorMessage.includes('fora de rang')) {
        console.log('✖ correctAnswer fora de rang');
      } else {
        console.log(`✖ ${relative} · Pregunta ${number} -> ${errorMessage}`);
      }
    });
  });

  report.summaryByFile.push(fileSummary);
}

async function main() {
  console.log('🚀 Auditoria PRO Ask\n');

  const files = walkAskFiles(DATA_DIR);
  report.scannedFiles = files.length;

  for (const filePath of files) {
    await analyzeFile(filePath);
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2), 'utf8');

  console.log('\n------------------------------');
  console.log(`Fitxers analitzats: ${report.scannedFiles}`);
  console.log(`Preguntes totals: ${report.totalQuestions}`);
  console.log(`Vàlides: ${report.validQuestions}`);
  console.log(`Amb errors: ${report.invalidQuestions}`);
  console.log(`Explicacions generades: ${report.explanationMissing}`);
  console.log(`Informe generat a: ${OUTPUT_PATH}`);
  console.log('✔ Auditoria completada');
}

main().catch((error) => {
  console.log(`✖ Error fatal auditoria: ${error.message}`);
  process.exitCode = 1;
});