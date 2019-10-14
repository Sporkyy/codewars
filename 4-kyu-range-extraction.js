// 4 kyu | Range Extraction
// https://www.codewars.com/kata/range-extraction/train/javascript

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} list
 * @returns {string}
 */
// const solution = list => {
//   if (list.length <= 2) return list.join(',');
//   let result = [];
//   let temp = [];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] !== temp[temp.length - 1] + 1) {
//       if (temp.length < 3) {
//         result = result.concat(temp);
//         temp = [];
//       } else {
//         result.push(`${temp.shift()}-${temp.pop()}`);
//         temp = [];
//       }
//     }
//     temp.push(list[i]);
//   }
//   if (temp.length < 3) {
//     result = result.concat(temp);
//     temp = [];
//   } else {
//     result.push(`${temp.shift()}-${temp.pop()}`);
//     temp = [];
//   }
//   return result.join(',');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} list
 * @returns {string}
 */
// const solution = list => {
//   let result = [];
//   while (0 < list.length) {
//     const n = list.shift();
//     const range = result[result.length - 1] || [];
//     const expected = range[range.length - 1] + 1;
//     if (n === expected) range.push(n);
//     else result.push([n]);
//   }
//   return result
//     .map(a => (a.length < 3 ? a.join(',') : `${a[0]}-${a[a.length - 1]}`))
//     .join(',');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} list
 * @returns {string}
 */
const solution = list =>
  list
    .reduce((acc, curr) => {
      const range = acc[acc.length - 1] || [];
      const expected = range[range.length - 1] + 1;
      if (curr === expected) range.push(curr);
      else acc.push([curr]);
      return acc;
    }, [])
    .map(a => (a.length < 3 ? a.join(',') : `${a[0]}-${a[a.length - 1]}`))
    .join(',');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(solution([1]), '1');

strictEqual(solution([1, 2]), '1,2');

strictEqual(solution([1, 2, 3]), '1-3');

strictEqual(solution([1, 2, 3, 5]), '1-3,5');

strictEqual(solution([1, 2, 3, 5, 6]), '1-3,5,6');

strictEqual(
  solution([
    -6,
    -3,
    -2,
    -1,
    0,
    1,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    14,
    15,
    17,
    18,
    19,
    20,
  ]),
  '-6,-3-1,3-5,7-11,14,15,17-20',
);
