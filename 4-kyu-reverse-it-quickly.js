// 4 kyu | -Reverse it, quickly!
// https://www.codewars.com/kata/reverse-it-quickly/train/javascript

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} a
//  */
// const weirdReverse = a =>
//   a
//     .map((e, i) => ({
//       e,
//       i,
//     }))
//     .sort(({ i: ai }, { i: bi }) => bi - ai)
//     .map(({ e }) => e);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} a
 */
// const weirdReverse = a =>
//   a.reduce((b, c, i) => b.concat(a[a.length - 1 - i]), []);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} a
 */
// const weirdReverse = a => a.reduceRight((b, c) => [...b, c], []);

// length: 51
// weirdReverse=a=> a.reduceRight((b,c)=>[...b,c],[]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} a
 */
const weirdReverse = a => Array.prototype.reverse.call(a);

// length: 51
// weirdReverse=a=> a.reduceRight((b,c)=>[...b,c],[]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(weirdReverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
