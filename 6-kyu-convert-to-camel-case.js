// 6 kyu | Convert string to camel case
// https://www.codewars.com/kata/517abf86da9663f1d2000003

/*

Complete the method/function so that it converts dash/underscore delimited words
into camel casing. The first word within the output should be capitalized only
if the original word was capitalized (known as Upper Camel Case, also often
referred to as Pascal case).

Examples
- "the-stealth-warrior" gets converted to "theStealthWarrior"
- "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const toCamelCase = str => str.replace(/[-_](.)/g, (_, s) => s.toUpperCase());

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(
  toCamelCase(''),
  '',
  'An empty string was provided but not returned',
);

strictEqual(
  toCamelCase('the_stealth_warrior'),
  'theStealthWarrior',
  "toCamelCase('the_stealth_warrior') did not return correct value",
);

strictEqual(
  toCamelCase('The-Stealth-Warrior'),
  'TheStealthWarrior',
  "toCamelCase('The-Stealth-Warrior') did not return correct value",
);

strictEqual(
  toCamelCase('A-B-C'),
  'ABC',
  "toCamelCase('A-B-C') did not return correct value",
);
