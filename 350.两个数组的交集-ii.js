/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//   // 如果有一个数组为空, 则没有交集了
//   if (!nums2.length || !nums1.length) return []

//   // 调换一下顺序, 把数组较短的放在前面
//   if (nums1.length > nums2.length) {
//     return intersect(nums2, nums1)
//   }
//   // 用较短的数组,构建一个 hashmap 
//   const hashMap = getMap(nums1)
//   // 设置返回值
//   const res = []
//   // 迭代数组
//   for (let i = 0; i < nums2.length; i++) {
//     const e = nums2[i]
//     // 如果 hash表中存在
//     if (hashMap[e]) {
//       // 则记录
//       res.push(e)
//       // 并将值 - 1, 因为后续还有可能出现 多次相同的交集数字
//       hashMap[e]--
//     }
//   }
//   return res
// };
var intersect = function (nums1, nums2) {
  // 双指针方式
  // 感觉不如hashmap...

  // 如果有一个数组为空, 则没有交集了
  if (!nums2.length || !nums1.length) return []
  const res = []
  let index1 = 0
  let index2 = 0
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let length1 = nums1.length
  let length2 = nums2.length

  while (index1 < length1 && index2 < length2) {
    if (nums1[index1] === nums2[index2]) {
      res.push(nums1[index1])
      index1++
      index2++
    } else if (nums1[index1] > nums2[index2]) {
      index2++
    } else {
      index1++
    }
  }
  return res
};

/**
 * 构建hash表
 *
 * @param {*} nums
 * @returns
 */
function getMap(nums) {
  let hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (hashmap[e]) {
      // 如果已经有了, 则 + 1 
      hashmap[e]++
    } else {
      // 用 key val 的形式, 记录 数字出现的次数
      hashmap[e] = 1
    }
  }
  return hashmap
}
// @lc code=end