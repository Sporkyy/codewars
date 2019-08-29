// 5 kyu | Buddy Pairs
// https://www.codewars.com/kata/buddy-pairs/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const divisorSum = n => {
//   let result = 0;
//   for (let i = 1; i < n; i++) if (0 === n % i) result += i;
//   return result;
// };

// // console.log(divisorSum(48));
// // console.log(divisorSum(75));

// const buddy = (start, limit) => {
//   for (let i = start; i <= limit; i++) {
//     candidate = divisorSum(i);
//     if (i + 1 === divisorSum(candidate - 1)) return [i, candidate - 1];
//   }
//   return 'Nothing';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const divisors = dividend => {
//   const a = [1];
//   for (let divisor = 2; divisor < dividend / 4; divisor++) {
//     const remainder = dividend % divisor;
//     if (0 === remainder) {
//       const quotient = dividend / divisor;
//       if (quotient < divisor) break;
//       a.push(divisor, quotient);
//     }
//   }
//   return a;
// };

// const divisorsSum = n => divisors(n).reduce((acc, curr) => acc + curr);

// const buddy = (start, limit) => {
//   for (let i = start; i <= limit; i++) {
//     const candidate = divisorsSum(i);
//     if (i < candidate - 1 && i + 1 === divisorsSum(candidate - 1)) {
//       return [i, candidate - 1];
//     }
//   }
//   return 'Nothing';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const buddy = (start, limit) => {
  for (let i = start; i <= limit; i++) {
    // console.log(i);
    let divisorsSum1 = 1;
    for (let j = 2; j < i; j++) {
      const remainder = i % j;
      if (0 === remainder) {
        const quotient = i / j;
        if (quotient < j) break;
        divisorsSum1 += j + quotient;
      }
    }
    divisorsSum1--;
    console.log(divisorsSum1);
    let divisorsSum2 = 1;
    for (let j = 2; j < divisorsSum1; j++) {
      console.log(j);
      const remainder = divisorsSum1 % j;
      // console.log(remainder);
      if (0 === remainder) {
        console.log(j);
        const quotient = i % j;
        // if (quotient < j) break;
        divisorsSum2 += j + quotient;
      }
    }
    console.log(divisorsSum2);
  }
  return 'Nothing';
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(divisors(1));
// console.log(divisorsSum(48));
// console.log(divisorsSum(48));
// console.log(Math.sqrt(48));
// console.log(divisorsSum(75));
// console.log(divisorsSum(75));
// console.log(Math.sqrt(75));

const assert = require('assert');

// console.log(buddy(10, 50));
console.log(buddy(48, 48));

// 48: 1, 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 76 = 75 + 1
// 75: 1, 3, 5, 15, 25 --> sum: 49 = 48 + 1
// assert.deepStrictEqual(buddy(23, 4669), [48, 75]);

// assert.deepStrictEqual(buddy(4952, 6539), [5775, 6128]);

// assert.deepStrictEqual(buddy(381, 4318), [1050, 1925]);

// assert.deepStrictEqual(buddy(2382, 3679), 'Nothing');

// assert.deepStrictEqual(buddy(305047, 309143), 'Nothing');
