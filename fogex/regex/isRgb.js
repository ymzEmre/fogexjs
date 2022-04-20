const patternRgb = new RegExp(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);

const isRgb = (value) => {
  return patternRgb.test(value);
};

module.exports = isRgb;
