// 4 rakamdan oluşan pin (kullanım alanı: uygulamaya pin ile giriş)

let pinFoutDigitRule = new RegExp(/^[0-9]{4}$/);

const isPinFourDigit = (value) => {
  return pinFoutDigitRule.test(value);
};

console.log(isPinFourDigit(""));

//export { isPinFourDigit };
