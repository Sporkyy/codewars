// 5 kyu | Sum of Pairs
// https://www.codewars.com/kata/sum-of-pairs/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sum_pairs = (ints, s) => {
//   let result = [, Infinity];
//   for (let p1 = 0, p2 = 1, comp = s - ints[0]; p1 < ints.length; p2++) {
//     if (ints.length < p2) {
//       p1++;
//       p2 = p1 + 1;
//       comp = s - ints[p1];
//     }
//     // console.log(`p1=${p1} p2=${p2} comp=${comp}`);
//     if (ints[p2] === comp && p2 < result[1]) result = [p1, p2];
//   }
//   // console.log(result);
//   return 'undefined' !== typeof result[0]
//     ? [ints[result[0]], ints[result[1]]]
//     : undefined;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sum_pairs = (ints, s) => {
//   ints = ints.reverse();
//   let result = [, Infinity];
//   for (let p1 = 0, p2 = 1, comp = s - ints[0]; p1 < ints.length; p2++) {
//     if (ints.length < p2) {
//       p1++;
//       p2 = p1 + 1;
//       comp = s - ints[p1];
//     }
//     // console.log(`p1=${p1} p2=${p2} comp=${comp}`);
//     if (ints[p2] === comp && p2 < result[1]) result = [p1, p2];
//   }
//   // console.log(result);
//   return 'undefined' !== typeof result[0]
//     ? [ints[result[1]], ints[result[0]]]
//     : undefined;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const sum_pairs = (ints, s) => {
  const dict = {};
  let firstP2;
  for (let p1 = 0, p2 = 1, comp = s - ints[0]; p1 < ints.length; p2++) {
    if (firstP2 && firstP2 < p2) p2 = Infinity;
    if (ints.length < p2) {
      p1++;
      p2 = p1 + 1;
      comp = s - ints[p1];
    }
    if (ints[p2] === comp) {
      if (!firstP2) firstP2 = p2;
      if ('undefined' === typeof dict[p2 - p1]) {
        dict[p2 - p1] = [ints[p1], ints[p2]];
      }
      p2 = Infinity;
    }
  }
  // console.log(dict);
  if (0 === Object.keys(dict).length) return undefined;
  // console.log(dict[Math.min(...Object.keys(dict).map(s => parseInt(s)))]);
  return dict[Math.min(...Object.keys(dict).map(s => parseInt(s)))];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

// console.log(sum_pairs(l1, 8));

assert.deepStrictEqual(sum_pairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);

// console.log(sum_pairs(l2, -6));

assert.deepStrictEqual(sum_pairs([1, -2, 3, 0, -6, 1], -6), [0, -6]);

assert.deepStrictEqual(sum_pairs([20, -13, 40], -7), undefined);

assert.deepStrictEqual(sum_pairs([1, 2, 3, 4, 1, 0], 2), [1, 1]);

assert.deepStrictEqual(sum_pairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);

assert.deepStrictEqual(sum_pairs([4, -2, 3, 3, 4], 8), [4, 4]);

assert.deepStrictEqual(sum_pairs([0, 2, 0], 0), [0, 0]);

assert.deepStrictEqual(sum_pairs([5, 9, 13, -3], 10), [13, -3]);
