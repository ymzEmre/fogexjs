let patternExtensionTxt = new RegExp(/^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w ]*))+\.(txt|TXT)$/);

const isExtensionTxt = (value) => {
  return patternExtensionTxt.test(value);
};

module.exports = isExtensionTxt;
