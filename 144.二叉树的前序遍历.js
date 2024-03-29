/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root === null) return [];
  const list = []
  const preOrderNode = (node) => {
    if (node !== null) {
      list.push(node.val)
      preOrderNode(node.left)
      preOrderNode(node.right)
    }
  }
  preOrderNode(root);
  return list;

};
// @lc code=end