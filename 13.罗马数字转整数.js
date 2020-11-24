/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // 记录返回值
  let res = 0
  // 迭代字符串
  for (let i = 0; i < s.length; i++) {
    // 取值: 按照罗马字符串标准, 如果两位字符串有值,则是拼凑的
    const max = hashMap[s.slice(i, i + 2)]
    // 如果两位字符串符合罗马数字标准, 则进行累加, 下标+2: 因为是for, 所以额外对i+1,跳过下一个索引的迭代
    if (max) {
      res += max
      i+=1
      continue
    } 
    const num = hashMap[s.slice(i, i + 1)]
    if(num){ // 反之累加
      res += num
    }
    
  }
  // 最后返回累加的和
  return res
};

// 做个映射, 把符合罗马数字的字符串以key: val的方式进行映射
const hashMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900
}
// @lc code=end

