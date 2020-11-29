/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  /* 
    // 如果有一个数组为空, 则没有交集了
    if (!nums2.length || !nums1.length) return []
    const res = []
    // 取较小的数组为循环, 因为交集是要两个数组都有,所以取短的那个
    const arr = nums1.length > nums2.length ? nums2 : nums1
    arr.forEach(e => {
      // 条件是 两个数组都有, 然后不能重复
      if (nums1.includes(e) && nums2.includes(e) && !res.includes(e)) {
        res.push(e)
      }
    })
    // 最后返回得到的交集
    return res
  */

  // 使用 set 来实现 去重的效果
  // 如果有一个数组为空, 则没有交集了
  if (!nums2.length || !nums1.length) return []

  // 调换一下顺序, 把数组较短的放在前面
  if (nums1.length > nums2.length) {
    return intersection(nums2, nums1)
  }
  const setRes = new Set()
  // 迭代较短的数组
  for (let i = 0; i < nums1.length; i++) {
    const e = nums1[i]
    // 如果是交集的, 直接add到set集合中
    if (nums2.includes(e)) {
      setRes.add(e)
    }
  }

  // 最后把set集合转换为数组输出
  return [...setRes]
};

// @lc code=end