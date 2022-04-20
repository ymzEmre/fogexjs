const patternMd5 = new RegExp(/^[a-f0-9]{32}$/);

const isMd5 = (value) => {
  return patternMd5.test(value);
};

module.exports = isMd5;
