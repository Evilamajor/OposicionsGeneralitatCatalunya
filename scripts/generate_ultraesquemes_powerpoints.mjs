import fs from 'node:fs/promises';
import path from 'node:path';

function stripHtmlTags(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, '’')
    .replace(/&lsquo;/g, '‘')
    .replace(/&middot;/g, '·')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildTitleSlide(mainTitle, subtitle) {
  return `<article class="ultra-slide title-slide">
  <p class="slide-kicker">Ultraesquemes · Preparació d'oposicions</p>
  <h1>${mainTitle}</h1>
  <div class="slide-body">
    <ul>
      <li>Resum ultra ràpid per repàs actiu i memorització d'idees clau.</li>
      <li>Format orientat a examen: conceptes + estructura + punts de control.</li>
      <li>Navega amb fletxes, mode memòria i pantalla completa.</li>
    </ul>
    <div class="chip-row">
      <span class="chip">Català</span>
      <span class="chip">Constitució 1978</span>
      <span class="chip">Repàs express</span>
    </div>
    <p>${subtitle}</p>
  </div>
</article>`;
}

function buildSectionSlide(sectionTitle) {
  return `<article class="ultra-slide section-slide">
  <p class="slide-kicker">Bloc temàtic</p>
  <h1>${sectionTitle}</h1>
  <div class="slide-body">
    <ul>
      <li>Identifica el fil conductor del bloc abans d'entrar als punts.</li>
      <li>Relaciona cada concepte amb una institució o principi constitucional.</li>
      <li>Tanca cada punt amb una pregunta oral de 20 segons.</li>
    </ul>
  </div>
</article>`;
}

function normalizeTitle(pointTitle) {
  return pointTitle.replace(/^\d+\.\s*/, '').trim();
}

function extractPossibleReference(text) {
  const articleMatch = text.match(/\bart\.?\s*\d+\b/i);
  if (articleMatch) return articleMatch[0];
  const numberMatch = text.match(/\b\d{2,4}\b/);
  if (numberMatch) return numberMatch[0];
  return null;
}

function buildPointSlide(pointNumber, pointTitle, sectionTitle) {
  const shortTitle = normalizeTitle(pointTitle);
  const reference = extractPossibleReference(pointTitle);

  return `<article class="ultra-slide point-slide">
  <p class="slide-kicker">Punt ${String(pointNumber).padStart(2, '0')} · ${sectionTitle}</p>
  <h2>${shortTitle}</h2>
  <div class="slide-body">
    <ul>
      <li><strong>Idea clau:</strong> defineix el concepte amb precisió jurídica i llenguatge administratiu.</li>
      <li><strong>Estructura:</strong> situa'l dins del marc constitucional i la seva funció institucional.</li>
      <li><strong>Aplicació:</strong> vincula'l a casos pràctics típics d'oposicions i procediment públic.</li>
      <li><strong>Control final:</strong> respon "què és", "per què importa" i "com s'aplica" en 30 segons.</li>
    </ul>
    <div class="chip-row">
      <span class="chip">${sectionTitle}</span>
      ${reference ? `<span class="chip">Referència: ${reference}</span>` : '<span class="chip">Sense article explícit</span>'}
      <span class="chip">Recordatori oral</span>
    </div>
  </div>
</article>`;
}

async function generateUltraDeck({ rootDir, blocId, temaId }) {
  const temaBaseDir = path.join(rootDir, 'public', 'content', blocId, temaId);
  const esquemesPath = path.join(temaBaseDir, 'esquemes', 'desenvolupament-base.html');
  const powerpointsDir = path.join(temaBaseDir, 'powerpoints');
  const slidesDir = path.join(powerpointsDir, 'slides');

  const rawHtml = await fs.readFile(esquemesPath, 'utf8');
  const normalized = rawHtml.replace(/\r\n/g, '\n');

  const tokenRegex = /<(h2|h3)[^>]*>(.*?)<\/\1>/gis;
  const sections = [];
  let activeSection = null;
  let match;

  while ((match = tokenRegex.exec(normalized)) !== null) {
    const [, tagName, rawContent] = match;
    const text = stripHtmlTags(rawContent);
    if (!text) continue;

    if (tagName.toLowerCase() === 'h2') {
      activeSection = { title: text, points: [] };
      sections.push(activeSection);
    } else if (tagName.toLowerCase() === 'h3' && activeSection) {
      activeSection.points.push(text);
    }
  }

  if (!sections.length) {
    throw new Error('No s\'han trobat seccions h2/h3 al fitxer base.');
  }

  await fs.mkdir(slidesDir, { recursive: true });

  const metadata = {
    title: 'Tema 1 · Ultraesquemes',
    subtitle: 'La Constitució espanyola de 1978',
    generatedAt: new Date().toISOString(),
    slideBasePath: `/content/${blocId}/${temaId}/powerpoints/slides`,
    slides: [],
  };

  let slideCounter = 1;
  let pointCounter = 1;

  const writeSlide = async ({ html, title, type, section }) => {
    const fileName = `slide-${String(slideCounter).padStart(2, '0')}.html`;
    const filePath = path.join(slidesDir, fileName);
    await fs.writeFile(filePath, html, 'utf8');

    metadata.slides.push({
      id: `slide-${String(slideCounter).padStart(2, '0')}`,
      title,
      type,
      section,
      file: `${metadata.slideBasePath}/${fileName}`,
    });

    slideCounter += 1;
  };

  await writeSlide({
    html: buildTitleSlide(metadata.title, metadata.subtitle),
    title: 'Portada',
    type: 'title',
    section: 'Introducció',
  });

  for (const section of sections) {
    await writeSlide({
      html: buildSectionSlide(section.title),
      title: section.title,
      type: 'section',
      section: section.title,
    });

    for (const pointTitle of section.points) {
      await writeSlide({
        html: buildPointSlide(pointCounter, pointTitle, section.title),
        title: pointTitle,
        type: 'point',
        section: section.title,
      });
      pointCounter += 1;
    }
  }

  await fs.writeFile(path.join(powerpointsDir, 'metadata.json'), `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');

  return {
    sections: sections.length,
    points: pointCounter - 1,
    slides: slideCounter - 1,
    metadataPath: path.join(powerpointsDir, 'metadata.json'),
  };
}

const [, , blocArg = 'bloc-1', temaArg = 'tema-1'] = process.argv;
const rootDir = process.cwd();

try {
  const result = await generateUltraDeck({ rootDir, blocId: blocArg, temaId: temaArg });
  console.log(`Ultraesquemes generat: ${result.slides} slides (${result.sections} seccions, ${result.points} punts)`);
  console.log(`Metadata: ${result.metadataPath}`);
} catch (error) {
  console.error('Error generant ultraesquemes:', error.message);
  process.exit(1);
}
