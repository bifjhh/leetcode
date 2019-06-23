/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var add = 0,
      ans,
      head

  while (l1||l2) {
    var a=l1?l1.val:0,// 链表1的val
        b=l2?l2.val:0,// 链表2的val
        sum = a+b+add,// 当前链表的和 + add 表示上次计算余下来的
        add = ~~(sum/10),// 如果链表值的和是超过10的
        node = new ListNode(sum%10)//当前两个链表的值的和 创建新的链表

      if (!ans) {
        ans = head = node // 如果当前还没有用来放 和 的链表,则创建
      }
      else {
        // 如果有了链表容器,则将当前链表的下一个,指向当前链表和,
        head.next = node
        head = node
      }

      if (l1) l1 = l1.next // 链表进行下一个
      if (l2) l2 = l2.next // 链表进行下一个
  }

  if (add) {
    node = new ListNode(add)
    head.next = node
    head = node
  }

  return ans
};

