import fs from 'node:fs';
import path from 'node:path';

const baseDir = path.resolve('public/content/bloc-1/tema-2/esquemes/explicacions');

function stripTags(text = '') {
  return text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function getMatch(content, regex) {
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function normPuntLabel(n) {
  return String(n).padStart(2, '0');
}

function buildPills(content) {
  const pills = [];
  if (/\bCE\b|Constituci[oó]/i.test(content)) pills.push('<span class="pill"><b>CE</b> referències normatives</span>');
  if (/\bEAC\b|Estatut/i.test(content)) pills.push('<span class="pill"><b>EAC</b> referències normatives</span>');
  if (/\bUE\b|Uni[oó] Europea|europe[au]/i.test(content)) pills.push('<span class="pill"><b>UE</b> context europeu</span>');
  if (/\bSTC\b|\bSTS\b|jurisprud[eè]ncia/i.test(content)) pills.push('<span class="pill"><b>Jurisprudència</b> doctrina rellevant</span>');
  if (pills.length === 0) pills.push('<span class="pill"><b>Normativa</b> contingut del punt</span>');
  return pills.join('\n        ');
}

function transformFile(filePath, pointNumber) {
  const original = fs.readFileSync(filePath, 'utf8');

  const originalTitle = getMatch(original, /<title>([\s\S]*?)<\/title>/i) || `Tema 2 · Punt ${pointNumber}`;
  const mainTitleRaw = getMatch(original, /<h1[^>]*>([\s\S]*?)<\/h1>/i) || originalTitle;
  const mainTitle = stripTags(mainTitleRaw);
  const subtitle = getMatch(original, /<p[^>]*class=["']subtitle["'][^>]*>([\s\S]*?)<\/p>/i)
    || 'Desplegament estructurat del punt per a preparació d’oposicions.';

  const descriptionTag = original.match(/<meta\s+name=["']description["'][^>]*>/i)?.[0]
    || `<meta name="description" content="${mainTitle}" />`;

  const mainInner = getMatch(original, /<main[^>]*>([\s\S]*?)<\/main>/i) || original;

  let normalizedMain = mainInner
    .replace(/\sclass=("|')([^"']*\bcallout\b[^"']*?)\bdanger\b([^"']*)\1/gi, (match, q, pre, post) => {
      const cls = `${pre} warn ${post}`.replace(/\s+/g, ' ').trim();
      return ` class=${q}${cls}${q}`;
    })
    .replace(/<section([^>]*\sid=("|')[^"']*(idees-clau|idea-clau|exam)[^"']*\2[^>]*)>/gi, (all, attrs) => {
      if (/\bclass=/.test(attrs)) {
        return `<section${attrs.replace(/class=("|')([^"']*)(\1)/i, (m, q, cls) => {
          return `class=${q}${cls.includes('exam') ? cls : `${cls} exam`}${q}`;
        })}>`;
      }
      return `<section${attrs} class="exam">`;
    });

  const fullHeaderTitle = `BLOC I · TEMA 2 · PUNT ${pointNumber} — ${mainTitle}`;

  const output = `<!doctype html>
<html lang="ca">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${fullHeaderTitle}</title>
  ${descriptionTag}
  <link rel="stylesheet" href="/css/esquema-explicacio-theme.css" />
</head>

<body>
  <div class="wrap">
    <header>
      <div class="crumbs">
        <a href="/">Inici</a>
        <span class="muted">/</span>
        <span>Bloc I</span>
        <span class="muted">/</span>
        <span>Tema 2</span>
        <span class="muted">/</span>
        <span>Punt ${pointNumber}</span>
      </div>

      <a class="back" href="javascript:history.back()" aria-label="Tornar enrere">
        <span class="arr">←</span>
        Back
      </a>

      <h1>${fullHeaderTitle}</h1>
      <p class="subtitle">${subtitle}</p>

      <div class="pillrow" aria-label="Conceptes clau">
        ${buildPills(original)}
      </div>
    </header>

    <div class="layout">
      <nav class="toc" aria-label="Taula de continguts">
        <h2>Continguts</h2>
        <div class="toc-links"></div>
        <div class="small">Navegació automàtica generada des dels títols h2 i h3.</div>
      </nav>

      <main>
${normalizedMain}
      </main>
    </div>
  </div>

  <script src="/js/esquema-explicacio-theme.js"></script>
</body>
</html>
`;

  fs.writeFileSync(filePath, output, 'utf8');
}

for (let i = 1; i <= 22; i += 1) {
  const fileName = `punt-${normPuntLabel(i)}.html`;
  const filePath = path.join(baseDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(`No trobat: ${fileName}`);
    continue;
  }
  transformFile(filePath, i);
  console.log(`Actualitzat: ${fileName}`);
}

console.log('Migració completada.');
