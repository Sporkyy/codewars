// 5 kyu | Is my friend cheating?
// https://www.codewars.com/kata/5547cc7dcad755e480000004

/*

- A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
- Within that sequence, he chooses two numbers, a and b.
- He says that the product of a and b should be equal to the sum of all numbers
  in the sequence, excluding a and b.
- Given a number n, could you tell me the numbers he excluded from the sequence?
- The function takes the parameter: n (n is always strictly greater than 0) and
  returns an array or a string (depending on the language) of the form:

```
[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
```

with all `(a, b)` which are the possible removed numbers in the sequence `1 to
n`.

`[(a, b), ...] or [[a, b], ...] or {{a, b}, ...}` or ...will be sorted in
increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty
array (or an empty string) if no possible numbers are found which will prove
that my friend has not told the truth! (Go: in this case return nil).

(See examples of returns for each language in "RUN SAMPLE TESTS")

## Examples

```
removNb(26) should return [(15, 21), (21, 15)]
```

or

```
removNb(26) should return { {15, 21}, {21, 15} }
```

or

```
removeNb(26) should return [[15, 21], [21, 15]]
```

or

```
removNb(26) should return [ {15, 21}, {21, 15} ]
```

or

```
removNb(26) should return "15 21, 21 15"
```

or

in C:

```
removNb(26) should return  {{15, 21}{21, 15}}
```

tested by way of strings.

Function removNb should return a pointer to an allocated array of Pair pointers,
each one also allocated.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Execution Timed Out (12000 ms)

// const removeNb = n => {
//   // console.log(n);
//   let sum = 0;
//   for (let i = 1; i <= n; i++) sum += i;
//   // console.log(sum);
//   const res = [];
//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//       if (i * j === sum - i - j) res.push([i, j], [j, i]);
//     }
//   }
//   // console.log(res);
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Execution Timed Out (12000 ms)

// const removeNb = n => {
//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//       if (i * j === (n * (n + 1)) / 2 - i - j)
//         return [
//           [i, j],
//           [j, i],
//         ];
//     }
//   }
//   return [];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Execution Timed Out (12000 ms)

// const removeNb = n => {
//   const allSum = (n * (n + 1)) / 2;
//   console.log(allSum);
//   for (let i = n / 2; i <= n; i++) {
//     // console.log(i);
//     // if (n < allSum / i) continue;
//     // console.log(i);
//     for (let j = i; j <= n; j++) {
//       if (i * j === allSum - i - j)
//         return [
//           [i, j],
//           [j, i],
//         ];
//     }
//     // console.log((n * (n + 1)) / 2 - have);
//     // console.log(((n * (n + 1)) / 2 - have) / have);
//     // console.log(have * (((n * (n + 1)) / 2 - have) / have));
//     // console.log('-----');
//     // const need = (n * (n + 1)) / 2 - have;
//     // console.log((n * (n + 1)) / 2);
//     // console.log(`${(n * (n + 1)) / 2}-${have}-${need}`);
//     // for (let j = i; j <= n; j++) {
//     //   if (i * j ===  - i - j)
//     //     return [
//     //       [i, j],
//     //       [j, i],
//     //     ];
//     // }
//   }
//   return [];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Execution Timed Out (12000 ms)

// const removeNb = n => {
//   for (let i = n / 2; i <= n; i++)
//     for (let j = i; j <= n / i; j++)
//       if (i * j === (n * (n + 1)) / 2 - i - j)
//         return [
//           [i, j],
//           [j, i],
//         ];
//   return [];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// const removeNb = n => {
//   const res = [];
//   const sumAll = (n * (n + 1)) / 2;
//   // console.log(sumAll);
//   for (let x = 1; x <= n; x++) {
//     const y = (sumAll - x) / (x + 1);
//     // console.log(j);
//     if (Number.isInteger(y) && y <= n && x * y === sumAll - x - y) {
//       res.push([x, y]);
//     }
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// const removeNb = n => {
//   const res = [];
//   const sum = (n * (n + 1)) / 2;
//   for (let have = 1; have <= n; have++) {
//     const need = (sum - have) / (have + 1);
//     if (!Number.isInteger(need)) continue;
//     if (n < need) continue;
//     if (have * need !== sum - have - need) continue;
//     res.push([have, need]);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// const removeNb = n => {
//   const res = [];
//   const sum = (n * (n + 1)) / 2;
//   for (let have = 1; have <= n; have++) {
//     const need = (sum - have) / (have + 1);
//     if (!Number.isInteger(need)) continue;
//     if (n < need) continue;
//     res.push([have, need]);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const removeNb = n => {
  const frontwards = [];
  const backwards = [];
  const sum = (n * (n + 1)) / 2;
  for (let have = 1; have <= n; have++) {
    const need = (sum - have) / (have + 1);
    if (need < have) break;
    if (!Number.isInteger(need)) continue;
    if (n < need) continue;
    frontwards.push([have, need]);
    backwards.push([need, have]);
  }
  return [...frontwards, ...backwards.reverse()];
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

deepStrictEqual(removeNb(10), [
  [6, 7],
  [7, 6],
]);

deepStrictEqual(removeNb(26), [
  [15, 21],
  [21, 15],
]);

deepStrictEqual(removeNb(1000003), [
  [550320, 908566],
  [559756, 893250],
  [893250, 559756],
  [908566, 550320],
]);
