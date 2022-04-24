const isPhoneNumber = require('../fogex/regex/isPhoneNumber');

it('should return true for phone format', () => {
  expect(isPhoneNumber('+905357894520', 'TR')).toBe(true);
  expect(isPhoneNumber('+1 800 5551212', 'US')).toBe(true);
});
