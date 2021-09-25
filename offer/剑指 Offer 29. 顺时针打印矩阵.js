/**
 * 迭代四个方向, 边跑边删除
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length == 0) return [];
  let res = [];
  // 顺时针顺序, 上右下左
  // top 把 矩阵的顶部打印
  let top = (arr) => {
    let nums = arr.shift();
    res.push(...nums)
  }
  // 右侧
  let right = (arr) => {
    let i = 0;
    // 从矩阵的 数组的末端
    while (i < arr.length) {
      let e = arr[i]
      res.push(e.pop())
      // 如果只有这一个元素, 就删除整个列
      if (!e.length) {
        arr.shift();
      } else {
        // 如果还有元素, 索引递增
        i++
      }
    }
  }
  // 从矩阵底部弹出一个列表
  let bottom = (arr) => {
    let nums = arr.pop();
    while (nums && nums.length) {
      res.push(nums.pop())
    }
  }
  // 左侧
  let left = (arr) => {
    // 倒序排列
    let i = arr.length - 1;
    while (i >= 0) {
      let e = arr[i]
      res.push(e.shift())
      // 如果是最后一个, 就删除整个列
      if (!e.length) {
        arr.pop();
      }
      i--
    }
  }
  // 开启循环, 终止条件是跑完(清空矩阵)
  while (matrix.length) {
    top(matrix)
    right(matrix)
    bottom(matrix)
    left(matrix)
  }
  return res;
};

// 用四个变量来表示上右下左, 不用改变原数组了
var spiralOrder = function (matrix) {
  let res = [];
  let left = 0,
    top = 0,
    right = matrix[0].length,
    bottom = matrix.length;
  // 循环终止条件, 上下, 左右的标记位没有遇到
  while (top < bottom && left < right) {
    let topArr = matrix[top];
    // 顶部循环
    for (let i = left; i < right; i++) {
      res.push(topArr[i])
    }
    // top标记位+1
    top++;
    // 右侧
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1])
    }
    // 右侧走完-1, 向内收缩
    right--;
    // 校验标记位是
    if (left < right && top < bottom) {
      // 底部循环
      for (let i = right - 1; i > left; i--) {
        res.push(matrix[bottom - 1][i])
      }
      // 标记位-1
      bottom--;
      // 左侧循环
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left])
      }
      // 标记位+1
      left++;
    }
  }
  return res;
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
var matrix = [
  [1, 2, 3]
]

// var matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ]
var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
// var matrix = [
//   [7],
//   [9],
//   [6]
// ]
// var matrix = [
//   [1],
//   [2],
//   [3],
//   [4],
//   [5],
//   [6],
//   [7],
//   [8],
//   [9],
//   [10]
// ]

console.log(spiralOrder(matrix));