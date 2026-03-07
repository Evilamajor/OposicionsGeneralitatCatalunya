import { getBasePath } from './basePath';

export function getContentPath(path = '') {
  return getBasePath(String(path).replace(/^\/+/, ''));
}
