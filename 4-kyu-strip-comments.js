// 4 kyu | Strip Comments
// https://www.codewars.com/kata/strip-comments/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} input
 * @param {string[]} markers
 */
// const solution = (input, markers) =>
//   input
//     .split('\n')
//     .map(line => {
//       for (let marker of markers) [line] = line.split(marker);
//       return line.trimRight();
//     })
//     .join('\n');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} input
 * @param {string[]} markers
 */
const solution = (input, markers) =>
  input
    .split('\n')
    .map(line =>
      markers.reduce((acc, curr) => acc.split(curr)[0].trimRight(), line),
    )
    .join('\n');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(
  solution('apples, plums % and bananas\npears\noranges !applesauce', [
    '%',
    '!',
  ]),
  'apples, plums\npears\noranges',
);

assert.strictEqual(solution('Q @b\nu\ne -e f g', ['@', '-']), 'Q\nu\ne');
