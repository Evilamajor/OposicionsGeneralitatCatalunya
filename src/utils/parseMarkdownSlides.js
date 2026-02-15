/**
 * parseMarkdownSlides — splits a Marp-style markdown file into slide objects.
 *
 * Each slide object has:
 *   { index, title, subtitle, blocks[], slideType }
 *
 * slideType is one of:
 *   'title'      — title-only or title + short subtitle
 *   'section'    — section heading (h2/h3 only, few blocks)
 *   'list'       — primarily a list
 *   'normativa'  — mentions laws / regulations
 *   'idea'       — contains an "Idea clau" callout
 *   'table'      — contains a table
 *   'summary'    — last slide or contains "Conclusi"
 *   'content'    — default mixed content
 *
 * A "block" is one of:
 *   { type: 'heading',    level, text }
 *   { type: 'paragraph',  text }
 *   { type: 'list',       ordered, items[] }
 *   { type: 'blockquote', lines[] }
 *   { type: 'table',      headers[], rows[][] }
 *   { type: 'diagram',    variant, items[] }        // auto-detected
 */

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function trimFrontmatter(md) {
  // Remove YAML front-matter (--- … ---)
  // Trim leading whitespace first — some files start with \n before the first ---
  return md.trimStart().replace(/^---[\s\S]*?---\n*/, '');
}

function detectDiagram(blocks) {
  // Auto-detect ordered-list blocks that describe known diagram patterns
  const ADOP = ['autorització', 'disposició', 'reconeixement', 'pagament'];
  const CYCLE = ['definició', 'marc', 'elaboració', 'aprovació'];
  const FLOW = ['execució', 'registre', 'compte', 'fiscalització'];

  return blocks.map((b) => {
    if (b.type === 'list' && b.ordered && b.items.length >= 3) {
      const joined = b.items.map((i) => i.toLowerCase()).join(' ');
      if (ADOP.some((k) => joined.includes(k)))
        return { type: 'diagram', variant: 'adop', items: b.items };
      if (CYCLE.some((k) => joined.includes(k)))
        return { type: 'diagram', variant: 'cycle', items: b.items };
    }
    // Arrow flow: single paragraph with →
    if (b.type === 'paragraph' && b.text.includes('→')) {
      const parts = b.text.split('→').map((s) => s.trim()).filter(Boolean);
      if (parts.length >= 3) return { type: 'diagram', variant: 'flow', items: parts };
    }
    return b;
  });
}

/* ------------------------------------------------------------------ */
/*  Slide type classifier                                              */
/* ------------------------------------------------------------------ */

const NORMATIVA_KEYWORDS = [
  'llei', 'reial decret', 'decret', 'reglament', 'directiva',
  'ordre', 'resolució', 'article', 'títol', 'disposició',
  'constitució', 'estatut', 'orgànica', 'normativa', 'norma',
  'legisl', 'EBEP', 'RGPD', 'LOPDGDD', 'LCSP', 'TREBEP',
];

function classifySlide(title, subtitle, blocks, isLast) {
  // Title-only slide
  if (blocks.length === 0 && title) return 'title';

  // Summary / conclusions
  if (isLast || /conclusi|resum/i.test(title) || /conclusi|resum/i.test(subtitle)) return 'summary';

  // Idea clau: has a callout with "idea clau"
  const hasIdea = blocks.some(
    (b) => b.type === 'blockquote' && /idea\s+clau/i.test(b.lines.join(' ')),
  );
  if (hasIdea) return 'idea';

  // Table slide
  if (blocks.some((b) => b.type === 'table')) return 'table';

  // Diagram slide
  if (blocks.some((b) => b.type === 'diagram')) return 'diagram';

  // Normativa: check title + blocks for legal keywords
  const allText = [title, subtitle, ...blocks.map((b) => {
    if (b.type === 'paragraph') return b.text;
    if (b.type === 'list') return b.items.join(' ');
    if (b.type === 'heading') return b.text;
    return '';
  })].join(' ').toLowerCase();
  const normCount = NORMATIVA_KEYWORDS.filter((k) => allText.includes(k)).length;
  if (normCount >= 3) return 'normativa';

  // Section heading slide (only 1-2 blocks, mostly headings)
  if (blocks.length <= 2 && blocks.every((b) => b.type === 'heading' || b.type === 'paragraph')) {
    const totalLen = blocks.reduce((s, b) => s + (b.text || '').length, 0);
    if (totalLen < 150) return 'section';
  }

  // List-heavy slide
  const listBlocks = blocks.filter((b) => b.type === 'list');
  if (listBlocks.length > 0 && listBlocks.length >= blocks.filter((b) => b.type === 'paragraph').length) {
    return 'list';
  }

  return 'content';
}

/* ------------------------------------------------------------------ */
/*  Content line counter (estimates visible lines in a slide)          */
/* ------------------------------------------------------------------ */

function countBlockLines(block) {
  switch (block.type) {
    case 'heading': return 2;
    case 'paragraph': return Math.ceil(block.text.length / 70) + 1;
    case 'list': return block.items.length + 1;
    case 'blockquote': return block.lines.length + 1;
    case 'table': return (block.rows?.length || 0) + 3;
    case 'diagram': return (block.items?.length || 0) + 2;
    default: return 1;
  }
}

function countSlideLines(blocks) {
  return blocks.reduce((sum, b) => sum + countBlockLines(b), 0);
}

/* ------------------------------------------------------------------ */
/*  Auto-split: break oversized slides into 6-8 line chunks            */
/* ------------------------------------------------------------------ */

const MAX_LINES = 8;

function splitSlideIfNeeded(title, subtitle, blocks) {
  const totalLines = countSlideLines(blocks);
  if (totalLines <= MAX_LINES) return [{ title, subtitle, blocks }];

  // Strategy: group blocks into chunks that don't exceed MAX_LINES
  const chunks = [];
  let currentBlocks = [];
  let currentLines = 0;
  let partNum = 0;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const bLines = countBlockLines(block);

    // If a single list block is too big, split the list itself
    if (block.type === 'list' && bLines > MAX_LINES) {
      // Flush current chunk first
      if (currentBlocks.length > 0) {
        chunks.push({ blocks: currentBlocks });
        currentBlocks = [];
        currentLines = 0;
      }
      // Split list items into groups
      const maxItems = MAX_LINES - 2; // leave room for heading
      for (let j = 0; j < block.items.length; j += maxItems) {
        const slice = block.items.slice(j, j + maxItems);
        chunks.push({
          blocks: [{ type: 'list', ordered: block.ordered, items: slice }],
        });
      }
      continue;
    }

    // Would adding this block overflow?
    if (currentLines + bLines > MAX_LINES && currentBlocks.length > 0) {
      chunks.push({ blocks: currentBlocks });
      currentBlocks = [];
      currentLines = 0;
    }

    currentBlocks.push(block);
    currentLines += bLines;
  }

  if (currentBlocks.length > 0) {
    chunks.push({ blocks: currentBlocks });
  }

  // Build slide objects: first chunk gets original title, rest get title + "(cont.)"
  return chunks.map((chunk, ci) => {
    const isFirst = ci === 0;
    // Try to extract a heading from the chunk as a sub-title
    let chunkTitle = isFirst ? title : title;
    let chunkSubtitle = isFirst ? subtitle : '';

    if (!isFirst) {
      // If chunk starts with a heading, use it
      if (chunk.blocks.length > 0 && chunk.blocks[0].type === 'heading') {
        chunkSubtitle = chunk.blocks[0].text;
        chunk.blocks = chunk.blocks.slice(1);
      } else {
        chunkSubtitle = subtitle ? `${subtitle} (cont.)` : '(continuació)';
      }
    }

    return {
      title: chunkTitle,
      subtitle: chunkSubtitle,
      blocks: chunk.blocks,
    };
  });
}

/* ------------------------------------------------------------------ */
/*  Block-level parser (minimal, purpose-built for this MD structure)  */
/* ------------------------------------------------------------------ */

function parseBlocks(raw) {
  const lines = raw.split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // --- Empty line → skip
    if (line.trim() === '') { i++; continue; }

    // --- Heading
    const hm = line.match(/^(#{1,6})\s+(.*)/);
    if (hm) {
      blocks.push({ type: 'heading', level: hm[1].length, text: hm[2].trim() });
      i++;
      continue;
    }

    // --- Blockquote
    if (line.trimStart().startsWith('>')) {
      const bqLines = [];
      while (i < lines.length && (lines[i].trimStart().startsWith('>') || (lines[i].trim() !== '' && bqLines.length > 0 && !lines[i].match(/^[#|\-\d|>]/)))) {
        bqLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', lines: bqLines.map((l) => l.trim()).filter(Boolean) });
      continue;
    }

    // --- Table (starts with |)
    if (line.trimStart().startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trimStart().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      // First row = headers, second row = separator, rest = data
      const parseRow = (r) =>
        r.split('|').map((c) => c.trim()).filter(Boolean);
      const headers = parseRow(tableLines[0]);
      const rows = tableLines.slice(2).map(parseRow);
      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    // --- Ordered list
    if (/^\d+\.\s/.test(line.trimStart())) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trimStart())) {
        items.push(lines[i].replace(/^\d+\.\s*/, '').trim());
        i++;
      }
      blocks.push({ type: 'list', ordered: true, items });
      continue;
    }

    // --- Unordered list
    if (/^[-*]\s/.test(line.trimStart())) {
      const items = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i].trimStart())) {
        items.push(lines[i].replace(/^[-*]\s*/, '').trim());
        i++;
      }
      blocks.push({ type: 'list', ordered: false, items });
      continue;
    }

    // --- Paragraph (everything else until blank line)
    const pLines = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].match(/^#{1,6}\s/) &&
      !lines[i].trimStart().startsWith('>') &&
      !lines[i].trimStart().startsWith('|') &&
      !/^[-*]\s/.test(lines[i].trimStart()) &&
      !/^\d+\.\s/.test(lines[i].trimStart())
    ) {
      pLines.push(lines[i].trim());
      i++;
    }
    if (pLines.length) {
      blocks.push({ type: 'paragraph', text: pLines.join('\n') });
    }
  }

  return blocks;
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export default function parseMarkdownSlides(markdown) {
  const cleaned = trimFrontmatter(markdown);

  // Split on horizontal rules (---) that sit on their own line.
  // Handles --- with or without surrounding blank lines.
  const rawSlides = cleaned
    .split(/\n---(?:\n|$)/)
    .map((s) => s.trim())
    .filter(Boolean);

  // First pass: parse blocks & extract title/subtitle
  const parsed = rawSlides.map((raw) => {
    let blocks = parseBlocks(raw);

    let title = '';
    let subtitle = '';
    if (blocks.length && blocks[0].type === 'heading' && blocks[0].level === 1) {
      title = blocks[0].text;
      blocks = blocks.slice(1);
    }
    if (blocks.length && blocks[0].type === 'heading' && blocks[0].level === 2) {
      subtitle = blocks[0].text;
      blocks = blocks.slice(1);
    }

    blocks = detectDiagram(blocks);

    return { title, subtitle, blocks };
  });

  // Second pass: auto-split oversized slides
  const expanded = [];
  for (const slide of parsed) {
    const parts = splitSlideIfNeeded(slide.title, slide.subtitle, slide.blocks);
    expanded.push(...parts);
  }

  // Third pass: classify and index
  const total = expanded.length;
  return expanded.map((slide, idx) => ({
    index: idx,
    title: slide.title,
    subtitle: slide.subtitle,
    blocks: slide.blocks,
    slideType: classifySlide(slide.title, slide.subtitle, slide.blocks, idx === total - 1),
  }));
}
