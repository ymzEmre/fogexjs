const patternMongoId = new RegExp('^[0-9a-fA-F]{24}$');

const isMongoId = (value) => {
  return patternMongoId.test(value);
};

module.exports = isMongoId;
