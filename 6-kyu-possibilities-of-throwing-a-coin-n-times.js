// 6 kyu | Possibilities of throwing a coin n times
// https://www.codewars.com/kata/possibilities-of-throwing-a-coin-n-times/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  * @returns
//  */
// const coin = n => {
//   const res = [];
//   /**
//    * @param {number} [heads=n]
//    * @param {number} [tails=0]
//    * @param {string} [str='']
//    */
//   const flip = (heads = 1, tails = 0, str = '') => {
//     console.log(heads);
//     if (str.length < n) flip(heads - 1, tails + 1, `${str}H`);
//     if (str.length < n) flip(heads, tails - 1, `${str}T`);
//     if (str.length === n) res.push(str);
//   };
//   flip();
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 * @returns {string[]}
 */
const coin = n => {
  if (n < 1) return [];
  const res = [];
  /**
   * @param {string} [str='']
   */
  const flip = (str = '') => {
    if (str.length === n) {
      res.push(str);
    } else {
      flip(`${str}H`);
      flip(`${str}T`);
    }
  };
  flip();
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.time();

// console.log(coin(1));
// console.log(coin(2));
// console.log(coin(3));
// console.log(coin(4));
// console.log(coin(5));
// console.log(coin(6));
// console.log(coin(7));
// console.log(coin(8));
// console.log(coin(9));
// console.log(coin(10));
// console.log(coin(11));
// console.log(coin(12));
// console.log(coin(13));

// console.timeEnd();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(coin(0), []);

deepStrictEqual(coin(1), ['H', 'T']);

deepStrictEqual(coin(2), ['HH', 'HT', 'TH', 'TT']);

deepStrictEqual(coin(3), [
  'HHH',
  'HHT',
  'HTH',
  'HTT',
  'THH',
  'THT',
  'TTH',
  'TTT',
]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
