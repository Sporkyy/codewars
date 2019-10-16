// 6 kyu | Sum The Tree
// https://www.codewars.com/kata/sum-the-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// return the sum of all values in the tree, including the root
/**
 * @param {Object} root
 */
const sumTheTreeValues = root =>
  !root
    ? 0
    : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

const simpleNode = {
  value: 10,
  left: { value: 1, left: null, right: null },
  right: { value: 2, left: null, right: null },
};
strictEqual(sumTheTreeValues(simpleNode), 13);

const unbalancedNode = {
  value: 11,
  left: { value: 0, left: null, right: null },
  right: {
    value: 0,
    left: null,
    right: { value: 1, left: null, right: null },
  },
};
strictEqual(sumTheTreeValues(unbalancedNode), 12);
