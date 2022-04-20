const patternBoolean = new RegExp(/^(true|false)$/);

const isBoolean = (value) => {
  return patternBoolean.test(value);
};

module.exports = isBoolean;
