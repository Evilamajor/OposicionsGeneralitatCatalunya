import { contentPath } from './contentPath';
import { clearContentCache, fetchTextWithCache } from './contentCache';

describe('fetchTextWithCache', () => {
  afterEach(() => {
    clearContentCache();
    vi.restoreAllMocks();
  });

  it('fetches content through the GitHub Pages-safe content helper path', async () => {
    const expectedPath = contentPath('demo/file.html');
    const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      text: vi.fn().mockResolvedValue('<p>demo</p>'),
    });

    await expect(fetchTextWithCache(expectedPath)).resolves.toBe('<p>demo</p>');
    await expect(fetchTextWithCache(expectedPath)).resolves.toBe('<p>demo</p>');

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedPath, { signal: undefined });
  });
});
