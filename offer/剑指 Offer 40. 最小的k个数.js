// 冒泡
var getLeastNumbers = function (arr, k) {
  for (let i = arr.length - 1; i >= k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr.slice(0, k);
};
// 插入?
var getLeastNumbers = function (ar = [], k) {
  return arr.sort((a, b) => a - b).slice(0, k)
};
// 插入排序
var getLeastNumbers = function (arr, k) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let position = i;
    while (position && arr[position - 1] > value) {
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = value;
  }
  return arr.slice(0, k);
};
// 选择排序
var getLeastNumbers = function (arr, k) {
  let min = 0,
    len = arr.length;
  for (let i = 0; i < k; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr.slice(0, k);
};
var getLeastNumbers = function (arr, k) {
  if (k >= arr.length) return arr;
  quickSort(arr, 0, arr.length - 1)
  return arr.slice(0, k);
};

/**
 * 
 * 快排
 * @param {array} arr 数组
 * @param {*} l 基准数
 * @param {*} r
 * @returns
 */
function quickSort(arr, l, r) {
  if (l >= r) return;
  let i = l,
    j = r;
  while (i < j) {
    // 找到由后至前, 第一个小于等于基准数的数字
    while (i < j && arr[j] >= arr[l]) j--;
    // 找到从前到后, 第一个大于基准数的数字, i 最终代表的, 要么是最后一个小于基准数的下标, 或者是第一个>基准数的下标
    while (i < j && arr[i] <= arr[l]) i++;
    // 替换两个值 小于基准数(j下标), 大于基准数(i下标)
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  // 交换基准值(l-->i): l是传递来的基准值, i是排序后的第一个最小值
  [arr[i], arr[l]] = [arr[l], arr[i]]
  // 继续查找,基准位(l)不变, 边界length-1修改为两个哨兵相遇的索引(从前到后)
  quickSort(arr, l, i - 1)
  // 基准位为两者相遇的值, 边界值还是不变(由后至前)
  quickSort(arr, i + 1, r)
}
var getLeastNumbers = function (arr, k) {
  if (k >= arr.length) return arr;
  return quickSort(arr, k, 0, arr.length - 1)
};
// 快排2, 优化k, 找到k的个数最小数之后就返回
function quickSort2(arr, k, l, r) {
  let i = l,
    j = r;
  while (i < j) {
    // 找到由后至前, 第一个小于等于基准数的数字
    while (i < j && arr[j] >= arr[l]) j--;
    // 找到从前到后, 第一个大于基准数的数字, i 最终代表的, 要么是最后一个小于基准数的下标, 或者是第一个>基准数的下标
    while (i < j && arr[i] <= arr[l]) i++;
    // 替换两个值 小于基准数(j下标), 大于基准数(i下标)
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  // 交换基准值(l-->i): l是传递来的基准值, i是排序后的第一个最小值
  [arr[i], arr[l]] = [arr[l], arr[i]]
  // 继续查找,基准位(l)不变, 边界length-1修改为两个哨兵相遇的索引(从前到后)
  if (i > k) return quickSort(arr, k, l, i - 1)
  // 基准位为两者相遇的值, 边界值还是不变(由后至前)
  if (i < k) return quickSort(arr, k, i + 1, r)
  // 这里 基准位=k, 则直接返回
  return arr.slice(0, k);
}

var arr = [3, 2, 1]
var arr = [2, 4, 3, 1]
// var arr = [0, 1, 2, 2, 2, 1, 3, 6, 3, 1, 8, 2, 5, 3, 11, 4, 11, 12, 6, 2, 7, 19, 20, 16, 23, 6, 23, 4, 3, 25, 19, 15, 15, 17, 26, 30, 24, 31, 2, 26, 32, 6, 27, 21, 3, 6, 18, 46, 14, 13, 43, 19, 17, 50, 46, 40, 13, 2, 10, 43, 6, 5, 8, 23, 41, 21, 58, 10, 28, 22, 25, 63, 7, 40, 64, 50, 7, 57, 61, 43, 45, 64, 78, 50, 49, 15, 45, 10, 27, 66, 14, 68, 81, 48, 51, 33, 17, 35, 71, 31]

console.log(getLeastNumbers(arr, 2));
// console.log(getLeastNumbers(arr, 24));

v2 = [0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 2, 4, 5, 6, 6, 6, 3, 6, 6, 7]
v1 = [0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6]