// 6 kyu | Possibilities of throwing a coin n times
// https://www.codewars.com/kata/possibilities-of-throwing-a-coin-n-times/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  * @returns {string[]}
//  */
// const coin = n => {
//   const res = [];
//   /**
//    * @param {number} [heads=n]
//    * @param {number} [tails=0]
//    * @param {string} [s='']
//    */
//   const flip = (heads = n, tails = 0, s = '') => {
//     console.log(s);
//     if (0 < heads) flip(heads - 1, tails + 1, `${s}H`);
//     if (0 < tails) flip(heads, tails - 1, `${s}T`);
//     if (n === heads + tails) res.push(s);
//   };
//   // flip(n / 2, n / 2);
//   // flip(n, 0);
//   flip();
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 * @returns {string[]}
 */
const coin = n => {
  const res = [];
  /**
   * @param {number} [heads=0]
   * @param {number} [tails=0]
   * @param {string} [s='']
   */
  const flip = (heads = 0, tails = 0, s = '') => {
    if (heads < n) flip(heads + 1, tails, `${s}H`);
    if (tails < n) flip(heads, tails + 1, `${s}T`);
    if (n === heads + tails) res.push(s);
  };
  flip();
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.time();
coin(1);
coin(2);
coin(3);
coin(4);
coin(5);
coin(6);
coin(7);
coin(8);
coin(9);
coin(10);
coin(11);
coin(12);
// coin(13);
console.timeEnd();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// import { deepStrictEqual } from 'assert';

// deepStrictEqual(coin(1), ['H', 'T']);

// deepStrictEqual(coin(2), ['HH', 'HT', 'TH', 'TT']);

// deepStrictEqual(coin(3), [
//   'HHH',
//   'HHT',
//   'HTH',
//   'HTT',
//   'THH',
//   'THT',
//   'TTH',
//   'TTT',
// ]);
