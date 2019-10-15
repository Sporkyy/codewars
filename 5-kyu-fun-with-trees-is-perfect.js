// 5 kyu | Fun with trees: is perfect
// https://www.codewars.com/kata/fun-with-trees-is-perfect

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }

  static leaf() {
    return new TreeNode();
  }

  static join(left, right) {
    return new TreeNode().withChildren(left, right);
  }

  withLeft(left) {
    this.left = left;
    return this;
  }

  withRight(right) {
    this.right = right;
    return this;
  }

  withChildren(left, right) {
    this.left = left;
    this.right = right;
    return this;
  }

  withLeftLeaf() {
    return this.withLeft(TreeNode.leaf());
  }

  withRightLeaf() {
    return this.withRight(TreeNode.leaf());
  }

  withLeaves() {
    return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
  }

  // Added code

  static depth(root) {
    return !root
      ? 0
      : 1 + Math.max(TreeNode.depth(root.left), TreeNode.depth(root.right));
  }

  static cnt(root) {
    let cnt = 0;
    const stack = [root];
    while (stack.length) {
      const { left, right } = stack.pop();
      cnt++;
      if (right) stack.push(right);
      if (left) stack.push(left);
    }
    return cnt;
  }

  static isPerfect(root) {
    const depth = TreeNode.depth(root);
    if (0 === depth) return true;
    const cnt = TreeNode.cnt(root);
    if ((1 === depth && 1 === cnt) || (2 === depth && 3 === cnt)) return true;
    return depth * 2 + 1 === cnt;
  }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(TreeNode.isPerfect(null), true);

strictEqual(TreeNode.isPerfect(TreeNode.leaf().withLeaves()), true);

strictEqual(TreeNode.isPerfect(TreeNode.leaf().withLeftLeaf()), false);

strictEqual(TreeNode.isPerfect(TreeNode.leaf()), true);

// /*
//  * full two level tree
//  *
//  *      0
//  *    /   \
//  *   0     0
//  *  / \   / \
//  * 0   0 0   0
//  *
//  */
strictEqual(
  TreeNode.isPerfect(
    TreeNode.join(TreeNode.leaf().withLeaves(), TreeNode.leaf().withLeaves()),
  ),
  true,
);

// /*
//  * full unbalanced tree
//  *
//  *      0
//  *    /   \
//  *   0     0
//  *  / \
//  * 0   0
//  *
//  */
strictEqual(
  TreeNode.isPerfect(
    TreeNode.join(TreeNode.leaf().withLeaves(), TreeNode.leaf()),
  ),
  false,
);

// /*
//  * non-full balanced tree
//  *
//  *      0
//  *    /   \
//  *   0     0
//  *  /       \
//  * 0         0
//  *
//  */
strictEqual(
  TreeNode.isPerfect(
    TreeNode.join(
      TreeNode.leaf().withLeftLeaf(),
      TreeNode.leaf().withRightLeaf(),
    ),
  ),
  false,
);
