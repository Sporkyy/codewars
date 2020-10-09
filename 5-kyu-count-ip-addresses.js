// 5 kyu | Count IP Addresses
// https://www.codewars.com/kata/526989a41034285187000de4

/*

Implement a function that receives two IPv4 addresses, and returns the number of
addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address
will always be greater than the first one.

## Examples

```
ipsBetween("10.0.0.0", "10.0.0.50") ===  50
ipsBetween("10.0.0.0", "10.0.1.0")  === 256
ipsBetween("20.0.0.10", "20.0.1.0") === 246
```

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// const ipsBetween = (start, end) => {
//   // console.log(start, end);
//   // console.log([start, end].map(ip => ip.split('.').map(Number)));
//   const [splitS, splitE] = [start, end].map(ip => ip.split('.').map(Number));
//   // console.log(splitS, splitE);
//   // let tmp = 256;
//   // console.log(
//   //   splitS.map((n, i) => n * 256 ** (3 - i)).reduce((acc, curr) => acc + curr),
//   // );
//   // console.log(
//   //   splitE.map((n, i) => n * 256 ** (3 - i)).reduce((acc, curr) => acc + curr),
//   // );
//   // console.log(
//   //   splitE.map((n, i) => n * 256 ** (3 - i)).reduce((acc, curr) => acc + curr) -
//   //     splitS
//   //       .map((n, i) => n * 256 ** (3 - i))
//   //       .reduce((acc, curr) => acc + curr),
//   // );
//   return (
//     splitE.map((n, i) => n * 256 ** (3 - i)).reduce((acc, curr) => acc + curr) -
//     splitS.map((n, i) => n * 256 ** (3 - i)).reduce((acc, curr) => acc + curr)
//   );
//   // console.log([256 ** 4, 256 ** 3, 256 ** 2, 256 ** 1]);
//   // const difference = splitE.map((n, i) => n - splitS[i]);
//   // console.log(difference);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {string} start
 * @param {string} end
 * @returns {number}
 */
const ipsBetween = (start, end) =>
  [start, end]
    .map(ip =>
      ip
        .split('.')
        .reduce((sum, bits, idx) => sum + Number(bits) * 256 ** (3 - idx), 0),
    )
    .reduce((s, e) => e - s);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(ipsBetween('10.0.0.0', '10.0.0.50'), 50);
strictEqual(ipsBetween('10.0.0.10', '10.0.1.0'), 246);
strictEqual(ipsBetween('20.0.0.10', '20.0.1.0'), 246);
