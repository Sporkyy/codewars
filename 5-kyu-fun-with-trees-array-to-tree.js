// 5 kyu | Fun with trees: array to tree
// https://www.codewars.com/kata/fun-with-trees-array-to-tree

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const arrayToTree = array => {
//   const nodes = array.map(val => new TreeNode(val));
//   for (let i = 0; nodes[i * 2 + 1]; i++) nodes[i].left = nodes[i * 2 + 1];
//   for (let i = 0; nodes[i * 2 + 2]; i++) nodes[i].right = nodes[i * 2 + 2];
//   return nodes[0];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} array
 * @param {number} [i=0]
 */
const arrayToTree = (array, i = 0) =>
  array.length <= i
    ? undefined
    : new TreeNode(
        array[i],
        arrayToTree(array, i * 2 + 1),
        arrayToTree(array, i * 2 + 2),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(JSON.stringify(arrayToTree([])), JSON.stringify(undefined));

strictEqual(
  JSON.stringify(arrayToTree([17, 0, -4, 3, 15])),
  JSON.stringify(
    new TreeNode(
      17,
      new TreeNode(0, new TreeNode(3), new TreeNode(15)),
      new TreeNode(-4),
    ),
  ),
);
