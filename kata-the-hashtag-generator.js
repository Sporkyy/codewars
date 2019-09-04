// 5 kyu | The Hashtag Generator
// https://www.codewars.com/kata/the-hashtag-generator/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * The marketing team is spending way too much time typing in hashtags.
 * Let's help them with our own Hashtag Generator!
 *
 * Here's the deal:
 * - It must start with a hashtag (#).
 * - All words must have their first letter capitalized.
 * - If the final result is longer than 140 chars it must return false.
 * - If the input or the result is an empty string it must return false.
 *
 * @param {string} str
 * @returns {string}
 */
const generateHashtag = str => {
  str = str
    .split(/\s+/)
    .filter(w => w.length)
    .map(w => `${w[0].toLocaleUpperCase()}${w.slice(1)}`)
    .join('');
  return 0 < str.length && str.length < 140 ? `#${str}` : false;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(generateHashtag(''));
// console.log(generateHashtag('Do We have A Hashtag'));

const assert = require('assert');

assert.strictEqual(generateHashtag(''), false, 'Expected an empty string to return false');

assert.strictEqual(generateHashtag(' '.repeat(200)), false, 'Still an empty string');

assert.strictEqual(
  generateHashtag('Do We have A Hashtag'),
  '#DoWeHaveAHashtag',
  'Expected a Hashtag (#) at the beginning.',
);

assert.strictEqual(generateHashtag('Codewars'), '#Codewars', 'Should handle a single word.');

assert.strictEqual(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice', 'Should remove spaces.');

assert.strictEqual(
  generateHashtag('Codewars is nice'),
  '#CodewarsIsNice',
  'Should capitalize first letters of words.',
);

assert.strictEqual(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars');

assert.strictEqual(
  generateHashtag(
    'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat',
  ),
  false,
  'Should return false if the final word is longer than 140 chars.',
);

assert.strictEqual(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138), 'Should work');

assert.strictEqual(generateHashtag('a'.repeat(140)), false, 'Too long');
