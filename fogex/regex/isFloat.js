const patternFloat = new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/);

const isFloat = (value) => {
  return patternFloat.test(value);
};

module.exports = isFloat;
