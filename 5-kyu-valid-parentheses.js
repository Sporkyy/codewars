// 5 kyu | Valid Parentheses
// https://www.codewars.com/kata/valid-parentheses

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Copy+paste from my leetcode solution
 *
 * @param {string} parens
 * @return {boolean}
 */
// const validParentheses = function(parens) {
//   const stack = [];
//   for (i = 0; i < parens.length; i++)
//     if ('(' === parens[i]) stack.push(parens[i]);
//     else if (stack.pop() !== '(') return false;
//   return 0 === stack.length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
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

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} parens
 * @return {boolean}
 */
// const validParentheses = parens =>
//   0 ===
//   [...parens].reduce(
//     (acc, paren) => (acc < 0 ? Infinity : (acc += '(' === paren ? 1 : -1)),
//     0,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(validParentheses('()'), true);
strictEqual(validParentheses('())'), false);
strictEqual(validParentheses('(())'), true);
strictEqual(validParentheses(')('), false);
strictEqual(validParentheses('(()())()()'), true);
