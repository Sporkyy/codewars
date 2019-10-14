// 5 kyu | Moving Zeros To The End
// https://www.codewars.com/kata/moving-zeros-to-the-end/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const moveZeros = arr => {
  const head = [];
  const tail = [];
  for (const digit of arr) {
    if (0 !== digit) head.push(digit);
    else tail.push(digit);
  }
  return head.concat(tail);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const moveZeros = arr =>
//   arr
//     .reduce(
//       (acc, curr) => {
//         if (0 !== curr) acc[0].push(curr);
//         else acc[1].push(curr);
//         return acc;
//       },
//       [[], []],
//     )
//     .reduce((acc, curr) => acc.concat(curr), []);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

deepStrictEqual(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [
  1,
  2,
  1,
  1,
  3,
  1,
  0,
  0,
  0,
  0,
]);
