module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
    return arr
    .filter(i => typeof i === "string")
    .map(i => i.trim().charAt(0).toUpperCase())
    .sort()
    .join("");
};