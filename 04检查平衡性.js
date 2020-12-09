/* 
实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。


示例 1:
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
返回 true 。
示例 2:
给定二叉树 [1,2,2,3,3,null,null,4,4]
      1
     / \
    2   2
   / \
  3   3
 / \
4   4
返回 false 。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-balance-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root == null) return true

  // 获取左叶节点的深度
  const leftTreeDepth = treeDepth(root.left)
  // 获取右叶节点的深度
  const rightTreeDepth = treeDepth(root.right)
  // 如果 左右节点差值 > 1, 则表示是一个不平衡的节点
  if (Math.abs(leftTreeDepth - rightTreeDepth) > 1) return false
  // 如果当前节点保持了平衡, 就对 下一次 的左右节点 分别进行对比...递归的过程
  return isBalanced(root.left) && isBalanced(root.right)

};

/**
 * 获取节点的深度
 * @param {TreeNode} root
 * @return {number}
 */
function treeDepth(root) {
  // 空节点 直接返回 0 
  if (root == null) return 0
  // 递归调用, 每一次深入一次递归, 返回值都会 + 1, 最后得到当前节点的深度
  return Math.max(treeDepth(root.left), treeDepth(root.right)) + 1
}