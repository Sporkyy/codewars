// 5 kyu | First non-repeating character
// https://www.codewars.com/kata/first-non-repeating-character

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {String} s
//  * @return {String}
//  */
// const firstNonRepeatingLetter = s => {
//   const cnts = new Array(1024).fill(0);
//   const sLower = s.toLowerCase();
//   for (let i = 0; i < s.length; i++) cnts[sLower.charCodeAt(i)]++;
//   for (let i = 0; i < s.length; i++)
//     if (1 === cnts[sLower.charCodeAt(i)]) return s[i];
//   return '';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {String} s
//  * @return {String}
//  */
// const firstNonRepeatingLetter = s =>
//   [...s].reduce(
//     (acc, curr) =>
//       !acc &&
//       s.toLowerCase().indexOf(curr.toLowerCase()) ===
//         s.toLowerCase().lastIndexOf(curr.toLowerCase())
//         ? curr
//         : acc,
//     null,
//   ) || '';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {String} s
 * @return {String}
 */
const firstNonRepeatingLetter = s => {
  const sLower = s.toLowerCase();
  const map = new Map();
  for (let i = 0; i < s.length; i++)
    if (map.has(sLower[i])) map.set(sLower[i], map.get(sLower[i]) + 1);
    else map.set(sLower[i], 1);
  for (let i = 0; i < s.length; i++) if (1 === map.get(sLower[i])) return s[i];
  return '';
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// Provided test suite
strictEqual(firstNonRepeatingLetter('a'), 'a');
strictEqual(firstNonRepeatingLetter('stress'), 't');
strictEqual(firstNonRepeatingLetter('moonmen'), 'e');

// Tests I devised
strictEqual(firstNonRepeatingLetter('Catta'), 'C');
strictEqual(firstNonRepeatingLetter('T'), 'T');
strictEqual(firstNonRepeatingLetter('aa'), '');
strictEqual(firstNonRepeatingLetter('a'), 'a');
strictEqual(firstNonRepeatingLetter(''), '');
strictEqual(firstNonRepeatingLetter('0'), '0');

// Tests stolen from the submission tests
strictEqual(
  firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"),
  ',',
);
strictEqual(firstNonRepeatingLetter('∞§ﬁ›ﬂ∞§'), 'ﬁ');
