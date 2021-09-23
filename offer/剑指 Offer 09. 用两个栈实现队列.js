var CQueue = function () {
  // 模拟战, 虽然是数组, 但是只能从末端(栈底)出数据
  // 主栈, 存储队列入数据
  this.stack1 = [];
  // 辅栈, 从末端出数据
  this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  // 栈底有数据, 直接出
  if (this.stack2.length) return this.stack2.pop();
  // 栈底无数据, 主栈无数据, 返回 -1
  if (!this.stack1.length) return -1;
  // 把主栈数据依次出栈进入进入到辅栈--(队列先进先出, 所以辅栈底, 就是队列顶部)主栈底是队列的末端
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop())
  }
  // 从辅栈底部弹出数据
  return this.stack2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var keys = ["appendTail", "deleteHead", "deleteHead"]
var vals = [
  [3],
  [],
  []
]
var obj = new CQueue()
keys.forEach((k, i) => {
  const v = vals[i]
  if (typeof obj[k] === 'function') {
    console.log(obj[k](...v));
  }
});