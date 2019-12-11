// 5 kyu | Perimeter of squares in a rectangle
// https://www.codewars.com/kata/perimeter-of-squares-in-a-rectangle

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const perimeter = n => {
//   const seq = [];
//   while (0 <= n) seq.push(fib(1 + n--));
//   return seq.reduce((acc, curr) => acc + curr) * 4;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const perimeter = n => {
//   const seq = [0, 1];
//   for (let i = 2; i < n + 2; i++) seq.push(seq[i - 2] + seq[i - 1]);
//   return seq
//     .slice(1)
//     .map(x => x * 4)
//     .reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const perimeter = n => {
//   const last2 = [0, 1];
//   while (-2 < n--) [last2[0], last2[1]] = [last2[1], last2[0] + last2[1]];
//   return (last2[1] - 1) * 4;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 * @returns {number}
 */
const perimeter = n => {
  let [pen, ult] = [0, 1];
  while (-2 < n--) [pen, ult] = [ult, pen + ult];
  return (ult - 1) * 4;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(perimeter(0), 4);
strictEqual(perimeter(5), 80);
strictEqual(perimeter(7), 216);
strictEqual(perimeter(20), 114624);
strictEqual(perimeter(30), 14098308);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log((1 + 1 + 2 + 3 + 5 + 8) * 4);
console.log(1 * 4 + 1 * 4 + 2 * 4 + 3 * 4 + 5 * 4 + 8 * 4);

console.log((1 + 1 + 2 + 3 + 5 + 8 + 13) * 4);
console.log((1 + 1 + 2 + 3 + 5 + 8 + 13 + 21) * 4);

/*

  n | 0 | 1 |  2 |  3 |  4 |  5 |  6 |  7 |   8 |   9 |  10 |  11 |  12 |
    +---+---+----+----+----+----+----+----+-----+-----+-----+-----+-----+
fib | 1 | 1 |  2 |  3 |  5 |  8 | 13 | 21 |  34 |  55 |  89 | 144 | 233 |
    +---+---+----+----+----+----+----+----+-----+-----+-----+-----+-----+
sum | 1 | 2 |  4 |  7 | 12 | 20 | 33 | 54 |  88 | 143 | 232 | 376 | 609 |
    +---+---+----+----+----+----+----+----+-----+-----+-----+-----+-----+
x 4 | 4 | 8 | 16 | 28 | 20 | 32 | 52 | 84 | 136 | 220 | 356 | 576 | 932 |

*/
