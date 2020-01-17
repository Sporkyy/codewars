// 7 kyu | Reverse a Number
// https://www.codewars.com/kata/reverse-a-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const reverseNumber = (x, revX = 0) =>
  0 === x ? revX : reverseNumber(Math.trunc(x / 10), revX * 10 + (x % 10));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(reverseNumber(123), 321);
strictEqual(reverseNumber(-123), -321, 'Negative Numbers should be preserved');
strictEqual(reverseNumber(1000), 1, 'Should handle numbers ending with "0"');
strictEqual(reverseNumber(4321234), 4321234);
strictEqual(reverseNumber(5), 5);
strictEqual(reverseNumber(0), 0);
strictEqual(reverseNumber(98989898), 89898989);
