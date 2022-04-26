const patternMongoId = new RegExp('^[0-9a-fA-F]{24}$');

export const isMongoId = (value) => {
  if (value == null || patternPhoneNumber == '/(?:)/') return;
  return patternMongoId.test(value);
};
