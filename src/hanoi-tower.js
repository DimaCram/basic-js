const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SECONDS_PER_HOUR = 3600;
  let res = {};
  res.turns = Math.pow(2, disksNumber) - 1;
  res.seconds = Math.floor( SECONDS_PER_HOUR / turnsSpeed * res.turns);
  return res;
};
