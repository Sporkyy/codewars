// 5 kyu | Coding with Squared Strings
// https://www.codewars.com/kata/coding-with-squared-strings/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {array} a
 * @returns {array}
 */
const anticlockwise = a => {
  if (0 === a.length || 0 === a[0].length) return [];
  const r = new Array(a[0].length).fill().map(u => new Array(a.length));
  for (let i = 0; i < a[0].length; i++) {
    for (let j = 0; j < a.length; j++) {
      r[i][j] = a[j][a[0].length - 1 - i];
    }
  }
  return r;
};

/**
 * @param {array} a
 * @returns {array}
 */
const clockwise = a => {
  if (0 === a.length || 0 === a[0].length) return [];
  const r = new Array(a[0].length).fill().map(u => new Array(a.length));
  for (let i = 0; i < a[0].length; i++) {
    for (let j = 0; j < a.length; j++) {
      r[i][j] = a[a[0].length - 1 - j][i];
    }
  }
  return r;
};

/**
 * @param {string} s
 * @returns {string}
 */
const code = s => {
  const len = s.length;
  const size = Math.ceil(Math.sqrt(len));
  const paddedLen = size ** 2;
  const padded = s.padEnd(paddedLen, String.fromCharCode(11));
  const square = [];
  for (let i = 0; i < paddedLen; i += size) {
    square.push([...padded.slice(i, i + size)]);
  }
  const rotated = clockwise(square);
  const formatted = rotated.map(a => a.join('')).join('\n');
  return formatted;
};

const decode = s => {
  const rotatable = s.replace(/\\v/g, String.fromCharCode(11));
  const square = rotatable.split('\n').map(l => [...l]);
  const rotated = anticlockwise(square);
  const formatted = rotated
    .map(a => a.join(''))
    .join('')
    .replace(/\v/g, '');
  return formatted;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const data1 =
  'What do you remember? When I looked at his streaky glasses, I wanted ' +
  'to leave him. And before that? He stole those cherries for me at ' +
  'midnight. We were walking in the rain and I loved him. And before that? ' +
  'I saw him coming toward me that time at the picnic, edgy, foreign.';

const data2 =
  "Some say the world will end in fire, Some say in ice. From what I've " +
  'tasted of desire I hold with those who favor fire. But if it had to ' +
  'perish twice, I think I know enough of hate To say that for destruction ' +
  'ice Is also great And would suffice.';

const data1Sol =
  '\vctg?.nadr d gdbW\n' +
  '\v,i    lnis tl eh\n' +
  '\v mtIAakietboaara\n' +
  '\veeo nnigsoe st?t\n' +
  '\vd wsddnh lfls   \n' +
  '\vgaaa  gtfeoeehWd\n' +
  '\vytrwbI .o rasiho\n' +
  '\v, d e i rtev,se \n' +
  '\v t hflnW h e  ny\n' +
  '\vfhmioo emot Is o\n' +
  '\voeemrvt eshh tIu\n' +
  '\vr   eehw eaiwr  \n' +
  '\veptc deea tmaelr\n' +
  '\viihot  rtc?.naoe\n' +
  '\vgcamhhre h  tkom\n' +
  '\vnntiaia meHAeyke\n' +
  '\v.i ntmiwirend em';

const data2Sol =
  'fa  h ttrheI ilS\n' +
  "itifakw   s'irdo\n" +
  'c cotnihftivce m\n' +
  'eAereocaihree,we\n' +
  '.n   wedroe . i \n' +
  '\vdIdT , es t Sls\n' +
  '\v seoe t.eIaFola\n' +
  '\vw s nIo   srm y\n' +
  '\voatso  Bwhtoee \n' +
  '\vulrautpuhoem nt\n' +
  '\vlsuyghetold sdh\n' +
  '\vdoc hir  d wa e\n' +
  '\v  tt niif ohyi \n' +
  '\vsgihoksfawfa nw\n' +
  '\vuroaf h vi ti o\n' +
  '\vfent I iotd nfr';

import { strictEqual } from 'assert';

// console.log(code(data1));
// console.log(decode(code(data1)));

strictEqual(code(data1), data1Sol);

strictEqual(code(data2), data2Sol);

strictEqual(code(''), '');

strictEqual(decode(''), '');

// console.log(decode(data2Sol));

strictEqual(decode(data2Sol), data2);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Clockwise

// 1 2 3 => 7 4 1
// 4 5 6 => 8 5 2
// 7 8 9 => 9 6 3

// [0, 0], [0, 1], [0, 2] => [2, 0], [1, 0], [0, 0]
// [1, 0], [1, 1], [1, 2] => [2, 1], [1, 1], [0, 1]
// [2, 0], [2, 1], [2, 2] => [2, 2], [1, 2], [0, 2]

// console.log(clockwise([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// Anticlockwise

// 1 2 3 => 3 6 9
// 4 5 6 => 2 5 8
// 7 8 9 => 1 4 7

// [0, 0], [0, 1], [0, 2] => [0, 2], [1, 2], [2, 2]
// [1, 0], [1, 1], [1, 2] => [0, 1], [1, 1], [2, 1]
// [2, 0], [2, 1], [2, 2] => [0, 0], [1, 0], [2, 0]

// console.log(anticlockwise([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
