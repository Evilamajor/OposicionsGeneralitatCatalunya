import { getContentPath } from './getContentPath';

describe('getContentPath', () => {
  it('prefixes content paths with the configured Vite base path and normalizes leading slashes', () => {
    const expected = `${import.meta.env.BASE_URL}content/demo/file.html`;

    expect(getContentPath('content/demo/file.html')).toBe(expected);
    expect(getContentPath('/content/demo/file.html')).toBe(expected);
  });
});
