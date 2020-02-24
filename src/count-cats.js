module.exports = function countCats(arr) {
  return [].concat(...arr).filter(i => i === "^^").length;
};