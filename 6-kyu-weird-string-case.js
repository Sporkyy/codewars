// 6 kyu | WeIrD StRiNg CaSe
// https://www.codewars.com/kata/weird-string-case/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const toWeirdCase = s =>
//   s
//     .split(' ')
//     .map(word => {
//       let i = 0;
//       return [...word]
//         .map(letter =>
//           0 === i++ % 2 ? letter.toUpperCase() : letter.toLowerCase(),
//         )
//         .join('');
//     })
//     .join(' ');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const toWeirdCase = s => {
//   let res = '';
//   for (let i = 0, j = 0; i < s.length; i++, j++) {
//     if (' ' === s[i]) {
//       j = -1;
//       res += ' ';
//       continue;
//     }
//     res += s[i][0 === j % 2 ? 'toUpperCase' : 'toLowerCase']();
//   }
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const toWeirdCase = s =>
  s
    .split(' ')
    .map(w =>
      [...w]
        .map((l, i) => l[0 === i % 2 ? 'toUpperCase' : 'toLowerCase']())
        .join(''),
    )
    .join(' ');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// Should return the correct value for a single word
strictEqual(toWeirdCase('This'), 'ThIs');
strictEqual(toWeirdCase('is'), 'Is');
// Should return the correct value for multiple words
strictEqual(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
