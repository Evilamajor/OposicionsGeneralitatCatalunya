import { contentPath } from './contentPath';

describe('contentPath', () => {
  it('prefixes study content paths with the configured Vite base path and normalizes legacy prefixes', () => {
    const expected = `${import.meta.env.BASE_URL}content/demo/file.html`;

    expect(contentPath('demo/file.html')).toBe(expected);
    expect(contentPath('content/demo/file.html')).toBe(expected);
    expect(contentPath('/content/demo/file.html')).toBe(expected);
  });
});
