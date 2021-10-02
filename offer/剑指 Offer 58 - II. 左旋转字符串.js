
// 两个字符串拼接一下
var reverseLeftWords = function (s, n) {
  let res = '';
  res = s.substring(0, n)
  return `${s.substring(n)}${res}`
};
var reverseLeftWords = function (s, n) {
  let res = '',
    l = 0,
    r = n;
  while (r < s.length) {
    res += s[r]
    r++
  };
  while (l < n) {
    res += s[l]
    l++
  };
  return res;
};

/* 
示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"
示例 2：

输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"

*/
var str = 'abcdefg',
  n = 2;
console.log(reverseLeftWords(str, n));