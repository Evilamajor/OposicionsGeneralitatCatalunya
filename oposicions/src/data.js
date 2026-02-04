// This file defines the data structure for blocks and their
// corresponding topics.  Each block has an `id`, a `title`,
// and an array of `topics` where each topic has a unique
// identifier, a display label, and the filename of the HTML
// explanation to open.
export const blocks = [
  {
    id: 'bloc1',
    title: 'Bloc 1',
    topics: [
      { id: 'exp1', label: 'Explicació 1', filename: 'explicacio1.html' },
      { id: 'exp2', label: 'Explicació 2', filename: 'explicacio2.html' },
    ],
  },
  {
    id: 'bloc2',
    title: 'Bloc 2',
    topics: [
      { id: 'exp3', label: 'Explicació 3', filename: 'explicacio3.html' },
    ],
  },
];