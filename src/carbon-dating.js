const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string") return false;
  
  const sampleActivityNumber = Number(sampleActivity);
  if(isNaN(sampleActivityNumber)) return false;
  if(sampleActivityNumber <= 0 || sampleActivityNumber > 15) return false;

  return Math.log(MODERN_ACTIVITY / sampleActivityNumber) / (Math.log(2) / HALF_LIFE_PERIOD);
};
