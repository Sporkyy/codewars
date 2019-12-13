// 5 kyu | Integers: Recreation One
// https://www.codewars.com/kata/integers-recreation-one/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const divisors = n => {
  n = Math.abs(n);
  const factors = [];
  for (let i = n; 0 < i; i--) if (0 === n % i) factors.push(i);
  return factors;
};

const listSquared = (m, n) => {
  const res = [];
  for (let i = m; i <= n; i++) {
    const factors = divisors(i);
    if (0 === factors.length) continue;
    const sumOfSquaredfactors = factors.reduce((a, c) => a + c ** 2, 0);
    if (0 !== Math.sqrt(sumOfSquaredfactors) % 1) continue;
    res.push([i, sumOfSquaredfactors]);
  }
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(factorsOf(42));
// console.log(factorsOf(246));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

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
