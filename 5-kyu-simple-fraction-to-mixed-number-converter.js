// 5 kyu | Simple fraction to mixed number converter
// https://www.codewars.com/kata/simple-fraction-to-mixed-number-converter/

/*

## Task

Given a string representing a simple fraction x/y, your function must return a
string representing the corresponding mixed fraction in the following format:

`[sign]a b/c`

where `a` is integer part and `b/c` is irreducible proper fraction. There must
be exactly one space between `a` and `b/c`. Provide `[sign]` only if negative
(and non zero) and only at the beginning of the number (both integer part and
fractional part must be provided absolute).

If the `x/y` equals the integer part, return integer part only. If integer part
is zero, return the irreducible proper fraction only. In both of these cases,
the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division
error of your language).

## Value ranges
* -10 000 000 < `x` < 10 000 000
* -10 000 000 < `y` < 10 000 000

## Examples
* Input: `42/9`, expected result: `4 2/3`.
* Input: `6/3`, expedted result: `2`.
* Input: `4/6`, expected result: `2/3`.
* Input: `0/18891`, expected result: `0`.
* Input: `-10/7`, expected result: `-1 3/7`.
* Inputs `0/0` or `3/0` must raise a zero division error.

## Note
Make sure not to modify the input of your function in-place, it is a bad
practice.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time: 691ms
// Passed: 140
// Failed: 0
// You have passed all of the tests! :)

// /**
//  * @param {string} s
//  * @returns {string}
//  */
// const mixedFraction = s => {
//   let [n, d] = s.split('/').map(Number);
//   if (!d) throw new Error('ZeroDivisionError');
//   const sign = Math.sign(n * d);
//   [n, d] = [n, d].map(Math.abs);
//   const [q, r] = [Math.trunc(n / d), n % d];
//   const gcd = (x, y) => (!y ? x : gcd(y, x % y));
//   if (!r) return `${sign * q}`;
//   if (!q) return `${(sign * n) / gcd(n, d)}/${d / gcd(n, d)}`;
//   return `${sign * q} ${r / gcd(r, d)}/${d / gcd(r, d)}`;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time: 697ms
// Passed: 140
// Failed: 0
// You have passed all of the tests! :)

// /**
//  * @param {string} s
//  * @returns {string}
//  */
// const mixedFraction = s => {
//   let [n, d] = s.split('/').map(Number);
//   if (!d) throw new Error('ZeroDivisionError');
//   const sign = Math.sign(n * d);
//   [n, d] = [n, d].map(Math.abs);
//   const [q, r] = [Math.trunc(n / d), n % d];
//   if (!r) return `${sign * q}`;
//   const gcd = (x, y) => (!y ? x : gcd(y, x % y));
//   if (!q) return `${(sign * n) / gcd(n, d)}/${d / gcd(n, d)}`;
//   return `${sign * q} ${r / gcd(r, d)}/${d / gcd(r, d)}`;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time: 776ms
// Passed: 140
// Failed: 0
// You have passed all of the tests! :)

/**
 * @param {string} s
 * @returns {string}
 */
const mixedFraction = s => {
  let [num, denom] = s.split('/').map(Number);
  if (!denom) throw new Error('ZeroDivisionError');
  const sign = Math.sign(num * denom);
  [num, denom] = [num, denom].map(Math.abs);
  const [quot, rem] = [Math.trunc(num / denom), num % denom];
  if (!rem) return `${sign * quot}`;
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const ndGcd = gcd(num, denom);
  if (!quot) return `${(sign * num) / ndGcd}/${denom / ndGcd}`;
  const rdGcd = gcd(rem, denom);
  return `${sign * quot} ${rem / rdGcd}/${denom / rdGcd}`;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual, throws } from 'assert';

strictEqual(mixedFraction('42/9'), '4 2/3');

strictEqual(mixedFraction('6/3'), '2');

strictEqual(mixedFraction('1/1'), '1');

strictEqual(mixedFraction('11/11'), '1');

strictEqual(mixedFraction('4/6'), '2/3');

strictEqual(mixedFraction('0/18891'), '0');

strictEqual(mixedFraction('-10/7'), '-1 3/7');

strictEqual(mixedFraction('-22/-7'), '3 1/7');

throws(
  () => {
    mixedFraction('0/0');
  },
  Error,
  'ZeroDivisionError',
);

throws(
  () => {
    mixedFraction('3/0');
  },
  Error,
  'ZeroDivisionError',
);
