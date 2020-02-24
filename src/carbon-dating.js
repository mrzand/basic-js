const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false
  }
  sampleActivity = parseFloat(sampleActivity)
  if (sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693);
  }
  return false;
};