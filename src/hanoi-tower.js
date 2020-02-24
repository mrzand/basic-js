module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var turnsSum = 2 ** disksNumber - 1;
  var speedSum = turnsSum / (turnsSpeed / 3600);
  return {
    turns: turnsSum,
    seconds: speedSum
  };
};