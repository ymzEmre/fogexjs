const isLowerCase = require('../fogex/regex/isLowerCase');

it('should return true for valid lowercase values', () => {
  expect(isLowerCase('abc')).toBe(true);
});
