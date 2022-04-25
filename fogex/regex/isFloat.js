const patternFloat = new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/);

export const isFloat = (value) => {
  return patternFloat.test(value);
};
