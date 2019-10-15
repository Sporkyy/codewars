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

  static maxDepth(root) {
    return !root
      ? 0
      : 1 +
          Math.max(TreeNode.maxDepth(root.left), TreeNode.maxDepth(root.right));
  }

  static serialize(root) {
    if (!root) return null;
    const result = [];
    const stk = [root];
    while (stk.length) {
      const { val, left, right } = stk.pop();
      if (!left && !right) {
        result.push(val);
        continue;
      }
      if (left) stk.push(left);
      if (right) stk.push(right);
    }
    return result;
  }

  static isPerfect(root) {
    const depth = TreeNode.maxDepth(root);
    if (0 === depth) return true;
    const serialized = TreeNode.serialize(root);
    if (1 === depth && 1 === serialized.length) return true;
    return (depth - 1) * 2 === serialized.length;
  }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// strictEqual(TreeNode.isPerfect(null), true);

// strictEqual(TreeNode.isPerfect(TreeNode.leaf().withLeaves()), true);

// strictEqual(TreeNode.isPerfect(TreeNode.leaf().withLeftLeaf()), false);

strictEqual(TreeNode.isPerfect(TreeNode.leaf()), true);
