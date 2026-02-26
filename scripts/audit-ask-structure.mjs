import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

console.log("🔎 Iniciant auditoria estructural Ask...\n");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");

let report = {
  totalFiles: 0,
  totalQuestions: 0,
  files: [],
  errors: []
};

async function walkDir(dir) {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (
      fullPath.includes("node_modules") ||
      fullPath.includes("dist") ||
      fullPath.includes(".git")
    ) continue;

    if (stat.isDirectory()) {
      await walkDir(fullPath);
    } else if (entry.endsWith("Ask.js")) {
      report.totalFiles++;
      await analyzeFile(fullPath);
    }
  }
}

async function analyzeFile(filePath) {
  try {
    const module = await import(pathToFileURL(filePath));
    const data = module.default;

    if (!Array.isArray(data)) {
      report.errors.push(`❌ ${filePath} no exporta un array.`);
      return;
    }

    let fileInfo = {
      file: filePath,
      questions: data.length,
      issues: []
    };

    data.forEach((q, index) => {
      report.totalQuestions++;

      if (!q.id) fileInfo.issues.push(`Pregunta ${index}: falta id`);
      if (!q.question) fileInfo.issues.push(`Pregunta ${index}: falta question`);
      if (!Array.isArray(q.options))
        fileInfo.issues.push(`Pregunta ${index}: options no és array`);
      else if (q.options.length !== 4)
        fileInfo.issues.push(`Pregunta ${index}: options.length != 4`);

      if (typeof q.correctAnswer !== "number")
        fileInfo.issues.push(`Pregunta ${index}: correctAnswer no és numèric`);
      else if (q.correctAnswer < 0 || q.correctAnswer > 3)
        fileInfo.issues.push(`Pregunta ${index}: correctAnswer fora rang 0-3`);

      if (!q.type)
        fileInfo.issues.push(`Pregunta ${index}: falta type`);
    });

    report.files.push(fileInfo);

  } catch (err) {
    report.errors.push(`❌ Error important ${filePath}: ${err.message}`);
  }
}

await walkDir(PROJECT_ROOT);

// Guardar informe
const outputPath = path.join(PROJECT_ROOT, "audit-report.json");
fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

console.log("📊 RESULTAT:");
console.log(`Fitxers analitzats: ${report.totalFiles}`);
console.log(`Preguntes totals: ${report.totalQuestions}`);
console.log(`Errors globals: ${report.errors.length}`);

console.log(`\n📄 Informe generat a: ${outputPath}`);
console.log("✔ Auditoria estructural completada\n");