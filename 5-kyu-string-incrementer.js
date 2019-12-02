// 5 kyu | String incrementer
// https://www.codewars.com/kata/string-incrementer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const incrementString = s => {
//   const newS = s.replace(/(\d)+/, match => {
//     const newNum = parseInt(match) + 1;
//     if (/^0+/.test(match)) return `${newNum}`.padStart(match.length, '0');
//     return newNum;
//   });
//   if (s === newS) return `${s}1`;
//   return newS;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const incrementString = s => {
//   if (!/(\d)+/.test(s)) return `${s}1`;
//   return s.replace(/(\d)+/, match => {
//     const num = parseInt(match) + 1;
//     if (/^0+/.test(match)) return `${num}`.padStart(match.length, '0');
//     return num;
//   });
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const incrementString = s => {
//   if (!/(\d+)$/.test(s)) return `${s}1`;
//   return s.replace(/(\d*$)/, m => `${parseInt(m) + 1}`.padStart(m.length, '0'));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const incrementString = s => {
  const [, head, tail] = s.match(/(.*?)(\d*)$/);
  const inc = `${parseInt(tail) + 1 || 1}`.padStart(tail.length, '0');
  return `${head}${inc}`;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

assert.strictEqual(incrementString('foobar000'), 'foobar001');
assert.strictEqual(incrementString('foo'), 'foo1');
assert.strictEqual(incrementString('foobar001'), 'foobar002');
assert.strictEqual(incrementString('foobar99'), 'foobar100');
assert.strictEqual(incrementString('foobar099'), 'foobar100');
assert.strictEqual(incrementString(''), '1');
