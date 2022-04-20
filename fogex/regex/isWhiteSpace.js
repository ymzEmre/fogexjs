const patternWhiteSpace = new RegExp(/^\s*/);

const whiteSpace = (value) => {
  return patternWhiteSpace.test(value);
};

module.exports = whiteSpace;
