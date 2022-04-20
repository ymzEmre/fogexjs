const patternLowerCase = new RegExp(/^[a-z]+$/);

const isLowerCase = (value) => {
  return patternLowerCase.test(value);
};

module.exports = isLowerCase;
