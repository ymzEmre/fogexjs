let patternIdentityNumber = new RegExp(/^[1-9]{1}[0-9]{9}[02468]{1}$/);

export const isIdentityNumber = (value) => {
  if (value == null || patternIdentityNumber == '/(?:)/') return;
  return patternIdentityNumber.test(value);
};
