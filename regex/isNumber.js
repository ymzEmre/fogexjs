const patternOnlyNumber = new RegExp(/^[0-9]+$/);

const onlyNumber = (value) => {
  return patternOnlyNumber.test(value);
};
