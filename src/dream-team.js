const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if(!Array.isArray(members)) return false;
  
  let res = [];
  members.forEach(element => {
    typeof element === 'string' ? res.push(element.trim().toUpperCase()[0]) : false;
  });
  
  return res.sort().join("");
};
