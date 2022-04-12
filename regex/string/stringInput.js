let stringInputRule = new RegExp(/^[a-zA-ZiığüşöçİĞÜŞÖÇ\\s]*$/);

const isStringInput = (value) => {
  return stringInputRule.test(value);
};

console.log(isStringInput("asdişğü"));

//export { isStringInput };
