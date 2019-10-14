// 6 kyu | Does my number look big in this?
// https://www.codewars.com/kata/does-my-number-look-big-in-this/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} value
 * @returns {boolean}
 */
const narcissistic = value => {
  let digits = [];
  let tmp = value;
  while (0 < tmp) {
    digits.push(tmp % 10);
    tmp = Math.trunc(tmp / 10);
  }
  const powers = digits.map(d => d ** digits.length);
  const sum = powers.reduce((acc, curr) => acc + curr);
  return value === sum;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(narcissistic(7), true, 'Is 7 narcissistic?');

// 1^2 + 0^2 = 1;
strictEqual(narcissistic(10), false, 'Is 10 narcissistic?');

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
strictEqual(narcissistic(153), true, 'Is 153 narcissistic');

strictEqual(narcissistic(371), true, 'Is 371 narcissistic?');

strictEqual(narcissistic(999), false, 'Is 999 narcissistic?');

// 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
strictEqual(narcissistic(1634), true, 'Is 1634 narcissistic?');
