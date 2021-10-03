// 从已知 n =1 , 胜利者编号 = 0; 开始增加人数
var lastRemaining = function (n, m) {
  // 初始化, 最开始胜利者编号 0; 报数是1;
  let r = 0;
  // 循环条件: 报数不超过n, i = 2, 从两个人开始
  for (let i = 2; i <= n; i++) {
    // 胜利者编号为: 上一轮胜利者:r + 后面几个人被杀掉(m) 取模 i(当前人数)
    r = (r + m) % i;
  }
  return r;
};


// 反推: 依据: 当n = 1, 时, 索引编号0的人为胜利者
var lastRemaining = function (n, m) {
  let fn = (n, m) => {
    // n =1 时, 第一个肯定是0(从0开始的)
    if (n == 1) return 0;
    // 开始反推: n-1, 直到找到n=1时, 胜利者的编号=0;
    let x = fn(n - 1, m);
    // 然后用 胜利者编号+M(下一个被杀的人) 取模 n(当前参加人数) 
    return (m + x) % n
  }
  return fn(n, m)
};
// 链表就算了, n数字大了基本都会超时
/* 
输入: n = 5, m = 3
输出: 3
示例 2：

输入: n = 10, m = 17
输出: 2
 */

var n = 5,
  m = 3;
// var n = 5,
//   m = 2;
console.log(lastRemaining(n, m));