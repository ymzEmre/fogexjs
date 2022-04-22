const patternMac = new RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/);

const isMac = (value) => {
  return patternMac.test(value);
};

module.exports = isMac;
