const patternRgb = new RegExp(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);

export const isRgb = (value) => {
  return patternRgb.test(value);
};
