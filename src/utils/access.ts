export function access(obj: any, path: string | string[], defaults?: any) {
  if (!(path instanceof Array)) {
    path = String(path).split('.');
  }

  try {
    for (let i = 0; i < path.length; i++) {
      obj = obj[path[i]];
    }
    return obj || defaults;
  } catch (e) {
    return defaults;
  }
}
