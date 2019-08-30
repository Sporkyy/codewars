// 5 kyu | Buddy Pairs
// https://www.codewars.com/kata/buddy-pairs/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const s = n => {
  let sum = 1;
  for (let divisor = 2; divisor < Math.sqrt(n); divisor++) {
    const remainder = n % divisor;
    if (0 !== remainder) continue;
    const quotient = n / divisor;
    if (quotient < divisor) break;
    if (quotient === divisor) sum += quotient;
    else sum += divisor + quotient;
  }
  return sum;
};

const buddy = (start, limit) => {
  do {
    const m = s(start) - 1;
    if (m <= start) continue;
    const n = s(m) - 1;
    if (start === n) return [n, m];
  } while (++start <= limit);
  return 'Nothing';
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log(buddy(47, 49));
// console.log(buddy(10, 50));
// console.log(buddy(23, 4669));
// console.log(buddy(48, 48));

const assert = require('assert');

// 48: 1, 2, 3, 4, 6, 8, 12, 16, 24 -> sum: 76 = 75 + 1
// 75: 1, 3, 5, 15, 25 -> sum: 49 = 48 + 1
assert.deepStrictEqual(buddy(23, 4669), [48, 75]);

assert.deepStrictEqual(buddy(4952, 6539), [5775, 6128]);

// console.log(buddy(1050, 1050));
// console.log(buddy(381, 4318));
assert.deepStrictEqual(buddy(381, 4318), [1050, 1925]);

assert.deepStrictEqual(buddy(2382, 3679), 'Nothing');

assert.deepStrictEqual(buddy(305047, 309143), 'Nothing');
