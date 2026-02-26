console.log("SCTIPT EXECUTANT.SE CORRECTAMENT");
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

console.log("🔎 Iniciant auditoria Ask...\n");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");

let total = 0;

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    // Exclusions importants
    if (
      fullPath.includes("node_modules") ||
      fullPath.includes("dist") ||
      fullPath.includes(".git")
    ) {
      continue;
    }

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith("Ask.js")) {
      console.log("✔ Detectat:", fullPath);
      total++;
    }
  }
}

walkDir(PROJECT_ROOT);

console.log(`\n📊 Total fitxers Ask detectats: ${total}`);
console.log("✔ Auditoria finalitzada\n");