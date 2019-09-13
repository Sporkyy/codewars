// 5 kyu | Sum of Pairs
// https://www.codewars.com/kata/sum-of-pairs/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const sum_pairs = (ints, s) => {
  let result = [, Infinity];
  for (let p1 = 0, p2 = 1, comp = s - ints[0]; p1 < ints.length; p2++) {
    if (ints.length < p2) {
      p1++;
      p2 = p1 + 1;
      comp = s - ints[p1];
    }
    // console.log(`p1=${p1} p2=${p2} comp=${comp}`);
    if (ints[p2] === comp && p2 < result[1]) result = [p1, p2];
  }
  // console.log(result);
  return 'undefined' !== typeof result[0]
    ? [ints[result[0]], ints[result[1]]]
    : undefined;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

l1 = [1, 4, 8, 7, 3, 15];
l2 = [1, -2, 3, 0, -6, 1];
l3 = [20, -13, 40];
l4 = [1, 2, 3, 4, 1, 0];
l6 = [4, -2, 3, 3, 4];
l7 = [0, 2, 0];
l8 = [5, 9, 13, -3];

// console.log(sum_pairs(l1, 8));

assert.deepStrictEqual(sum_pairs(l1, 8), [1, 7]);

// console.log(sum_pairs(l2, -6));

assert.deepStrictEqual(sum_pairs(l2, -6), [0, -6]);

assert.deepStrictEqual(sum_pairs(l3, -7), undefined);

assert.deepStrictEqual(sum_pairs(l4, 2), [1, 1]);

assert.deepStrictEqual(sum_pairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);

assert.deepStrictEqual(sum_pairs(l6, 8), [4, 4]);

assert.deepStrictEqual(sum_pairs(l7, 0), [0, 0]);

assert.deepStrictEqual(sum_pairs(l8, 10), [13, -3]);
