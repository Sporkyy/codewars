// 4 kyu | Permutations
// https://www.codewars.com/kata/permutations/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} string
 * @returns {string[]}
 */
const permutations = string => {
  const permute = s => {
    if (s.length === 1) return [s];
    const results = [];
    for (let i = 0; i < s.length; i++)
      for (let permutation of permute(`${s.slice(0, i)}${s.slice(i + 1)}`))
        results.push(`${s[i]}${permutation}`);
    return results;
  };
  return Array.from(new Set(permute(string)));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.deepStrictEqual(permutations('a'), ['a']);

// console.log(permutations('ab'));

// permutations('ab');

assert.deepStrictEqual(permutations('ab').sort(), ['ab', 'ba'].sort());

// permutations('abc');
// console.log(permutations('abc'));

assert.deepStrictEqual(
  permutations('abc').sort(),
  ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort(),
);

// console.log(permutations('aabb'));

assert.deepStrictEqual(
  permutations('aabb').sort(),
  ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort(),
);

assert.deepStrictEqual(
  permutations('abc').sort(),
  ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort(),
);

// permutations('abcd');

// console.log(permutations('abcd').sort());

assert.deepStrictEqual(
  permutations('abcd').sort(),
  [
    'abcd',
    'abdc',
    'acbd',
    'acdb',
    'adbc',
    'adcb',
    'bacd',
    'badc',
    'bcad',
    'bcda',
    'bdac',
    'bdca',
    'cabd',
    'cadb',
    'cbad',
    'cbda',
    'cdab',
    'cdba',
    'dabc',
    'dacb',
    'dbac',
    'dbca',
    'dcab',
    'dcba',
  ].sort(),
);

// permutations('abcde');
