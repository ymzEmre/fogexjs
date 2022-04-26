let patternCamelCase = new RegExp(/^[a-z][a-zA-Z0-9]*$/);

export const isCamelCase = (value) => {
  if (value == null || patternCamelCase == '/(?:)/') return;
  return patternCamelCase.test(value);
};
