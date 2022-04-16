let mailRule = new RegExp(
  /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+$/
);

const isMail = (value) => {
  return mailRule.test(value);
};

console.log(isMail("ahmetozkan021@gmail.com"));

//export { isMail };
