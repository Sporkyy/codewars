// 4 kyu | Adding Big Numbers
// https://www.codewars.com/kata/adding-big-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} a
//  * @param {string} b
//  * @returns {string}
//  */
// const add = (a, b) => {
//   if (a.length < b.length) return add(b, a);
//   b = b.padStart(a.length, '0');
//   let len = a.length;
//   let carry = 0;
//   let result = '';
//   while (len--) {
//     let sum = carry + parseInt(a[len]) + parseInt(b[len]);
//     result = `${sum % 10}${result}`;
//     carry = Math.trunc(sum / 10);
//   }
//   result = `${carry}${result}`.replace(/^0+/, '');
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
// const add = (a, b) => {
//   if (a.length < b.length) return add(b, a);
//   [a, b] = [
//     [...a].map(n => parseInt(n)).reverse(),
//     [...b].map(n => parseInt(n)).reverse(),
//   ];
//   let result = '';
//   for (let i = 0, carry = 0; i < a.length; i++) {
//     let sum = carry + a[i] + ('undefined' !== typeof b[i] ? b[i] : 0);
//     result = `${sum % 10}${result}`;
//     carry = Math.trunc(sum / 10);
//     if (a.length - 1 === i) result = `${carry}${result}`;
//   }
//   return result.replace(/^0+/, '');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} a
 * @param {string} b
 * @returns {string}
//  */
// const add = (a, b) => {
//   if (a.length < b.length) return add(b, a);
//   b = b.padStart(a.length, '0');
//   [a, b] = [
//     [...a].map(n => parseInt(n)).reverse(),
//     [...b].map(n => parseInt(n)).reverse(),
//   ];
//   let result = [0];
//   for (let i = 0; i < a.length; i++) {
//     const sum = result.pop() + a[i] + b[i];
//     result.push(sum % 10, Math.trunc(sum / 10));
//   }
//   return result
//     .reverse()
//     .join('')
//     .replace(/^0+/, '');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
const add = (a, b) => {
  if (a.length < b.length) return add(b, a);
  b = b.padStart(a.length, '0');
  [a, b] = [[...a].map(Number).reverse(), [...b].map(Number).reverse()];
  let result = [0];
  for (let i = 0; i < a.length; i++) {
    const sum = result.pop() + a[i] + b[i];
    result.push(sum % 10, Math.trunc(sum / 10));
  }
  return result
    .reverse()
    .join('')
    .replace(/^0+/, '');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(add('1', '1'), '2');
assert.strictEqual(add('123', '456'), '579');
assert.strictEqual(add('888', '222'), '1110');
assert.strictEqual(add('1372', '69'), '1441');
assert.strictEqual(add('12', '456'), '468');
assert.strictEqual(add('101', '100'), '201');
assert.strictEqual(
  add('63829983432984289347293874', '90938498237058927340892374089'),
  '91002328220491911630239667963',
);
