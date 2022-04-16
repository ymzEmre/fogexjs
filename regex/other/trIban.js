//TR ile başlayan 24 haneli yan yana birleşik ve TRXX XXXX XXXX XXXX XXXX XXXX XX formatında yazılanları kabul ediyor.
//matches: TR123456789123456789123400, TR12 3456 7891 2345 6789 1234 00
//([0-9a-zA-Z]{4})\s? -> bölümü 4 kere tekrar ediyor. bu ifade kümesi refactor edilebilir.

let trIbanRule = new RegExp(
  /^TR([0-9a-zA-Z]{2})\s?([0-9a-zA-Z]{4})\s?([0-9a-zA-Z]{4})\s?([0-9a-zA-Z]{4})\s?([0-9a-zA-Z]{4})\s?([0-9a-zA-Z]{4})\s?([0-9a-zA-Z]{2})\s?$/
);

const isTRIban = (value) => {
  return trIbanRule.test(value);
};

console.log(isTRIban("TR12 3456 7891 2345 6789 1234 00"));

//export { isTRIban };
