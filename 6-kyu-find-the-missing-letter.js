// 6 kyu | Find the missing letter
// https://www.codewars.com/kata/find-the-missing-letter/train/javascript

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * There is only one missing letter, this is excessive
//  *
//  * @param {string[]} a
//  * @returns {string[]}
//  */
// const findMissingLetter = a => {
//   const codes = a.map(c => c.charCodeAt(0));
//   const buckets = new Array(123).fill(true);
//   for (const n of codes) buckets[n] = false;
//   for (let i = codes[0]; i <= codes[codes.length - 1]; i++) {
//     if (buckets[i]) return String.fromCharCode(i);
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string[]} a
//  * @returns {string[]}
//  */
// const findMissingLetter = a => {
//   for (let i = 0; true; i++) {
//     const shouldBeNext = String.fromCharCode(a[i].charCodeAt(0) + 1);
//     if (a[i + 1] !== shouldBeNext) return shouldBeNext;
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} a
 * @returns {string[]}
 */
const findMissingLetter = a => {
  let i = 0,
    expected;
  do {
    expected = String.fromCharCode(a[i++].charCodeAt(0) + 1);
  } while (a[i] === expected);
  return expected;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
strictEqual(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
