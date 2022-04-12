// 6 rakamdan oluşan pin (kullanım alanı: sms - mail doğrulamaları, uygulamaya pin ile giriş)

let pinSixDigitRule = new RegExp(/^[0-9]{6}$/);

const isPinSixDigit = (value) => {
  return pinSixDigitRule.test(value);
};

console.log(isPinSixDigit("127811"));

//export { isPinSixDigit };
