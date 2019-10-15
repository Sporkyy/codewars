// 6 kyu | Binary Tree Compare
// https://www.codewars.com/kata/binary-tree-compare

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Return true if the binary trees rooted and a and b
 * are equal in structure and value
 * Return false otherwise
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {boolean}
 */
// const compare = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Return true if the binary trees rooted and a and b
 * are equal in structure and value
 * Return false otherwise
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {boolean}
 */
// const compare = (a, b) => {
//   if (!a && !b) return true;
//   if ((!a && b) || (a && !b)) return false;
//   const stack = [{ a, b }];
//   while (stack.length) {
//     const {
//       a: { val: aVal, left: aLeft, right: aRight },
//       b: { val: bVal, left: bLeft, right: bRight },
//     } = stack.pop();
//     if (aVal !== bVal) return false;
//     if ((!aRight && bRight) || (aRight && !bRight)) return false;
//     if ((!aLeft && bLeft) || (aLeft && !bLeft)) return false;
//     if (aRight && bRight) stack.push({ a: aRight, b: bRight });
//     if (aLeft && bLeft) stack.push({ a: aLeft, b: bLeft });
//   }
//   return true;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Return true if the binary trees rooted and a and b
 * are equal in structure and value
 * Return false otherwise
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {boolean}
 */
const compare = (a, b) =>
  null === a || null === b
    ? a === b
    : a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var aNode = { val: 1, left: null, right: null };
var bNode = { val: 1, left: null, right: null };
var cNode = { val: 2, left: null, right: null };

console.log(!!null);
console.log(!!aNode);

var abcNode = { ...aNode };
abcNode.left = bNode;
abcNode.right = cNode;

var bcaNode = { ...bNode };
bcaNode.left = cNode;
bcaNode.right = aNode;

import { strictEqual } from 'assert';

strictEqual(compare(aNode, bNode), true);

strictEqual(compare(aNode, cNode), false);

strictEqual(compare(aNode, aNode), true);

strictEqual(compare(null, null), true);

strictEqual(compare(aNode, null), false);

strictEqual(compare(abcNode, abcNode), true);

strictEqual(compare(abcNode, bcaNode), false);

strictEqual(compare(abcNode, bNode), false);
