const patternImei = new RegExp(/^[0-9]{15}$/);

export const isImei = (value) => {
  if (value == null || patternPhoneNumber == '/(?:)/') return;
  return patternImei.test(value);
};
