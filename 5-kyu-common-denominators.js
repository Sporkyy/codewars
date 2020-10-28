// 5 kyu | Common Denominators
// https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript

/*

Common denominators

You will have a list of rationals in the form

```
 { {numer_1, denom_1} , ... {numer_n, denom_n} }
```

or

```
 [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
```

or

```
 [ (numer_1, denom_1) , ... (numer_n, denom_n) ]
```


where all numbers are positive ints.

You have to produce a result in the form

```
 (N_1, D) ... (N_n, D)
```

or

```
 [ [N_1, D] ... [N_n, D] ]
```

or

```
 [ (N_1', D) , ... (N_n, D) ]
```

or

```
{{N_1, D} ... {N_n, D}}
```

or

```
"(N_1, D) ... (N_n, D)"
```

depending on the language (See Example tests)

in which D is as small as possible and

```
 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
```

Example:

```
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
```

## Note:

Due to the fact that first translations were written long ago - more than 4
years - these translations have only irreducible fractions. Newer translations
have some reducible fractions. To be on the safe side it is better to do a bit
more work by simplifying fractions even if they don't have to be.

## Note for Bash:

input is a string, e.g `"2,4,2,6,2,8"`

output is then `"6 12 4 12 3 12"`

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Execution Timed Out (12000 ms)

// const convertFrac = lst => {
//   const prod = lst.reduce((acc, [, curr]) => acc * curr, 1);
//   // console.log(prod);
//   const unSimp = lst.map(([num, denom]) => [num * (prod / denom), prod]);
//   // console.log(unSimp);
//   const min = unSimp.reduce((acc, [curr]) => Math.min(acc, curr), Infinity);
//   // console.log(min);
//   let simplifier = 1;
//   outer: for (let i = 1; i < min / 2; i++) {
//     for (const [num, denom] of unSimp)
//       if (!Number.isInteger(num / i) || !Number.isInteger(denom / i))
//         continue outer;
//     simplifier = i;
//   }
//   // console.log(simplifier);
//   return (1 < simplifier
//     ? unSimp.map(([num, denom]) => [num / simplifier, denom / simplifier])
//     : unSimp
//   )
//     .map(([num, denom]) => `(${num},${denom})`)
//     .join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// (90390,170300)(11310,170300)(127725,170300)
// (18078,34060)(2262,34060)(25545,34060)

// (40348,68120)(43680,68120)(51090,68120)
// (20174,34060)(21840,34060)(25545,34060)

const convertFrac = lst => {
  const x = [...lst].reduce(
    (acc, [, curr]) => (Number.isInteger(acc / curr) ? acc : acc * curr),
    1,
  );
  // console.log(x);
  let y = lst.map(([numer, denom]) => [numer * (x / denom), x]);
  // console.log(y);
  let z = [...new Set(y.map(([n]) => n)), x];
  // console.log(z);
  let min = Math.min(...z);
  // console.log(z);
  while (1 < min--) {
    // console.log(min + 1);
    if (z.every(n => Number.isInteger(n / (min + 1)))) {
      // console.log(min + 1);
      y = y.map(([numer, denom]) => [numer / (min + 1), denom / (min + 1)]);
      break;
    }
  }
  // for (const n of z) {
  //   n;
  //   if (z.every(m => Number.isInteger(m / n))) {
  //     console.log(n);
  //     y = y.map(([numer, denom]) => [numer / n, denom / n]);
  //     break;
  //   }
  // }
  // console.log(y);
  return y.map(([numer, denom]) => `(${numer},${denom})`).join('');
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(
  convertFrac([
    [1, 2],
    [1, 3],
    [1, 4],
  ]),
  '(6,12)(4,12)(3,12)',
);

strictEqual(
  convertFrac([
    [90390, 170300],
    [11310, 170300],
    [127725, 170300],
  ]),
  '(18078,34060)(2262,34060)(25545,34060)',
);

strictEqual(
  convertFrac([
    [40348, 68120],
    [43680, 68120],
    [51090, 68120],
  ]),
  '(20174,34060)(21840,34060)(25545,34060)',
);

strictEqual(
  convertFrac([
    [1000, 100000],
    [300, 100000],
    [40, 100000],
    [5, 100000],
  ]),
  '(200,20000)(60,20000)(8,20000)(1,20000)',
);
