let patternPasswordStrong = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

const isPasswordStrong = (value) => {
  return patternPasswordStrong.test(value);
};

module.exports = isPasswordStrong;
