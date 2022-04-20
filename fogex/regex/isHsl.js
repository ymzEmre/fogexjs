const patternHsl = new RegExp(/^hsl\(\s*(-?\d+|-?\d*\.\d+)\s*,\s*(-?\d+|-?\d*\.\d+)%\s*,\s*(-?\d+|-?\d*\.\d+)%\s*\)$/);

const isHsl = (color) => {
  return patternHsl.test(color);
};

module.exports = isHsl;
