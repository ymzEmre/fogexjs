let patternHour24 = new RegExp(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/);

export const isHour24 = (value) => {
  return patternHour24.test(value);
};
