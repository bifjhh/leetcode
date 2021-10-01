/**
 * 双重循环
 * @param {*} target 
 */
var findContinuousSequence = function (target) {
  if (target < 3) return null;
  let i = 1,
    res = [],
    max = Math.ceil(target / 2);
  // i 小于中位数
  while (i < max) {
    let j = i + 1,
      sum = i,
      nums = [i]
    // 第二层循环, j 初始为 i 的下一个值, 两者相加 小于 target, 则继续遍历
    while (sum + j <= target) {
      sum += j;
      nums.push(j)
      j++;
    }
    // 如果内循环终止时的值 = target , 则把内循环遍历的数值存入list
    (sum == target) && res.push(nums);
    // 外循环 ++;
    i++;
  }
  return res;
};
/**
 * 滑动窗口(双指针)
 * @param {*} target 
 */
var findContinuousSequence = function (target) {
  if (target < 3) return null;
  // 初始值, l,r, sum;
  let l = 1,
    r = 2,
    sum = l + r,
    res = [],
    // max 取target的中位数, 向上+1, 为r的最大值
    max = Math.ceil(target / 2) + 1;
  while (l < r && l < max) {
    // 如果sum = target , 则从 l 到 r 之间所有的数字都push进去
    if (sum === target) {
      let t = []
      for (let i = l; i <= r; i++) {
        t.push(i);
      }
      res.push(t)
      // 丢掉左侧窗口: (减掉起始位置, 相当于从第二个位置开始计算了)
      sum -= l;
      l++
    } else if (sum > target) { // 如果sum > target, 则l 继续前进
      // sum 丢掉最左侧数据
      sum -= l;
      l++
    } else {
      // 如果小于 target, 则r继续向前
      r++;
      // sum += r;
      sum += r;
    }
  }
  return res;
};

/* 

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
*/

console.log(findContinuousSequence(9));