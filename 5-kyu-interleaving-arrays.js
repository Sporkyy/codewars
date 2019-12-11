// 5 kyu | Interleaving Arrays
// https://www.codewars.com/kata/interleaving-arrays

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {array[]} arrays
 * @returns {any[]}
 */
const interleave = (...arrays) => {
  const max = Math.max(...arrays.map(a => a.length));
  const res = new Array(arrays.length * max).fill(null);
  for (let i = 0, x = 0, y = -1; i < res.length; i++, x++) {
    if (0 === i % arrays.length) [x, y] = [0, y + 1];
    if (y < arrays[x].length) res[i] = arrays[x][y];
  }
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepEqual } from 'assert';

deepEqual(interleave([1, 2, 3], ['c', 'd', 'e']), [1, 'c', 2, 'd', 3, 'e']);

deepEqual(interleave([1, 2, 3], [4, 5]), [1, 4, 2, 5, 3, null]);

deepEqual(interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]), [
  1,
  4,
  7,
  2,
  5,
  8,
  3,
  6,
  9,
]);

deepEqual(interleave([]), []);

// Will not pass this assertion
// deepEqual(interleave(Array(40)), Array(40));

// deepEqual(interleave(Array(40).fill()), Array(40).fill());
// deepEqual(interleave(Array(40)), Array(40).fill());
// deepEqual(interleave(Array(40).fill()), Array(40));

/*

+------+------+------+------+------+------+
|    0 |    1 |    2 |    3 |    4 |    5 |
+------+------+------+------+------+------+
| 0, 0 | 1, 0 | 0, 1 | 1, 1 | 0, 2 | 1, 2 |
+------+------+------+------+------+------+
|    0 |    0 |    0 |    1 |    1 |    1 |
+------+------+------+------+------+------+

*/
