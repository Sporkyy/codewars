// 5 kyu | What's a Perfect Power anyway
// https://www.codewars.com/kata/54d4c8b08776e4ad92000835

/*

A perfect power is a classification of positive integers:

In mathematics, a perfect power is a positive integer that can be expressed as
an integer power of another positive integer. More formally, n is a perfect
power if there exist natural numbers m > 1, and k > 1 such that mk = n.

Your task is to check wheter a given integer is a perfect power. If it is a
perfect power, return a pair m and k with mk = n as a proof. Otherwise return
Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 =
9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of
this, so if a number is a perfect power, return any pair that proves it.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// const isPP = n => {
//   let [x, y] = [2, 2];
//   // console.log(x, y);
//   while (x < n && 1 < y && y < n) {
//     console.log(x, y);
//     if (x ** y === n) break;
//     if (x ** y < n) y++;
//     else {
//       y--;
//       x++;
//     }
//   }
//   console.log(x, y);
//   return x ** y === n ? [x, y] : null;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// const isPP = n => {
//   let [x, y] = [2, 2];
//   // console.log(x, y);
//   while (x < n && 1 < y && y < n) {
//     console.log(x, y);
//     if (x ** y === n) break;
//     if (x ** y < n) y++;
//     else {
//       y--;
//       x++;
//     }
//   }
//   console.log(x, y);
//   return x ** y === n ? [x, y] : null;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const isPP = n => {
  for (let x = 2; x <= Math.sqrt(n); x++) {
    for (let y = 2; y <= Math.sqrt(n) + 1; y++) {
      // console.log(x, y);
      if (n === x ** y) return [x, y];
      if (n === y ** x) return [y, x];
    }
  }
  return null;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual, strictEqual, notStrictEqual } from 'assert';

// deepStrictEqual(isPP(4), [2, 2]);

// deepStrictEqual(isPP(9), [3, 2]);

// strictEqual(isPP(5), null);

// notStrictEqual(isPP(4), null);
notStrictEqual(isPP(8), null);
notStrictEqual(isPP(9), null);

/*

| 2 | 3 | 4 | 5 | 6 |
+ - + - + - + - + - +
| x |   |   |   |   |
| y |   |   |   |   |
+ - + - + - + - + - +
|   | x |   |   |   |
| y |   |   |   |   |

*/

notStrictEqual(isPP(16), null);
notStrictEqual(isPP(25), null);
notStrictEqual(isPP(27), null);
notStrictEqual(isPP(32), null);
notStrictEqual(isPP(36), null);
notStrictEqual(isPP(49), null);
notStrictEqual(isPP(64), null);
notStrictEqual(isPP(81), null);
notStrictEqual(isPP(100), null);
notStrictEqual(isPP(121), null);
notStrictEqual(isPP(125), null);
notStrictEqual(isPP(128), null);
notStrictEqual(isPP(144), null);
notStrictEqual(isPP(169), null);
notStrictEqual(isPP(196), null);
notStrictEqual(isPP(216), null);
notStrictEqual(isPP(225), null);
notStrictEqual(isPP(243), null);
notStrictEqual(isPP(256), null);
notStrictEqual(isPP(289), null);
notStrictEqual(isPP(324), null);
notStrictEqual(isPP(343), null);
notStrictEqual(isPP(361), null);
notStrictEqual(isPP(400), null);
notStrictEqual(isPP(441), null);
notStrictEqual(isPP(484), null);

//   Test.it('should work for the first perfect powers', function () {
//     var pp = ,
//       i;
//     for (i = 0; i < pp.length; ++i) {
//       Test.expect(
//         isPP(pp[i]) !== null,
//         'the perfect power ' + pp[i] + " wasn't recognized as one",
//       );
//     }
//   });
//   Test.it('should work for random perfect powers', function () {
//     var k, m, i, r, l;
//     for (i = 0; i < 100; ++i) {
//       (m = (2 + Math.random() * 0xff) | 0),
//         (k = (2 + (Math.random() * Math.log(0x0fffffff)) / Math.log(m)) | 0);
//       l = Math.pow(m, k);
//       r = isPP(l);
//       if (r === null) {
//         Test.expect(r !== null, l + ' is a perfect power');
//         break;
//       } else if (Math.pow(r[0], r[1]) !== l) {
//         Test.assertEquals(
//           Math.pow(r[0], r[1]),
//           l,
//           'your pair (' + r[0] + ', ' + r[1] + ") doesn't work for " + l,
//         );
//         break;
//       }
//     }
//   });
//   Test.it('should return valid pairs for random inputs', function () {
//     var i, r, l;

//     for (i = 0; i < 100; ++i) {
//       l = (Math.random() * 0x0000ffff) | 0;
//       r = isPP(l);
//       if (r !== null && Math.pow(r[0], r[1]) !== l) {
//         Test.assertEquals(
//           Math.pow(r[0], r[1]),
//           l,
//           'your pair (' + r[0] + ', ' + r[1] + ") doesn't work for " + l,
//         );
//         break;
//       }
//     }
//   });
// });
