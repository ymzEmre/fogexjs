const patternAscii = new RegExp(/^[\x00-\x7F]*$/);

export const isAscii = (value) => {
  if (value == null || patternAscii == '/(?:)/') return;
  return patternAscii.test(value);
};
