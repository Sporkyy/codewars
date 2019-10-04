// 7 kyu | How many consecutive numbers are needed?
// https://www.codewars.com/kata/how-many-consecutive-numbers-are-needed/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const consecutive = arr => {
//   if (arr.length < 2) return 0;
//   const [min, max] = [Math.min(...arr), Math.max(...arr)];
//   const cnts = new Array(max - min + 1).fill().map(_u => 0);
//   for (let n of arr) cnts[n - min]++;
//   return cnts.reduce(
//     (acc, curr, i) => (0 === curr ? [...acc, min + i] : acc),
//     [],
//   ).length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const consecutive = arr =>
  arr.length < 2 ? 0 : Math.max(...arr) - Math.min(...arr) - arr.length + 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const asssert = require('assert');

assert.strictEqual(consecutive([4, 8, 6]), 2);

assert.strictEqual(consecutive([1, 2, 3, 4]), 0);

assert.strictEqual(consecutive([]), 0);

assert.strictEqual(consecutive([1]), 0);
