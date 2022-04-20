const patternHash = new RegExp(/^#[a-zA-Z0-9]{3,}$/);

const isHash = (value) => {
  return patternHash.test(value);
};

module.exports = isHash;
