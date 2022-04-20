let stringInputRule = new RegExp(/^[a-zA-ZığüşöçİĞÜŞÖÇ\\s]*$/);

const isStringInput = (value) => {
  return stringInputRule.test(value);
};

module.exports = isStringInput;
