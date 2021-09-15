/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  if (root === null) return [];
  const list = []
  const postorderNode = (node) => {
    if (node !== null) {
      postorderNode(node.left)
      postorderNode(node.right)
      list.push(node.val)
    }
  }
  postorderNode(root);
  return list;

};
// @lc code=end