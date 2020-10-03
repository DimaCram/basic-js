const CustomError = require("../extensions/custom-error");

let CURRENT_DEPHT = 1;

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    throw new CustomError('Not implemented');
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        CURRENT_DEPHT++;
        this.calculateDepth(arr[i]);
      }
    }
    return CURRENT_DEPHT;
  }
};