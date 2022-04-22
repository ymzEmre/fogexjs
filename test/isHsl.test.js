const isHsl = require('../fogex/regex/isHsl');

it('should return true for valid hsl values', () => {
  expect(isHsl('hsl(0, 0%, 0%)')).toBe(true);
  expect(isHsl('hsl(0, 0%, 0%)')).toBe(true);
  expect(isHsl('hsl(0, 0%, 0%)')).toBe(true);
});
