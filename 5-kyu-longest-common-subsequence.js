// 5 kyu | Longest Common Subsequence
// https://www.codewars.com/kata/longest-common-subsequence

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const LCS = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   const possibilities = [...x].reduce((acc, curr) => {
//     for (let value of Array.from(acc)) acc.add(`${value}${curr}`);
//     return acc.add(curr);
//   }, new Set());
//   // console.log(possibilities);
//   const result = Array.from(possibilities).reduce(
//     (acc, curr) =>
//       acc.length < curr.length && new RegExp([...curr].join('.*')).test(y)
//         ? curr
//         : acc,
//     '',
//   );
//   // console.log(result);
//   return result || '';
// };

// const lcs = (x, y) => LCS(x, y);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
const LCS = (x, y) =>
  y.length < x.length
    ? LCS(y, x)
    : Array.from(
        [...x].reduce((acc, curr) => {
          for (let value of Array.from(acc)) acc.add(`${value}${curr}`);
          return acc.add(curr);
        }, new Set()),
      ).reduce(
        (acc, curr) =>
          acc.length < curr.length && new RegExp([...curr].join('.*')).test(y)
            ? curr
            : acc,
        '',
      ) || '';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(LCS('a', 'b'), '');
strictEqual(LCS('abcdef', 'abc'), 'abc');
