import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const contentRoot = path.join(projectRoot, 'public', 'content');

const REQUIRED_POINTS = Array.from({ length: 24 }, (_, index) => `punt-${String(index + 1).padStart(2, '0')}.html`);
const REQUIRED_MARKERS = ['esquema-explicacio-theme.css', 'esquema-explicacio-theme.js', 'class="wrap"'];

const report = {
  generatedAt: new Date().toISOString(),
  scope: 'public/content/bloc-1..bloc-7',
  temesAudited: 0,
  temasWith24Points: 0,
  temaPointIssues: [],
  htmlSectionIssues: [],
  duplicateFiles: [],
  emptyDirectories: [],
};

function sha256(filePath) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function findEmptyDirectories(startDir) {
  const empties = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'dist') {
        continue;
      }
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name));
      }
    }

    const filtered = fs.readdirSync(dir).filter((name) => !name.startsWith('.'));
    if (filtered.length === 0) {
      empties.push(path.relative(projectRoot, dir));
    }
  }

  walk(startDir);
  return empties;
}

function collectTemaDirs() {
  const temas = [];
  for (let bloc = 1; bloc <= 7; bloc += 1) {
    const blocDir = path.join(contentRoot, `bloc-${bloc}`);
    if (!fs.existsSync(blocDir)) continue;

    const entries = fs.readdirSync(blocDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && /^tema-\d+$/i.test(entry.name)) {
        temas.push(path.join(blocDir, entry.name));
      }
    }
  }

  return temas.sort((a, b) => a.localeCompare(b));
}

function audit() {
  const temas = collectTemaDirs();
  report.temesAudited = temas.length;

  const duplicateMap = new Map();

  for (const temaDir of temas) {
    const temaRel = path.relative(projectRoot, temaDir);
    const explicacionsDir = path.join(temaDir, 'explicacions');

    const existingPoints = [];
    const missingPoints = [];

    if (fs.existsSync(explicacionsDir)) {
      for (const fileName of REQUIRED_POINTS) {
        const filePath = path.join(explicacionsDir, fileName);
        if (fs.existsSync(filePath)) {
          existingPoints.push(fileName);

          const html = fs.readFileSync(filePath, 'utf8');
          const missingMarkers = REQUIRED_MARKERS.filter((marker) => !html.includes(marker));
          if (missingMarkers.length > 0) {
            report.htmlSectionIssues.push({
              file: path.relative(projectRoot, filePath),
              missingMarkers,
            });
          }

          const hash = sha256(filePath);
          if (!duplicateMap.has(hash)) duplicateMap.set(hash, []);
          duplicateMap.get(hash).push(path.relative(projectRoot, filePath));
        } else {
          missingPoints.push(fileName);
        }
      }
    } else {
      missingPoints.push(...REQUIRED_POINTS);
    }

    if (existingPoints.length === REQUIRED_POINTS.length && missingPoints.length === 0) {
      report.temasWith24Points += 1;
    } else {
      report.temaPointIssues.push({
        tema: temaRel,
        foundPoints: existingPoints.length,
        missingPoints,
      });
    }
  }

  for (const [hash, files] of duplicateMap.entries()) {
    if (files.length > 1) {
      report.duplicateFiles.push({ hash, files });
    }
  }

  report.emptyDirectories = findEmptyDirectories(path.join(projectRoot, 'public', 'content'));
}

audit();

const outputPath = path.join(projectRoot, 'reports', 'repository-audit.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

console.log(`Temes auditats: ${report.temesAudited}`);
console.log(`Temes amb 24 punts: ${report.temasWith24Points}`);
console.log(`Incidències de punts: ${report.temaPointIssues.length}`);
console.log(`Incidències de marcadors HTML: ${report.htmlSectionIssues.length}`);
console.log(`Grups de fitxers duplicats: ${report.duplicateFiles.length}`);
console.log(`Directoris buits: ${report.emptyDirectories.length}`);
console.log(`Informe: ${path.relative(projectRoot, outputPath)}`);

if (
  report.temaPointIssues.length > 0 ||
  report.htmlSectionIssues.length > 0 ||
  report.emptyDirectories.length > 0
) {
  process.exitCode = 1;
}
