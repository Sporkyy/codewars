// 2 kyu | Decode the Morse code, for real
// https://www.codewars.com/kata/decode-the-morse-code-for-real/

/*

| 1       | Dot            |
| 111     | Dash           |
| 0       | Intracharacter |
| 000     | Intercharacter |
| 0000000 | Interword      |

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const MORSE_CODE = {
  // Special Service Codes
  '...---...': 'SOS',

  // Letters
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',

  // Numbers
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',

  // Punctuation
  '.-.-.-': '.',
  '--..--': ',',
  '..--..': '?',
  '-...-': '=',
  '-.-.--': '!',
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} bits
//  */
// const decodeBitsAdvanced = bits => {
//   bits = bits.replace(/^0*([01]+?)0*$/, '$1');
//   console.log(bits);
//   let freq = 1;
//   if (bits.includes('0')) {
//     const zeroes = bits.match(/(0+)/g);
//     // console.log(bits);
//     let [min0, max0] = [Number.MAX_VALUE, Number.MIN_VALUE];
//     for (let { length: run } of zeroes) {
//       if (run < min0) min0 = run;
//       if (max0 < run) max0 = run;
//     }
//     console.log(min0, max0);
//     const ones = bits.match(/(1+)/g);
//     let [min1, max1] = [Number.MAX_VALUE, Number.MIN_VALUE];
//     for (let { length: run } of ones) {
//       if (run < min1) min1 = run;
//       if (max1 < run) max1 = run;
//     }
//     console.log(min1, max1);

//     // for (let { length: len } of bits.match(/(0+)/g)) {
//     //   if (len < min) min = len;
//     //   if (max < len) max = len;
//     // }
//     // if (min < max) {
//     //   if (0 === min % 3) freq = min / 3;
//     //   else if (0 === max % 7) freq = max / 7;
//     // } else {
//     //   if (2 === min) freq = 2;
//     //   else if (0 === min % 3) freq = min / 3;
//     //   else if (0 === min % 7) freq = min / 7;
//     //   else freq = min;
//     // }
//   } else {
//     freq = bits.length;
//   }
//   console.log(freq);
// };

// /**
//  * Copy+paste of my soltuion from previous kata
//  * 6 kyu | Decode the Morse code
//  * https://www.codewars.com/kata/decode-the-morse-code/
//  *
//  * @param {string} morseCode
//  */
// const decodeMorse = morseCode => {
//   return morseCode
//     .trim()
//     .split(/\s{3,}/g)
//     .map(word =>
//       word
//         .split(/\s+/)
//         .map(code => MORSE_CODE[code])
//         .join(''),
//     )
//     .join(' ');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} bits
//  */
// const decodeBitsAdvanced = bits => {
//   bits = bits.replace(/^0*([01]+?)0*$/, '$1');
//   if (!bits.includes('0')) return '.';
//   // console.log(bits);
//   const zeroRuns = new Map();
//   for (let { length: run } of bits.match(/(0+)/g)) {
//     if (zeroRuns.has(run)) zeroRuns.set(run, zeroRuns.get(run) + 1);
//     else zeroRuns.set(run, 1);
//   }
//   // console.log(zeroRuns);
//   console.log(new Map([...zeroRuns.entries()].sort((a, b) => a - b)));
//   // const oneRuns = new Map();
//   // for (let { length: run } of bits.match(/(1+)/g)) {
//   //   if (oneRuns.has(run)) oneRuns.set(run, oneRuns.get(run) + 1);
//   //   else oneRuns.set(run, 1);
//   // }
//   // // console.log(oneRuns);
//   // console.log([...oneRuns.keys()].reduce((a, c) => a + c));
//   // console.log(new Map([...oneRuns.entries()].sort()));
//   // console.log(freq);
// };

// /**
//  * Copy+paste of my soltuion from previous kata
//  * 6 kyu | Decode the Morse code
//  * https://www.codewars.com/kata/decode-the-morse-code/
//  *
//  * @param {string} morseCode
//  */
// const decodeMorse = morseCode => {
//   return morseCode
//     .trim()
//     .split(/\s{3,}/g)
//     .map(word =>
//       word
//         .split(/\s+/)
//         .map(code => MORSE_CODE[code])
//         .join(''),
//     )
//     .join(' ');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} bits
//  */
// const decodeBitsAdvanced = bits => {
//   bits = bits.replace(/^0*([01]+?)0*$/, '$1');
//   if (!bits.includes('0')) return '.';
//   let [minDot, maxDot] = [1, 1];
//   let [minDash, maxDash] = [3, 3];
//   let [minIntrachar, maxIntrachar] = [1, 1];
//   let [minInterchar, maxInterchar] = [3, 3];
//   let [minInterword, maxInterword] = [7, 7];
//   // console.log(bits);
//   bits = bits.replace(new RegExp(`1{${minDash},}`, 'g'), '-');
//   bits = bits.replace(new RegExp(`1{1,${minDash}}`, 'g'), '.');
//   bits = bits.replace(new RegExp(`0{${minInterword},}`, 'g'), '   ');
//   bits = bits.replace(
//     new RegExp(`0{${minInterchar},${minInterword}}`, 'g'),
//     ' ',
//   );
//   bits = bits.replace(new RegExp(`0{1,${minInterchar}}`, 'g'), '');
//   console.log(bits);
//   return bits;
// };

// /**
//  * Copy+paste of my soltuion from previous kata
//  * 6 kyu | Decode the Morse code
//  * https://www.codewars.com/kata/decode-the-morse-code/
//  *
//  * @param {string} morseCode
//  */
// const decodeMorse = morseCode =>
//   morseCode
//     .trim()
//     .split(/\s{3,}/g)
//     .map(word =>
//       word
//         .split(/\s+/)
//         .map(code => MORSE_CODE[code])
//         .join(''),
//     )
//     .join(' ');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} bits
 */
const decodeBitsAdvanced = bits => {
  bits = bits.replace(/^0*([01]+?)0*$/, '$1');
  if (!bits.includes('0')) return '.';
  const oneRuns = new Map();
  for (let { length: run } of bits.match(/(1+)/g)) {
    if (oneRuns.has(run)) oneRuns.set(run, oneRuns.get(run) + 1);
    else oneRuns.set(run, 1);
  }
  const ff =
    1 +
    [...oneRuns.keys()].sort()[0] /
      [...oneRuns.keys()].sort()[[...oneRuns.keys()].length - 1] /
      (1 / 3); // Fudge factor
  bits = bits.replace(new RegExp(`1{${Math.round(3 * ff)},}`, 'g'), '-');
  bits = bits.replace(new RegExp(`1{1,${Math.round(3 * ff)}}`, 'g'), '.');
  bits = bits.replace(new RegExp(`0{${Math.round(7 * ff)},}`, 'g'), '   ');
  bits = bits.replace(
    new RegExp(`0{${Math.round(3 * ff)},${Math.round(7 * ff)}}`, 'g'),
    ' ',
  );
  bits = bits.replace(new RegExp(`0{1,${Math.round(3 * ff)}}`, 'g'), '');
  // console.log(bits);
  return bits;
};

/**
 * Copy+paste of my soltuion from previous kata
 * 6 kyu | Decode the Morse code
 * https://www.codewars.com/kata/decode-the-morse-code/
 *
 * @param {string} morseCode
 */
const decodeMorse = morseCode =>
  morseCode
    .trim()
    .split(/\s{3,}/g)
    .map(word =>
      word
        .split(/\s+/)
        .map(code => MORSE_CODE[code])
        .join(''),
    )
    .join(' ');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

// decodeBitsAdvanced(
//   '00000000' +
//     /* H */ '110110100111' +
//     '00000' +
//     /* E */ '11' +
//     '000000' +
//     /* Y */ '11111101001111100111111' +
//     '00000000000' +
//     /* J */ '111011111111011111011111' +
//     '000000' +
//     /* U */ '1011000111111' +
//     '00000' +
//     /* D */ '1111100111011' +
//     '00000' +
//     /* E */ '1' +
//     '00000',
// );

// console.log(
//   decodeBitsAdvanced(
//     '00000000110110100111000001100000011111101001111100111111' +
//       '00000000000' +
//       '111011111111011111011111000000101100011111100000111110011101100000100000',
//   ),
// );

// console.log(
//   decodeMorse(
//     decodeBitsAdvanced(
//       '00000000' +
//       /* H */ '110110100111' + // ....
//       '00000' +
//       /* E */ '11' + // .
//       '000000' +
//       /* Y */ '11111101001111100111111' + // -.--
//       '00000000000' +
//       /* J */ '111011111111011111011111' + // .---
//       '000000' +
//       /* U */ '1011000111111' + // ..-
//       '00000' +
//       /* D */ '1111100111011' + // -..
//       '00000' +
//       /* E */ '1' + // .
//         '00000',
//     ),
//   ),
// );

// assert.strictEqual(
//   decodeBitsAdvanced(
//     '00000000' +
//       /* .... */ '110110100111' +
//       '00000' +
//       /* . */ '11' +
//       '000000' +
//       /* -.-- */ '11111101001111100111111' +
//       '00000000000' +
//       /* .--- */ '111011111111011111011111' +
//       '000000' +
//       /* ..- */ '1011000111111' +
//       '00000' +
//       /* -.. */ '1111100111011' +
//       '00000' +
//       /* . */ '1' +
//       '00000',
//   ),
//   '.... . -.--   .--- ..- -.. .',
// );

assert.strictEqual(
  decodeMorse(
    decodeBitsAdvanced(
      '00000000110110100111000001100000011111101001111100111111' +
        '00000000000' +
        '111011111111011111011111000000101100011111100000111110011101100000100000',
    ),
  ),
  'HEY JUDE',
);

// assert.strictEqual(decodeMorse(decodeBits('10001')), 'EE');
// assert.strictEqual(decodeMorse(decodeBits('1100000011')), 'EE');
// assert.strictEqual(decodeMorse(decodeBits('111000000000111')), 'EE');
// assert.strictEqual(decodeMorse(decodeBits('1')), 'E');
// assert.strictEqual(decodeMorse(decodeBits('11')), 'E');
// assert.strictEqual(decodeMorse(decodeBits('011')), 'E');
// assert.strictEqual(decodeMorse(decodeBits('110')), 'E');
// assert.strictEqual(decodeMorse(decodeBits('110011')), 'I');
// assert.strictEqual(decodeMorse(decodeBits('111110000011111')), 'I');
// assert.strictEqual(decodeMorse(decodeBits('1110111')), 'M');
// assert.strictEqual(decodeMorse(decodeBits('1110000000111')), 'T T');
// assert.strictEqual(decodeMorse(decodeBits('111000111')), 'TT');
// assert.strictEqual(decodeMorse(decodeBits('111000111000111')), 'TTT');
// assert.strictEqual(decodeMorse(decodeBits('111000000000111')), 'EE');
