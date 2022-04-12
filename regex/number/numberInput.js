let onlyNumberRule = new RegExp(/^[0-9]*$/);

const isNumberInput = (value) => {
  return onlyNumberRule.test(value);
};

console.log(isNumberInput("123"));
