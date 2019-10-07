// 4 kyu | Most frequently used words in a text
// https://www.codewars.com/kata/most-frequently-used-words-in-a-text/

/*

Write a function that, given a string of text (possibly with punctuation
  and line-breaks), returns an array of the top-3 most occurring words,
  in descending order of the number of occurrences.

Assumptions:
- A word is a string of letters (A to Z) optionally containing one or
  more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
- Matches should be case-insensitive, and the words in the result should
  be lowercased.
- Ties may be broken arbitrarily.
- If a text contains fewer than three unique words, then either the top-2
  or top-1 words should be returned, or an empty array if a text contains
  no words.

Bonus points (not really, but just for fun):
- Avoid creating an array whose memory footprint is roughly as big
  as the input text.
- Avoid sorting the entire array of unique words.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 */
const topThreeWords = text => {
  const words = text.toLowerCase().match(/([a-z]+[a-z']*)/g);
  if (null === words) return [];
  const cnts = new Map();
  for (let word of words) {
    if (cnts.has(word)) cnts.set(word, cnts.get(word) + 1);
    else cnts.set(word, 1);
  }
  return Array.from(cnts.entries())
    .sort(([_aWord, aCnt], [_bWord, bCnt]) => bCnt - aCnt)
    .slice(0, 3)
    .map(([word]) => word);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(topThreeWords('a a a  b  c c  d d d d  e e e e e'), [
  'e',
  'd',
  'a',
]);

deepStrictEqual(topThreeWords('a a c b b'), ['a', 'b', 'c']);

deepStrictEqual(
  topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e'),
  ['e', 'ddd', 'aa'],
);

deepStrictEqual(topThreeWords("  //wont won't won't "), ["won't", 'wont']);

deepStrictEqual(topThreeWords('  , e   .. '), ['e']);

deepStrictEqual(topThreeWords('  ...  '), []);

deepStrictEqual(topThreeWords("  '  "), []);

deepStrictEqual(
  topThreeWords(`In a village of La Mancha, the name of which I have no
  desire to call to mind, there lived not long since one of those gentlemen
  that keep a lance in the lance-rack, an old buckler, a lean hack, and a
  greyhound for coursing. An olla of rather more beef than mutton, a salad
  on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon
  or so extra on Sundays, made away with three-quarters of his income.`),
  ['a', 'of', 'on'],
);
