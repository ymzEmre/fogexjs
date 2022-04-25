const patternAscii = new RegExp(/^[\x00-\x7F]*$/);

export const isAscii = (value) => {
  return patternAscii.test(value);
};
