const patternLowerCase = new RegExp(/^[a-z]+$/);

export const isLowerCase = (value) => {
  return patternLowerCase.test(value);
};
