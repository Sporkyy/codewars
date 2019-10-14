// 6 kyu | Counting Duplicates
// https://www.codewars.com/kata/counting-duplicates/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {number}
 */
const duplicateCount = text => {
  const cnts = new Array(36).fill(0);
  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    if (97 <= code) cnts[code - 97]++;
    else if (65 <= code) cnts[code - 65]++;
    else cnts[code - 14]++;
  }
  return cnts.filter(cnt => 1 < cnt).length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(duplicateCount(''), 0);
strictEqual(duplicateCount('abcde'), 0);
strictEqual(duplicateCount('aabbcde'), 2);
strictEqual(duplicateCount('aabBcde'), 2, 'should ignore case');
strictEqual(duplicateCount('Indivisibility'), 1);
strictEqual(
  duplicateCount('Indivisibilities'),
  2,
  'characters may not be adjacent',
);
