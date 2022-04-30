const patternWhiteSpace = new RegExp(/^\s*/);

export const isWhiteSpace = (value) => {
  if (value == null || patternWhiteSpace == '/(?:)/') return;
  return patternWhiteSpace.test(value);
};
