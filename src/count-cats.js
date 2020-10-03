const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;

  backyard.forEach(element => {
   element.forEach(elem => { count += elem === "^^" ? 1 : 0; }) 
  });
  return count;
  // remove line with error and write your code here
};
