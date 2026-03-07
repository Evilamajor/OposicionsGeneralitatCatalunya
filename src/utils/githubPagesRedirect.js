export function restoreRedirectFromSessionStorage(storage = window.sessionStorage, history = window.history) {
  const redirect = storage.getItem('redirect');

  if (!redirect) {
    return;
  }

  storage.removeItem('redirect');
  history.replaceState(null, null, redirect);
}
