/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 如果有一个为空, 直接返回另外一个
  if (!l1 || !l2) return l1 || l2;
  // 创建一个新的链表
  const res = new ListNode(0);
  let current = res;
  // 迭代两个链表
  while (l1 || l2) {
    // 如果有一个链表为空
    if (!l1 || !l2) {
      const residue = l1 || l2;
      current.next = residue;
      // 续接另外一个链表, 然后返回
      return res.next;
    }
    let n;
    // 判断两个值是否相等
    if (l1.val === l2.val) {
      n = new ListNode(l1.val);
      n.next = new ListNode(l2.val)
      current.next = n;
      current = current.next.next;
      l1 = l1.next;
      l2 = l2.next;
      continue;
    }
    // 比较两个链表的值
    if (l1.val < l2.val) {
      n = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      n = new ListNode(l2.val);
      l2 = l2.next;
    }
    current.next = n;
    current = current.next;
  }
  // 返回合并后的链表
  return res.next;
};

let a1 = [1, 2, 4],
  a2 = [1, 3, 4];
a1 = [], a2 = [];
// a1 = [1], a2 = [];
a1 = [], a2 = [0];
a1 = [1], a2 = [0, 1, 3];

let l1 = arrToList(a1);
let l2 = arrToList(a2);

/* 
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]

*/
r = mergeTwoLists(l1, l2);
console.log(JSON.stringify(r));
// @lc code=end