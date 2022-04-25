const patternMonth = new RegExp(/^(january|february|march|april|may|june|july|august|september|october|november|december)$/i);

export const isMonth = (value) => {
  return patternMonth.test(value);
};
