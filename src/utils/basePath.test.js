import { getBasePath } from './basePath';

describe('getBasePath', () => {
  it('prefixes paths with the configured Vite base path and normalizes leading slashes', () => {
    const expected = `${import.meta.env.BASE_URL}content/demo/file.html`;

    expect(getBasePath('content/demo/file.html')).toBe(expected);
    expect(getBasePath('/content/demo/file.html')).toBe(expected);
  });

  it('does not duplicate the configured base path when it is already present', () => {
    const expected = `${import.meta.env.BASE_URL}content/demo/file.html`;

    expect(getBasePath(expected)).toBe(expected);
  });

  it('keeps absolute external URLs unchanged', () => {
    expect(getBasePath('https://example.com/demo/file.html')).toBe('https://example.com/demo/file.html');
  });
});
