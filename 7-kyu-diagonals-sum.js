// 7 kyu | Diagonals sum
// https://www.codewars.com/kata/5592fc599a7f40adac0000a8

/*

Create a function that receives a (square) matrix and calculates the sum of both
diagonals (main and secondary)

Matrix = array of n length whose elements are n length arrays of integers.

## 3x3 example

```
diagonals( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] );
```

returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} matrix
//  */
// const sum = matrix => {
//   // console.log(matrix.length);
//   let res = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     console.log(i, matrix.length - 1 - i);
//     console.log(matrix[i][i], matrix[i][matrix.length - 1 - i]);
//     res += matrix[i][i] + matrix[i][matrix.length - 1 - i];
//   }
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} matrix
 */
const sum = matrix =>
  matrix.reduce(
    (sum, row, idx) => sum + row[idx] + row[matrix.length - 1 - idx],
    0,
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(
  sum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  1 + 5 + 9 + 3 + 5 + 7,
);

/*

[0, 1]
[0, 2]
[1, 1]
[2, 0]
[2, 2]

*/

strictEqual(
  sum([
    [1, 2],
    [3, 4],
  ]),
  1 + 4 + 2 + 3,
);

strictEqual(
  sum([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]),
  1 + 6 + 11 + 16 + 4 + 7 + 10 + 13,
);

strictEqual(
  sum([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]),
  1 + 7 + 13 + 19 + 25 + 5 + 9 + 13 + 17 + 21,
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

|  0 |  1 |  2 |  3 |
|  4 |  5 |  6 |  7 |
|  8 |  9 | 10 | 11 |
| 12 | 13 | 14 | 15 |

[0, 0]
[0, 3]
[1, 1]
[1, 2]
[2, 1]
[2, 2]
[3, 0]
[3, 3]

|  0 |  1 |  2 |  3 |  4 |
|  5 |  6 |  7 |  8 |  9 |
| 10 | 11 | 12 | 13 | 14 |
| 15 | 16 | 17 | 18 | 19 |
| 20 | 21 | 22 | 23 | 24 |

[0, 0]
[0, 4]
[1, 1]
[1, 3]
[2, 2]
[3, 1]
[3, 3]
[4, 0]
[4, 4]

*/
