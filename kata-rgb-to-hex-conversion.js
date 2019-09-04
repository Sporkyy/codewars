// 5 kyu | RGB To Hex Conversion
// https://www.codewars.com/kata/rgb-to-hex-conversion/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Takes decimal values returns hexadecimal
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
// function rgb(r, g, b) {
//   // Normalize decimal values
//   [r, g, b] = [r, g, b].map(d => (d < 0 ? 0 : 255 < d ? 255 : d));
//   // Convert decimal values to hex
//   [r, g, b] = [r, g, b].map(d => d.toString(16));
//   // Pad the single-digit hex values
//   [r, g, b] = [r, g, b].map(h => h.padStart(2, '0'));
//   // Put the hex values together and all caps
//   return `${r}${g}${b}`.toUpperCase();
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Takes decimal values returns hexadecimal
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
// const rgb = (r, g, b) =>
//   [r, g, b]
//     .map(n => {
//       if (n < 0) n = 0;
//       else if (255 < n) n = 255;
//       return n.toString(16).padStart(2, '0');
//     })
//     .join('')
//     .toUpperCase();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Takes decimal values returns hexadecimal
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
const rgb = (r, g, b) =>
  [r, g, b]
    .map(n => {
      if (n < 0) return '00';
      else if (255 < n) return 'FF';
      return n.toString(16).padStart(2, '0');
    })
    .join('')
    .toUpperCase();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(rgb(0, 0, 0), '000000');
assert.strictEqual(rgb(0, 0, -20), '000000');
assert.strictEqual(rgb(300, 255, 255), 'FFFFFF');
assert.strictEqual(rgb(173, 255, 47), 'ADFF2F');
