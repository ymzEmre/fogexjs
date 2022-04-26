const patternWhiteSpace = new RegExp(/^\s*/);

export const isWhiteSpace = (value) => {
  if (value == null || patternPhoneNumber == '/(?:)/') return;
  return patternWhiteSpace.test(value);
};
