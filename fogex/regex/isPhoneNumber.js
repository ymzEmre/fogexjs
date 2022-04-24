<<<<<<< HEAD
const phones = {
=======
const patternPhones = {
>>>>>>> fogexjs-master
  TR: /^(\+?90|0)?5\d{9}$/,
  US: /^(\+?1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/,
};

const isPhoneNumber = (value, countyCode) => {
<<<<<<< HEAD
  let patternPhoneNumber = new RegExp(phones[countyCode]);
  if (value == null || patternPhoneNumber == "/(?:)/") {
=======
  let patternPhoneNumber = new RegExp(patternPhones[countyCode]);
  if (value == null || patternPhoneNumber == '/(?:)/') {
>>>>>>> fogexjs-master
    return false;
  } else {
    return patternPhoneNumber.test(value);
  }
};

module.exports = isPhoneNumber;
