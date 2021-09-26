/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (s.length == 1) return s;
  let map = new Map();
  for (const str of s) {
    if (map.has(str)) {
      map.set(str, false)
    } else {
      map.set(str, true)
    }
  }
  for (let [k, v] of map) {
    if (v) return k;
  }
  return ' ';
};
var s = "abaccdeff"
console.log(firstUniqChar(s));