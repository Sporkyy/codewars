// 5 kyu | Primes in numbers
// https://www.codewars.com/kata/primes-in-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const primes = [
//   2,
//   3,
//   5,
//   7,
//   11,
//   13,
//   17,
//   19,
//   23,
//   29,
//   31,
//   37,
//   41,
//   43,
//   47,
//   53,
//   59,
//   61,
//   67,
//   71,
//   73,
//   79,
//   83,
//   89,
//   97,
// ];

// const primeFactors = n => {
//   let result = '';
//   const used = new Array(98).fill(0);
//   while (1 < n) {
//     // for (let i = 0; i < primes.length; i++) {
//     for (let i = 0; i < primes.length; i++) {
//       // console.log(n, i, n / primes[i]);
//       if (0 === n % primes[i]) {
//         n /= primes[i];
//         used[primes[i]]++;
//       }
//     }
//     console.log(n);
//   }
//   console.log(n);
//   // console.log(used);
//   for (let i = 0; i < used.length; i++) {
//     if (0 === used[i]) continue;
//     result += 1 === used[i] ? `(${i})` : `(${i}**${used[i]})`;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const memo = {};

// const isPrime = n => {
//   if (memo[n]) return memo;
//   for (let k = 2; k <= Math.sqrt(n); k++)
//     if (0 === n % k) {
//       memo[n] = false;
//       return false;
//     }
//   memo[n] = true;
//   return true;
// };

// const primeFactors = n => {
//   if (isPrime(n)) return `(${n})`;
//   const used = {};
//   loop: while (1 < n) {
//     // console.log(n);
//     for (let i = 2; i < n * 2; i++) {
//       // console.log(n);
//       // console.log(i);
//       if (1 === n) break loop;
//       if (!isPrime(i) || 0 !== n % i) continue;
//       n /= i;
//       if ('undefined' !== typeof used[i]) used[i]++;
//       else used[i] = 1;
//     }
//   }
//   return Object.entries(used)
//     .map(([f, m]) => (1 === m ? `(${f})` : `(${f}**${m})`))
//     .join('');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const isPrime = n => {
  for (let k = 2; k <= Math.sqrt(n); k++)
    if (0 === n % k) {
      return false;
    }
  return true;
};

const primeFactors = n => {
  if (isPrime(n)) return `(${n})`;
  const used = {};
  while (1 < n) {
    for (let i = 2; i < n * 2; i++) {
      if (!isPrime(i) || 0 !== n % i) continue;
      n /= i;
      if ('undefined' !== typeof used[i]) used[i]++;
      else used[i] = 1;
    }
  }
  return Object.entries(used)
    .map(([f, m]) => (1 === m ? `(${f})` : `(${f}**${m})`))
    .join('');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// 36 = 18 * 2 = 9 * 2 * 2 = 3 * 3 * 2 * 2 = (3**2)(2**2)
// console.log(primeFactors(36));
strictEqual(primeFactors(36), '(2**2)(3**2)');

// console.log(primeFactors(7775460));
strictEqual(primeFactors(7775460), '(2**2)(3**3)(5)(7)(11**2)(17)');

// console.log(primeFactors(7919));
strictEqual(primeFactors(7919), '(7919)');
