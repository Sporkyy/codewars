// 5 kyu | How Many Numbers? II
// https://www.codewars.com/kata/how-many-numbers-ii/train/javascript

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  */
// const digitSum = n =>
//   [...n.toString()].reduce((acc, curr) => acc + parseInt(curr, 10), 0);

// /**
//  * @param {number[]} a
//  */
// const mean = a => a.reduce((acc, curr) => acc + curr) / a.length;

// /**
//  * @param {number[]} a
//  * @param {number} n
//  * @returns
//  */
// const closest = (a, n) => {
//   let cv = a[0];
//   for (let v of a.slice(1)) {
//     if (
//       Math.abs(Math.abs(v) - Math.abs(n)) < Math.abs(Math.abs(cv) - Math.abs(n))
//     )
//       cv = v;
//   }
//   return cv;
// };

// /**
//  * @param {number} nmax
//  * @param {number} maxsm
//  */
// const maxSumDig = (nmax, maxsm) => {
//   const results = [];
//   for (let i = 1000; i <= nmax; i++) {
//     if (digitSum(i) <= maxsm) results.push(i);
//   }
//   // console.log(results);
//   // console.log(mean(results));
//   return [
//     results.length,
//     closest(results, mean(results)),
//     results.reduce((acc, curr) => acc + curr),
//   ];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} nmax
 * @param {number} maxsm
 */
const maxSumDig = (nmax, maxsm) => {
  const found = [];
  let foundSum = 0;
  loop: for (let i = 1000; i <= nmax; i++) {
    let digits = [];
    let tmp = i;
    while (0 < tmp) {
      digits.push(tmp % 10);
      tmp = Math.trunc(tmp / 10);
    }
    for (let i = 0, sum; i < digits.length - 3; i++) {
      if ('undefined' === typeof sum) {
        sum = digits[i] + digits[i + 1] + digits[i + 2] + digits[i + 3];
      } else {
        sum = sum - digits[i - 1] + digits[i + 3];
      }
      if (maxsm < sum) continue loop;
    }
    found.push(i);
    foundSum += i;
  }
  const mean = foundSum / found.length;
  let closest = found[0];
  for (let i = 1; i < found.length; i++) {
    if (
      Math.abs(Math.abs(found[i]) - Math.abs(mean)) <
      Math.abs(Math.abs(closest) - Math.abs(mean))
    )
      closest = found[i];
  }
  const result = [found.length, closest, foundSum];
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(maxSumDig(2000, 3), [11, 1110, 12555]);

deepStrictEqual(maxSumDig(2000, 4), [21, 1120, 23665]);

deepStrictEqual(maxSumDig(2000, 7), [85, 1200, 99986]);

deepStrictEqual(maxSumDig(3000, 7), [141, 1600, 220756]);

deepStrictEqual(maxSumDig(4000, 4), [35, 2000, 58331]);

console.log(maxSumDig(1009, 2));

console.log(maxSumDig(10010, 3));
