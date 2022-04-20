let patternCamelCase = new RegExp(/^[a-z][a-zA-Z0-9]*$/);

const isCamelCase = (value) => {
  return patternCamelCase.test(value);
};

module.exports = isCamelCase;
