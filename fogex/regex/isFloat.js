const patternFloat = new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/);

export const isFloat = (value) => {
  if (value == null || patternFloat == '/(?:)/') return;
  return patternFloat.test(value);
};
