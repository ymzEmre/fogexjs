let passwordOneRule = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/);

const isPasswordOne = (value) => {
  return passwordOneRule.test(value);
};
