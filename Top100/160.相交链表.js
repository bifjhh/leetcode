/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 直接用集合来判断索引, 最多两个while就知道了
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let c1 = headA,
    c2 = headB,
    set = new Set();
  while (c1) {
    set.add(c1);
    c1 = c1.next;
  }
  while (c2) {
    if (set.has(c2)) {
      return c2;
    }
    c2 = c2.next;
  }
  return null;
};

// 一个循环, 但是长度是 a b 两个链表的和
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let c1 = headA,
    c2 = headB;
  while (c1 != c2) {
    // 如果 a 走完了, 那就从b 开始走
    c1 = c1 == null ? headB : c1.next;
    // 如果 b 走完了, 那就从 a 开始继续走
    c2 = c2 == null ? headA : c2.next;
  }
  // 如果两者遇到了相同的, 就表示有了交点, 如果没遇到, 那就是两个null, 也能结束循环
  return c1;
};

// 路径计算
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  if (headA == headB) return headA;
  let c1 = headA,
    c2 = headB,
    n1 = 0,
    n2 = 0;
  // 找到最长路径
  while (c1 || c2) {
    if (c1) {
      c1 = c1.next;
      n1++;
    }
    if (c2) {
      c2 = c2.next;
      n2++;
    }
  }
  let len = 0;
  // 设置长的链表为c1, 并计算出差值
  if (n1 > n2) {
    len = n1 - n2;
    c1 = headA;
    c2 = headB;
  } else {
    len = n2 - n1;
    c1 = headB;
    c2 = headA;
  }
  // 长的链表先走出差值-两个链表长度就一样了
  while (len-- > 0) {
    c1 = c1.next;
  }
  // 开始同时向下
  while (c1 && c2) {
    // 两者相同, 返回节点
    if (c1 == c2) return c1;
    c1 = c1.next;
    c2 = c2.next;
  }
  return null;
};

// @lc code=end