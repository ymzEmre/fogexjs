const patternImei = new RegExp(/^[0-9]{15}$/);

export const isImei = (value) => {
  return patternImei.test(value);
};
