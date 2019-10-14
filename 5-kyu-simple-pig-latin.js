// 5 kyu | Simple Pig Latin
// https://www.codewars.com/kata/simple-pig-latin

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} str
 */
const pigIt = str =>
  str.replace(/[a-z]+/gi, s => `${s.slice(1)}${s.slice(0, 1)}ay`);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');

strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay');
