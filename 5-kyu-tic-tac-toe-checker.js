// 5 kyu | Tic-Tac-Toe Checker
// https://www.codewars.com/kata/525caa5c1bf619d28c000335

/*

If we were to set up a Tic-Tac-Toe game, we would want to know whether the
board's current state is solved, wouldn't we? Our goal is to create a function
that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if
a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

```
[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
```

We want our function to return:

- -1 if the board is not yet finished (there are empty spots),
- 1 if "X" won,
- 2 if "O" won,
- 0 if it's a cat's game (i.e. a draw).

You may assume that the board passed in is valid in the context of a game of
Tic-Tac-Toe.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

const isSolved = board => {
  const lines = new Array(8).fill('');
  let isFinished = true;
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      if (0 === board[i][j]) isFinished = false;
      lines[i] += board[i][j];
      lines[3 + j] += board[i][j];
      if (i === j) lines[6] += board[j][i];
      if (2 === i + j) lines[7] += board[j][i];
    }
  for (const line of lines)
    if ('111' === line) return 1;
    else if ('222' === line) return 2;
  return isFinished ? 0 : -1;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ]),
  -1,
);

/*

    0   1   2
  +---+---+---+
0 | 0 | 0 | 1 |
1 | 0 | 1 | 2 |
2 | 2 | 1 | 0 |
  +---+---+---+

[0, 0], [0, 1], [0, 2]
[1, 0], [1, 1], [1, 2]
[2, 0], [2, 1], [2, 2]

[0, 0], [1, 1], [2, 2]
[0, 2], [1, 1], [2, 0]

*/

strictEqual(
  isSolved([
    [1, 1, 1],
    [0, 2, 2],
    [0, 0, 0],
  ]),
  1,
);
