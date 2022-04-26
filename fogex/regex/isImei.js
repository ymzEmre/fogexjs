const patternImei = new RegExp(/^[0-9]{15}$/);

export const isImei = (value) => {
  if (value == null || patternImei == '/(?:)/') return;
  return patternImei.test(value);
};
