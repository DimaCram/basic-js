const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
  }

  encrypt(message, key) {

    if(message == undefined || key == undefined)
      throw 'error';

    message = message.toLowerCase().split("");
    key = key.toLowerCase().split("");

    let index_key = 0;
    let sumRes = [];
    for(let i = 0; i < message.length; i++){
      if(this.alphabet.indexOf(message[i]) > -1){

        let numLetter = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[index_key])) % 26 ;
        sumRes.push(numLetter);

        index_key = index_key === (key.length - 1) ? 0 : ++index_key;
      }else{
        sumRes.push(message[i]);
      }
    }
    let resStr = "";
    for(let i = 0; i < sumRes.length; i++){
      if(typeof sumRes[i] !== "string" && this.alphabet[sumRes[i]] !== undefined)
        resStr += this.alphabet[sumRes[i]];
      else
        resStr += sumRes[i];
    }
    if(!this.isDirect)
      resStr = resStr.split("").reverse().join("");

    return resStr.toUpperCase();
  }
  decrypt(message, key) {
    if(message == undefined || key == undefined)
      throw 'error';


    message = message.toLowerCase().split("");
    key = key.toLowerCase().split("");

    let index_key = 0;
    let sumRes = [];
    for(let i = 0; i < message.length; i++){
      if(this.alphabet.indexOf(message[i]) > -1){

        let numLetter = (this.alphabet.indexOf(message[i]) + 26 - this.alphabet.indexOf(key[index_key])) % 26;
        sumRes.push(numLetter);

        index_key = index_key === (key.length - 1) ? 0 : ++index_key;
      }else{
        sumRes.push(message[i]);
      }
    }
    let resStr = "";
    for(let i = 0; i < sumRes.length; i++){
      if(typeof sumRes[i] !== "string" && this.alphabet[sumRes[i]] !== undefined)
        resStr += this.alphabet[sumRes[i]];
      else
        resStr += sumRes[i];
    }
    if(!this.isDirect)
      resStr = resStr.split("").reverse().join("");

    return resStr.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
