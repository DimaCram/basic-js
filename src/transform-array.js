const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  throw new CustomError('Not implemented');
  for(let i = 0; i < arr.length; i++){
    if(isNaN(arr[i])){
      switch(arr[i]){
        case "--discard-next":
          i +=2;
        break;
        case "--discard-prev":
          if(i !== 0)
            res.pop();
        break;
        case "--double-next":
          if(arr[i + 1] !== undefined)
            res.push(arr[i + 1]);
        break;
        case "--double-prev":
          if(arr[i - 1] !== undefined)
            res.push(arr[i - 1]);
        break;
      }
    }else{
      res.push(arr[i]);
    }
  }
  return res;
};