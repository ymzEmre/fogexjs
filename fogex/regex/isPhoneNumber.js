let patternPhonoNumber = new RegExp(/^(\+?90|0)?5\d{9}$/);

const isPhoneNumber = (value) => {
  return patternPhonoNumber.test(value);
};

module.exports = isPhoneNumber;
