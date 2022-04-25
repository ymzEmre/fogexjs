const patternBoolean = new RegExp(/^(true|false)$/);

export const isBoolean = (value) => {
  return patternBoolean.test(value);
};
