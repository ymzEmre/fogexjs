let patternLetterString = new RegExp(/^[a-zA-Z]+$/);

const isLetterString = (value) => {
  return patternLetterString.test(value);
};

module.exports = isLetterString;
