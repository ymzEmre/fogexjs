const patternPostalCodes = {
  TR: /^[0-9]{5}$/,
  US: /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/,
};

const isPostalCode = (value, countyCode) => {
  let patternPostalCode = new RegExp(patternPostalCodes[countyCode]);
  if (value == null || patternPostalCode == "/(?:)/") {
    return false;
  } else {
    return patternPostalCode.test(value);
  }
};

module.exports = isPostalCode;
