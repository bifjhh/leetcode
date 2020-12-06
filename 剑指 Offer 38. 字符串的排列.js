/* 

输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 

限制：

1 <= s 的长度 <= 8
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  // 如果只有一个字符, 则直接返回
  if (s.length <= 1) return [s]
  let res = new Set()
  // 迭代字符串每一个字符
  for (let i = 0; i < s.length; i++) {
    // 对剩余字符串进行排列
    const current = permutation(s.slice(0, i) + s.slice(1 + i))
    // 得到返回值后 与 当前字符串相加
    for (let j = 0; j < current.length; j++) {
      // 将当前字符串 与 返回值 拼接
      res.add(s[i] + current[j])
    }
  }
  // 返回去重后的结果集
  return [...res]
};
/* 
  分析
  s = abc
  i=0
    c = p(''+ bc) 
      s=bc
      i=0
        c = p(''+c)
          return c
        s[i]:b + c
      i=1
        c = p(b+'')
          return b
        s[i]:c+b
      return [bc, cb]
    s[i]:a + bc
    s[i]:a + cb

  i = 1
    c = p(a+c)
      s= ac
      i = 0
        c = p(''+c)
          return c
        s[i]:a+c
      i = 1
        c = p(a+'')
          return a
        s[i]:c + a
      return [ac, ca]
    s[i]:b+ac
    s[i]:b+ca

  i = 2
    c = p('ab')
      s  = ab
      i  = 0
        c = p(''+b)
          return b
        s[i]:a+b
      i = 1
        c = p(a:+'')
          return a
        s[i]:b+a
    s[i]:c+ab
    s[i]:c+ba
  return [
    abc
    acb
    bac
    bca
    cab
    cba
  ]
*/