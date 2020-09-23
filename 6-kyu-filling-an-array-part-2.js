// 6 kyu | Filling an array (part 2)
// https://www.codewars.com/kata/571e9af407363dbf5700067c

/*

Following on from Part 1, part 2 looks at some more complicated array contents.

So let's try filling an array with...

...square numbers The numbers from 1 to n*n

```
const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
```

...a range of numbers A range of numbers starting from start and increasing by
step

```
const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
```

...random numbers A bunch of random integers between min and max

```
const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]
```

...prime numbers All primes starting from 2 (obviously)...

```
const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]
```

HOTE: All the above functions should take as their first parameter a number that
determines the length of the returned array.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// const squares = n => new Array(n).fill().map((_, i) => (i + 1) ** 2);

// const range = (n, start, step) =>
//   new Array(n).fill().map((_, i) => start + i * step);

// const random = (n, min, max) =>
//   new Array(n)
//     .fill()
//     .map((_, i) => Math.trunc(min + Math.random() * (max - min + 1)));

// const primes = n => {
//   const res = [];
//   const isPrime = n => {
//     for (let k = 2; k <= Math.sqrt(n); k++) if (0 === n % k) return false;
//     return true;
//   };
//   for (let i = 2; res.length < n; i++) {
//     if (!isPrime(i)) continue;
//     res.push(i);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

const squares = n => new Array(n).fill().map((_, i) => (i + 1) ** 2);

const range = (n, start, step) =>
  new Array(n).fill().map((_, i) => start + i * step);

const random = (n, min, max) =>
  new Array(n)
    .fill()
    .map((_, i) => Math.trunc(min + Math.random() * (max - min + 1)));

const primes = n => {
  const res = [];
  outer: for (let i = 2; res.length < n; i++) {
    for (let k = 2; k <= Math.sqrt(i); k++) if (0 === i % k) continue outer;
    res.push(i);
  }
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual, ok, strictEqual } from 'assert';

deepStrictEqual(squares(5), [1, 4, 9, 16, 25]);

deepStrictEqual(range(6, 3, 2), [3, 5, 7, 9, 11, 13]);

const rands = random(4, 5, 10);
console.log(rands);
strictEqual(rands.length, 4);
ok(Math.max.apply(null, rands) <= 10);
ok(5 <= Math.min.apply(null, rands));

deepStrictEqual(primes(6), [2, 3, 5, 7, 11, 13]);
