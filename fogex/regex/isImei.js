const patternImei = new RegExp(/^[0-9]{15}$/);

const isImei = (value) => {
  return patternImei.test(value);
};

module.exports = isImei;
