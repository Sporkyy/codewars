// 6 kyu | Hollow Triangle
// https://www.codewars.com/kata/hollow-triangle

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  */
// const hollowTriangle = n => {
//   const t = new Array(n).fill().map(() => new Array(n * 2 - 1).fill('_'));
//   t[0][n - 1] = '#'; // First row
//   for (let i = 1, l = n - 2, r = n; i < n - 1; i++, l--, r++)
//     [t[i][l], t[i][r]] = ['#', '#']; // Middle rows
//   t[n - 1].fill('#'); // Last row
//   return t.map(r => r.join(''));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 */
const hollowTriangle = n => {
  const t = new Array(n).fill().map(() => new Array(n * 2 - 1).fill('_'));
  t[0][n - 1] = '#'; // First row
  for (let i = 1; i < n - 1; i++)
    [t[i][n - 1 - i], t[i][n - 1 + i]] = ['#', '#']; // Middle rows
  t[n - 1].fill('#'); // Last row
  return t.map(r => r.join(''));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(hollowTriangle(1), ['#']);

deepStrictEqual(hollowTriangle(2), ['_#_', '###']);

deepStrictEqual(hollowTriangle(3), ['__#__', '_#_#_', '#####']);

deepStrictEqual(hollowTriangle(4), [
  '___#___',
  '__#_#__',
  '_#___#_',
  '#######',
]);

deepStrictEqual(hollowTriangle(6), [
  '_____#_____',
  '____#_#____',
  '___#___#___',
  '__#_____#__',
  '_#_______#_',
  '###########',
]);

/*

1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1

  | 0 |
0 | # |

2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2

  | 0 | 1 | 2 |
0 | _ | # | _ |
1 | # | # | # |

3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3

  | 0 | 1 | 2 | 3 | 4 |
0 | _ | _ | # | _ | _ |
1 | _ | # | _ | # | _ |
2 | # | # | # | # | # |

4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4-4

  | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
0 | _ | _ | _ | # | _ | _ | _ |
1 | _ | _ | # | _ | # | _ | _ |
2 | _ | # | _ | _ | _ | # | _ |
3 | # | # | # | # | # | # | # |

5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5-5

  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
0 | _ | _ | _ | _ | # | _ | _ | _ | _ |
1 | _ | _ | _ | # | _ | # | _ | _ | _ |
2 | _ | _ | # | _ | _ | _ | # | _ | _ |
3 | _ | # | _ | _ | _ | _ | _ | # | _ |
4 | # | # | # | # | # | # | # | # | # |

6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6-6

  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
0 | _ | _ | _ | _ | _ | # | _ | _ | _ | _ |  _ |
1 | _ | _ | _ | _ | # | _ | # | _ | _ | _ |  _ |
2 | _ | _ | _ | # | _ | _ | _ | # | _ | _ |  _ |
3 | _ | _ | # | _ | _ | _ | _ | _ | # | _ |  _ |
4 | _ | # | _ | _ | _ | _ | _ | _ | _ | # |  _ |
5 | # | # | # | # | # | # | # | # | # | # |  # |

*/