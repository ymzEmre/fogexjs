let patternLetterString = new RegExp(/^[a-zA-Z]+$/);

export const isString = (value) => {
  return patternLetterString.test(value);
};