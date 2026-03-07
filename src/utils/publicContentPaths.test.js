import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const publicContentDir = path.join(projectRoot, 'public', 'content');
const forbiddenPattern =
  /(?<quote>["'])(?:\/(?:content|css|js|materials|diagrams|bloc)\/(?:(?!\k<quote>).)*|\/index\.html)\k<quote>/;

function collectHtmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectHtmlFiles(entryPath);
    }

    return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
  });
}

describe('public content HTML paths', () => {
  it('uses relative internal URLs so static pages work on GitHub Pages', () => {
    const htmlFiles = collectHtmlFiles(publicContentDir);
    const offenders = htmlFiles.filter((filePath) =>
      forbiddenPattern.test(readFileSync(filePath, 'utf8')),
    );

    expect(offenders).toEqual([]);
  });
});
