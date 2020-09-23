// 7 kyu | Basic Sequence Practice
// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282

/*

A sequence or a series, in mathematics, is a string of objects, like numbers,
that follow a particular pattern. The individual elements in a sequence are
called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the
pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15,
21, 28, ... This sequence is generated with the pattern: "the nth term is the
sum of numbers from 0 to n, inclusive".

```
[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3
```

## Your Task

Complete the function that takes an integer n and returns a list/array of length
abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the
sequence with negative terms.

```
Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
```

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// const sumOfN = n => {
//   const a = [];
//   for (let i = 0; i <= Math.abs(n); i++)
//     0 === i ? a.push(0) : a.push(Math.sign(n) * ((i * (i + 1)) / 2));
//   return a;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// const sumOfN = n => {
//   const a = [0];
//   for (let i = 1; i <= Math.abs(n); i++)
//     a.push(Math.sign(n) * ((i * (i + 1)) / 2));
//   return a;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

const sumOfN = n =>
  new Array(Math.abs(n) + 1)
    .fill()
    .map((_, i) => (!i ? 0 : Math.sign(n) * ((i * (i + 1)) / 2)));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

deepStrictEqual(sumOfN(3), [0, 1, 3, 6]);

deepStrictEqual(sumOfN(-4), [0, -1, -3, -6, -10]);

deepStrictEqual(sumOfN(1), [0, 1]);

deepStrictEqual(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
