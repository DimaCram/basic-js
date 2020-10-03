const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res : [],
  getLength() {
    return this.ges.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.res.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(!this.res[position - 1] || !Number.isInteger(position)){ 
      this.res.splice(0, this.res.length);
      throw new Error('error');
    }
      
    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    const resString = this.res.join("~~");
    this.res.splice(0, this.res.length);
    return resString;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
