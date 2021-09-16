/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * 双重循环, 遇到相同的值就开始迭代查询
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head && head.next === null) return true;
  let c = head,
    r = null,
    flag = true;
  while (c && flag) {
    let n = c.next;
    c.next = r;
    r = c;
    c = n;
    if (c && r && c.val == r.val) {
      let c1 = c,
        r1 = r;
      while ((c1 || r1) && flag) {
        if (c1 === null || r1 === null) {
          flag = false;
          break;
        }
        flag = c1.val == r1.val
        c1 = c1.next
        r1 = r1.next
      }
      if (flag) return flag;
    };
  }
  return false;
};
// 字符串对比...也不是不行
var isPalindrome = function (head) {
  let c = head,
    s = '',
    r = '';
  while (c) {
    v = c.val;
    c = c.next;
    s = `${s}${v}`
    r = `${v}${r}`
  }
  return s === r;
};
// 用数组, 从两端开始对比
var isPalindrome = function (head) {
  let c = head,
    arr = [];
  while (c) {
    arr.push(c.val);
    c = c.next;
  }
  let flag = true,
    i = 0,
    n = arr.length - 1;
  while (i < n && flag) {
    flag = arr[i] === arr[n]
    i++
    n--
  }
  return flag;
};

// 先走一半, 然后翻转链表
var isPalindrome = function (head) {
  if (head && !head.next) return true;
  let fast = head,
    slow = head;
  // 快慢指针-->找一半的节点
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next
  }
  // 翻转链表
  function reverseList(node) {
    let r = null,
      c = node;
    while (c) {
      let n = c.next;
      c.next = r;
      r = c;
      c = n;
    }
    return r;
  }
  // 得到翻转后的另一半链表
  let rl = reverseList(slow);

  let flag = true;
  // 对比两个链表
  while (flag && rl && head) {
    if (rl.val !== head.val) return false;
    rl = rl.next;
    head = head.next;
  }
  return flag;
};
var arr = [1, 2]
// var arr = [1, 0, 0]
// var arr = [1, 0, 1]

var head = arrToList(arr);
console.log(isPalindrome(head));
// @lc code=end