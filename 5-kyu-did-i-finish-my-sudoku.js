// 5 kyu | Did I Finish my Sudoku?
// https://www.codewars.com/kata/did-i-finish-my-sudoku/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {Number[][]} board
 * @returns {String}
 */
const doneOrNot = board => {
  const [cols, rows, regions] = [new Array(9), new Array(9), new Array(9)];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      cols[i] ^= board[j][i];
      rows[i] ^= board[i][j];
      regions[Math.trunc(i / 3) * 3 + Math.trunc(j / 3)] ^= board[i][j];
    }
  }
  return [...cols, ...rows, ...regions].every(xored => 1 === xored)
    ? 'Finished!'
    : 'Try again!';
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ]),
  'Finished!',
);

deepStrictEqual(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ]),
  'Try again!',
);

deepStrictEqual(
  doneOrNot([
    [1, 3, 2, 5, 7, 9, 4, 6, 8],
    [4, 9, 8, 2, 6, 1, 3, 7, 5],
    [7, 5, 6, 3, 8, 4, 2, 1, 9],
    [6, 4, 3, 1, 5, 8, 7, 9, 2],
    [5, 2, 1, 7, 9, 3, 8, 4, 6],
    [9, 8, 7, 4, 2, 6, 5, 3, 1],
    [2, 1, 4, 9, 3, 5, 6, 8, 7],
    [3, 6, 5, 8, 1, 7, 9, 2, 4],
    [8, 7, 9, 6, 4, 2, 1, 5, 3],
  ]),
  'Finished!',
);

// Column repeat
deepStrictEqual(
  doneOrNot([
    [1, 3, 2, 5, 7, 9, 4, 6, 8],
    [4, 9, 8, 2, 6, 1, 3, 7, 5],
    [7, 5, 6, 3, 8, 4, 2, 1, 9],
    [6, 4, 3, 1, 5, 8, 7, 9, 2],
    [5, 2, 1, 7, 9, 3, 8, 4, 6],
    [9, 8, 7, 4, 2, 6, 5, 3, 1],
    [2, 1, 4, 9, 3, 5, 6, 8, 7],
    [3, 6, 5, 8, 1, 7, 9, 2, 4],
    [8, 7, 9, 6, 4, 2, 1, 3, 5],
  ]),
  'Try again!',
);

// Row repeat
deepStrictEqual(
  doneOrNot([
    [8, 5, 9, 2, 6, 1, 7, 4, 5],
    [6, 7, 1, 9, 4, 3, 8, 2, 3],
    [4, 3, 2, 7, 8, 5, 6, 9, 1],
    [9, 1, 4, 8, 3, 6, 5, 7, 2],
    [7, 6, 8, 5, 9, 2, 3, 1, 4],
    [5, 2, 3, 1, 7, 4, 9, 8, 6],
    [2, 8, 6, 3, 1, 7, 4, 5, 9],
    [3, 9, 5, 4, 2, 8, 1, 6, 7],
    [1, 4, 7, 6, 5, 9, 2, 3, 8],
  ]),
  'Try again!',
);

deepStrictEqual(
  doneOrNot([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ]),
  'Try again!',
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

Right
+---+---+---++---+---+---++---+---+---+
| 5 | 3 | 4 || 6 | 7 | 8 || 9 | 1 | 2 |
+---+---+---++---+---+---++---+---+---+
| 6 | 7 | 2 || 1 | 9 | 5 || 3 | 4 | 8 |
+---+---+---++---+---+---++---+---+---+
| 1 | 9 | 8 || 3 | 4 | 2 || 5 | 6 | 7 |
+---+---+---++---+---+---++---+---+---+
+---+---+---++---+---+---++---+---+---+
| 8 | 5 | 9 || 7 | 6 | 1 || 4 | 2 | 3 |
+---+---+---++---+---+---++---+---+---+
| 4 | 2 | 6 || 8 | 5 | 3 || 7 | 9 | 1 |
+---+---+---++---+---+---++---+---+---+
| 7 | 1 | 3 || 9 | 2 | 4 || 8 | 5 | 6 |
+---+---+---++---+---+---++---+---+---+
+---+---+---++---+---+---++---+---+---+
| 9 | 6 | 1 || 5 | 3 | 7 || 2 | 8 | 4 |
+---+---+---++---+---+---++---+---+---+
| 2 | 8 | 7 || 4 | 1 | 9 || 6 | 3 | 5 |
+---+---+---++---+---+---++---+---+---+
| 3 | 4 | 5 || 2 | 8 | 6 || 1 | 7 | 9 |
+---+---+---++---+---+---++---+---+---+

Wrong
+---+---+---++---+---+---++---+---+---+
| 5 | 3 | 4 || 6 | 7 | 8 || 9 | 1 | 2 |
+---+---+---++---+---+---++---+---+---+
| 6 | 7 | 2 || 1 | 9 | 5 || 3 | 4 | 8 |
+---+---+---++---+---+---++---+---+---+
| 1 | 9 | 8 || 3 | 4 | 2 || 5 | 6 | 7 |
+---+---+---++---+---+---++---+---+---+
+---+---+---++---+---+---++---+---+---+
| 8 | 5 | 9 || 7 | 6 | 1 || 4 | 2 | 3 |
+---+---+---++---+---+---++---+---+---+
| 4 | 2 | 6 || 8 | 5 | 3 || 7 | 9 | 1 |
+---+---+---++---+---+---++---+---+---+
| 7 | 1 | 3 || 9 | 2 | 4 || 8 | 5 | 6 |
+---+---+---++---+---+---++---+---+---+
+---+---+---++---+---+---++---+---+---+
| 9 | 6 | 1 || 5 | 3 | 7 || 2 | 8 | 4 |
+---+---+---++---+---+---++---+---+---+
| 2 | 8 | 7 || 4 | 1 | 9 || 6 | 3 | 5 |
+---+---+---++---+---+---++---+---+---+
| 3 | 4 | 5 || 2 | 8 | 6 || 1 | 7 | 9 |
+---+---+---++---+---+---++---+---+---+

Wrong
      0   1   2    3   4   5    6   7   8
      0   1   2    0   1   2    0   1   2
    +---+---+---++---+---+---++---+---+---+
0 0 | 1 | 3 | 2 || 5 | 7 | 9 || 4 | 6 | 8 | 0 0
    +---+---+---++---+---+---++---+---+---+
1 1 | 4 | 9 | 8 || 2 | 6 | 1 || 3 | 7 | 5 | 1 1
    +---+---+---++---+---+---++---+---+---+
2 2 | 7 | 5 | 6 || 3 | 8 | 4 || 2 | 1 | 9 | 2 2
    +---+---+---++---+---+---++---+---+---+
    +---+---+---++---+---+---++---+---+---+
3 0 | 6 | 4 | 3 || 1 | 5 | 8 || 7 | 9 | 2 | 0 3
    +---+---+---++---+---+---++---+---+---+
4 1 | 5 | 2 | 1 || 7 | 9 | 3 || 8 | 4 | 6 | 1 4
    +---+---+---++---+---+---++---+---+---+
5 2 | 9 | 8 | 7 || 4 | 2 | 6 || 5 | 3 | 1 | 2 5
    +---+---+---++---+---+---++---+---+---+
    +---+---+---++---+---+---++---+---+---+
6 0 | 2 | 1 | 4 || 9 | 3 | 5 || 6 | 8 | 7 | 0 6
    +---+---+---++---+---+---++---+---+---+
7 1 | 3 | 6 | 5 || 8 | 1 | 7 || 9 | 2 | 4 | 1 7
    +---+---+---++---+---+---++---+---+---+
8 2 | 8 | 7 | 9 || 6 | 4 | 2 || 1 | 3 | 5 | 2 8
    +---+---+---++---+---+---++---+---+---+
      0   1   2    0   1   2    0   1   2
      0   1   2    3   4   5    6   7   8

0 = [0] = [0, 0]
1 = [0] = [0, 1]
2 = [0] = [0, 2]
3 = [0] = [1, 0]
4 = [0] = [1, 1]
5 = [0] = [1, 2]
6 = [0] = [2, 0]
7 = [0] = [2, 1]
8 = [0] = [2, 2]

9 = [1] = [0, 3]
10 = [1] = [0, 4]
11 = [1] = [0, 5]
12 = [1] = [1, 3]
13 = [1] = [1, 4]
14 = [1] = [1, 5]
15 = [1] = [2, 3]
16 = [1] = [2, 4]
17 = [1] = [2, 5]

18 = [2] = [0, 6]
19 = [2] = [0, 7]
20 = [2] = [0, 8]
21 = [2] = [1, 6]
22 = [2] = [1, 7]
23 = [2] = [1, 8]
24 = [2] = [2, 6]
25 = [2] = [2, 7]
26 = [2] = [2, 8]

27 = [3] = [3, 0]
28 = [3] = [3, 1]
29 = [3] = [3, 2]
30 = [3] = [4, 0]
31 = [3] = [4, 1]
32 = [3] = [4, 2]
33 = [3] = [5, 0]
34 = [3] = [5, 1]
35 = [3] = [5, 2]

0, 0, 0, 1, 1, 1, 2, 2, 2,
0, 0, 0, 1, 1, 1, 2, 2, 2,
0, 0, 0, 1, 1, 1, 2, 2, 2,
3, 3, 3, 4, 4, 4, 5, 5, 5,
3, 3, 3, 4, 4, 4, 5, 5, 5,
3, 3, 3, 4, 4, 4, 5, 5, 5,
6, 6, 6, 7, 7, 7, 8, 8, 8,
6, 6, 6, 7, 7, 7, 8, 8, 8,
6, 6, 6, 7, 7, 7, 8, 8, 8,

*/
