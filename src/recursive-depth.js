module.exports = class DepthCalculator {
  calculateDepth(arr, countDepth) {
    this.countDepth = countDepth || 1;
    return function() {
      var filteredArr = arr.filter(i => Array.isArray(i));
      if (filteredArr.length) {
        this.countDepth += 1;
        var flattedArr = arr.reduce((acc, val) => acc.concat(val), []);
        this.calculateDepth(flattedArr, this.countDepth);
      }
      return this.countDepth;
    }.call(this);
  }
};