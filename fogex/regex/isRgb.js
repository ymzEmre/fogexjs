const patternRgb = new RegExp(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);

export const isRgb = (value) => {
  if (value == null || patternPhoneNumber == '/(?:)/') return;
  return patternRgb.test(value);
};
