// 4 kyu | Sum Strings as Numbers
// https://www.codewars.com/kata/multiplying-numbers-as-strings/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Copy+paste from my solution for a prior kata
 * 4 kyu | Sum Strings as Numbers
 * https://www.codewars.com/kata/sum-strings-as-numbers/
 *
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

/**
 * @param {string} a
 * @param {string} b
 */
const multiply = (a, b) => {
  if (b.length < a.length) return multiply(b, a);
  const summands = [];
  for (let i = a.length - 1; 0 <= i; i--) {
    let [summand, carry] = ['0'.repeat(a.length - 1 - i), 0];
    for (let j = b.length - 1; 0 <= j; j--) {
      const product = carry + parseInt(a[i]) * parseInt(b[j]);
      [summand, carry] = [
        `${product % 10}${summand}`,
        Math.trunc(product / 10),
      ];
    }
    summand = `${carry}${summand}`;
    summands.push(summand);
  }
  const result = summands.reduce((acc, curr) => sumStrings(acc, curr), '0');
  if (0 === result.length) return '0';
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(multiply('2', '3'), '6');
assert.strictEqual(multiply('69', '30'), '2070');
assert.strictEqual(multiply('30', '69'), '2070');
assert.strictEqual(multiply('11', '85'), '935');

assert.strictEqual(multiply('2', '0'), '0');
assert.strictEqual(multiply('0', '30'), '0');
assert.strictEqual(multiply('0000001', '3'), '3');
assert.strictEqual(multiply('1009', '03'), '3027');

assert.strictEqual(multiply('98765', '56894'), '5619135910');
assert.strictEqual(
  multiply('1020303004875647366210', '2774537626200857473632627613'),
  '2830869077153280552556547081187254342445169156730',
);
assert.strictEqual(
  multiply('58608473622772837728372827', '7586374672263726736374'),
  '444625839871840560024489175424316205566214109298',
);
assert.strictEqual(
  multiply('9007199254740991', '9007199254740991'),
  '81129638414606663681390495662081',
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

     30
 *   69
 ------
    270
 + 1800
 ------
   2070

*/
