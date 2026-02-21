const fs = require('node:fs/promises');
const path = require('node:path');

const ROOT = process.cwd();
const BLOC_ID = 'bloc-1';
const TEMA_ID = 'tema-1';

const METADATA_PATH = path.join(ROOT, 'public', 'content', BLOC_ID, TEMA_ID, 'powerpoints', 'metadata.json');
const EXPLICACIONS_DIR = path.join(ROOT, 'public', 'content', BLOC_ID, TEMA_ID, 'esquemes', 'explicacions');

const MEMORY_TEMPLATE = {
  ideaClau: 'defineix el concepte amb precisió jurídica i llenguatge administratiu.',
  estructura: 'situa\'l dins del marc constitucional i la seva funció institucional.',
  aplicacio: 'vincula\'l a casos pràctics típics d\'oposicions i procediment públic.',
  controlFinal: 'respon «què és», «per què importa» i «com s\'aplica» en 30 segons.',
};

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&middot;/g, '·')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—');
}

function stripTags(html) {
  return decodeEntities(
    html
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

function highlightRefs(text) {
  let highlighted = text
    .replace(/<\/?strong>/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  highlighted = highlighted.replace(/\b(\d+\/\d+|\d{4}|\d+\.\d+)\b/g, '<strong>$1</strong>');
  highlighted = highlighted.replace(/\bart\.?\s*(<strong>)?(\d+(?:\.\d+)?)(<\/strong>)?\s*(CE|LOTC|UE)?\b/gi, (_m, _s1, number, _s2, suffix = '') => {
    const tail = suffix ? ` ${suffix}` : '';
    return `<strong>art. ${number}${tail}</strong>`;
  });

  return highlighted;
}

function splitBlocks(html) {
  const blocks = [];
  const regex = /<(h2|h3|h4|h5|p|li|td)[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const [, tag, content] = match;
    const clean = stripTags(content);
    if (!clean) continue;

    blocks.push({ tag: tag.toLowerCase(), text: clean });
  }

  return blocks;
}

function compactSentences(text, maxLen = 240) {
  if (!text) return '';
  if (text.length <= maxLen) return text;

  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  let out = '';
  for (const sentence of sentences) {
    if ((out + ' ' + sentence).trim().length > maxLen) break;
    out = `${out} ${sentence}`.trim();
  }

  if (!out) {
    out = `${text.slice(0, maxLen - 1).trim()}…`;
  }

  return out;
}

function isNoiseBlock(text) {
  const normalized = text.toLowerCase();
  return (
    /^\s*[a-d]\)\s*/i.test(text)
    || normalized.includes('resposta correcta')
    || normalized.includes('preguntes tipus test')
    || normalized.includes('trampa:')
    || normalized === 'en construcció'
    || normalized === 'en construcció…'
  );
}

function dedupeWords(text) {
  const words = text.split(/\s+/);
  const out = [];

  for (let index = 0; index < words.length; index += 1) {
    const current = words[index].toLowerCase();
    const previous = words[index - 1]?.toLowerCase();
    if (current && current === previous) continue;
    out.push(words[index]);
  }

  return out.join(' ').replace(/\s+/g, ' ').trim();
}

function sanitizeForSlide(text, maxLen = 220) {
  if (!text) return '';
  const compact = dedupeWords(text)
    .replace(/[📊❓✅🚧]/g, ' ')
    .replace(/^\s*[IVXLC]+\.\s+/i, '')
    .replace(/\(art\.?\s*$/i, '')
    .replace(/^Taula\s+\d+\s*[–-]?\s*/i, '')
    .replace(/\s*[:;,-]\s*$/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return compactSentences(compact, maxLen);
}

function pickByKeywords(blocks, keywords, fallbackBlocks = []) {
  const normalizedKeywords = keywords.map((keyword) => keyword.toLowerCase());

  const candidates = blocks
    .filter((block) => normalizedKeywords.some((keyword) => block.text.toLowerCase().includes(keyword)))
    .slice(0, 3)
    .map((block) => block.text);

  if (candidates.length) {
    return compactSentences(candidates.join(' '));
  }

  const fallbackText = fallbackBlocks.slice(0, 2).map((block) => block.text).join(' ');
  return compactSentences(fallbackText);
}

function takeFirstParagraph(blocks) {
  const firstParagraph = blocks.find((block) => block.tag === 'p' && block.text.length > 24);
  return firstParagraph ? firstParagraph.text : '';
}

function buildFullFromHtml(html) {
  const blocks = splitBlocks(html);
  const meaningfulBlocks = blocks.filter(
    (block) => ['p', 'li', 'td'].includes(block.tag) && block.text.length > 24 && !isNoiseBlock(block.text)
  );

  if (!meaningfulBlocks.length) {
    return {
      full: {
        ideaClau: '',
        estructura: '',
        aplicacio: '',
        controlFinal: '',
      },
      hasFullContent: false,
    };
  }

  const ideaPrimary = takeFirstParagraph(meaningfulBlocks);
  const ideaClauRaw = ideaPrimary || pickByKeywords(meaningfulBlocks, ['concepte', 'definició', 'significa', 'és', 'norma suprema'], meaningfulBlocks);

  const estructuraRaw = pickByKeywords(
    meaningfulBlocks,
    ['estructura', 'classific', 'nivell', 'procediment', 'article', 'art.', 'títol', 'taula', 'composició', 'competències'],
    meaningfulBlocks
  );

  const aplicacioRaw = pickByKeywords(
    meaningfulBlocks,
    ['exemple', 'aplic', 'cas', 'examen', 'implica', 'garanteix', 'control', 'funció'],
    meaningfulBlocks
  );

  const summarySource = meaningfulBlocks
    .filter((block) => /resum|idea clau|conclus|síntesi|model|reptes|final/i.test(block.text))
    .slice(0, 2)
    .map((block) => block.text)
    .join(' ');
  const fallbackTail = meaningfulBlocks.slice(-2).map((block) => block.text).join(' ');
  const controlRaw = summarySource || fallbackTail || meaningfulBlocks[0].text;

  const full = {
    ideaClau: highlightRefs(sanitizeForSlide(ideaClauRaw)),
    estructura: highlightRefs(sanitizeForSlide(estructuraRaw)),
    aplicacio: highlightRefs(sanitizeForSlide(aplicacioRaw)),
    controlFinal: highlightRefs(sanitizeForSlide(controlRaw, 190)),
  };

  const hasFullContent = Boolean(full.ideaClau || full.estructura || full.aplicacio || full.controlFinal);

  return { full, hasFullContent };
}

function extractPointFromTitle(title) {
  const match = /^\s*(\d{1,2})\./.exec(title || '');
  if (!match) return null;
  return String(Number(match[1])).padStart(2, '0');
}

function extractSectionId(sectionTitle) {
  const match = /^\s*([IVXLC]+)\./i.exec(sectionTitle || '');
  return match ? match[1].toUpperCase() : null;
}

async function run() {
  const metadataRaw = await fs.readFile(METADATA_PATH, 'utf8');
  const metadata = JSON.parse(metadataRaw);

  const slides = await Promise.all(
    (metadata.slides || []).map(async (slide) => {
      if (slide.type !== 'point') return slide;

      const puntId = extractPointFromTitle(slide.title);
      const sectionId = extractSectionId(slide.section);
      const esquemaFile = puntId ? `/content/${BLOC_ID}/${TEMA_ID}/esquemes/explicacions/punt-${puntId}.html` : null;

      let full = {
        ideaClau: '',
        estructura: '',
        aplicacio: '',
        controlFinal: '',
      };
      let hasFullContent = false;

      if (puntId) {
        const explanationPath = path.join(EXPLICACIONS_DIR, `punt-${puntId}.html`);
        try {
          const html = await fs.readFile(explanationPath, 'utf8');
          const extracted = buildFullFromHtml(html);
          full = extracted.full;
          hasFullContent = extracted.hasFullContent;
        } catch {
          hasFullContent = false;
        }
      }

      return {
        ...slide,
        memory: { ...MEMORY_TEMPLATE },
        full,
        hasFullContent,
        sources: {
          esquemaFile,
          puntId,
          sectionId,
        },
      };
    })
  );

  const nextMetadata = {
    ...metadata,
    generatedAt: new Date().toISOString(),
    slides,
  };

  await fs.writeFile(METADATA_PATH, `${JSON.stringify(nextMetadata, null, 2)}\n`, 'utf8');

  const pointSlides = slides.filter((slide) => slide.type === 'point');
  const withFull = pointSlides.filter((slide) => slide.hasFullContent).length;
  const withoutFull = pointSlides.length - withFull;

  console.log(`Metadata actualitzada: ${pointSlides.length} punts`);
  console.log(`Amb contingut full: ${withFull}`);
  console.log(`Sense contingut full: ${withoutFull}`);
}

run().catch((error) => {
  console.error('Error generant metadata de powerpoints:', error.message);
  process.exit(1);
});
