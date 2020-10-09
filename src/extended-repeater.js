const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if(options.separator === undefined) options.separator = "+";
  if(options.additionSeparator === undefined) options.additionSeparator = "|";

  if(options.repeatTimes === undefined) return str + options.addition;

  str = String(str);
  if(options.addition !== undefined) options.addition = String(options.addition);

  if(options.additionRepeatTimes !== undefined){
    let arrAddition = createArr(options.addition, options.additionRepeatTimes);
    str +=arrAddition.join(options.additionSeparator);
  }

  let arrString = createArr(str, options.repeatTimes);

  return arrString.join(options.separator);

};
function createArr(content, length){
  let arr = [];
  for(let i = 0; i < length; i++){
    arr.push(content);
  }
  return arr;
}