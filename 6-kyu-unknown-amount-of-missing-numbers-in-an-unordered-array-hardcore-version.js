// 6 kyu | Unknown Amount of Missing Numbers in an Unordered Array. (Hardcore version)
// https://www.codewars.com/kata/unknown-amount-of-missing-numbers-in-an-unordered-array-hardcore-version/train/javascript

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const missNumsFinder = arr => {
  const a = new Array(Math.max(...arr) + 1).fill(0);
  // console.log(a);
  for (const n of arr) a[n]++;
  // console.log(a);
  // console.log(a.slice(1));
  const results = [];
  a.slice(1).forEach((n, i) => {
    if (0 === n) results.push(i + 1);
  });
  return results;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(missNumsFinder([2, 3, 1, 9, 4, 5, 6, 10, 7]), [8]);

deepStrictEqual(missNumsFinder([7, 6, 1, 4, 9, 2, 10, 3, 8]), [5]);

deepStrictEqual(missNumsFinder([5, 4, 2, 9, 3, 8, 10, 6, 7]), [1]);

deepStrictEqual(missNumsFinder([7, 1, 12, 9, 11, 14, 13, 6, 10, 5]), [
  2,
  3,
  4,
  8,
]);

deepStrictEqual(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]), [
  2,
  4,
  9,
  13,
]);

deepStrictEqual(
  missNumsFinder([9, 10, 7, 2, 11, 8, 1, 17, 6, 16, 18, 19, 15, 3, 13]),
  [4, 5, 12, 14],
);
