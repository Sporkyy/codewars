// 6 kyu | Multiples of 3 or 5
// https://www.codewars.com/kata/multiples-of-3-or-5

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const solution = number =>
//   number < 1
//     ? 0
//     : new Array(number)
//         .fill()
//         .map((_cv, i) => i)
//         .filter(n => 0 === n % 3 || 0 === n % 5)
//         .reduce((acc, curr) => acc + curr, 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const solution = number =>
  number < 1
    ? 0
    : [...new Array(number).keys()]
        .filter(n => 0 === n % 3 || 0 === n % 5)
        .reduce((acc, curr) => acc + curr, 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(solution(-1), 0);
strictEqual(solution(0), 0);
strictEqual(solution(2), 0);
strictEqual(solution(3), 0);
strictEqual(solution(4), 3);
strictEqual(solution(10), 23);
