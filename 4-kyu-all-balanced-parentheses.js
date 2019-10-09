// 4 kyu | All Balanced Parentheses
// https://www.codewars.com/kata/all-balanced-parentheses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Copy+paste from my previous solution
 * 5 kyu | Valid Parentheses
 * https://www.codewars.com/kata/valid-parentheses
 *
 * @param {string} parens
 * @return {boolean}
 */
const validParentheses = parens => {
  const stack = [];
  for (const paren of [...parens])
    if ('(' === paren) stack.push(paren);
    else if ('(' !== stack.pop()) return false;
  return 0 === stack.length;
};

/**
 * @param {number} n
 * @returns {number}
 */
const factorial = n => (1 === n ? 1 : n * factorial(n - 1));

/**
 * Copy+paste from my previous solution
 * 4 kyu | Permutations
 * https://www.codewars.com/kata/permutations/
 *
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
 * Copy+paste from my previous solution
 * 4 kyu | Permutations
 * https://www.codewars.com/kata/permutations/
 *
 * @param {string} string
 * @returns {string[]}
 */
const permutations = string => {
  if (0 === string.length) return [''];
  const results = [];
  for (let i = 0; i < factorial(string.length); i++) {
    const perm = nthPermutation(string, i);
    if (validParentheses(perm)) results.push(perm);
  }
  return results;
};

// console.log(permutations('(())'));

/**
 * @param {number} n
 * @returns
 */
const balancedParens = n => permutations(`${'('.repeat(n)}${')'.repeat(n)}`);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.time('bench');
balancedParens(0).sort();
balancedParens(1).sort();
balancedParens(2).sort();
balancedParens(3).sort();
balancedParens(4).sort();
balancedParens(5).sort();
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
