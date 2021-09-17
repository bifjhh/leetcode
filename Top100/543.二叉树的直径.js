/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // 定义一个变量记录最大值
  let max = 0;
  // 获得节点深度
  const getLen = (root) => {
    if (!root) return 0;
    // 获得左叶节点的深度
    let l = getLen(root.left);
    // 右叶
    let r = getLen(root.right);
    // 两者最大深度, 取最大值
    max = Math.max(max, r + r)
    // 返回查询节点的最大深度
    return Math.max(l, r) + 1
  }
  getLen(root)
  return max;
};
// @lc code=end