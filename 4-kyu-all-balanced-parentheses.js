// 4 kyu | All Balanced Parentheses
// https://www.codewars.com/kata/all-balanced-parentheses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Copy+paste from my previous solution
//  * 5 kyu | Valid Parentheses
//  * https://www.codewars.com/kata/valid-parentheses
//  *
//  * @param {string} parens
//  * @return {boolean}
//  */
// const validParentheses = parens => {
//   const stack = [];
//   for (const paren of [...parens])
//     if ('(' === paren) stack.push(paren);
//     else if ('(' !== stack.pop()) return false;
//   return 0 === stack.length;
// };

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const factorial = n => (1 === n ? 1 : n * factorial(n - 1));

// /**
//  * Copy+paste from my previous solution
//  * 4 kyu | Permutations
//  * https://www.codewars.com/kata/permutations/
//  *
//  * @param {string} string
//  * @param {number} n
//  * @returns {string}
//  */
// const nthPermutation = (string, n) => {
//   let len = string.length;
//   let f = factorial(len);
//   const a = [...string];
//   let permutation = '';
//   do {
//     f /= len;
//     permutation += a.splice(Math.trunc(n / f), 1)[0];
//     n %= f;
//   } while (1 < len--);
//   return permutation;
// };

// /**
//  * Copy+paste from my previous solution
//  * 4 kyu | Permutations
//  * https://www.codewars.com/kata/permutations/
//  *
//  * @param {string} string
//  * @returns {string[]}
//  */
// const permutations = string => {
//   if (0 === string.length) return [''];
//   const results = [];
//   for (let i = 0; i < factorial(string.length); i++) {
//     const perm = nthPermutation(string, i);
//     if (validParentheses(perm)) results.push(perm);
//   }
//   return Array.from(new Set(results));
// };

// // console.log(permutations('(())'));

// /**
//  * @param {number} n
//  * @returns
//  */
// const balancedParens = n => permutations(`${'('.repeat(n)}${')'.repeat(n)}`);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 * @returns
 */
const balancedParens = n => {
  const results = [];
  /**
   * @param {number} [lefts=n]
   * @param {number} [rights=0]
   * @param {string} [s='']
   */
  const recurse = (lefts = n, rights = 0, s = '') => {
    if (0 < lefts) recurse(lefts - 1, rights + 1, `${s}(`);
    if (0 < rights) recurse(lefts, rights - 1, `${s})`);
    if (0 === lefts + rights) results.push(s);
  };
  recurse();
  return results;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.time('bench');
// console.log(balancedParens(0).sort());
// console.log(balancedParens(1).sort());
// console.log(balancedParens(2).sort());
// console.log(balancedParens(3).sort());
// console.log(balancedParens(4).sort());
console.log(balancedParens(5).sort());
// console.log(balancedParens(6).sort());
// console.log(balancedParens(7).sort());
// console.log(balancedParens(8).sort());
// console.log(balancedParens(9).sort());
console.timeEnd('bench');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

// deepStrictEqual(balancedParens(0).sort(), ['']);

// deepStrictEqual(balancedParens(1).sort(), ['()']);

// deepStrictEqual(balancedParens(2).sort(), ['(())', '()()']);

// deepStrictEqual(balancedParens(3).sort(), [
//   '((()))',
//   '(()())',
//   '(())()',
//   '()(())',
//   '()()()',
// ]);

// deepStrictEqual(balancedParens(4).sort(), [
//   '(((())))',
//   '((()()))',
//   '((())())',
//   '((()))()',
//   '(()(()))',
//   '(()()())',
//   '(()())()',
//   '(())(())',
//   '(())()()',
//   '()((()))',
//   '()(()())',
//   '()(())()',
//   '()()(())',
//   '()()()()',
// ]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
