/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (str) {
  str = str.trim();
  if (str.length == 1) return str;
  let res = '',
    pre = '',
    r = 0;
  while (r < str.length) {
    if (str[r] != ' ') {
      pre += str[r];
      r++;
    } else {
      res = ` ${pre}${res}`
      pre = ''
      while (str[r] == ' ') r++;
    }
  }
  return `${pre}${res}`;
};

//一把梭
var reverseWords = function (str) {
  return str.trim().split(' ').filter(e => e).reverse().join(' ')
};
// 经典双指针
var reverseWords = function (str) {
  str = str.trim();
  if (str.length == 1) return str;
  let res = '',
    l = str.length - 1,
    r = l
  while (l >= 0) {
    // 找到第一个空格
    while (l >= 0 && str[l] != ' ') l--;
    // 添加单词
    res = `${res}${str.slice(l+1, r+1)} `
    // 再找到第一个非空格
    while (l >= 0 && str[l] == ' ') l--;
    r = l
  }
  return res.trim();
};

/* 
示例 1：

输入: "the sky is blue"
输出: "blue is sky the"
示例 2：

输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
示例 3：

输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 

*/
var str = "the sky is blue"
var str = "a good   example"
console.log(reverseWords(str));