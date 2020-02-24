const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    var val = `( ${value} )`;
    this.arr.push(val);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position > this.arr.length - 1 ||
      position <= 0
    ) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    var sarr = this.arr.join("~~");
    this.arr = [];
    return sarr;
  }
};
module.exports = chainMaker;