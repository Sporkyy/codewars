// 6 kyu | Binaries
// https://www.codewars.com/kata/binaries/train/javascript

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} strng
 */
const code = strng =>
  [...strng]
    .map(digit => {
      const bin = new Number(parseInt(digit, 10)).toString(2);
      const str = `${'0'.repeat(bin.toString().length - 1)}1${bin}`;
      return str;
    })
    .join('');

/**
 * @param {string} str
 * @returns
 */
const decode = str => {
  let digits = '';
  for (let i = 0, runLength = 1; i < str.length; i++) {
    if ('0' === str[i]) runLength++;
    else {
      digits = `${digits}${parseInt(str.slice(i + 1, i + 1 + runLength), 2)}`;
      i += runLength;
      runLength = 1;
    }
  }
  return digits;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(parseInt(0, 2));
// console.log(parseInt(111, 2));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(code('62'), '0011100110');

strictEqual(code('55337700'), '001101001101011101110011110011111010');

strictEqual(
  code('1119441933000055'),
  '1111110001100100110000110011000110010111011110101010001101001101',
);

strictEqual(code('69'), '00111000011001');

strictEqual(code('86'), '00011000001110');

strictEqual(code('07'), '10001111');

strictEqual(code('0'), '10');

strictEqual(code('7'), '001111');

strictEqual(decode('10001111'), '07');

strictEqual(
  decode(
    '001100001100001100001110001110001110011101110111001110001110001110001111001111001111001100001100001100',
  ),
  '444666333666777444',
);

strictEqual(
  decode(
    '01110111110001100100011000000110000011110011110111011100110000110001100110',
  ),
  '33198877334422',
);

strictEqual(
  decode(
    '0011010011010011011010101111110011000011000011000011100011100011100011100011100011100001100100011001000110011100011001001111001111001111001111001111001111',
  ),
  '55500011144466666699919777777',
);

strictEqual(
  decode(
    '01110111011111000110010011110011110011110011110011110011110111011101110110011001100110011001101111111010101100011001000110000001100000011000',
  ),
  '3331977777733322222211100019888',
);
