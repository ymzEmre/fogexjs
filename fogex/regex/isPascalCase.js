const patternPascalCase = new RegExp(/^[A-Z][a-zA-Z0-9]*$/);

export const isPascalCase = (value) => {
  if (value == null || patternPascalCase == '/(?:)/') return;
  return patternPascalCase.test(value);
};
