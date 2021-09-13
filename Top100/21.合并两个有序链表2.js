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
  while (l1 && l2) {
    // 不创建新的节点, 使用较小的那个链表的节点做新增
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  // 如果迭代结束, 还有剩余
  current.next = l1 || l2;
  // 返回合并后的链表
  return res.next;
};
// 递归写法
var mergeTwoLists = function (l1, l2) {
  console.log('l1: ', JSON.stringify(l1));
  console.log('l2: ', JSON.stringify(l2));
  // 如果有一个为空, 直接返回另外一个
  if (!l1 || !l2) return l1 || l2;
  // 递归调用
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
};

let a1 = [1, 2, 4],
  a2 = [1, 3, 4];
// a1 = [], a2 = [];
// a1 = [1], a2 = [];
// a1 = [], a2 = [0];
// a1 = [1], a2 = [0, 1, 3];

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

/* 
递归过程:

l1 = [1, 2, 4],
l2 = [1, 3, 4];

// 开始执行
1. l1: 1, 2, 4
   l2: 1, 3, 4
   判断: l1.val <= l2.val : true
   l1.next = 返回值: l2: 1, 2, 3, 4, 4
   return: l1: 1, 1, 2, 3, 4, 4
2. l1: 3, 4
   l2: 1, 2, 4
   判断: l1.val <= l2.val : false
   l2.next = 返回值: l1: 2, 3, 4, 4
   return: l2: 1, 2, 3, 4, 4
3. l1: 2, 4
   l2: 3, 4
   判断: l1.val <= l2.val: true
   l1.next = 返回值: l2: 3, 4, 4
   return: l1: 2, 3, 4, 4;
4. l1: 4
   l2: 3, 4
   判断: l1.val <= l2.val: fale
   l2.next = 返回值: l1:4, 4
   return: l2: 3, 4, 4;
5. l1: 4
   l2: 4
   判断: l1.val <= l2.val: true
   l1.next = 返回值: 4
   return: l1: 4, 4
6: l1: null
   l2: 4
   有一个为空: 则返回 另一个链表
   return: l2: 4

*/
// @lc code=end