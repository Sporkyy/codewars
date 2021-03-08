// 6 kyu | Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c

/*

Given two arrays `a` and `b` write a function `comp(a, b)` (or `compSame(a, b)`)
that checks whether the two arrays have the "same" elements, with the same
*multiplicities*. "Same" means, here, that the elements in `b` are the elements
in `a` squared, regardless of the order.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time: 778ms
// Passed: 214
// Failed: 0
// You have passed all of the tests! :)

/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {Boolean}
 */
const comp = (array1, array2) => {
  if (!array1 || !array2) return false;
  if (!array1.length && !array2.length) return true;
  if (!array1.length || !array2.length) return false;
  const cnts = new Map();
  for (const n of array1) cnts.set(n ** 2, (cnts.get(n ** 2) || 0) + 1);
  for (const n of array2) cnts.set(n, (cnts.get(n) || 0) - 1);
  return [...cnts.values()].every(n => 0 === n);
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

ok(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ],
  ),
);

ok(comp([], []));

ok(!comp([], [1]));

ok(!comp([1], []));

ok(!comp(null, null));

ok(!comp(null, [1]));

ok(!comp([1], null));

ok(
  !comp(
    [8, 2, 10, 9, 7, 3, 10, 0, 9, 1, 0, 0, 6, 5],
    [25, 36, 9, 1, 100, 81, 64, 0, 81, 100, 4, 1, 49, 0],
  ),
);

ok(
  !comp(
    [0, 0, 0, 1, 2, 3, 5, 6, 7, 8, 9, 9, 10, 10],
    [
      0 * 0,
      0 * 0,
      1 * 1,
      1 * 1,
      2 * 2,
      3 * 3,
      5 * 5,
      6 * 6,
      7 * 7,
      8 * 8,
      9 * 9,
      9 * 9,
      10 * 10,
      10 * 10,
    ],
  ),
);

ok(
  !comp(
    [7, 10, 0, 0, 7, 5, 5, 1, 0, 2, 4, 8, 1, 6, 6, 9, 9, 1, 10, 7, 1, 5, 8],
    [
      36,
      81,
      100,
      25,
      100,
      49,
      1,
      64,
      36,
      25,
      1,
      0,
      49,
      1,
      1,
      4,
      0,
      49,
      16,
      1,
      64,
      81,
      25,
    ],
  ),
);

ok(
  !comp(
    [6, 8, 3, 1, 0, 0, 0, 1, 5, 7, 6, 4, 4, 6, 6, 9, 3, 2, 10, 5, 10, 5, 1],
    [
      25,
      1,
      36,
      49,
      1,
      16,
      9,
      25,
      81,
      0,
      1,
      36,
      0,
      64,
      100,
      16,
      9,
      36,
      100,
      1,
      25,
      4,
      36,
    ],
  ),
);
