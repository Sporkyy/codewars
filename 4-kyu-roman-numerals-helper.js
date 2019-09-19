// 4 kyu | Roman Numerals Helper
// https://www.codewars.com/kata/roman-numerals-helper/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class RomanNumerals {
//   /**
//    * Copy + paste from my Leetcode solution
//    *
//    * @static
//    * @param {number} num
//    * @returns {string}
//    * @memberof RomanNumerals
//    */
//   static toRoman(num) {
//     const dict = {
//       ones: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
//       tens: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
//       hundreds: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
//       thousands: ['', 'M', 'MM', 'MMM'],
//     };
//     return (
//       dict['thousands'][Math.trunc(num / 1000)] +
//       dict['hundreds'][Math.trunc((num % 1000) / 100)] +
//       dict['tens'][Math.trunc((num % 100) / 10)] +
//       dict['ones'][num % 10]
//     );
//   }

//   /**
//    * Copy + paste from my Leetcode solution
//    *
//    * @static
//    * @param {string} roman
//    * @returns {number}
//    * @memberof RomanNumerals
//    */
//   static fromRoman(roman) {
//     const dict = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000,
//     };
//     let sum = 0;
//     for (let i = 0; i < roman.length; i++) {
//       const [curr, next] = [dict[roman[i]], dict[roman[i + 1]]];
//       sum += (curr < next ? -1 : 1) * curr;
//     }
//     return sum;
//   }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class RomanNumerals {
  /**
   * @static
   * @param {number} num
   * @returns {string}
   * @memberof RomanNumerals
   */
  static toRoman(num) {
    return (
      'M'.repeat(Math.trunc(num / 1000)) +
      ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'][
        Math.trunc((num % 1000) / 100)
      ] +
      ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'][
        Math.trunc((num % 100) / 10)
      ] +
      ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][num % 10]
    );
  }

  /**
   * @static
   * @param {string} roman
   * @returns {number}
   * @memberof RomanNumerals
   */
  static fromRoman(roman) {
    const dict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    return [...roman].reduce(
      (acc, curr, i, a) =>
        acc + (dict[curr] < dict[a[i + 1]] ? -1 : 1) * dict[curr],
      0,
    );
  }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(RomanNumerals.toRoman(1000), 'M');
assert.strictEqual(RomanNumerals.toRoman(999), 'CMXCIX');
assert.strictEqual(RomanNumerals.toRoman(4), 'IV');
assert.strictEqual(RomanNumerals.toRoman(1), 'I');
assert.strictEqual(RomanNumerals.toRoman(1991), 'MCMXCI');
assert.strictEqual(RomanNumerals.toRoman(2006), 'MMVI');
assert.strictEqual(RomanNumerals.toRoman(2020), 'MMXX');

assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
assert.strictEqual(RomanNumerals.fromRoman('III'), 3);
assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
assert.strictEqual(RomanNumerals.fromRoman('MMVII'), 2007);
assert.strictEqual(RomanNumerals.fromRoman('MDCLXIX'), 1669);
