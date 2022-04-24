const patternPins = {
  4: /^[0-9]{4}$/,
  6: /^[0-9]{6}$/,
};

const isPin = (value, pinLength) => {
  let patternPin = new RegExp(patternPins[pinLength]);
  if (value == null || patternPin == '/(?:)/') {
    return false;
  } else {
    return patternPin.test(value);
  }
};

module.exports = isPin;
