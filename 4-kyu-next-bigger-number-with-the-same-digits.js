// 4 kyu | Next bigger number with the same digits
// https://www.codewars.com/kata/next-bigger-number-with-the-same-digits

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 */
// const nextBigger = n => {
//   const digits = [...n.toString()];
//   for (let i = digits.length - 2; 0 <= i; i--) {
//     if (digits[i] < digits[i + 1]) {
//       [digits[i + 1], digits[i]] = [digits[i], digits[i + 1]];
//       break;
//     }
//     if (0 === i) return -1;
//   }
//   return parseInt(digits.join(''));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 */
// const nextBigger = n => {
//   const digits = [...n.toString()].map(n => parseInt(n));
//   for (let i = digits.length - 1; 0 <= i; i--) {
//     if (0 === digits[i] && digits.length - 1 === i) {
//       [digits[i - 2], digits[i - 1], digits[i]] = [
//         digits[i - 1],
//         digits[i],
//         digits[i - 2],
//       ];
//       break;
//     } else if (digits[i] < digits[i + 1]) {
//       [digits[i + 1], digits[i]] = [digits[i], digits[i + 1]];
//       break;
//     }
//     if (0 === i) return -1;
//   }
//   const remixedN = parseInt(digits.join(''));
//   return n < remixedN ? remixedN : -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 */
// const nextBigger = n => {
//   const digits = [...n.toString()].map(n => parseInt(n));
//   // const cnts = new Array(10).fill(0);
//   // for (digit of digits) cnts[digit]++;
//   // console.log(cnts);
//   seen = {};
//   for (let i = digits.length - 1; 0 <= i; i--) {
//     // console.log(digits[i]);
//     for (let j = digits[i]; j < 10; j++) {
//       if (seen[j]) {
//         // console.log(j, seen[j]);
//         [digits[i], digits[seen[j]]] = [digits[seen[j]], digits[i]];
//         break;
//       }
//     }
//     if (!seen[digits[i]]) seen[digits[i]] = i;
//   }
//   // console.log(digits);
//   return parseInt(digits.join(''));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {array} xs
 */
// const permutations = xs =>
//   xs.length
//     ? concatMap(function(x) {
//         return concatMap(function(ys) {
//           return [[x].concat(ys)];
//         }, permutations(delete_(x, xs)));
//       }, xs)
//     : [[]];

// concatMap :: (a -> [b]) -> [a] -> [b]
// const concatMap = (f, xs) => [].concat.apply([], xs.map(f));

// delete :: Eq a => a -> [a] -> [a]
// const delete_ = (x, xs) =>
//   deleteBy(
//     function(a, b) {
//       return a === b;
//     },
//     x,
//     xs,
//   );

// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
// const deleteBy = (f, x, xs) =>
//   xs.length > 0
//     ? f(x, xs[0])
//       ? xs.slice(1)
//       : [xs[0]].concat(deleteBy(f, x, xs.slice(1)))
//     : [];

/**
 * @param {number} n
 */
// const nextBigger = n => {
//   const digits = [...n.toString()].map(n => parseInt(n));
//   // console.log(permutations(digits));
//   const result = permutations(digits)
//     .map(a => parseInt(a.join('')))
//     .filter(p => n < p)
//     .sort((a, b) => a - b)[0];
//   // console.log(result);
//   return result ? result : -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 */
// const nextBigger = n => {
//   const digits = [...n.toString()].map(n => parseInt(n));
//   for (let i = digits.length - 1, ffwd = true; 0 < i; i--) {
//     if (ffwd && 0 === digits[i]) continue;
//     else ffwd = false;
//     console.log(i);
//     [digits[i - 1], digits[i]] = [digits[i], digits[i - 1]];
//     console.log(digits);
//     const tmp = parseInt(digits.join(''));
//     console.log(tmp);
//     if (n < tmp) return tmp;
//   }
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 */
// const nextBigger = n => {
//   const digits = [...n.toString()].map(n => parseInt(n));
//   for (let i = digits.length - 1; 0 <= i; i--) {
//     for (let j = i + 1; j < digits.length; j++) {
//       if (digits[i] < digits[j]) {
//         [digits[i], digits[j]] = [digits[j], digits[i]];
//         // console.log(digits);
//         const firstHalf = digits.slice(0, i + 1);
//         // console.log(firstHalf);
//         const lastHalf = digits.slice(j, digits.length).sort((a, b) => a - b);
//         // console.log(lastHalf);
//         // console.log(firstHalf.concat(lastHalf));
//         return parseInt(firstHalf.concat(lastHalf).join(''));
//       }
//     }
//   }
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 */
// const nextBigger = n => {
//   const digits = [...n.toString()].map(n => parseInt(n));
//   for (let i = digits.length - 1; 0 <= i; i--) {
//     let swapPosition;
//     for (let j = i + 1, smallestLargest; j < digits.length; j++) {
//       if (
//         digits[i] < digits[j] &&
//         (!smallestLargest || digits[j] < smallestLargest)
//       ) {
//         swapPosition = j;
//         smallestLargest = digits[j];
//       }
//     }
//     if ('undefined' === typeof swapPosition) continue;
//     [digits[i], digits[swapPosition]] = [digits[swapPosition], digits[i]];
//     const firstHalf = digits.slice(0, i + 1);
//     const lastHalf = digits.slice(i + 1, digits.length).sort((a, b) => a - b);
//     return parseInt(firstHalf.concat(lastHalf).join(''));
//   }
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 */
const nextBigger = n => {
  const digits = [...n.toString()].map(n => parseInt(n));
  for (let i = digits.length - 1; 0 <= i; i--) {
    let swapPosition;
    for (let j = i + 1; j < digits.length; j++) {
      if (
        digits[i] < digits[j] &&
        ('undefined' === typeof swapPosition ||
          digits[j] < digits[swapPosition])
      ) {
        swapPosition = j;
      }
    }
    if ('undefined' === typeof swapPosition) continue;
    [digits[i], digits[swapPosition]] = [digits[swapPosition], digits[i]];
    const firstHalf = digits.slice(0, i + 1);
    const lastHalf = digits.slice(i + 1, digits.length).sort((a, b) => a - b);
    return parseInt(firstHalf.concat(lastHalf).join(''));
  }
  return -1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// console.log(nextBigger(12), 21);
strictEqual(nextBigger(12), 21);

// console.log(nextBigger(513));
strictEqual(nextBigger(513), 531);

// console.log(nextBigger(2017));
strictEqual(nextBigger(2017), 2071);

strictEqual(nextBigger(414), 441);

strictEqual(nextBigger(144), 414);

strictEqual(nextBigger(210), -1);

strictEqual(nextBigger(201), 210);

strictEqual(nextBigger(102), 120);

strictEqual(nextBigger(120), 201);

strictEqual(nextBigger(1201), 1210);

strictEqual(nextBigger(890), 908);

strictEqual(nextBigger(20), -1);

strictEqual(nextBigger(200), -1);

strictEqual(nextBigger(374), 437);

strictEqual(nextBigger(123456789), 123456798);

strictEqual(nextBigger(1234567890), 1234567908);

strictEqual(nextBigger(9876543210), -1);

strictEqual(nextBigger(9999999999), -1);

strictEqual(nextBigger(59884848459853), 59884848483559);
