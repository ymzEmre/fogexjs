//telefon numarası 2
// work: +905354581267, 905354581267, 05354581267, 5354581267

let phoneNumberTwoRule = new RegExp(/^(\+?90|0)?5\d{9}$/);

const isPhoneNumberTwo = (value) => {
  return phoneNumberTwoRule.test(value);
};

console.log(isPhoneNumberTwo("5354581267"));

//export { isPhoneNumberTwo };
