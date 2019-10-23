// 5 kyu | Word Segmentation
// https://www.codewars.com/kata/word-segmentation/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string[]} dictionary
//  * @param {string} inputString
//  * @returns {string[]}
//  */
// const segmentify = (dictionary, inputString) => {
//   dictionary = Array.from(new Set(dictionary));
//   const map = new Map();
//   let remainder = inputString;
//   for (let word of dictionary) {
//     // console.log(word);
//     if (inputString.includes(word)) {
//       if (map.has(inputString.indexOf(word))) return 'AMBIGUOUS';
//       map.set(inputString.indexOf(word), word);
//       remainder = remainder.replace(word, '');
//     }
//   }
//   // console.log(remainder);
//   // console.log(map);
//   if (0 < remainder.length) return 'IMPOSSIBLE';
//   return Array.from(map.entries())
//     .sort((a, b) => a[0] - b[0])
//     .reduce((acc, [, word]) => `${acc} ${word}`, '')
//     .trim();
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string[]} dictionary
//  * @param {string} inputString
//  * @returns {string[]}
//  */
// const segmentify = (dictionary, inputString) => {
//   const a = new Array(inputString.length);
//   let isAmbiguous = false;
//   let remainder = inputString;
//   for (let word of dictionary) {
//     remainder = remainder.replace(word, '');
//     // console.log(word);
//     if (a[inputString.indexOf(word)]) isAmbiguous = true;
//     if (inputString.includes(word)) a[inputString.indexOf(word)] = word;
//   }
//   // console.log(a.join(' '));
//   // console.log(remainder);
//   if (0 < remainder.length) return 'IMPOSSIBLE';
//   if (isAmbiguous) return 'AMBIGUOUS';
//   return a.filter(e => e).join(' ');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string[]} dictionary
//  * @param {string} inputString
//  * @returns {string[]}
//  */
// const segmentify = (dictionary, inputString) => {
//   const a = new Array(inputString.length);
//   let tmp = inputString;
//   for (let word of dictionary) {
//     console.log(word);
//     // console.log(inputString);
//     if (tmp.includes(word)) {
//       // if (inputString.indexOf(word) !== inputString.lastIndexOf(word))
//       //   return 'AMBIGUOUS';
//       a[tmp.indexOf(word)] = word;
//     } else return 'IMPOSSIBLE';
//     tmp = tmp.replace(word, ' '.repeat(word.length));
//     // if (a[tmp.indexOf(word)]) isAmbiguous = true;
//   }
//   console.log(tmp);
//   // console.log(a.join(' '));
//   // console.log(remainder);
//   if (0 < tmp.trim().length) return 'IMPOSSIBLE';
//   // if (isAmbiguous) return 'AMBIGUOUS';
//   return a.filter(e => e).join(' ');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string[]} dictionary
//  * @param {string} inputString
//  * @returns {string[]}
//  */
// const segmentify = (dictionary, inputString) => {
//   dictionary = dictionary.sort((a, b) => a.length - b.length);
//   const solutions = [];
//   for (let i = 0; i < dictionary.length; i++) {

//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} dictionary
 * @param {string} inputString
 * @returns {string[]}
 */
const segmentify = (dictionary, inputString) => {
  const used = new Array(inputString.length);
  let cpy = inputString;
  let isAmbiguous = false;
  for (let word of dictionary) {
    // console.log(word);
    // console.log(cpy);
    if (cpy.includes(word)) {
      used[cpy.indexOf(word)] = word;
      cpy = cpy.replace(word, '0'.repeat(word.length));
    } else if (inputString.includes(word)) isAmbiguous = true;
  }
  // console.log(cpy);
  // console.log(used);
  if (/[^0]/.test(cpy)) return 'IMPOSSIBLE';
  if (isAmbiguous) return 'AMBIGUOUS';
  return used.filter(e => e).join(' ');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} dictionary
 * @param {string} inputString
 * @returns {string[]}
 */
const segmentify = (dictionary, inputString) => {
  const used = new Array(inputString.length);
  let cpy = inputString;
  let isAmbiguous = false;
  for (let word of dictionary) {
    // console.log(word);
    // console.log(cpy);
    if (cpy.includes(word)) {
      used[cpy.indexOf(word)] = word;
      cpy = cpy.replace(word, '0'.repeat(word.length));
    } else if (inputString.includes(word)) isAmbiguous = true;
  }
  // console.log(cpy);
  // console.log(used);
  if (/[^0]/.test(cpy)) return 'IMPOSSIBLE';
  if (isAmbiguous) return 'AMBIGUOUS';
  return used.filter(e => e).join(' ');
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

strictEqual(
  segmentify(
    ['examples', 'over', 'overhaul', 'haul', 'the'],
    'overhaultheexamples',
  ),
  'AMBIGUOUS',
);

strictEqual(
  segmentify(
    ['the', 'chicken', 'crossed', 'the', 'road'],
    'thechickencrossedtheroad',
  ),
  'the chicken crossed the road',
);

strictEqual(segmentify(['the', 'a', 'a'], 'theaa'), 'the a a');

strictEqual(
  segmentify(
    ['there', 'is', 'a', 'cat', 'in', 'a', 'hat', 'at', 'there'],
    'thereisacatinahatatthere',
  ),
  'there is a cat in a hat at there',
);
