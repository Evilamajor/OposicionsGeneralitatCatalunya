import fs from 'node:fs';
import path from 'node:path';

const baseDir = path.resolve('public/content/bloc-1/tema-1/esquemes/explicacions');

function stripTags(text = '') {
  return text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function getMatch(content, regex) {
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function normPointNumber(n) {
  return String(n).padStart(2, '0');
}

function buildPills(content) {
  const pills = [];

  if (/\bCE\b|Constituci[oó]/i.test(content)) {
    pills.push('<span class="pill"><b>CE</b> referències normatives</span>');
  }

  if (/\bLO\b|\bLOREG\b|\bLOTC\b|Llei Org[aà]nica/i.test(content)) {
    pills.push('<span class="pill"><b>LO</b> normativa orgànica</span>');
  }

  if (/\bEAC\b|Estatut/i.test(content)) {
    pills.push('<span class="pill"><b>EAC</b> referències estatutàries</span>');
  }

  if (/\bUE\b|Uni[oó] Europea|\bTJUE\b|\bTFUE\b|\bTUE\b|europe[au]/i.test(content)) {
    pills.push('<span class="pill"><b>UE</b> context europeu</span>');
  }

  if (/\bSTC\b|\bSTS\b|jurisprud[eè]ncia/i.test(content)) {
    pills.push('<span class="pill"><b>Jurisprudència</b> doctrina rellevant</span>');
  }

  return pills;
}

function normalizeMain(mainInner) {
  let output = mainInner;

  output = output.replace(/\sclass=("|')([^"']*\bcallout\b[^"']*?)\bdanger\b([^"']*)\1/gi, (_match, q, before, after) => {
    const classes = `${before} warn ${after}`.replace(/\s+/g, ' ').trim();
    return ` class=${q}${classes}${q}`;
  });

  output = output.replace(/\sstyle=("|')[\s\S]*?\1/gi, '');

  let examAssigned = false;
  output = output.replace(/<section\b([^>]*)>/gi, (match, attrs) => {
    if (examAssigned) return match;

    const idMatch = attrs.match(/\sid=("|')([^"']+)\1/i);
    if (!idMatch) return match;

    const sectionId = idMatch[2];
    if (!/(^|-)idees?-clau($|-)|(^|-)idea-clau($|-)|(^|-)resum-final($|-)|(^|-)exam($|-)/i.test(sectionId)) {
      return match;
    }

    examAssigned = true;

    let newAttrs = attrs.replace(/\sid=("|')[^"']+\1/i, ' id="exam"');
    if (/\sclass=("|')/i.test(newAttrs)) {
      newAttrs = newAttrs.replace(/\sclass=("|')([^"']*)\1/i, (_m, q, cls) => {
        const classes = (`${cls} exam`).replace(/\bexam\b\s*\bexam\b/g, 'exam').replace(/\s+/g, ' ').trim();
        return ` class=${q}${classes}${q}`;
      });
    } else {
      newAttrs += ' class="exam"';
    }

    return `<section${newAttrs}>`;
  });

  return output;
}

function transformFile(filePath, pointNumber) {
  const original = fs.readFileSync(filePath, 'utf8');

  const originalTitle = getMatch(original, /<title>([\s\S]*?)<\/title>/i) || `Tema 1 · Punt ${pointNumber}`;
  const titleText = getMatch(original, /<h1[^>]*>([\s\S]*?)<\/h1>/i) || originalTitle;
  const cleanTitle = stripTags(titleText)
    .replace(/^BLOC\s*I\s*·\s*TEMA\s*1\s*·\s*PUNT\s*\d+\s*—\s*/i, '')
    .replace(/^BLOC\s*I\s*·\s*TEMA\s*1\s*·\s*PUNT\s*\d+\s*—\s*/i, '')
    .trim();

  const subtitle = getMatch(original, /<p[^>]*class=["']subtitle["'][^>]*>([\s\S]*?)<\/p>/i)
    || 'Desplegament estructurat del punt per a preparació d’oposicions.';

  const descriptionTag = original.match(/<meta\s+name=["']description["'][^>]*>/i)?.[0]
    || `<meta name="description" content="${cleanTitle}" />`;

  const mainInner = getMatch(original, /<main[^>]*>([\s\S]*?)<\/main>/i) || original;
  const normalizedMain = normalizeMain(mainInner);

  const fullHeaderTitle = `BLOC I · TEMA 1 · PUNT ${pointNumber} — ${cleanTitle}`;
  const pills = buildPills(original);
  const pillsBlock = pills.length
    ? `\n      <div class="pillrow" aria-label="Conceptes clau">\n        ${pills.join('\n        ')}\n      </div>`
    : '';

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
        <span>Tema 1</span>
        <span class="muted">/</span>
        <span>Punt ${pointNumber}</span>
      </div>

      <a class="back" href="javascript:history.back()" aria-label="Tornar enrere">
        <span class="arr">←</span>
        Back
      </a>

      <h1>${fullHeaderTitle}</h1>
      <p class="subtitle">${subtitle}</p>${pillsBlock}
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

for (let i = 1; i <= 24; i += 1) {
  const fileName = `punt-${normPointNumber(i)}.html`;
  const filePath = path.join(baseDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(`No trobat: ${fileName}`);
    continue;
  }

  transformFile(filePath, i);
  console.log(`Actualitzat: ${fileName}`);
}

console.log('Migració Tema 1 completada.');
