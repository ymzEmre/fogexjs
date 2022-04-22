const patternUpperCase = new RegExp(/^[A-Z]+$/);

const isUpperCase = (value) => {
  return patternUpperCase.test(value);
};

module.exports = isUpperCase;
