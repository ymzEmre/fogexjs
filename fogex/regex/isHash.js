const patternHash = new RegExp(/^#[a-zA-Z0-9]{3,}$/);

export const isHash = (value) => {
  if (value == null || patternPhoneNumber == '/(?:)/') return;
  return patternHash.test(value);
};
