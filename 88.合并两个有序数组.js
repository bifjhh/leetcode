/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < m && n; i++) {
    if (nums2[0] <= nums1[i]) {
      nums1.pop()
      nums1.splice(i, 0, nums2.shift())
      n--
      m++
    }
  }
  if (n) {
    nums1.splice(m, m + n, ...nums2)
  }
};
// @lc code=end