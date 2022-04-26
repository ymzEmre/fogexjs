const patternBoolean = new RegExp(/^(true|false)$/);

export const isBoolean = (value) => {
  if (value == null || patternBoolean == '/(?:)/') return;
  return patternBoolean.test(value);
};
