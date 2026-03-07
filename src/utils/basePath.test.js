import { getBasePath } from './basePath';

describe('getBasePath', () => {
  it('prefixes paths with the configured Vite base path and normalizes leading slashes', () => {
    const expected = `${import.meta.env.BASE_URL}content/demo/file.html`;

    expect(getBasePath('content/demo/file.html')).toBe(expected);
    expect(getBasePath('/content/demo/file.html')).toBe(expected);
  });
});
