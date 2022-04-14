//plate
// work: 34A1234, 34A12345, 01AB123, 01AB1234, 12ABC34

let plateRule = new RegExp(
  /^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\d{4,5})|([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3}))$/
);

const isPlate = (value) => {
  return plateRule.test(value);
};

console.log(isPlate("12ABC34"));

//export { isPlate };
