// 4 kyu | Next smaller number with the same digits
// https://www.codewars.com/kata/next-smaller-number-with-the-same-digits

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} n
 */
function nextSmaller(n) {
  const digits = [...n.toString()].map(n => parseInt(n));
  for (let i = digits.length - 1; 0 <= i; i--) {
    let swapPosition;
    for (let j = i + 1; j < digits.length; j++) {
      if (
        digits[j] < digits[i] &&
        !(0 === i && 0 === digits[j]) &&
        ('undefined' === typeof swapPosition ||
          digits[swapPosition] < digits[j])
      ) {
        swapPosition = j;
      }
    }
    if ('undefined' === typeof swapPosition) continue;
    [digits[i], digits[swapPosition]] = [digits[swapPosition], digits[i]];
    const firstHalf = digits.slice(0, i + 1);
    const lastHalf = digits.slice(i + 1, digits.length).sort((a, b) => b - a);
    return parseInt(firstHalf.concat(lastHalf).join(''));
  }
  return -1;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(nextSmaller(21), 12);
assert.strictEqual(nextSmaller(907), 790);
assert.strictEqual(nextSmaller(531), 513);
assert.strictEqual(nextSmaller(135), -1);
assert.strictEqual(nextSmaller(2071), 2017);
assert.strictEqual(nextSmaller(1027), -1);
assert.strictEqual(nextSmaller(414), 144);
assert.strictEqual(nextSmaller(123456798), 123456789);
assert.strictEqual(nextSmaller(123456789), -1);
assert.strictEqual(nextSmaller(1234567908), 1234567890);
