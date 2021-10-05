/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 使用数组map 方法
  return nums1.map(e => {
    // 获取当前值在 nums2 的索引
    const index = nums2.indexOf(e)
    // 比较是否是 在 nums2中的最后一个
    if (index < nums2.length - 1) {
      // 然后开始迭代, 起始位置为索引所在的位置 + 1
      for (let i = index + 1; i < nums2.length; i++) {
        // 如果找到 比当前值大的数字, 则返回
        if (nums2[i] > e) return nums2[i]
      }
    }
    // 如果最后没找到, 则返回-1
    return -1
  })
};
var nextGreaterElement = function (nums1, nums2) {
  let stack = [],
    map = {},
    size = 0,
    e;
  for (e of nums2) {
    map[e] = -1;
    while (e > stack[size - 1] && size) {
      map[stack.pop()] = e;
      size--;
    }
    stack.push(e);
    size++;
  }
  return nums1.map(k => map[k]);
};
// @lc code=end