module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  var arrult = [];

  for (let index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case "--discard-next":
        index += 1;
        break;
      case "--discard-prev":
        if (arrult.length != 0) arrult.pop();
        break;
      case "--double-next":
        if (index < arr.length - 1) arrult.push(arr[index + 1]);
        break;
      case "--double-prev":
        if (index >= 1) arrult.push(arr[index - 1]);
        break;
      default:
        arrult.push(arr[index]);
    }
  }

  return arrult;
};