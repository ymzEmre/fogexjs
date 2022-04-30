const patternHsl = new RegExp(/^hsl\(\s*(-?\d+|-?\d*\.\d+)\s*,\s*(-?\d+|-?\d*\.\d+)%\s*,\s*(-?\d+|-?\d*\.\d+)%\s*\)$/);

export const isHsl = (color) => {
  if (value == null || patternHsl == '/(?:)/') return;
  return patternHsl.test(color);
};
