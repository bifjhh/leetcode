/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  // 栈 1
  this.stack1 = []
  // 栈 2
  this.stack2 = []
  // 记录 队列的顶部(emmm... 暂时先不用索引[0] 直接拿数据)
  this.top = null

};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // 如果当前 栈 1为空, 设置top的值
  if (this.empty()) {
    this.top = x
  }
  // 添加元素
  this.stack1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.empty()) {
    // 翻转栈 1 到 栈 2
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
    // 获取栈顶元素, 并移除
    const top = this.stack2.pop()

    // 再把 栈2 的数据 翻转回来
    while (this.stack2.length) {
      this.push(this.stack2.pop())
    }
    // 返回队列顶端元素
    return top
  }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.empty()) {
    // 返回队列顶端元素
    return this.top
  }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // 返回队列是否为空
  return this.stack1.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// @lc code=end