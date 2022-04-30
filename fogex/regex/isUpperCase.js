const patternUpperCase = new RegExp(/^[A-Z]+$/);

export const isUpperCase = (value) => {
  if (value == null || patternUpperCase == '/(?:)/') return;
  return patternUpperCase.test(value);
};
