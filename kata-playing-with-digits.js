// 6 kyu | Playing with digits
// https://www.codewars.com/kata/playing-with-digits

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const digPow = (n, p) => {
//   let leftover = n;
//   let powerSum = 0;
//   while (0 < leftover) {
//     powerSum += (leftover % 10) ** p++;
//     console.log(powerSum);
//     leftover = Math.trunc(leftover / 10);
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const digPow = (n, p) => {
  const digits = [];
  let leftover = n;
  while (0 < leftover) {
    digits.push(leftover % 10);
    leftover = Math.trunc(leftover / 10);
  }
  const powerSum = digits.reverse().reduce((a, c) => a + c ** p++, 0);
  let k = 1;
  do {
    if (n * k === powerSum) return k;
  } while (n * k++ <= powerSum);
  return -1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

const assert = require('assert');

// 89 --> 8¹ + 9² = 89 * 1
assert.strictEqual(digPow(89, 1), 1);

assert.strictEqual(digPow(92, 1), -1);

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
assert.strictEqual(digPow(695, 2), 2);

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
assert.strictEqual(digPow(46288, 3), 51);
