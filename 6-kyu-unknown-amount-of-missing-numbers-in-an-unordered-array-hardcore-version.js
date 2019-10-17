// 6 kyu | Unknown Amount of Missing Numbers in an Unordered Array. (Hardcore version)
// https://www.codewars.com/kata/unknown-amount-of-missing-numbers-in-an-unordered-array-hardcore-version/train/javascript

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} arr
//  * @returns {number[]}
//  */
// const missNumsFinder = arr => {
//   const a = new Array(Math.max(...arr) + 1).fill(0);
//   for (const n of arr) a[n]++;
//   const results = [];
//   a.slice(1).forEach((n, i) => {
//     if (0 === n) results.push(i + 1);
//   });
//   return results;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} arr
//  * @returns {number[]}
//  */
// const missNumsFinder = arr => {
//   const map = new Map();
//   let max = -Infinity;
//   for (const n of arr) {
//     if (max < n) max = n;
//     map.set(n, true);
//   }
//   const results = [];
//   for (let i = 1; i <= max; i++) if (!map.get(i)) results.push(i);
//   return results;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} arr
//  * @returns {number[]}
//  */
// const missNumsFinder = arr => {
//   const buckets = new Array(99999).fill(0);
//   let max = -Infinity;
//   for (const n of arr) {
//     if (max < n) max = n;
//     buckets[n]++;
//   }
//   const results = [];
//   for (let i = 1; i <= max; i++) if (0 === buckets[i]) results.push(i);
//   return results;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
// const missNumsFinder = arr => {
//   arr = new Set(arr);
//   const buckets = new Array(99999).fill(0);
//   let max = -Infinity;
//   for (const n of arr) {
//     if (max < n) max = n;
//     buckets[n]++;
//   }
//   const results = [];
//   for (let i = 1; i <= max; i++) if (0 === buckets[i]) results.push(i);
//   return results;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
// const missNumsFinder = arr => {
//   const map = new Map();
//   let max = 0;
//   for (const n of arr) {
//     map.set(n, true);
//     if (max < n) max = n;
//   }
//   const buckets = new Array(max).fill(0);
//   for (const n of map.keys()) buckets[n]++;
//   const results = [];
//   for (let i = 1; i <= max; i++) if (0 === buckets[i]) results.push(i);
//   return results;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} arr
//  * @returns {number[]}
//  */
// const missNumsFinder = arr => {
//   const set = new Set(arr);
//   const results = [];
//   for (let i = 1; i <= Math.max(...Array.from(set)); i++)
//     if (!set.has(i)) results.push(i);
//   return results;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} arr
//  * @returns {number[]}
//  */
// const missNumsFinder = arr => {
//   const set = new Set(arr);
//   let max = 0;
//   const results = [];
//   for (let i = 1; i < 99999; i++) {
//     if (set.has(i) && max < i) max = i;
//     else results.push(i);
//   }
//   return results.filter(r => r < max);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
const missNumsFinder = arr => {
  const a = new Array(99999);
  let max = 0;
  for (const n of arr) {
    a[n] = true;
    if (max < n) max = n;
  }
  const results = [];
  for (let i = 1; i < 99999; i++) {
    if (!a[i]) results.push(i);
    if (max <= i) break;
  }
  return results;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

console.time();

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

console.timeEnd();
