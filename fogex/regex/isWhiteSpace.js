const patternWhiteSpace = new RegExp(/^\s*/);

export const isWhiteSpace = (value) => {
  return patternWhiteSpace.test(value);
};
