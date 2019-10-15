// 5 kyu | Binary Tree Traversal
// https://www.codewars.com/kata/binary-tree-traversal

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// /**
//  * 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
//  *
//  * @param {Node} node
//  * @returns {number[]}
//  */
// const preOrder = node => {
//   const results = [];
//   const helper = node => {
//     const { data, left, right } = node;
//     results.push(data);
//     if (left) helper(left);
//     if (right) helper(right);
//   };
//   helper(node);
//   return results;
// };

// /**
//  * 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
//  *
//  * @param {Node} node
//  * @returns {number[]}
//  */
// const inOrder = node => {
//   const results = [];
//   const helper = node => {
//     const { left, data, right } = node;
//     if (left) helper(left);
//     results.push(data);
//     if (right) helper(right);
//   };
//   helper(node);
//   return results;
// };

// /**
//  * 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
//  *
//  * @param {Node} node
//  * @returns {number[]}
//  */
// const postOrder = node => {
//   const results = [];
//   const helper = node => {
//     const { left, right, data } = node;
//     if (left) helper(left);
//     if (right) helper(right);
//     results.push(data);
//   };
//   helper(node);
//   return results;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

/**
 * 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
 *
 * @param {Node} node
 * @returns {number[]}
 */
const preOrder = node => {
  const results = [];
  const stack = [node];
  while (stack.length) {
    const { data, left, right } = stack.pop();
    results.push(data);
    if (right) stack.push(right);
    if (left) stack.push(left);
  }
  return results;
};

/**
 * 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
 *
 * @param {Node} node
 * @returns {number[]}
 */
const inOrder = node => {
  const results = [];
  const stack = [];
  let current = node;
  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      results.push(current.data);
      current = current.right;
    }
  }
  return results;
};

/**
 * 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
 *
 * @param {Node} node
 * @returns {number[]}
 */
const postOrder = node => {
  const results = [];
  const stack = [node];
  while (stack.length) {
    const { data, left, right } = stack.pop();
    results.unshift(data);
    if (left) stack.push(left);
    if (right) stack.push(right);
  }
  return results;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(5);
const b = new Node(10);
const c = new Node(2);

a.left = b;
a.right = c;

import { deepStrictEqual } from 'assert';

console.time();

deepStrictEqual(preOrder(a), [a.data, b.data, c.data]);

deepStrictEqual(preOrder(b), [b.data]);

deepStrictEqual(preOrder(c), [c.data]);

deepStrictEqual(inOrder(a), [b.data, a.data, c.data]);

deepStrictEqual(inOrder(b), [b.data]);

deepStrictEqual(inOrder(c), [c.data]);

deepStrictEqual(postOrder(a), [b.data, c.data, a.data]);

deepStrictEqual(postOrder(b), [b.data]);

deepStrictEqual(postOrder(c), [c.data]);

console.timeEnd();
