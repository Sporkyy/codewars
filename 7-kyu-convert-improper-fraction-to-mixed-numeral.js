// 7 kyu | Convert Improper Fraction to Mixed Numeral
//

/*

In Math, an improper fraction is a fraction where the numerator (the top number)
is greater than or equal to the denominator (the bottom number) For example: 5/3
(five third).

A mixed numeral is a whole number and a fraction combined into one "mixed"
number. For example: 1 1/2 (one and a half) is a mixed numeral.

## Task

Write a function convertToMixedNumeral to convert the improper fraction into a
mixed numeral.

The input will be given as a string (e.g. '4/3').

The output should be a string, with a space in between the whole number and the
fraction (e.g. '1 1/3'). You do not need to reduce the result to its simplest
form.

For the purpose of this exercise, there will be no 0, empty string or null input
value. However, the input can be:

- a negative fraction
- a fraction that does not require conversion
- a fraction that can be converted into a whole number

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time: 745ms
// Passed: 50
// Failed: 0
// You have passed all of the tests! :)

// const convertToMixedNumeral = parm => {
//   const [n, d] = parm.split('/');
//   // console.log(n, d);
//   const [q, r] = [Math.trunc(n / d), n % d];
//   // console.log(q, r);
//   if (!q) return parm;
//   if (!r) return `${q}`;
//   return `${q} ${Math.abs(r)}/${d}`;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time: 745ms
// Passed: 50
// Failed: 0
// You have passed all of the tests! :)

// const convertToMixedNumeral = parm => {
//   const [n, d] = parm.split('/');
//   const [q, r] = [Math.trunc(n / d), n % d];
//   if (!q) return parm;
//   if (!r) return `${q}`;
//   return `${q} ${Math.abs(r)}/${d}`;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time: 716ms
// Passed: 50
// Failed: 0
// You have passed all of the tests! :)

/**
 * @param {string} parm
 * @returns {string}
 */
const convertToMixedNumeral = parm =>
  (([n, d]) =>
    (([q, r]) => (!q ? parm : !r ? `${q}` : `${q} ${Math.abs(r)}/${d}`))([
      Math.trunc(n / d),
      n % d,
    ]))(parm.split('/'));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(convertToMixedNumeral('6/2'), '3');

strictEqual(convertToMixedNumeral('74/3'), '24 2/3');

strictEqual(convertToMixedNumeral('-504/26'), '-19 10/26');

strictEqual(convertToMixedNumeral('9/18'), '9/18');
