// 6 kyu | Sum of Digits / Digital Root
// https://www.codewars.com/kata/unique-in-order/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const uniqueInOrder = iterable =>
//   Array.from(iterable).reduce(
//     (acc, curr) => (curr !== acc[acc.length - 1] ? [...acc, curr] : acc),
//     [],
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const uniqueInOrder = iterable => {
//   let tmp;
//   const result = [];
//   for (value of iterable) {
//     if ('undefined' === typeof tmp || tmp !== value) result.push(value);
//     tmp = value;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const uniqueInOrder = iterable => {
  const result = [];
  for (let i = 0; i < iterable.length; i++)
    if (0 === i || iterable[i] !== iterable[i - 1]) result.push(iterable[i]);
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert').strict;

assert.deepStrictEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
assert.deepStrictEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
assert.deepStrictEqual(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
assert.deepStrictEqual(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
