// 4 kyu | Strings Mix
// https://www.codewars.com/kata/strings-mix

/*
 * Given two strings s1 and s2, we want to visualize how different the
 * two strings are. We will only take into account the lowercase letters
 * (a to z). First let us count the frequency of each lowercase letters
 * in s1 and s2.
 *
 * s1 = "A aaaa bb c"
 * s2 = "& aaa bbb c d"
 * s1 has 4 'a', 2 'b', 1 'c'
 * s2 has 3 'a', 3 'b', 1 'c', 1 'd'
 *
 * So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for
 * 'b' is 3 from s2. In the following we will not consider letters when
 * the maximum of their occurrences is less than or equal to 1.
 *
 * We can resume the differences between s1 and s2 in the following
 * string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1
 * and aaaa because the maximum for a is 4. In the same manner 2:bbb stands
 * for string s2 and bbb because the maximum for b is 3.
 *
 * The task is to produce a string in which each lowercase letters
 * of s1 or s2 appears as many times as its maximum if this maximum is strictly
 * greater than 1; these letters will be prefixed by the number of the string
 * where they appear with their maximum value and :. If the maximum is in
 * s1 as well as in s2 the prefix is =:.
 *
 * In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it
 * contains the prefix) will be in decreasing order of their length and when
 * they have the same length sorted in ascending lexicographic order
 * (letters and digits - more precisely sorted by codepoint); the different
 * groups will be separated by '/'. See examples and "Example Tests".
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 *
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */
const mix = (s1, s2) => {
  const s1Cnts = new Array(26).fill(0);
  console.log(s1Cnts);

  for (let i = 0; i <= s1.length; i++) {
    const code = s1.charCodeAt(i) - 97;
    if (code < 0 || 26 < code) continue;
    s1Cnts[code]++;
  }

  console.log(s1Cnts);

  const s2Cnts = new Array(26).fill(0);

  for (let i = 0; i <= s2.length; i++) {
    const code = s2.charCodeAt(i) - 97;
    if (code < 0 || 26 < code) continue;
    s2Cnts[code]++;
  }

  console.log(s2Cnts);

  const maxCnts = new Array(26);

  for (let i = 0; i <= 26; i++) {
    if (s2Cnts[i] < s1Cnts[i]) maxCnts = [1, s1Cnts[i]];
    else if (s1Cnts[i] === s2Cnts[i]) maxCnts = [2, s1Cnts[i]];
    else maxCnts[i] = [2, s2Cnts[i]];
  }

  console.log(maxCnts);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

console.log(mix('Are they here', 'yes, they are here'));
// assert.strictEqual(mix('Are they here', 'yes, they are here'), '2:eeeee/2:yy/=:hh/=:rr');

// assert.strictEqual(
//   mix('looping is fun but dangerous', 'less dangerous than coding'),
//   '1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg',
// );

// assert.strictEqual(
//   mix(' In many languages', " there's a pair of functions"),
//   '1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt',
// );

// assert.strictEqual(mix('Lords of the Fallen', 'gamekult'), '1:ee/1:ll/1:oo');

// assert.strictEqual(mix('codewars', 'codewars'), '');

// assert.strictEqual(
//   mix('A generation must confront the looming ', 'codewarrs'),
//   '1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr',
// );
