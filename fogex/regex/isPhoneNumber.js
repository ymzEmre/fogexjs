let phoneNumberTwoRule = new RegExp(/^(\+?90|0)?5\d{9}$/);

const isPhoneNumberTwo = (value) => {
  return phoneNumberTwoRule.test(value);
};

module.exports = isPhoneNumberTwo;
