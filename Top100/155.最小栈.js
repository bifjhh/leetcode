/**
 * initialize your data structure here.
 */
// var MinStack = function () {
//   // 正常栈
//   this.Stask = [];
//   // 仅保存最小栈
//   this.MinStask = [Infinity];
//   // 下标
//   this.lastIndex = 0;
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//   let min = Math.min(this.MinStask[this.lastIndex], val);
//   // 存储最小值
//   this.MinStask.push(min);
//   this.Stask.push(val);
//   this.lastIndex += 1;
// };
// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   this.lastIndex -= 1;
//   // 直接修改长度
//   this.MinStask.length -= 1;
//   this.Stask.length -= 1;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   // 返回栈底元素
//   return this.Stask[this.lastIndex - 1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   // 直接返回最小栈的栈底元素
//   return this.MinStask[this.lastIndex]
// };

// 一个栈来操作
var MinStack = function () {
  // 正常栈
  this.Stask = [];
  // 下标
  this.lastIndex = -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let min;
  if (this.lastIndex >= 0) {
    min = Math.min(this.Stask[this.lastIndex][1], val);
  } else {
    min = val;
  }
  this.Stask.push([val, min]);
  this.lastIndex += 1;
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.lastIndex -= 1;
  // 直接修改长度
  this.Stask.length -= 1;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // 返回栈底元素
  return this.Stask[this.lastIndex][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // 直接返回最小栈的栈底元素
  return this.Stask[this.lastIndex][1]
};


/* 调试方法 */
var keys = ["MinStack", "push", "push", "push", "top", "pop", "getMin", "pop", "getMin", "pop", "push", "top", "getMin", "push", "top", "getMin", "pop", "getMin"]
var vals = [
  [],
  [2147483646],
  [2147483646],
  [2147483647],
  [],
  [],
  [],
  [],
  [],
  [],
  [2147483647],
  [],
  [],
  [-2147483648],
  [],
  [],
  [],
  []
]
keys.shift();
vals.shift();

var obj = new MinStack()
keys.forEach((k, i) => {
  const v = vals[i]
  if (typeof obj[k] === 'function') {
    console.log(obj[k](...v));
  }
});