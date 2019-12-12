//
// https://www.codewars.com/kata/maximum-subarray-sum

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} arr
 */
const maxSequence = arr => {
  if (arr.every(n => n < 0)) return 0;
  const sums = [];
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length + 1; j++)
      sums.push(arr.slice(i, j).reduce((a, c) => a + c));
  const max = Math.max(...sums);
  return -Infinity === max ? 0 : max;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(maxSequence([]), 0);
deepStrictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
deepStrictEqual(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]), 0);
