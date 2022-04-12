//11 haneli olmalı
//ilk hane 0 olamaz
//son hane çift olmalı

let identityNumberRule = new RegExp(/^[1-9]{1}[0-9]{9}[02468]{1}$/);

const isIdentityNumber = (value) => {
  return identityNumberRule.test(value);
};

console.log(isIdentityNumber("11667788330"));

//export { isIdentityNumber };
