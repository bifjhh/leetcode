/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let set = new Set(),
    max = 0,
    len = str.length;
  for (let i = 0; i < len; i++) {
    max = Math.max(set.size, max)
    set.clear()
    for (let j = i; j < len; j++) {
      if (set.has(str[j])) {
        max = Math.max(set.size, max)
        set.clear()
        set.add(str[j])
        break;
      }
      set.add(str[j]);
    }
  }
  return Math.max(set.size, max);
};
/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let res = '',
    max = 0,
    i = 0,
    j = 0,
    len = str.length;
  while (i < len && j < len) {
    while (j < len && !res.includes(str[j])) {
      res += str[j]
      j++;
    }
    max = Math.max(max, res.length)
    res = res.slice(1, j);
    i++;
  }
  return Math.max(max, res.length);
};
var str = "bbtablud"
console.log(lengthOfLongestSubstring(str));