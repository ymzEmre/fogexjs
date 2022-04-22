const patternWhiteSpace = new RegExp(/^\s*/);

const isWhiteSpace = (value) => {
  return patternWhiteSpace.test(value);
};

module.exports = isWhiteSpace;
