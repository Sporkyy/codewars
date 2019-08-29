// 6 kyu | Find the integer sequences
// https://www.codewars.com/kata/find-the-integer-sequences/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const findSequences = n => {
//   const result = [];
//   for (let i = 1; i < n; i++) {
//     // console.log(i);
//     for (let j = i, seq = [], sum = 0; sum < n; j++) {
//       // console.log(j);
//       seq.push(j);
//       sum += j;
//       if (n === sum) {
//         result.push(seq);
//         break;
//       }
//     }
//   }
//   // console.log(result);
//   // return result;
//   const sorted = result.sort((a, b) => a.length - b.length);
//   // console.log(sorted);
//   return sorted;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const findSequences = n => {
//   const result = [];
//   for (let i = 1; i < n / 2; i++) {
//     for (let j = i, seq = [], sum = 0; sum <= n; j++) {
//       seq.push(j);
//       sum += j;
//       if (n === sum) {
//         result.unshift(seq);
//         break;
//       }
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const findSequences = n => {
//   const result = [];
//   for (let i = 1, sum = 0, seq = []; i <= (n + 1) / 2; i++) {
//     // console.log(i);
//     sum += i;
//     seq.push(i);
//     // console.log(sum);
//     while (n < sum) sum -= seq.shift();
//     console.log(seq, sum);
//     // if (seq.length < 2) continue;
//     if (1 < seq.length && n === sum) result.unshift([...seq]);
//   }
//   // console.log(result);
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const findSequences = n => {
//   const result = [];
//   for (let i = 2, sum = 1, seq = [1]; i <= (n + 1) / 2; i++) {
//     // console.log(i);
//     sum += i;
//     seq.push(i);
//     // console.log(sum);
//     while (n < sum) sum -= seq.shift();
//     // console.log(seq, sum);
//     if (n === sum) result.unshift([...seq]);
//   }
//   // console.log(result);
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const findSequences = n => {
  const result = [];
  for (let i = 2, sum = 1, seq = [1]; i <= (n + 1) / 2; i++) {
    sum += i;
    seq.push(i);
    while (n < sum) sum -= seq.shift();
    if (n === sum) result.unshift([...seq]);
  }
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.deepStrictEqual(findSequences(1), []);

assert.deepStrictEqual(findSequences(3), [[1, 2]]);

assert.deepStrictEqual(findSequences(15), [[7, 8], [4, 5, 6], [1, 2, 3, 4, 5]]);

assert.deepStrictEqual(findSequences(20), [[2, 3, 4, 5, 6]]);

assert.deepStrictEqual(findSequences(100), [[18, 19, 20, 21, 22], [9, 10, 11, 12, 13, 14, 15, 16]]);

// console.log(findSequences(999));
