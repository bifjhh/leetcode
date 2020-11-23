/* 

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  /*
    判断:如果 x < 0, 为负数, 不是回文数
        如果 x 为非零偶数, 则0在前, 不是回文数
        满足以上条件直接 return false
   */
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  
  // 记录返回值
  let r = 0
  // 循环, 取中位数来做判断
  while (r < x) {
    // r 利用  % 10, 得到 x 的末尾数字
    r = r * 10 + x % 10
    // x 每一次循环, 减少一个 末尾数
    x = Math.floor(x / 10)
  }

  // 如果 r===x , 则表示是一个 偶数位 的数字, 两者相等则表示是一个回文数
  // 或者, x 是一个奇数 数字, 则 x 和 去除一个 末尾数的 r 作比较, 两者相等则表示判断的数值是一个回文数
  // 其它情况都为false
  return r === x || x === Math.floor(r / 10)

};

let arr = [121, -121, 10]

arr.forEach(e => {
  console.log(e, isPalindrome(e))
})