// 5 kyu | First non-repeating character
// https://www.codewars.com/kata/first-non-repeating-character

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {String} s
 */
const firstNonRepeatingLetter = s =>
  [...s].reduce(
    (acc, curr) =>
      !acc &&
      s.toLowerCase().indexOf(curr.toLowerCase()) ===
        s.toLowerCase().lastIndexOf(curr.toLowerCase())
        ? curr
        : acc,
    null,
  ) || '';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(firstNonRepeatingLetter('a'), 'a');
strictEqual(firstNonRepeatingLetter('stress'), 't');
strictEqual(firstNonRepeatingLetter('moonmen'), 'e');

strictEqual(firstNonRepeatingLetter('Catta'), 'C');
strictEqual(firstNonRepeatingLetter('T'), 'T');
strictEqual(firstNonRepeatingLetter('aa'), '');
strictEqual(firstNonRepeatingLetter('a'), 'a');
strictEqual(firstNonRepeatingLetter(''), '');
strictEqual(firstNonRepeatingLetter('0'), '0');

strictEqual(
  firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"),
  ',',
);
