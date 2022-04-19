let patternEmail = new RegExp(/([a-zA-Z0-9])+\@([a-zA-Z0-9])+\.[a-zA-Z]{2,}/);

const isEmail = (value) => {
  return patternEmail.test(value);
};

module.exports = {
  isEmail,
};
