let patternPasswordStrong = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

export const isPassword = (value) => {
  if (value == null || patternPassword == '/(?:)/') return;
  return patternPassword.test(value);
};
