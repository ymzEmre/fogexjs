//date
// work: 19081898, 19.08.1898, 19-08-1898, 19/08/1898, 19 08 1898,
//gün için ilk sayı 3 ise 2.sayısı 1'i geçmemeli
//ay için ilk sayı 1 ise 2.sayısı 2'yi geçmemeli
//Bu kısımlar dışında 5 formatı karşılamakta

let dateRule = new RegExp(
  /^([0-3]){1}([0-9]){1}(|\/|\.|\-|\s)?([0-1]){1}([0-9]){1}(|\/|\.|\-|\s)?([1-9]){4}$/
);

const isDate = (value) => {
  return dateRule.test(value);
};

console.log(isDate("29.08.1898"));

//export { isDate };
