// 7 kyu | String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

/*

Complete the solution so that it returns true if the first argument(string)
passed in ends with the 2nd argument (also a string).

Examples:
- solution('abc', 'bc') // returns true
- solution('abc', 'd') // returns false

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const solution = (str, ending) =>
//   ending === str.slice(str.length - ending.length);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const solution = (str, ending) => str.endsWith(ending);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { ok } from 'assert';

// ok(solution('abcde', 'cde'));
// ok(!solution('abcde', 'abc'));

ok(solution('samurai', 'ai'));
ok(solution('ninja', 'ja'));
ok(solution('sensei', 'i'));
ok(solution('abc', 'abc'));
ok(solution('abcabc', 'bc'));
ok(solution('fails', 'ails'));
ok(solution('abc', ''));
ok(solution('!@#$%^&*() :-)', ':-)'));

ok(solution('', ''));
