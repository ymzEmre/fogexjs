const patternPins = {
  4: /^[0-9]{4}$/,
  6: /^[0-9]{6}$/,
};

export const isPin = (value, pinLength) => {
  let patternPin = new RegExp(patternPins[pinLength]);
  if (value == null || patternPhoneNumber == '/(?:)/') return;
  return patternPin.test(value);
};
