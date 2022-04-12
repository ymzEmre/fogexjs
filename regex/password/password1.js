//En az bir büyük harf içermelidir
//En az bir küçük harf içermelidir
//En az bir sayı içermelidir
//En az bir özel karakter içermelidir
//minimum uzunluk 8 olmalıdır.

let passwordOneRule = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/
);

const isPasswordOne = (value) => {
  return passwordOneRule.test(value);
};

console.log(isPasswordOne("er.Tert78*"));

//export { isPasswordOne };
