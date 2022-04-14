//.txt format
// Matches:	c:\\file.txt | d:\\folder\\sub folder\\file.txt |
//Non-Matches: C: | C:\file.xls | folder.txt

let txtFormatRule = new RegExp(
  /^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w ]*))+\.(txt|TXT)$/
);

const isTxtFormat = (value) => {
  return txtFormatRule.test(value);
};

console.log(isTxtFormat("d:\\folder\\sub folder\\file.txt"));

//export { isTxtFormat };
