// 4 kyu | Permutations
// https://www.codewars.com/kata/permutations/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} string
//  * @returns {string[]}
//  */
// const permutations = string => {
//   const permute = s => {
//     if (s.length === 1) return [s];
//     const results = [];
//     for (let i = 0; i < s.length; i++)
//       for (let permutation of permute(`${s.slice(0, i)}${s.slice(i + 1)}`))
//         results.push(`${s[i]}${permutation}`);
//     return results;
//   };
//   return Array.from(new Set(permute(string)));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 * @returns {number}
 */
const factorial = n =>
  new Array(n)
    .fill()
    .map((_u, i) => i + 1)
    .reduce((a, c) => (a *= c), 1);

/**
 * @param {string} string
 * @param {number} n
 * @returns {string}
 */
const nthPermutation = (string, n) => {
  let len = string.length;
  let f = factorial(len);
  const a = [...string];
  let permutation = '';
  do {
    f /= len;
    permutation += a.splice(Math.trunc(n / f), 1)[0];
    n %= f;
  } while (1 < len--);
  return permutation;
};

/**
 * @param {string} string
 * @returns {string[]}
 */
const permutations = string =>
  Array.from(
    new Set(
      new Array(factorial(string.length))
        .fill()
        .map((_u, i) => nthPermutation(string, i)),
    ),
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

// assert.deepStrictEqual(permutations('a'), ['a']);

// console.log(permutations('ab'));

// permutations('ab');

// assert.deepStrictEqual(permutations('ab').sort(), ['ab', 'ba'].sort());

// permutations('abc');
// console.log(permutations('abc'));

assert.deepStrictEqual(
  permutations('abc').sort(),
  ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort(),
);

// console.log(permutations('aabb'));

// assert.deepStrictEqual(
//   permutations('aabb').sort(),
//   ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort(),
// );

// assert.deepStrictEqual(
//   permutations('abc').sort(),
//   ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort(),
// );

// console.log(array_nth_permutation([...'abcd'], 0));
// console.log(array_nth_permutation([...'abcd'], 1));
// console.log(array_nth_permutation([...'abcd'], 2));
// console.log(array_nth_permutation([...'abcd'], 3));

// console.log(permutations('abcd'));

// console.log(permutations('abcd').sort());

// assert.deepStrictEqual(
//   permutations('abcd').sort(),
//   [
//     'abcd',
//     'abdc',
//     'acbd',
//     'acdb',
//     'adbc',
//     'adcb',
//     'bacd',
//     'badc',
//     'bcad',
//     'bcda',
//     'bdac',
//     'bdca',
//     'cabd',
//     'cadb',
//     'cbad',
//     'cbda',
//     'cdab',
//     'cdba',
//     'dabc',
//     'dacb',
//     'dbac',
//     'dbca',
//     'dcab',
//     'dcba',
//   ].sort(),
// );

// permutations('abcde');
