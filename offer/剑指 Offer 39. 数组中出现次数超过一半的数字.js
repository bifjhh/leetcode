/**
 * map 记录所有值
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 数组的一半的长度
  let n = Math.floor(nums.length / 2),
    map = {};
  for (const num of nums) {
    // 更新计数
    map[num] = (map[num] || 0) + 1;
    // 如果已经超过一半的值了, 就不用往后走了
    if (map[num] > n) return num;
  }
};

// 投票法
var majorityElement = function (nums) {
  let count = 0,
    ans = 0;
  for (const num of nums) {
    // 如果计数为0, 则记录值为当前值
    if (!count) {
      ans = num;
    }
    // 更新计数, 如果两者相同, 则加一, 负责-1
    count += ans == num ? 1 : -1;
  }
  return ans;
};
var arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
// var arr = [1, 2, 1, 3, 1, 4, 1, 5, 6];
console.log(majorityElement(arr));