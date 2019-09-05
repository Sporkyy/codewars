// 4 kyu | Snail
// https://www.codewars.com/kata/snail/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const snail = array => {
//   const result = new Array(array.length ** 2);
//   for (let i = 0; i < array.length ** 2; i++) {
//     // console.log(i);
//     // console.log(Math.trunc(i / array.length));
//     let row = Math.trunc(i / array.length);
//     console.log(row);
//     // console.log(i % array.length);
//     let col = i % array.length;
//     console.log(col);
//     if (row / 2 < row) col = array.length - col;
//     result[i] = array[row][col];
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const snail = array => {
//   const result = new Array(array.length ** 2);
//   for (let i = 0; i < array.length ** 2; i++) {
//     // console.log(i);
//     // console.log(Math.trunc(i / array.length));
//     let row = Math.trunc(i / array.length);
//     // console.log(row);
//     // console.log(i % array.length);
//     let col = i % array.length;
//     // console.log(col);
//     // if (row / 2 < row) col = array.length - col;
//     console.log(`[${row}, ${col}]`);
//     result[i] = array[row][col];
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const snail = array => {
//   const center = Math.floor(array.length / 2);
//   console.log(center);
//   return [];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const snail = array => {
//   const result = new Array(array.length ** 2);
//   for (let i = 0, z = 0; i < array.length; i++) {
//     // console.log(i);
//     // for (let j = 0; j < array.length; j++, z++) {
//     //   if (0 < i && i < array.length) {
//     //   }
//     //   console.log(`[${i}, ${j}]`);
//     //   result[z] = array[i][j];
//     // }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const snail = array => {
//   const result = new Array(array.length ** 2);
//   for (let i = 0; i < array.length ** 2; i++) {
//     // console.log(i);
//     // console.log(Math.trunc(i / array.length));
//     let row = Math.trunc(i / array.length);
//     // console.log(row);
//     // console.log(i % array.length);
//     let col = i % array.length;
//     // console.log(col);
//     console.log(`[${row}, ${col}]`);
//     result[i] = array[row][col];
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const rotated = a => {
  if (0 === a.length || 0 === a[0].length) return [];
  const r = new Array(a[0].length).fill().map(u => new Array(a.length));
  for (let i = 0; i < a[0].length; i++) {
    for (let j = 0; j < a.length; j++) {
      r[i][j] = a[j][a[0].length - 1 - i];
    }
  }
  return r;
};

const snail = array => {
  let result = [];
  while (array.length) {
    result = result.concat(array.shift());
    array = rotated(array);
  }
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// 1 2 3 => 3 6 9
// 4 5 6 => 2 5 8
// 7 8 9 => 1 4 7

// [0, 0], [0, 1], [0, 2] => [0, 2], [1, 2], [2, 2]
// [1, 0], [1, 1], [1, 2] => [0, 1], [1, 1], [2, 1]
// [2, 0], [2, 1], [2, 2] => [0, 0], [1, 0], [2, 0]

// console.log(rotated([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// 4 5 6 => 6 9
// 7 8 9 => 5 8
//       => 4 7

// [0, 0], [0, 1], [0, 2] => [0, 2], [1, 2]
// [1, 0], [1, 1], [1, 2] => [0, 1], [1, 1]
//                        => [0, 0], [1, 0]

// console.log(rotated([[4, 5, 6], [7, 8, 9]]));

// 1 2 => 2 4 6
// 3 4 => 1 3 5
// 5 6 =>

// [0, 0], [0, 1] => [0, 1], [1, 1], [2, 1]
// [1, 0], [1, 1] => [0, 0], [1, 0], [2, 0]
// [2, 0], [2, 1] =>

// console.log(rotated([[1, 2], [3, 4], [5, 6]]));

// console.log(rotated([[1]]));

// console.log(rotated([[]]));

const assert = require('assert');

assert.deepStrictEqual(snail([[]]), []);

assert.deepStrictEqual(snail([[1]]), [1]);

assert.deepStrictEqual(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);

assert.deepStrictEqual(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]),
  [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13],
);

assert.deepStrictEqual(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ]),
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
  ],
);
