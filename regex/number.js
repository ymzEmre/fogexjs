let onlyNumber = new RegExp(/^[0-9]+$/);

const number = (value) => {
  return onlyNumber.test(value);
};

console.log(number('123a'));
