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

import { strictEqual } from 'assert';

strictEqual(nextSmaller(21), 12);
strictEqual(nextSmaller(907), 790);
strictEqual(nextSmaller(531), 513);
strictEqual(nextSmaller(135), -1);
strictEqual(nextSmaller(2071), 2017);
strictEqual(nextSmaller(1027), -1);
strictEqual(nextSmaller(414), 144);
strictEqual(nextSmaller(123456798), 123456789);
strictEqual(nextSmaller(123456789), -1);
strictEqual(nextSmaller(1234567908), 1234567890);
