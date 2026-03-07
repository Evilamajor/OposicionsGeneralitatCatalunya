import { clearContentCache, fetchTextWithCache } from './contentCache';

describe('fetchTextWithCache', () => {
  afterEach(() => {
    clearContentCache();
    vi.restoreAllMocks();
  });

  it('normalizes root content paths through the configured Vite base path before fetching', async () => {
    const expectedPath = `${import.meta.env.BASE_URL}content/demo/file.html`;
    const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      text: vi.fn().mockResolvedValue('<p>demo</p>'),
    });

    await expect(fetchTextWithCache('/content/demo/file.html')).resolves.toBe('<p>demo</p>');
    await expect(fetchTextWithCache('/content/demo/file.html')).resolves.toBe('<p>demo</p>');

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedPath, { signal: undefined });
  });
});
