const patternInteger = new RegExp(/^[0-9]+$/);

const isInteger = (value) => {
  return patternInteger.test(value);
};

module.exports = isInteger;
