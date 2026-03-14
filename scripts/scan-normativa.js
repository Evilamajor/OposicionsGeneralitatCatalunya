import fs from "fs";
import path from "path";

/*
CONFIGURACIÓ
*/

const EXPLANATIONS_DIR = "public/content";
const OUTPUT_FILE = "src/data/normativa/index.json";

/*
PATRONS DE DETECCIÓ DE NORMATIVA
*/

const patterns = [

  /article\s+\d+\s+lcsp/gi,
  /article\s+\d+\s+ce/gi,
  /article\s+\d+\s+eac/gi,
  /article\s+\d+\s+llei\s+\d+\/\d+/gi,
  /directiva\s+\d+\/\d+\/ue/gi

];

/*
FUNCIO RECURSIVA PER ESCANEJAR DIRECTORIS
*/

function scanDirectory(dir, results = new Set()) {

  if (!fs.existsSync(dir)) {
    return results;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {

    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath, results);
      continue;
    }

    if (file.endsWith(".html")) {

      const content = fs.readFileSync(fullPath, "utf8");

      for (const pattern of patterns) {

        const matches = content.match(pattern);

        if (matches) {

          matches.forEach(match => {

            const normalized = match
              .toLowerCase()
              .replace(/\s+/g, " ")
              .trim();

            results.add(normalized);

          });

        }

      }

    }

  }

  return results;

}

/*
PROGRAMA PRINCIPAL
*/

function main() {

  console.log("Scanning explanation HTML files...");

  const references = Array.from(
    scanDirectory(EXPLANATIONS_DIR)
  ).sort();

  const output = {

    generatedAt: new Date().toISOString(),
    totalReferences: references.length,
    references: references

  };

  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(output, null, 2)
  );

  console.log("Normativa index updated.");
  console.log("References found:", references.length);

}

/*
EXECUCIÓ
*/

main();