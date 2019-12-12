// 5 kyu | Scramblies
// https://www.codewars.com/kata/scramblies

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const cnts = s => {
//   const a = new Array(26).fill(0);
//   for (let i = 0; i < s.length; i++) a[s.charCodeAt(i) - 97]++;
//   return a;
// };

// /**
//  * @param {string} str1
//  * @param {string} str2
//  * @return {boolean}
//  */
// const scramble = (str1, str2) => {
//   const [str1Cnts, str2Cnts] = [cnts(str1), cnts(str2)];
//   for (let i = 0; i < 26; i++) if (str1Cnts[i] < str2Cnts[i]) return false;
//   return true;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const scramble = (str1, str2) => {
  const cnts = new Array(26).fill(0);
  for (let i = 0; i < str2.length; i++) cnts[str2.charCodeAt(i) - 97]++;
  for (let i = 0; i < str1.length; i++) cnts[str1.charCodeAt(i) - 97]--;
  return !cnts.some(cnt => 0 < cnt);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(scramble('rkqodlw', 'world'), true);
strictEqual(scramble('cedewaraaossoqqyt', 'codewars'), true);
strictEqual(scramble('katas', 'steak'), false);
strictEqual(scramble('scriptjava', 'javascript'), true);
strictEqual(scramble('scriptingjava', 'javascript'), true);
strictEqual(scramble('scriptsjava', 'javascripts'), true);
strictEqual(scramble('jscripts', 'javascript'), false);
strictEqual(scramble('aabbcamaomsccdd', 'commas'), true);
