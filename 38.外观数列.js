/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  /*   // 递归的结束位, 到n==1的时候, 开始弹出栈
    if (n == 1) return '1';
    // 记录 返回值 起始 为 '1'
    let previous = countAndSay(n - 1)
    // 叠加的最终值
    let res = ''
    // 记录每个数字出现的次数
    let count = 1
    // 开始循环 
    for (let i = 0; i < previous.length; i++) {
      // 如果数字相同
      if (previous[i] === previous[i + 1]) {
        // 进行叠加
        count++
      } else {
        // 如果不相同 则 字符出现的次数 count + 当前字符串previous[i]
        res += count + previous[i]
        // 然后把计数器归零
        count = 1
      }
    }
   */
  // 双重循环的方式
  // 叠加的最终值
  let res = '1'
  for (let i = 1; i < n; i++) {
    // 记录字符出现的 次数
    let count = 1
    // 答案啊给钱循环内数字字符的描述
    let str = ''
    for (let j = 0; j < res.length; j++) {
      // 如果数字相同
      if (res[j] === res[j + 1]) {
        count++
      } else {
        // 如果不相同 则 字符出现的次数 count + 当前字符串previous[i]
        str += count + res[j]
        count = 1
      }
    }
    // 每一次循环结束, 替换res的值, 因为下一个数字是要解读 res 的
    res = str
  }
  // 返回拼凑好的字符串
  return res
}

/* 
  解题十分钟: 读题一小时系列....
  描述大概的意思: 后面的每一个数字, 都是对前一项数字的描述字符串做描述...有点绕

  感觉就是要把描述中出现的数字记录
  1: 由 1 开始
  2: 前一项 [ 1 ]      描述: 1 个 1               答案: 11  
  3: 前一项 [ 11 ]     描述: 2 个 1               答案: 21
  4: 前一项 [ 21 ]     描述: 1 个 2 1 个 1        答案: 1211
  5: 前一项 [ 1211 ]   描述: 1 个 1 1 个 2 2 个 1  答案: 111221
  ...
  一次类推...

*/
// @lc code=end