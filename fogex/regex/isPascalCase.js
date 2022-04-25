const patternPascalCase = new RegExp(/^[A-Z][a-zA-Z0-9]*$/);

export const isPascalCase = (value) => {
  return patternPascalCase.test(value);
};
