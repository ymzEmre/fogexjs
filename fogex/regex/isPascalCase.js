const patternPascalCase = new RegExp(/^[A-Z][a-zA-Z0-9]*$/);

const isPascalCase = (value) => {
  return patternPascalCase.test(value);
};

module.exports = isPascalCase;
