import { contentPath } from './contentPath';

// Backward-compatible alias. New code should import contentPath directly.
export function getContentPath(path = '') {
  return contentPath(path);
}
