const pkg = require('../../package.json');
import { access } from './access';

export function readPackage(key: 'version' | 'repository.url'): string {
  return access(pkg, key);
}
