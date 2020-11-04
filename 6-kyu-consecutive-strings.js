// 6 kyu | Consecutive strings
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/

/*

You are given an array(list) strarr of strings and an integer k. Your task is to
return the first longest string consisting of k consecutive strings taken in the
array.

## Example

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta",
"abigail"], 2) --> "abigailtheta"

`n` being the length of the string array, if `n = 0` or `k > n` or `k <= 0`
return "".

## Note

consecutive strings : follow one after another without an interruption

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// /**
//  * @param {stirng[]} strarr
//  * @param {number} k
//  * @returns {string}
//  */
// const longestConsec = (strarr, k) => {
//   let res = '';
//   for (let i = 0; i < strarr.length - k + 1; i++) {
//     // console.log(i);
//     const x = [];
//     for (let j = i; j < i + k; j++) {
//       // console.log(strarr[j]);
//       x.push(strarr[j]);
//     }
//     // console.log(x.join(''));
//     const y = x.join(''); // ?
//     if (res.length < y.length) res = y;
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// /**
//  * @param {stirng[]} strarr
//  * @param {number} k
//  * @returns {string}
//  */
// const longestConsec = (strarr, k) => {
//   let [res, tmp] = ['', []];
//   while (0 < k && strarr.length) {
//     tmp.push(strarr.shift());
//     while (k < tmp.length) tmp.shift();
//     const joined = tmp.join('');
//     if (k === tmp.length && res.length < joined.length) res = joined;
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)
// Completed in 205ms

/**
 * @param {stirng[]} strarr
 * @param {number} k
 * @returns {string}
 */
const longestConsec = (strarr, k) => {
  let res = '';
  for (let i = 0; i < strarr.length - k + 1; i++) {
    const arr = [];
    for (let j = i; j < i + k && j < strarr.length; j++) arr.push(strarr[j]);
    const joined = arr.join('');
    if (res.length < joined.length) res = joined;
  }
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
  'abigailtheta',
);

strictEqual(
  longestConsec(
    [
      'ejjjjmmtthh',
      'zxxuueeg',
      'aanlljrrrxx',
      'dqqqaaabbb',
      'oocccffuucccjjjkkkjyyyeehh',
    ],
    1,
  ),
  'oocccffuucccjjjkkkjyyyeehh',
);

strictEqual(longestConsec([], 3), '');

strictEqual(
  longestConsec(
    [
      'itvayloxrp',
      'wkppqsztdkmvcuwvereiupccauycnjutlv',
      'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
    ],
    2,
  ),
  'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck',
);

strictEqual(
  longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
  'wlwsasphmxxowiaxujylentrklctozmymu',
);

strictEqual(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2),
  '',
);

strictEqual(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3),
  'ixoyx3452zzzzzzzzzzzz',
);

strictEqual(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15),
  '',
);

strictEqual(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0),
  '',
);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

a b c d e f g

| 1 |   a |   b |   c |   d |   e |  f | g |
| 2 |  ab |  bc |  cd |  de |  ef | fg |   |
| 3 | abc | bcd | cde | def | efg |    |   |

*/
