const patternUpperCase = new RegExp(/^[A-Z]+$/);

export const isUpperCase = (value) => {
  return patternUpperCase.test(value);
};
