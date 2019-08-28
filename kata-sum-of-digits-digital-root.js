// Sum of Digits / Digital Root
// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const digital_root = n => {
  if (n < 10) return n;
  const digits = new String(n).split('').map(d => parseInt(d));
  const sum = digits.reduce((a, c) => a + c);
  return sum < 10 ? sum : digital_root(sum);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert').strict;

assert.strictEqual(digital_root(16), 7);
assert.strictEqual(digital_root(456), 6);
assert.strictEqual(digital_root(0), 0);
assert.strictEqual(digital_root(1), 1);
