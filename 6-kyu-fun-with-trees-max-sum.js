// 6 kyu | Fun with trees: max sum
// https://www.codewars.com/kata/fun-with-trees-max-sum

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  /**
   * Creates an instance of TreeNode.
   *
   * @param {number} value
   * @param {TreeNode} [left=null]
   * @param {TreeNode} [right=null]
   * @memberof TreeNode
   */
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {TreeNode} root
 * @returns {number}
 */
// const maxSum = root => {
//   /**
//    * @param {TreeNode} node
//    * @param {number} [sum=0]
//    */
//   const traverse = (node, sum = 0) => {
//     console.log(node ? node.value : null, sum);
//     return !node
//       ? 0
//       : node.value +
//           Math.max(traverse(node.left, sum), traverse(node.right, sum));
//   };
//   console.log(traverse(root));
//   return traverse(root);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {TreeNode} root
 * @param {number} [sum=0]
 */
const maxSum = (root, sum = 0) =>
  !root
    ? 0
    : root.value + Math.max(maxSum(root.left, sum), maxSum(root.right, sum));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

/**
 * null
 */
strictEqual(maxSum(null), 0);

/**
 *      5
 *    /   \
 *  -22    11
 *  / \    / \
 * 9  50  9   2
 */
strictEqual(
  maxSum(
    new TreeNode(
      5,
      new TreeNode(-22, new TreeNode(9), new TreeNode(50)),
      new TreeNode(11, new TreeNode(9), new TreeNode(2)),
    ),
  ),
  33,
);
