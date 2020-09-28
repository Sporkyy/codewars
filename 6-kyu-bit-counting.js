// 6 kyu | Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4

/*

Write a function that takes an integer as input, and returns the number of bits
that are equal to one in the binary representation of that number. You can
guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function
should return 5 in this case

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {number} n
 * @returns {number}
 */
const countBits = n =>
  [...n.toString(2)].reduce((acc, curr) => acc + Number.parseInt(curr, 10), 0);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(countBits(0), 0);
strictEqual(countBits(4), 1);
strictEqual(countBits(7), 3);
strictEqual(countBits(9), 2);
strictEqual(countBits(10), 2);
