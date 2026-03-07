import { restoreRedirectFromSessionStorage } from './githubPagesRedirect';

describe('restoreRedirectFromSessionStorage', () => {
  it('restores and clears a saved redirect path', () => {
    const storage = {
      getItem: vi.fn(() => '/OposicionsGeneralitatCatalunya/bloc/bloc-1/tema-1/esquemes'),
      removeItem: vi.fn(),
    };
    const history = {
      replaceState: vi.fn(),
    };

    restoreRedirectFromSessionStorage(storage, history);

    expect(storage.getItem).toHaveBeenCalledWith('redirect');
    expect(storage.removeItem).toHaveBeenCalledWith('redirect');
    expect(history.replaceState).toHaveBeenCalledWith(
      null,
      null,
      '/OposicionsGeneralitatCatalunya/bloc/bloc-1/tema-1/esquemes'
    );
  });

  it('does nothing when there is no saved redirect', () => {
    const storage = {
      getItem: vi.fn(() => null),
      removeItem: vi.fn(),
    };
    const history = {
      replaceState: vi.fn(),
    };

    restoreRedirectFromSessionStorage(storage, history);

    expect(storage.removeItem).not.toHaveBeenCalled();
    expect(history.replaceState).not.toHaveBeenCalled();
  });
});
