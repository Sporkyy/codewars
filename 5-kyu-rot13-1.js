// 5 kyu | Rot13
// https://www.codewars.com/kata/rot13-1/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const upper = [...new Array(26).keys()].map(n => String.fromCharCode(n + 65));
// const lower = [...new Array(26).keys()].map(n => String.fromCharCode(n + 97));

// const upperRotated = [...upper];
// const lowerRotated = [...lower];

// const map = new Map();

// for (let i = 0; i < 13; i++) {
//   [upper[i], upper[i + 13]] = [upper[i + 13], upper[i]];
//   [lower[i], lower[i + 13]] = [lower[i + 13], lower[i]];
// }

// for (let i = 0; i < 26; i++) {
//   map.set(upper[i], upperRotated[i]);
//   map.set(lower[i], lowerRotated[i]);
// }

// const rot13 = message =>
//   [...message].map(c => (map.has(c) ? map.get(c) : c)).join('');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const rotatedCharCodes = [...new Array(128).keys()];

for (let i = 0; i < 13; i++) {
  [
    rotatedCharCodes[65 + i],
    rotatedCharCodes[65 + i + 13],
    rotatedCharCodes[97 + i],
    rotatedCharCodes[97 + i + 13],
  ] = [
    rotatedCharCodes[65 + i + 13],
    rotatedCharCodes[65 + i],
    rotatedCharCodes[97 + i + 13],
    rotatedCharCodes[97 + i],
  ];
}

const rot13 = message =>
  [...message]
    .map(c => String.fromCharCode(rotatedCharCodes[c.charCodeAt(0)]))
    .join('');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log(rot13('a-b-c'));
console.log(rot13('test'));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// import { strictEqual } from 'assert';

// strictEqual(rot13('test'), 'grfg');

// strictEqual(rot13('Test'), 'Grfg');
