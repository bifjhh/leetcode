/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0,
    len = nums.length,
    r = len - 1;
  while (l < r) {
    if (nums[l] === 0) {
      for (let i = l; i < r; i++) {
        nums[i] = nums[i + 1]
      }
      nums[r] = 0;
      r--;
      l--;
    } else {
      l++;
    }
  }
  return nums;
};
// 修改数组
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // j 慢指针记录非零的数字的索引
      nums[j++] = nums[i]
    }
  }
  // 把剩下的索引补0
  return nums.fill(0, j);
  // while (j < len) {
  //   nums[j++] = 0;
  // }
  // return nums;
};

// 一次循环
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // 替换两者的值
      // 保存非0的值
      let e = nums[i]
      // 把当前索引替换为0
      nums[i] = nums[j]
      // 记录非零值
      nums[j] = e;
      // [nums[i], nums[j]] = [nums[j], nums[i]]
      // j++ 指向的还是0
      j++;
    }
  }
  return nums;
};
var arr = [0, 1, 0, 3, 12];
// var arr = [0, 0, 1];
// var arr = [0, 0];
console.log(moveZeroes(arr));
// @lc code=end