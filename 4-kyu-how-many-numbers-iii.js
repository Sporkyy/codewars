// 4 kyu | How many numbers III?
// https://www.codewars.com/kata/how-many-numbers-iii/train/javascript

/*

The value of adding their corresponding ones `(digits) is equal to 10.

Their digits are in increasing order
(the numbers may have two or more equal contiguous digits)

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  */
// const digitSum = n =>
//   [...n.toString()].reduce((acc, curr) => acc + parseInt(curr, 10), 0);

// /**
//  * @param {number} n
//  */
// const areDigitsIncreasing = n => {
//   const a = [...n.toString()].map(Number);
//   for (let i = 0; i < a.length - 1; i++) {
//     if (a[i + 1] < a[i]) return false;
//   }
//   return true;
// };

// /**
//  * @param {number} n
//  * @param {number} k
//  * @returns
//  */
// const findAll = (n, k) => {
//   const results = [];

//   for (
//     let i = parseInt(`1${'0'.repeat(k - 1)}`, 10);
//     i <= parseInt('9'.repeat(k), 10);
//     i++
//   )
//     if (n === digitSum(i) && areDigitsIncreasing(i)) results.push(i);

//   if (0 === results.length) return [];

//   return [results.length, `${results[0]}`, `${results[results.length - 1]}`];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  * @param {number} k
//  * @returns
//  */
// const findAll = (n, k) => {
//   const found = [];
//   outermost: for (
//     let i = parseInt(`1${'0'.repeat(k - 1)}`, 10);
//     i <= parseInt('9'.repeat(k), 10);
//     i++
//   ) {
//     // console.log(i);
//     const digits = [];
//     let tmp = i;
//     while (0 < tmp) {
//       digits.push(tmp % 10);
//       tmp = Math.trunc(tmp / 10);
//     }
//     digits.reverse();
//     // console.log(digits);
//     let sum = digits[0];
//     // console.log(sum);
//     for (let j = 0; j < digits.length - 1; j++) {
//       if (digits[j + 1] < digits[j]) continue outermost;
//       // console.log(digits[j + 1]);
//       sum += digits[j + 1];
//       if (n < sum) continue outermost;
//     }
//     // console.log(sum);
//     if (n !== sum) continue outermost;
//     found.push(i);
//     // console.log(found);
//   }
//   // console.log(found);
//   if (0 === found.length) return [];
//   return [
//     found.length,
//     found[0].toString(),
//     found[found.length - 1].toString(),
//   ];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 * @param {number} k
 * @returns
 */
const findAll = (n, k) => {
  const found = [];
  outermost: for (
    let i = parseInt(`1${'0'.repeat(k - 1)}`, 10);
    i <= parseInt('9'.repeat(k), 10);
    i++
  ) {
    let remaining = i;
    let sum = 0;
    let next;
    while (0 < remaining) {
      const digit = remaining % 10;
      sum += digit;
      if (next < digit) continue outermost;
      remaining = Math.trunc(remaining / 10);
      next = digit;
    }
    if (n !== sum) continue outermost;
    found.push(i);
  }
  if (0 === found.length) return [];
  return [
    found.length,
    found[0].toString(),
    found[found.length - 1].toString(),
  ];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

// console.log(findAll(10, 2));

assert.deepStrictEqual(findAll(10, 3), [8, '118', '334']);

assert.deepStrictEqual(findAll(27, 3), [1, '999', '999']);

assert.deepStrictEqual(findAll(84, 4), []);

assert.deepStrictEqual(findAll(35, 6), [123, '116999', '566666']);
