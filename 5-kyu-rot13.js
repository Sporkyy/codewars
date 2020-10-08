// 5 kyu | ROT13
// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/

/*

How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur
rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can
decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13)
is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces,
punctuation, numbers etc. Test examples:

```
rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"
```

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// /**
//  * @param {string} str
//  * @returns {string}
//  */
// const rot13 = str => {
//   console.log(str);
//   let rotated = '';
//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);
//     if (64 < code && code < 91) {
//       code = code - 13;
//       if (code < 65) code = 91 - (65 - code);
//     } else if (96 < code && code < 123) {
//       code = code - 13;
//       if (code < 97) code = 123 - (97 - code);
//     }
//     rotated += String.fromCharCode(code);
//   }
//   return rotated;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {string} str
 * @returns {string}
 */
const rot13 = str => {
  let normal = 'abcdefghijklmnopqrstuvwxyz';
  let rotated = `${normal.slice(13, 26)}${normal.slice(0, 13)}`;
  normal = `${normal}${normal.toUpperCase()}`;
  rotated = `${rotated}${rotated.toUpperCase()}`;
  const map = new Map([...normal].map((n, i) => [n, rotated[i]]));
  return [...str].map(c => map.get(c) || c).join('');
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(rot13('EBG13 rknzcyr.'), 'ROT13 example.');

strictEqual(
  rot13('This is my first ROT13 excercise!'),
  'Guvf vf zl svefg EBG13 rkprepvfr!',
);
