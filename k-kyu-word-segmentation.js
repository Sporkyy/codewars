// 5 kyu | Word Segmentation
// https://www.codewars.com/kata/word-segmentation/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} dictionary
 * @param {string} inputString
 * @returns {string[]}
 */
const segmentify = (dictionary, inputString) => {
  dictionary = Array.from(new Set(dictionary));
  const map = new Map();
  let remainder = inputString;
  for (let word of dictionary) {
    if (inputString.includes(word)) {
      if (map.has(inputString.indexOf(word))) return 'AMBIGUOUS';
      map.set(inputString.indexOf(word), word);
      remainder = remainder.replace(word, '');
    }
  }
  // console.log(remainder);
  // console.log(map);
  if (0 < remainder.length) return 'IMPOSSIBLE';
  return Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, [, word]) => `${acc} ${word}`, '')
    .trim();
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(segmentify(['coffee', 'drink'], 'drinkcoffee'), 'drink coffee');

strictEqual(
  segmentify(['weather', 'the', 'how', 'is'], 'howistheweather'),
  'how is the weather',
);

strictEqual(
  segmentify(
    ['quick', 'jumped', 'brown', 'fox', 'the', 'jumped', 'lazy'],
    'thequickbrownfoxjumpedoverthelazydog',
  ),
  'IMPOSSIBLE',
);

strictEqual(segmentify(['somewhere', 'over'], 'overtherainbow'), 'IMPOSSIBLE');

strictEqual(
  segmentify(
    ['examples', 'over', 'haul', 'overhaul', 'the'],
    'overhaultheexamples',
  ),
  'AMBIGUOUS',
);
