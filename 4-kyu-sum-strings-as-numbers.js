// 4 kyu | Sum Strings as Numbers
// https://www.codewars.com/kata/sum-strings-as-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const intToDigits = int => {
//   let s = '';
//   while (int) {
//     s = `${int % 10}${s}`;
//     int = Math.trunc(int / 10);
//   }
//   return s;
// };

// console.log(intToDigits(1));
// console.log(intToDigits(20));
// console.log(intToDigits(200));

/**
 * @param {string} a
 * @param {string} b
 */
// const sumStrings = (a, b) =>
//   intToDigits(parseInt(`0${a}`, 10) + parseInt(`0${b}`, 10));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} a
 * @param {string} b
 */
const sumStrings = (a, b) => {
  if (a.length < b.length) return sumStrings(b, a);
  b = b.padStart(a.length, '0');
  let [result, carry] = ['', 0];
  for (let i = a.length - 1; 0 <= i; i--) {
    const sum = carry + parseInt(a[i]) + parseInt(b[i]);
    [result, carry] = [`${sum % 10}${result}`, Math.trunc(sum / 10)];
  }
  return `${carry}${result}`.replace(/^0+/, '');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(sumStrings('99', '99'), '198');

strictEqual(sumStrings('123', '456789'), '456912');

strictEqual(sumStrings('', '5'), '5');

strictEqual(sumStrings('00103', '08567'), '8670');

strictEqual(
  sumStrings('712569312664357328695151392', '8100824045303269669937'),
  '712577413488402631964821329',
);

strictEqual(
  sumStrings('50095301248058391139327916261', '81055900096023504197206408605'),
  '131151201344081895336534324866',
);
