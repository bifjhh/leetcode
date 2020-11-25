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
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* var mergeTwoLists = function (l1, l2) {
  // 创建一个链表用来存储合并后的数据
  let res = new ListNode()
  // 保存 res 的指针引用
  let current = res
  // 循环开始, l1 && l2 都不能为 null, 因为有一个为null, 则表示剩下的链表可以直接通过next 链接起来了
  while (l1 && l2) {
    // l1 的值 < l2 
    if (l1.val < l2.val) {
      // 创建节点
      current.next = new ListNode(l1.val)
      // l1向下进一个
      l1 = l1.next
    } else { // l1 不小于 l2 , 不论是大于 还是等于 都选择 l2的val
      current.next = new ListNode(l2.val)
      // l2向下进一个
      l2 = l2.next
    }
    // 保存res 指针状态的 current 向下进一个
    current = current.next
  }
  // 循环结束了, l1 || l2 谁还有值, 则直接通过next 进行链接
  current.next = l1 ? l1 : l2
  // 返回 res.next 因为一开始创建的时候, 默认会有个 0的节点
  return res.next
}; */

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2
  }
};

/**
 * l1: [1, 2, 4]
 * l2: [1, 3, 4]
 * 递归过程: 近描述执行逻辑 ps: m传入的当做是节点吧
 * 进栈: 
 * l1.val(1) < l2.val(1) : false 走 l2.next = m([3,4], [1, 2, 4])
 *  
 * l1.val(3) < l2.val(1) : false 走 l2.next = m([2,4], [3, 4])
 * 
 * l1.val(2) < l2.val(3) : true  走 l1.next = m([4], [3, 4])
 * 
 * l1.val(4) < l2.val(3) : false 走 l2.next = m([4], [4])
 * 
 * l1的next 为 null 返回 l2 {4}
 * 
 * 出栈: 
 * 弹出 [4]                 : l2[4].next = [4]                return l2[4, 4]
 * 弹出 [4, 4]              : l2[3].next = [4, 4]             return l2 [3, 4, 4]
 * 弹出 [3, 4, 4]           : l1[2].next = [3, 4, 4]          return l1 [2, 3, 4, 4]
 * 弹出 [2, 3, 4, 4]        : l2[1].next = [2, 3, 4, 4]       return l2 [1, 2, 3, 4, 4]
 * 弹出 [1, 2, 3, 4, 4]     : l2[1].next = [1, 2, 3, 4, 4]    return l2 [1, 1, 2, 3, 4, 4]
 * 
 * 利用调用栈的方式..... 递归调用对比, 直到某个链表为 null
 * 
 */
// @lc code=end