// 6 kyu | Find the odd int
// https://www.codewars.com/kata/find-the-odd-int

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Given an array, find the integer that appears an odd number of times.
//  *
//  * There will always be only one integer that appears an odd number of times.
//  *
//  * @param {array} A
//  */
// const findOdd = A => {
//   const cnts = A.reduce(
//     (acc, curr) => acc.set(curr, acc.has(curr) ? acc.get(curr) + 1 : 1),
//     new Map(),
//   );
//   // console.log(cnts);
//   // console.log([...cnts.entries()]);
//   const res = [...cnts.entries()].reduce(
//     (acc, [x, cnt]) => (acc = 0 !== cnt % 2 ? x : acc),
//     undefined,
//   );
//   console.log(res);
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Given an array, find the integer that appears an odd number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 *
 * @param {array} A
 */
const findOdd = A =>
  [
    ...A.reduce(
      (acc, curr) => acc.set(curr, acc.has(curr) ? acc.get(curr) + 1 : 1),
      new Map(),
    ).entries(),
  ].reduce((acc, [x, cnt]) => (acc = 0 !== cnt % 2 ? x : acc), undefined);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  5,
);

strictEqual(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);

strictEqual(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);

strictEqual(findOdd([10]), 10);

strictEqual(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);

strictEqual(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
