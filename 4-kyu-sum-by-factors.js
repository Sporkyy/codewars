// 4 kyu | Sum by Factors
// https://www.codewars.com/kata/sum-by-factors

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const memoIsPrime = new Map();

const isPrime = n => {
  if (memoIsPrime.has(n)) return memoIsPrime.get(n);
  let result = 1 < n;
  for (let i = 2; i <= Math.sqrt(n); i++) if (0 === n % i) result = false;
  memoIsPrime.set(n, result);
  return result;
};

const memoPrimeFactors = new Map();

const primeFactors = n => {
  n = Math.abs(n);
  if (isPrime(n)) return [n];
  if (memoPrimeFactors.has(n)) return memoPrimeFactors.get(n);
  const pf = [];
  for (let i = 2; i < n; i++) if (0 === n % i && isPrime(i)) pf.push(i);
  memoPrimeFactors.set(n, pf);
  return pf;
};

const sumOfDivided = lst => {
  lst = lst.map(n => [n, primeFactors(n)]);
  const apf = new Set();
  for (const [_n, fs] of lst) for (const f of fs) apf.add(f);
  const result = [];
  for (const f of apf.values()) {
    let sum = 0;
    for (const [n, fs] of lst) if (fs.includes(f)) sum += n;
    result.push([f, sum]);
  }
  result.sort((a, b) => a[0] - b[0]);
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

// sumOfDivided([12, 15]);

deepStrictEqual(sumOfDivided([12, 15]), [[2, 12], [3, 27], [5, 15]]);

deepStrictEqual(sumOfDivided([15, 21, 24, 30, 45]), [
  [2, 54],
  [3, 135],
  [5, 90],
  [7, 21],
]);

// sumOfDivided([15, 30, -45]);

deepStrictEqual(sumOfDivided([15, 21, 24, 30, -45]), [
  [2, 54],
  [3, 45],
  [5, 0],
  [7, 21],
]);

// sumOfDivided([107, 158, 204, 100, 118, 123, 126, 110, 116, 100]);

deepStrictEqual(
  sumOfDivided([107, 158, 204, 100, 118, 123, 126, 110, 116, 100]),
  [
    [2, 1032],
    [3, 453],
    [5, 310],
    [7, 126],
    [11, 110],
    [17, 204],
    [29, 116],
    [41, 123],
    [59, 118],
    [79, 158],
    [107, 107],
  ],
);
