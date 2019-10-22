// 5 kyu | Where my anagrams at?
// https://www.codewars.com/kata/where-my-anagrams-at

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const anagrams = (word, words) => {
//   const letterCounts = w => {
//     const cnts = new Array(26).fill(0);
//     for (let c of [...w]) cnts[c.charCodeAt(0) - 97]++;
//     return cnts.join('');
//   };
//   const wordCnt = letterCounts(word);
//   const res = [];
//   for (let wordsWord of words) {
//     const wordsWordCnts = letterCounts(wordsWord);
//     if (wordCnt === wordsWordCnts) res.push(wordsWord);
//   }
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const letterCounts = w =>
  [...w]
    .reduce((acc, curr) => {
      acc[curr.charCodeAt(0) - 97]++;
      return acc;
    }, new Array(26).fill(0))
    .join('');

const anagrams = (word, words) => {
  const wordCnts = letterCounts(word);
  return words.filter(w => wordCnts === letterCounts(w));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), [
  'aabb',
  'bbaa',
]);

deepStrictEqual(
  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']),
  ['carer', 'racer'],
);

deepStrictEqual(anagrams('laser', ['lazing', 'lazy', 'lacer']), []);
