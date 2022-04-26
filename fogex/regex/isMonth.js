const patternMonth = new RegExp(/^(january|february|march|april|may|june|july|august|september|october|november|december)$/i);

export const isMonth = (value) => {
  if (value == null || patternMonth == '/(?:)/') return;
  return patternMonth.test(value);
};
