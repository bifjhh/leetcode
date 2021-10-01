/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i],
      k = target - e;
    if (map[k] !== undefined) {
      return [k, e]
    }
    map[e] = i;
  }
};
var twoSum = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  // 倒序, 找到小于target的值, 为 r 的索引
  while (r >= 0 && nums[r] > target) r--;
  // 由左至右, 两者相加
  while (l < r && nums[r] > target) {
    let s = nums[l] + nums[r]
    // 相等, 则返回两个数字
    if (target === s) {
      return [nums[l], nums[r]]
    }
    // 如果t > s, 则表示左侧的值小了 索引+1
    if (target > s) {
      l++
    } else { // 反之 -1
      r--;
    }
  }
  return [nums[l], nums[r]]
};

/* 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
示例 2：

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
*/

var arr = [2, 7, 11, 15],
  target = 9;
// var arr = [10, 26, 30, 31, 47, 60],
//   target = 40;


console.log(twoSum(arr, target));