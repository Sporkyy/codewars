// 6 kyu | Christmas tree
// https://www.codewars.com/kata/christmas-tree/train/javascript

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} height
 */
// const christmasTree = height =>
//   [...new Array(height).keys()]
//     .map(
//       (_v, i) =>
//         ' '.repeat(height - i - 1) +
//         '*'.repeat(i * 2 + 1) +
//         ' '.repeat(height - i - 1),
//     )
//     .join('\n');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} height
 */
const christmasTree = height =>
  [...new Array(height).keys()]
    .map((_v, i) =>
      '*'
        .repeat(i * 2 + 1)
        .padStart(height + i)
        .padEnd(height * 2 - 1),
    )
    .join('\n');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//   0123456
// 0 aaa*bbb | 4, 7
//   0123456
// 1 aa***bb | 5, 7
//   0123456
// 2 a*****b | 6, 7
//   0123456
// 3 ******* | 7, 7

// const i = 2;
// const height = 3;
// console.log(
//   'a'.repeat(height - i - 1) +
//     '*'.repeat(i * 2 + 1) +
//     'b'.repeat(height - i - 1),
// );

// const i = 3;
// const height = 4;
// console.log(
//   '*'
//     .repeat(i * 2 + 1)
//     .padStart(height + i, 'a')
//     .padEnd(height * 2 - 1, 'b'),
// );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(christmasTree(1), '*');

strictEqual(christmasTree(2), ' * \n***');

strictEqual(christmasTree(3), '  *  \n *** \n*****');

strictEqual(christmasTree(4), '   *   \n  ***  \n ***** \n*******');

strictEqual(
  christmasTree(5),
  '    *    \n   ***   \n  *****  \n ******* \n*********',
);

strictEqual(
  christmasTree(6),
  '     *     \n    ***    \n   *****   \n  *******  \n ********* \n***********',
);

strictEqual(
  christmasTree(7),
  '      *      \n     ***     \n    *****    \n   *******   \n  *********  \n *********** \n*************',
);

strictEqual(
  christmasTree(8),
  '       *       \n      ***      \n     *****     \n    *******    \n   *********   \n  ***********  \n ************* \n***************',
);

strictEqual(
  christmasTree(9),
  '        *        \n       ***       \n      *****      \n     *******     \n    *********    \n   ***********   \n  *************  \n *************** \n*****************',
);

strictEqual(
  christmasTree(10),
  '         *         \n        ***        \n       *****       \n      *******      \n     *********     \n    ***********    \n   *************   \n  ***************  \n ***************** \n*******************',
);
