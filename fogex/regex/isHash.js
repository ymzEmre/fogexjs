const patternHash = new RegExp(/^#[a-zA-Z0-9]{3,}$/);

export const isHash = (value) => {
  return patternHash.test(value);
};
