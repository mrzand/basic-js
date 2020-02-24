class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  sumCode(sum) {
    return sum.charCodeAt(0) - "A".charCodeAt(0);
  }
  shift(sum, length) {
    const code = this.sumCode(sum);
    return String.fromCharCode(((code + length) % 26) + "A".charCodeAt(0));
  }
  encrypt(string, key) {
    return this.crypt(string, key, false);
  }
  decrypt(string, key) {
    return this.crypt(string, key, true);
  }
  crypt(string, key, isDecrypt) {
    if (string === undefined || key == undefined) {
      throw new Error();
    }
    string = string.toUpperCase();
    key = key.toUpperCase();
    const arr = [];
    let coding = 0;
    for (let i = 0; i < string.length; ++i) {
      if (string[i] >= "A" && string[i] <= "Z") {
        if (isDecrypt) {
          arr.push(
            this.shift(string[i], 26 - this.sumCode(key[coding % key.length]))
          );
        } else {
          arr.push(
            this.shift(string[i], this.sumCode(key[coding % key.length]))
          );
        }
        coding++;
      } else {
        arr.push(string[i]);
      }
    }
    if (!this.direct) {
      arr.reverse();
    }
    return arr.join("");
  }
}
module.exports = VigenereCipheringMachine;