// 4 kyu | Range Extraction
// https://www.codewars.com/kata/range-extraction/train/javascript

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} list
 * @returns {string}
 */
const solution = list => {
  if (list.length <= 2) return list.join(',');
  let result = [];
  let temp = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== temp[temp.length - 1] + 1) {
      if (temp.length < 3) {
        result = result.concat(temp);
        temp = [];
      } else {
        result.push(`${temp.shift()}-${temp.pop()}`);
        temp = [];
      }
    }
    temp.push(list[i]);
  }
  if (temp.length < 3) {
    result = result.concat(temp);
    temp = [];
  } else {
    result.push(`${temp.shift()}-${temp.pop()}`);
    temp = [];
  }
  return result.join(',');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(solution([1]), '1');

assert.strictEqual(solution([1, 2]), '1,2');

assert.strictEqual(solution([1, 2, 3]), '1-3');

assert.strictEqual(solution([1, 2, 3, 5]), '1-3,5');

assert.strictEqual(solution([1, 2, 3, 5, 6]), '1-3,5,6');

assert.strictEqual(
  solution([
    -6,
    -3,
    -2,
    -1,
    0,
    1,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    14,
    15,
    17,
    18,
    19,
    20,
  ]),
  '-6,-3-1,3-5,7-11,14,15,17-20',
);
