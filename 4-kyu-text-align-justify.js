// 4 kyu | Text align justify
// https://www.codewars.com/kata/text-align-justify/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {String} str - inital string
//  * @param {Number} len - line length
//  */
// const justify = (str, len) => {
//   const separable = str.split(/\s+/);
//   const lines = [[]];
//   const lineLengths = [0];

//   for (const s of separable) {
//     const intersitialWidth = 0 === lineLengths[lineLengths.length - 1] ? 0 : 1;
//     const isNewLine =
//       30 < lineLengths[lineLengths.length - 1] + intersitialWidth + s.length;
//     // if (isNewLine) {
//     //   lines.push([s]);
//     //   lineLengths.push(s.length);
//     // } else {
//     //   lines[lines.length - 1].push(s);
//     //   lineLengths[lineLengths.length - 1] += s.length;
//     }
//   }

//   // console.log(lines);

//   const justified = lines.map(line => {
//     console.log(line);
//     const cntWords = line.length;
//     // console.log(cntWords);
//     const cntChars = line.reduce((acc, curr) => {
//       // console.log(curr);
//       // console.log(curr.length);
//       return acc + curr.length;
//     }, 0);
//     console.log(cntChars);
//     const spaceWidth = Math.trunc((30 - cntChars) / (cntWords - 1));
//     // console.log(spaceWidth);
//     const extraSpaces = (30 - cntChars) % (cntWords - 1);
//     // console.log(extraSpaces);
//     return line.reduce((acc, curr, idx, src) => {
//       let endPadded = curr;
//       if (idx < src.length - 1) endPadded += ' '.repeat(spaceWidth);
//       if (idx < extraSpaces) endPadded += ' ';
//       // console.log(endPadded);
//       return acc + endPadded;
//     }, '');
//   });

//   console.log(justified.join('\n'));

//   return justified.join('\n');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {String} str - inital string
//  * @param {Number} len - line length
//  */
// const justify = (str, len) => {
//   const chunks = str.split(/\s+/);
//   const lines = [[]];

//   for (const chunk of chunks) {
//     if (
//       len <
//       (0 === lines[lines.length - 1].length
//         ? 0
//         : lines[lines.length - 1].reduce((acc, curr) => acc + curr.length, 0) +
//           lines[lines.length - 1].length -
//           1) +
//         (0 === lines[lines.length - 1].length ? 0 : 1) +
//         chunk.length
//     ) {
//       lines.push([chunk]);
//     } else {
//       lines[lines.length - 1].push(chunk);
//     }
//   }

//   // console.log(lines);
//   // console.log(lines.map(line => line.join(' ')).join('\n'));

//   const justified = lines.map(line => {
//     // console.log(line);
//     const cntWords = line.length;
//     // console.log(cntWords);
//     const cntChars = line.reduce((acc, curr) => {
//       // console.log(curr);
//       // console.log(curr.length);
//       return acc + curr.length;
//     }, 0);
//     // console.log(cntChars);
//     const spaceWidth = Math.trunc((len - cntChars) / (cntWords - 1));
//     // console.log(spaceWidth);
//     const extraSpaces = (len - cntChars) % (cntWords - 1);
//     // console.log(extraSpaces);
//     return line.reduce((acc, curr, idx, src) => {
//       let endPadded = curr;
//       if (idx < src.length - 1) endPadded += ' '.repeat(spaceWidth);
//       if (idx < extraSpaces) endPadded += ' ';
//       // console.log(endPadded);
//       return acc + endPadded;
//     }, '');
//   });

//   // console.log(justified);
//   // console.log(justified.join('\n'));

//   // console.log(lines.slice(-1)[0].join(' '));

//   return justified
//     .slice(0, -1)
//     .concat(lines.slice(-1)[0].join(' '))
//     .join('\n');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 * @return {String}
 */
const justify = (str, len) => {
  const chunks = str.split(/\s+/);
  const lines = [[]];

  for (const chunk of chunks) {
    if (
      len <
      (0 === lines[lines.length - 1].length
        ? 0
        : lines[lines.length - 1].reduce((acc, curr) => acc + curr.length, 0) +
          lines[lines.length - 1].length -
          1) +
        (0 === lines[lines.length - 1].length ? 0 : 1) +
        chunk.length
    ) {
      lines.push([chunk]);
    } else {
      lines[lines.length - 1].push(chunk);
    }
  }

  const justified = lines.map(line => {
    const cntWords = line.length;
    const cntChars = line.reduce((acc, curr) => {
      return acc + curr.length;
    }, 0);
    const spaceWidth = Math.trunc((len - cntChars) / (cntWords - 1));
    const extraSpaces = (len - cntChars) % (cntWords - 1);
    return line.reduce((acc, curr, idx, src) => {
      let endPadded = curr;
      if (idx < src.length - 1) endPadded += ' '.repeat(spaceWidth);
      if (idx < extraSpaces) endPadded += ' ';
      return acc + endPadded;
    }, '');
  });

  return justified
    .slice(0, -1)
    .concat(lines.slice(-1)[0].join(' '))
    .join('\n');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(Math.floor(7 / 4));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const justified = 'Lorem                     amet';

// const justified = 'nunc,  at  aliquet orci. Fusce';

// const justified = `
// nunc,  at  aliquet orci. Fusce
// at   dolor   sit   amet  felis
// `.trim();

// const justified = `
// Lorem  ipsum  dolor  sit amet,
// consectetur  adipiscing  elit.
// `.trim();

const justified = `
Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.
`.trim();

// console.log(justified);

// console.log(justified.length);

const unjustified = justified.replace('\n', ' ').replace(/\s{2,}/gm, ' ');

// console.log(unjustified.length);

// console.log(unjustified);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// justify(unjustified, 30);
// console.log(justify(unjustified, 30));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(justify(unjustified, 30), justified);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

| Len | Items | Whitespaces | Spaces |    Grouped |
|  23 |     5 |           4 |      7 | 2, 2, 2, 1 |
|  26 |     3 |           2 |      4 |       2, 2 |

7 / 4 = 1
7 % 4 = 3

4 / 2 = 2
4 % 2 = 0

*/
