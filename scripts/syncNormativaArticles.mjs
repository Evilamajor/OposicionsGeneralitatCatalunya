import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { normativaArticles } from '../src/data/normativa/articles.js';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDir, '..');
const outputPath = path.join(projectRoot, 'public', 'data', 'normativa-articles.json');

const jsonPayload = `${JSON.stringify(normativaArticles, null, 2)}\n`;

await writeFile(outputPath, jsonPayload, 'utf8');
console.log(`Synced normativa articles to ${outputPath}`);