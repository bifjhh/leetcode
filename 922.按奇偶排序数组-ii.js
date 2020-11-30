/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  const res = []
  /*   
    // 把传入的数组, 拆分为 偶数数组和奇数数组
    const map = {
      0: [],
      1: []
    }
    for (let i = 0; i < A.length; i++) {
      const e = A[i]
      const key = A[i] % 2
      // 将拆分后的值保存在 map 中
      map[key].push(e)
    }
    // 然后迭代, 进行添加
    map[0].forEach((e, i) => {
      res.push(e)
      res.push(map[1][i])
    })*/

  // 双指针的方法
  let index0 = 0 // 记录偶数索引
  let index1 = 1 // 记录奇数索引
  for (let i = 0; i < A.length; i++) {
    const e = A[i]
    // 如果 当前值 % 2 != 0 , 则表示是一个奇数
    if (e % 2) {
      // 添加到奇数索引的位置
      res[index1] = e
      // 然后索引 += 2 , 因为要跳过下一个偶数的索引, 所以 + 2
      index1 += 2
    } else {
      // 反之, 如果 % 2 = 0, 则表示是一个偶数
      res[index0] = e
      index0 += 2
    }
  }
  return res
};
// @lc code=end