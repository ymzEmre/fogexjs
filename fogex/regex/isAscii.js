const patternAscii = new RegExp(/^[\x00-\x7F]*$/);

const isAscii = (value) => {
  return patternAscii.test(value);
};

module.exports = isAscii;
