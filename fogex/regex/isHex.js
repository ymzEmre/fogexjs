const patternHex = new RegExp(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i);

export const isHex = (value) => {
  return patternHex.test(value);
};
