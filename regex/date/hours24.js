//dd:ss stilinde saat girişi (24 saat)
// work 08:45, 17:32
//not work 24:00, 14:62

let hours24Rule = new RegExp(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/);

const isHours24 = (value) => {
  return hours24Rule.test(value);
};

console.log(isHours24("17:32"));

//export { isHours24 };
