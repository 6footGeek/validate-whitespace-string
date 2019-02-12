export function validateWhitespaceString (input) {
  if (typeof input !== 'string') {
    throw new TypeError('validateWhitespaceString requires a string');
  }

  return !!(input && input.trim().length !== 0);
}