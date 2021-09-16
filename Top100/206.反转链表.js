/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const {
  ListNode,
  arrToList
} = require('../utils/index.js')

/**
 * 使用新链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  let c = head;
  let res = new ListNode(head.val);
  while (c && c.next) {
    c = c.next;
    let n = new ListNode(c.val);
    n.next = res;
    res = n;
  }
  return res;
};

// 修改原链表
var reverseList = function (head) {
  if (!head) return null;
  let c = head,
    p = null;
  while (c) {
    // 保存 next 引用
    let n = c.next;
    // 修改 当前的节点的next 为 上一个保存的 p
    c.next = p;
    // 保存拼接后端节点
    p = c;
    // c 续接到 next 节点
    c = n;
  }
  return p;
};
/* 
 H = 1->2->3
 p = null
 c = H([1,2,3]);
 while
  n = c.next(2->3)
  c.n = p(null)
  p = c(1->null)
  c = n(2->3)

  n = c.n(3)
  c.n = p(1->null)
  p = c(2->1-null)
  c = n(3)

  n = c.n(null)
  c.n = p(2->1->null)
  p = n(3->2->1->null)
  c = n(null);

*/
var arr = [1, 2, 3, 4, 5]
// var arr = [1, 2]
// var arr = []
list = arrToList(arr)
console.log(reverseList(list));
// @lc code=end