const CustomError = require("../extensions/custom-error");

let max_depth = 0;
let cur_depth = 1;
module.exports = class DepthCalculator {

  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
          cur_depth++;
          max_depth = this.calculateDepth(arr[i]);
        }
    }
    max_depth = (max_depth > cur_depth) ? max_depth : cur_depth;

    let res = max_depth;
    max_depth = 0;
    cur_depth = 1;
    return res;
  }
};