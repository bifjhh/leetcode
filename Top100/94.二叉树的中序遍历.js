/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  // 如果节点为null, 直接返回
  if (root === null) return [];
  // 创建一个集合, 来存储中序遍历的值
  const list = []
  // 定义遍历函数
  const inorderNode = (node) => {
    // 节点为null 则跳过
    if (node !== null) {
      // 继续迭代左叶子节点
      inorderNode(node.left)
      // 存储值
      list.push(node.val)
      // 继续迭代右叶子节点
      inorderNode(node.right)
    }
  }
  // 从root 根节点开始迭代
  inorderNode(root);
  // 返回集合
  return list;
};
// @lc code=end