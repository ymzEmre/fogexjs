let patternLetterString = new RegExp(/^[a-zA-Z]+$/);

export const isString = (value) => {
  if (value == null || patternLetterString == '/(?:)/') return;
  return patternLetterString.test(value);
};
