const patternInteger = new RegExp(/^[0-9]+$/);

export const isInteger = (value) => {
  return patternInteger.test(value);
};
