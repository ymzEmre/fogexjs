const patternLowerCase = new RegExp(/^[a-z]+$/);

export const isLowerCase = (value) => {
  if (value == null || patternLowerCase == '/(?:)/') return;
  return patternLowerCase.test(value);
};
