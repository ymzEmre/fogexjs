//telefon numarası
// work: 05354581267, 0535 458 1267, 0535 458 12 67, 5354581267, 535 458 1267, 535 458 12 67

let phoneNumberRule = new RegExp(
  /^(0?5)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/
);

const isPhoneNumber = (value) => {
  return phoneNumberRule.test(value);
};

console.log(isPhoneNumber("535 458 12 67"));

//export { isPhoneNumber };
