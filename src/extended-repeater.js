module.exports = function repeater(str, options) {
  if (!options.repeatTimes && !options.additionRepeatTimes)
    return str + options.addition;
  var separator = options.separator || "+";
  var sAddition = options.addition;
  var sAdditionalSeparator = options.additionSeparator || "";
  var additionalS = sAddition + "___";
  var additionalStr = new Array(options.additionRepeatTimes + 1 || 0)
    .join(`${additionalS}`)
    .replace(/___$/, "")
    .split("___")
    .join(sAdditionalSeparator);
  var mainString = str + additionalStr + "___";
  var arrult = new Array(options.repeatTimes + 1 || 0)
    .join(`${mainString}`)
    .replace(/___$/, "")
    .split("___")
    .join(separator);
  return arrult;
};