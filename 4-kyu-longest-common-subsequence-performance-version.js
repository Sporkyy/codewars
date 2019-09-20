// 4 kyu | Longest Common Subsequence (Performance version)
// https://www.codewars.com/kata/longest-common-subsequence-performance-version

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   let result = '';
//   for (char of x) {
//     if (new RegExp([...(result + char)].join('.*')).test(y)) result += char;
//   }
//   console.log(result);
//   if (x.length === y.length) {
//     let r2 = '';
//     for (char of y) {
//       if (new RegExp([...(r2 + char)].join('.*')).test(x)) r2 += char;
//     }
//     console.log(r2);
//     if (result.length < r2.length) result = r2;
//   }
//   console.log(result);
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   const memo = new Set();
//   for (let char of x) {
//     if (0 === memo.size && new RegExp(`${char}.*`).test(y)) {
//       memo.add(char);
//       // console.log(char);
//       continue;
//     }
//     // console.log(char);
//     // console.log(memo);
//     for (let cand of memo) {
//       cand += char;
//       // console.log(cand);
//       if (memo.has(cand)) continue;
//       if (new RegExp([...cand].join('.*')).test(y)) memo.add(cand);
//     }
//   }
//   // console.log(memo);
//   let result = '';
//   for (cand of memo) if (result.length < cand.length) result = cand;
//   // console.log(result);
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   // Memoize all permuations
//   const temp = [...x].reduce((acc, curr) => {
//     for (let key of Object.keys(acc)) acc[`${key}${curr}`] = 0;
//     acc[curr] = 0;
//     return acc;
//   }, {});
//   console.log(temp);
//   // Sort them
//   const options = Object.keys(temp).sort(
//     ({ length: a }, { length: b }) => b - a,
//   );
//   console.log(options);
//   // Start with the longest ones
//   for (let option of options) {
//     // Return the first one that matches
//     if (new RegExp([...option].join('.*')).test(y)) {
//       return option;
//     }
//   }
//   return '';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
const lcs = (x, y) => {
  if (y.length < x.length) return lcs(y, x);
  // Memoize all permuations
  const temp = [...x].reduce((acc, curr) => {
    for (let key of Object.keys(acc)) acc[`${key}${curr}`] = 0;
    acc[curr] = 0;
    return acc;
  }, {});
  // Sort them
  const options = Object.keys(temp).sort(
    ({ length: a }, { length: b }) => b - a,
  );
  // Start with the longest ones
  for (let option of options) {
    // Return the first one that matches
    if (new RegExp([...option].join('.*')).test(y)) {
      return option;
    }
  }
  return '';
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(lcs('', ''), '');
assert.strictEqual(lcs('abc', ''), '');
assert.strictEqual(lcs('', 'abc'), '');
assert.strictEqual(lcs('a', 'b'), '');
assert.strictEqual(lcs('a', 'a'), 'a');
assert.strictEqual(lcs('abc', 'ac'), 'ac');
assert.strictEqual(lcs('abcdef', 'abc'), 'abc');
assert.strictEqual(lcs('abcdef', 'acf'), 'acf');
assert.strictEqual(lcs('anothertest', 'notatest'), 'nottest');
assert.strictEqual(lcs('132535365', '123456789'), '12356');
assert.strictEqual(lcs('nothardlythefinaltest', 'zzzfinallyzzz'), 'final');
assert.strictEqual(
  lcs('abcdefghijklmnopq', 'apcdefghijklmnobq'),
  'acdefghijklmnoq',
);
