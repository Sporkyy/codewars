// 5 kyu | Integers: Recreation One
// https://www.codewars.com/kata/integers-recreation-one/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 * @returns {number[]}
 */
const getDivisors = n => {
  n = Math.abs(n);
  const res = [];
  for (let i = n; 0 < i; i--) if (0 === n % i) res.push(i);
  return res;
};

/**
 * @param {number} m
 * @param {number} n
 * @returns {number[][]}
 */
const listSquared = (m, n) => {
  const res = [];
  for (let i = m; i <= n; i++) {
    const divisors = getDivisors(i);
    if (0 === divisors.length) continue;
    const sumOfSquaredDivisors = divisors.reduce((a, c) => a + c ** 2, 0);
    if (0 !== Math.sqrt(sumOfSquaredDivisors) % 1) continue;
    res.push([i, sumOfSquaredDivisors]);
  }
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(factorsOf(42));
// console.log(factorsOf(246));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(listSquared(41, 43), [[42, 2500]]);

deepStrictEqual(listSquared(1, 250), [
  [1, 1],
  [42, 2500],
  [246, 84100],
]);

deepStrictEqual(listSquared(42, 250), [
  [42, 2500],
  [246, 84100],
]);

deepStrictEqual(listSquared(250, 500), [[287, 84100]]);
