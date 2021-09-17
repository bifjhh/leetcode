/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * 不额外创建tree
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  // 返回另一个节点进行桥接
  if (!t1) return t2;
  if (!t2) return t1;
  // 合并两个节点的值
  t1.val = t1.val + t2.val;
  // 继续向下合并
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
// 创建一个新的 tree
var mergeTrees = function (t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  let root = new TreeNode(t1.val + t2.val)
  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);
  // 返回合并好的tree
  return root;
};
// 迭代, 队列
var mergeTrees = function (t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  let q = [t1, t2];
  while (q.length) {
    let r = q.pop();
    let l = q.pop();
    l.val = l.val + r.val;
    if (l.left && r.left) {
      q.push(l.left, r.left)
    }
    if (l.right && r.right) {
      q.push(l.right, r.right)
    }
    l.left = l.left || r.left;
    l.right = l.right || r.right;
  }
  return t1;
};

// @lc code=end