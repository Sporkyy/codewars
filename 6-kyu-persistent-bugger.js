// 6 kyu | Persistent Bugger.
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

/*

Write a function, persistence, that takes in a positive parameter num and
returns its multiplicative persistence, which is the number of times you must
multiply the digits in num until you reach a single digit.

For example:
```
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                      // and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                       // 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number
``

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// You have passed all of the tests! :)

// const persistence = num => {
//   let i = 0;
//   do {
//     const tmp = [...`${num}`].reduce(
//       (product, multiplier) => product * multiplier,
//       1,
//     );
//     // console.log(tmp);
//     if (num !== tmp) i++;
//     num = tmp;
//   } while (9 < num);
//   return i;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const persistence = num => {
//   if (!Array.isArray(num)) return persistence([num]);
//   if (num[0] < 9) return num.length - 1;
//   return persistence([
//     [...`${num[0]}`].reduce((product, multiplier) => product * multiplier, 1),
//     ...num,
//   ]);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const persistence = num =>
  !Array.isArray(num)
    ? persistence([num])
    : num[0] < 9
    ? num.length - 1
    : persistence([
        [...`${num[0]}`].reduce(
          (product, multiplier) => product * multiplier,
          1,
        ),
        ...num,
      ]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(persistence(39), 3);
strictEqual(persistence(4), 0);
strictEqual(persistence(25), 2);
strictEqual(persistence(999), 4);
