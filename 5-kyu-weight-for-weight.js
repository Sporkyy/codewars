// 5 kyu | Weight for weight
// https://www.codewars.com/kata/weight-for-weight/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} strng
 */
const orderWeight = strng =>
  strng
    .split(' ')
    .sort((a, b) => {
      const [aw, bw] = [
        [...a].map(Number).reduce((acc, curr) => acc + curr),
        [...b].map(Number).reduce((acc, curr) => acc + curr),
      ];
      return aw === bw ? a.localeCompare(b) : aw - bw;
    })
    .join(' ');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99');

strictEqual(
  orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
  '11 11 2000 10003 22 123 1234000 44444444 9999',
);
