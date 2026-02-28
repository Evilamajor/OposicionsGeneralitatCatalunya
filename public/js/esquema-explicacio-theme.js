(function () {
  function slugify(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  function ensureHeadingIds(main) {
    const headings = [];
    const sections = Array.from(main.querySelectorAll('section'));

    sections.forEach((section) => {
      const firstH2 = section.querySelector('h2');
      if (firstH2) {
        if (!section.id) {
          section.id = slugify(firstH2.textContent) || 'sec';
        }
        headings.push(firstH2);
      }

      const h3s = Array.from(section.querySelectorAll('h3'));
      h3s.forEach((heading) => {
        if (!heading.id) {
          heading.id = slugify(heading.textContent) || 'subsec';
        }
        headings.push(heading);
      });
    });

    return headings;
  }

  function buildToc(main) {
    const tocLinks = document.querySelector('.toc-links');
    if (!tocLinks) return;
    tocLinks.innerHTML = '';

    const headings = ensureHeadingIds(main);
    headings.forEach((heading) => {
      const isH3 = heading.tagName === 'H3';
      const targetId = isH3 ? heading.id : (heading.closest('section') && heading.closest('section').id);
      if (!targetId) return;

      const anchor = document.createElement('a');
      anchor.href = '#' + targetId;
      anchor.textContent = heading.textContent.replace(/\s+/g, ' ').trim();
      if (isH3) anchor.classList.add('toc-sub');
      tocLinks.appendChild(anchor);
    });
  }

  function normalizeCallouts(main) {
    const callouts = Array.from(main.querySelectorAll('.callout'));
    callouts.forEach((callout) => {
      if (callout.classList.contains('danger')) {
        callout.classList.remove('danger');
        callout.classList.add('warn');
      }

      const text = callout.textContent.toLowerCase();
      if (!callout.classList.contains('warn') && !callout.classList.contains('ok')) {
        if (text.includes('pregunta trampa') || text.includes('trampa') || text.includes('important')) {
          callout.classList.add('warn');
        } else if (text.includes('idea examen') || text.includes('idea d’examen') || text.includes('idea d\'examen') || text.includes('idea força')) {
          callout.classList.add('ok');
        }
      }
    });
  }

  function normalizeExamSection(main) {
    const sections = Array.from(main.querySelectorAll('section'));
    sections.forEach((section) => {
      const title = section.querySelector('h2, h3');
      const text = title ? title.textContent.toLowerCase() : '';
      if (section.id === 'exam' || /idea clau d.?examen|idees clau d.?examen|resum/i.test(text)) {
        section.classList.add('exam');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');
    if (!main) return;
    normalizeCallouts(main);
    normalizeExamSection(main);
    buildToc(main);
  });
})();
