/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/* 生成测试代码 */
let a1 = [2, 4, 3],
  a2 = [5, 6, 4];
let l1 = new ListNode(a1[0]),
  c1 = l1;
let l2 = new ListNode(a2[0]),
  c2 = l2;
for (let i = 1; i < a1.length; i++) {
  const node = new ListNode(a1[i]);
  c1.next = node;
  c1 = node;
}
for (let i = 1; i < a2.length; i++) {
  const node = new ListNode(a2[i]);
  c2.next = node;
  c2 = node;
}
/* 生成测试代码 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  /**
   * todo 
   * 1. 两个链表, 所有的数字是一个逆序的非负整数
   * 2. 迭代链表,链表当前值相加 l1 和 l2, 直到两个链表都为空了
   * 3. 定义一个sum变量, 存储两个链表数之和, 大于等于 10 的数字的值, 每次相加的时候加上上次的进位数(10 进 1)
   * 4. 返回一个链表
   */
  let sum = 0,
    res = new ListNode(0),
    current = res;

  while (l1 || l2) {
    let n = 0,
      v1 = 0,
      v2 = 0;
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    }

    sum = v1 + v2 + sum;
    n = sum % 10
    sum = Math.floor(sum / 10);
    current.next = new ListNode(n);
    current = current.next;
  }
  if (sum) {
    current.next = new ListNode(sum);
  }
  return res.next;
};
console.log(addTwoNumbers(l1, l2));
// @lc code=end