// 5 kyu | String incrementer
// https://www.codewars.com/kata/string-incrementer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const incrementString = s => {
  const newS = s.replace(/(\d)+/, match => {
    const newNum = parseInt(match) + 1;
    if (/^0+/.test(match)) return `${newNum}`.padStart(match.length, "0");
    return newNum;
  });
  if (s === newS) return `${s}1`;
  return newS;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from "assert";

assert.strictEqual(incrementString("foobar000"), "foobar001");
assert.strictEqual(incrementString("foo"), "foo1");
assert.strictEqual(incrementString("foobar001"), "foobar002");
assert.strictEqual(incrementString("foobar99"), "foobar100");
assert.strictEqual(incrementString("foobar099"), "foobar100");
assert.strictEqual(incrementString(""), "1");
