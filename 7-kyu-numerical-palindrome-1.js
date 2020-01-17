// 7 kyu | Numerical Palindrome #1
// https://www.codewars.com/kata/58ba6fece3614ba7c200017f

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} num
 * @returns
 */
const palindrome = num => {
  if ('number' !== typeof num || num < 0) return 'Not valid';
  let left = 10 ** (Math.trunc(Math.log10(Math.abs(num))) + 1 - 1);
  while (0 < num) {
    if (Math.trunc(num / left) !== num % 10) return false;
    num = Math.trunc((num % left) / 10);
    left /= 100;
  }
  return true;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(palindrome(1221), true);
strictEqual(palindrome(123322), false);
strictEqual(palindrome('ACCDDCCA'), 'Not valid');
strictEqual(palindrome('1221'), 'Not valid');
strictEqual(palindrome(-450), 'Not valid');

strictEqual(palindrome(1456009006541), true);
