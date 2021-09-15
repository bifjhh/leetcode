/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * 直接类似于查找的方式,取最大值
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) return 0;
  let max = 0;
  const findDepth = (node, n) => {
    if (node !== null) {
      n++;
      findDepth(node.left, n);
      findDepth(node.right, n)
      max = Math.max(max, n)
    }
  }
  findDepth(root, 0)
  return max;
};
// 直接开启递归
var maxDepth = function (root) {
  if (root == null) return 0;
  // 每向下递归一次, 至少有一个返回值 + 1, 就等于那一层的层数, 依次弹出后取最大的深度
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end