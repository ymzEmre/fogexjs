//ip Address
// Matches:	10.0.0.0 | 195.167.1.119 | 255.255.255.255
//Non-Matches: 010.0.0.0 | 195.167.01.119 | 256.20.55.23

let ipAddressRule = new RegExp(
  /^((0|1[0-9]{0,2}|2[0-9]?|2[0-4][0-9]|25[0-5]|[3-9][0-9]?)\.){3}(0|1[0-9]{0,2}|2[0-9]?|2[0-4][0-9]|25[0-5]|[3-9][0-9]?)$/
);

const isIpAddress = (value) => {
  return ipAddressRule.test(value);
};

console.log(isIpAddress("172.12.0.12"));

//export { isIpAddress };
