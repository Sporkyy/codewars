// 4 kyu | Product-Sum Numbers
// https://www.codewars.com/kata/product-sum-numbers/

/*

A product-sum number is a natural number N which can be expressed as both
the product and the sum of the same set of numbers.

N = a1 × a2 × ... × ak = a1 + a2 + ... + ak

For example, 6 = 1 × 2 × 3 = 1 + 2 + 3.

For a given set of size, k, we shall call the smallest N with this property
a minimal product-sum number. The minimal product-sum numbers for sets of
size, k = 2, 3, 4, 5, and 6 are as follows.

k=2: 4 = 2 × 2 = 2 + 2
k=3: 6 = 1 × 2 × 3 = 1 + 2 + 3
k=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4
k=5: 8 = 1 × 1 × 2 × 2 × 2 = 1 + 1 + 2 + 2 + 2
k=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
Hence for 2 ≤ k ≤ 6, the sum of all the minimal product-sum numbers is
4+6+8+12 = 30; note that 8 is only counted once in the sum.

Your task is to write an algorithm to compute the sum of all minimal
product-sum numbers where 2 ≤ k ≤ n.

Courtesy of ProjectEuler.net

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const memo = new Map();
// For sums, if necessary
// const memo2 = new Map();

const memo2 = new Map();

const factor = n => {
  if (memo.has(n)) return memo.get(n);
  let factors = [];
  for (let i = 1; i <= n / 2; i++)
    for (let j = n; i <= j; j--)
      if (i * j === n) {
        factors.push([i, j]);
        let iFactors = [];
        if (i !== n) iFactors = factor(i);
        if (0 < iFactors.length) for (a of iFactors) factors.push([j, ...a]);
        let jFactors = [];
        if (j !== n) jFactors = factor(j);
        if (0 < jFactors.length) for (a of jFactors) factors.push([i, ...a]);
      }
  const uniq = new Map();
  for (let set of factors) {
    const sorted = set.sort((a, b) => a - b);
    const serialized = JSON.stringify(sorted);
    if (!uniq.has(serialized)) uniq.set(serialized, sorted);
  }
  factors = Array.from(uniq.values());
  memo.set(n, factors);
  return factors;
};

// console.log(factor(6));
// console.log(memo);

let lastRun;

/**
 * @param {number} k
 * @returns {boolean}
 */
const productSum = k => {
  if (memo2.has(k)) return memo2.get(k);
  let result = [];
  theloop: for (i = 2; i <= k; i++) {
    // console.log(i);
    for (j = 2; j <= 99999; j++) {
      // console.log(j);
      const testFactors = factor(j).filter(a => a.length <= i);
      // console.log(testFactors);
      for (let set of testFactors) {
        // console.log(set);
        const sum = set.reduce((acc, curr) => acc + curr);
        // console.log(sum);
        if (j === sum + i - set.length) {
          // console.log(set);
          // console.log(j);
          result.push(j);
          memo2.set(
            i,
            Array.from(new Set(result)).reduce((acc, curr) => acc + curr),
          );
          continue theloop;
        }
      }
    }
  }

  // console.log(result);
  return memo2.get(k);
};

productSum(999);
// console.log(memo2);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(productSum(2), 4);

assert.strictEqual(productSum(3), 10);

assert.strictEqual(productSum(6), 30);

assert.strictEqual(productSum(12), 61);

// More tests from https://oeis.org/A104173/list

assert.strictEqual(productSum(20), 151);

assert.strictEqual(productSum(71), 1135);

console.log(productSum(997));
console.log(productSum(998));
console.log(productSum(999));

assert.strictEqual(productSum(71), 1135);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

k=2: 4 = 2 × 2
     4 = 2 + 2

k=3: 6 = 1 × 2 × 3
     6 = 1 + 2 + 3

k=4: 8 = 1 × 1 × 2 × 4
     8 = 1 + 1 + 2 + 4

k=5: 8 = 1 × 1 × 2 × 2 × 2
     8 = 1 + 1 + 2 + 2 + 2

k=6: 12 = 1 × 1 × 1 × 1 × 2 × 6
     12 = 1 + 1 + 1 + 1 + 2 + 6

k=7: 12 = 1 × 1 × 1 × 1 × 1 × 3 × 4
     12 = 1 + 1 + 1 + 1 + 1 + 3 + 4

k=8: 12 = 1 × 1 × 1 × 1 × 1 × 3 × 2 × 2
     12 = 1 + 1 + 1 + 1 + 1 + 3 + 2 + 2

k=9: 15 = 1 × 1 × 1 × 1 × 1 × 1 × 1 × 3 × 5
     15 = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 3 + 5

k=10: 16 = 1 × 1 × 1 × 1 × 1 × 1 × 1 × 1 × 4 × 4
      16 = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4 + 4

k=11: 16 = 1 × 1 × 1 × 1 × 1 × 1 × 1 × 1 × 2 × 2 × 4
      16 = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 2 + 4

*/
