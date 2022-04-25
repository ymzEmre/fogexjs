const patternHour12 = new RegExp(/^(0?[1-9]|1[012])(:[0-5]\d){0,2}(am|pm)$/);

export const isHour12 = (value) => {
  return patternHour12.test(value);
};
