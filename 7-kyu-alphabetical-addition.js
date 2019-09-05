// 7 kyu | Alphabetical Addition
// https://www.codewars.com/kata/alphabetical-addition/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const addLetters = (...letters) => {
//   if (0 === letters.length) return 'z';
//   // console.log(letters);
//   const normVals = letters.map(c => c.charCodeAt(0) - 96);
//   // console.log(normVals);
//   const sum = normVals.reduce((a, c) => a + c, 0) - 1;
//   // console.log(sum);
//   return String.fromCharCode(97 + (sum % 26));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const addLetters = (...letters) => {
//   let sum = 0;
//   for (c of letters) sum += c.charCodeAt(0) - 96;
//   console.log(sum);
//   console.log(sum % 27);
//   // console.log(String.fromCharCode(97 + (sum % 27)));
//   // return String.fromCharCode(96 + (sum % 27));
//   // for (let i = 0; i )
//   // console.log(cnts);
//   // const sum = cnts.reduce((acc, curr) => (0 < curr ? acc + curr + 1 : acc));
//   // console.log(sum);
//   // console.log(String.fromCharCode(97 + sum));
//   // return String.fromCharCode(97 + sum);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const addLetters = (...letters) => {
  if (0 === letters.length) return 'z';
  const codes = letters.map(c => c.charCodeAt(0) - 96);
  const sum = codes.reduce((acc, curr) => acc + curr);
  return String.fromCharCode(97 + ((sum + 25) % 26));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

// a = 0 + b = 1 + c = 2 = 2 + 1 + 1
// a = 0 + b = 1 + c = 2 = f = 5
assert.strictEqual(addLetters('a', 'b', 'c'), 'f');

assert.strictEqual(addLetters('a', 'b'), 'c');

// console.log(addLetters('z'));
assert.strictEqual(addLetters('z'), 'z');

// console.log(addLetters('z', 'a'));
assert.strictEqual(addLetters('z', 'a'), 'a');

// Notice the letters overflowing
assert.strictEqual(addLetters('y', 'c', 'b'), 'd');

assert.strictEqual(addLetters(), 'z');
