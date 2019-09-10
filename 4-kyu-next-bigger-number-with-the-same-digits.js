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
 * @param {array} xs
 */
const permutations = xs =>
  xs.length
    ? concatMap(function(x) {
        return concatMap(function(ys) {
          return [[x].concat(ys)];
        }, permutations(delete_(x, xs)));
      }, xs)
    : [[]];

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) => [].concat.apply([], xs.map(f));

// delete :: Eq a => a -> [a] -> [a]
const delete_ = (x, xs) =>
  deleteBy(
    function(a, b) {
      return a === b;
    },
    x,
    xs,
  );

// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = (f, x, xs) =>
  xs.length > 0
    ? f(x, xs[0])
      ? xs.slice(1)
      : [xs[0]].concat(deleteBy(f, x, xs.slice(1)))
    : [];

/**
 * @param {number} n
 */
const nextBigger = n => {
  const digits = [...n.toString()].map(n => parseInt(n));
  // console.log(permutations(digits));
  const result = permutations(digits)
    .map(a => parseInt(a.join('')))
    .filter(p => n < p)
    .sort((a, b) => a - b)[0];
  // console.log(result);
  return result ? result : -1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(nextBigger(12), 21);
assert.strictEqual(nextBigger(513), 531);
assert.strictEqual(nextBigger(2017), 2071);
assert.strictEqual(nextBigger(414), 441);
assert.strictEqual(nextBigger(144), 414);
assert.strictEqual(nextBigger(210), -1);
assert.strictEqual(nextBigger(201), 210);
assert.strictEqual(nextBigger(102), 120);
assert.strictEqual(nextBigger(120), 201);
assert.strictEqual(nextBigger(1201), 1210);
assert.strictEqual(nextBigger(890), 908);
assert.strictEqual(nextBigger(20), -1);
assert.strictEqual(nextBigger(200), -1);
assert.strictEqual(nextBigger(374), 437);
