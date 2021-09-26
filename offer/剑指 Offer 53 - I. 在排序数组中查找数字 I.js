/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 从两端向中间查找
  let i = 0,
    j = nums.length - 1;
  while (nums[i] < target) i++
  while (nums[j] > target) j--
  // 结束的索引 - 开始的索引 + 1, 就是出现的次数
  console.log(i, j);
  return j - i + 1
};
// 一次遍历, 从左侧开始查找
var search = function (nums, target) {
  let i = 0,
    res = 0;
  // 结束条件, 循环走完,或者 后面的值>target了
  while (i < nums.length && nums[i] <= target) {
    if (nums[i] == target) res++;
    i++;
  }
  return res;
};
var arr = [5, 7, 7, 8, 8, 10];
console.log(search(arr, 6));