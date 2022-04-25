const isPhoneNumber = require("../fogex/regex/isIdentityNumber");

it("should return true for phone format", () => {
  expect(isPhoneNumber("12345678910", "TR")).toBe(true);
  expect(isPhoneNumber("22334455666", "TR")).toBe(true);
  expect(isPhoneNumber("01234567892", "TR")).toBe(false);
  expect(isPhoneNumber("41234567829", "TR")).toBe(false);
  expect(isPhoneNumber("002-94-0823", "US")).toBe(true);
  expect(isPhoneNumber("605-48-4088", "US")).toBe(true);
  expect(isPhoneNumber("676-09-9718", "US")).toBe(true);
  expect(isPhoneNumber("759-10-5896", "US")).toBe(true);
});
