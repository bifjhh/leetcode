/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * 递归方式
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return false;
  // 定义递归方法
  const isSymmetricNode = (left, right) => {
    // 如果两者都为null, 则继续向下
    if (left === null && right === null) return true;
    // 如果其中有一个为null, 或者两者值不同, 则不对称, 返回false
    if (left === null || right === null || left.val !== right.val) return false;
    //递归两个节点的左右对称节点
    return isSymmetricNode(left.left, right.right) && isSymmetricNode(left.right, right.left);
  }
  // 开启递归
  return isSymmetricNode(root.left, root.right);
};

// 队列模式
var isSymmetric = function (root) {
  // 创建一个队列(数组)
  const q = [];
  // 把left, right 两个节点存入队列
  q.push(root.left), q.push(root.right);
  // 开启循环
  while (q.length) {
    // 取出 左右两个节点
    l = q.shift();
    r = q.shift();
    // 如果两个值都为null, 则跳过
    if (!l && !r) continue;
    // 如果其中一个为null, 或者两者val不相同, 返回false
    if ((!l || !r) || (l.val !== r.val)) return false;
    // 把 左右两个节点的, 子节点分别push进队列(按照对称的循序push)
    q.push(l.left);
    q.push(r.right);
    q.push(l.right);
    q.push(r.left);
  }
  return true;
};
// @lc code=end