/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = {};
  for (let e of nums) {
    if (map[e]) return e;
    map[e] = true;
  }
};
// 查重就好了
var findRepeatNumber = function (nums) {
  const set = new Set();
  for (let e of nums) {
    if (set.has(e)) return e;
    set.add(e);
  }
};