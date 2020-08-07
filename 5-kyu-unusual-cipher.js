// 5 kyu | Unusual Cipher
// https://www.codewars.com/kata/5efdde81543b3b00153e918a

/*

## Task
Playfair cipher is a digram substitution cipher which unlike single letter
substitution cipher encrypts pairs of letters. In this kata, you're going to
implement the same.

## Input
A string s and key key both consist of letters from the English alphabet and
whitespace characters.

## Implementation
In this kata, the cipher is case insensitive.

## Matrix formation
A 5 by 5 matrix of unique letters is to be constructed. The matrix should
consist of letters from the string key + alphabet considering only the first
occurrence of each letter. As the number of letters in the alphabet is 26, we
would consider i and j to be the same. using playfair jexample as key

```
     P L A Y F
 (I/J) R E X M
     B C D G H
     K N O Q S
     T U V W Z
```

You have to construct 5X5 matrix with the letters of string and remaining
alphabets written in this matrix (with only first occurence)

Remember: if J comes before I in the key, then it's J that goes into the matrix
rather than I, in short whoever comes first goes into matrix but will be used as
both i and j

## Encryption
All examples used in this section use the above key matrix as ref.

- You have to deal only with letters so discard other characters.
- Insert x in between all pair of contiguous letters. (eg coddwars -> codxdwars
  or codddwars -> codxdxdwars) Note :Don't worry about inputs with consecutive
  xx, you'll never encounter them during the tests.
- Add x to make string length even.
- Break the given plaintext into pairs.
- For each pair:
  - If both letters are in the same row, then they are replaced by the letters
    to the immediate right of each one; LY →\to→ AF. (wrap around if required,
    e.g LF →\to→ AP).
  - If both letters are in the same column, then they are replaced by the letter
    immediately beneath each one; eo →\to→ dv. (wrap around if required)
  - If the digraph letters are neither in the same row nor the same column, the
    rule differs.
    - To encipher the first letter, look along its row until you reach the
      column containing the second letter; the letter at this intersection
      replaces the first letter.
    - To encipher the second letter, look along its row until you reach the
      column containing the first letter; the letter at the intersection
      replaces the second letter. ⇒\Rightarrow⇒ RO →\to→ EN.
- Now you have to insert space characters in the ciphered string so that they
  are matching there original position in the input string.".

## Output
> Ciphered text generated from the above steps in upper case.

## Example
- s = cozy lummox gives smart squid who asks for job pen
- key = playfair jexample
- key matrix = described above

After step 1, 2, 3:
> `s = cozylumxmoxgivesxsmartsquidwhoasksforjobpenx`

After step 4:
> `s = co zy lu mx mo xg iv es xs ma rt sq ui dw ho as ks fo ri ob pe nx`

After step 5:
> `ciphertext pairs = dn wf rl im es gq et mo mq ef iu ks tr gv ds fo nk as er
> kd ai`

After step 6:
> `ciphered text = dnwf rlimes gqetm omqef iukst rgv dsfo nka ser kda iqr`

Hence, output:
> `DNWF RLIMES GQETM OMQEF IUKST RGV DSFO NKA SER KDA IQR`

Enjoy!

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const encipher = (s, key) => {
//   console.log(s);
//   console.log(key);

//   let cipherText = s.toLowerCase();
//   cipherText = cipherText.replace(/[^a-z]/g, '');
//   cipherText = cipherText.replace(/(\w)(\1)/g, '$1x$2');
//   if (1 === cipherText.length % 2) cipherText += 'x';
//   // console.log(cipherText);

//   if (key.indexOf('j') < key.indexOf('i')) {
//     key = key.replace('i', '');
//     cipherText = cipherText.replace(/i/g, 'j');
//   }
//   if (key.indexOf('i') < key.indexOf('j')) {
//     key = key.replace('j', '');
//     cipherText = cipherText.replace(/j/g, 'i');
//   }
//   // console.log(cipherText);
//   // console.log(key);
//   key = key.toLowerCase();
//   key = [...new Set([...key.replace(/[^a-z]/g, '')])].slice(0, 25);
//   // console.log(key);
//   let iOrJ;
//   // const iOrJ = key.includes('i') && key.includes('j')
//   //   ? key.indexOf('j') < key.indexOf('i')
//   //   ? 'j'
//   //   : key.includes('j')
//   //   ? 'j'
//   //   : 'i'
//   if (key.includes('i') && key.includes('j')) {
//     if (key.indexOf('j') < key.indexOf('i')) iOrJ = 'j';
//     else iOrJ = 'i';
//   } else iOrJ = 'i';
//   const filler = `abcdefgh${iOrJ}klmnopqrstuvwxyz`;
//   // console.log(filler);
//   const matrix = key.concat(
//     [...filler].filter(c => new RegExp(`[^${key.join('')}]`).test(c)),
//   );
//   console.log(
//     matrix
//       .join('')
//       .match(/\w{0,5}/g)
//       .slice(0, 5)
//       .join('\n'),
//   );
//   const rows = new Array(5).fill('');
//   const cols = new Array(5).fill('');
//   for (let i = 0; i < 25; i++) {
//     rows[Math.trunc(i / 5)] += matrix[i];
//     cols[i % 5] += matrix[i];
//   }
//   // console.log(rows);
//   // console.log(cols);
//   // const tripRows = rows.map(row => `${row}${row}${row}`);
//   // console.log(tripRows);
//   // const tripCols = cols.map(col => `${col}${col}${col}`);
//   // console.log(tripCols);

//   cipherText = cipherText.match(/(\w\w?)/g);
//   // console.log(cipherText);

//   for (let i = 0; i < cipherText.length; i++) {
//     const [one, two] = [...cipherText[i]];
//     // console.log(one, two);
//     const [oneI, twoI] = [one, two].map(c => matrix.indexOf(c));
//     if (-1 === oneI) oneI = matrix.indexOf(iOrJ);
//     if (-1 === twoI) twoI = matrix.indexOf(iOrJ);
//     // console.log(oneI, twoI);
//     const [oneRow, twoRow] = [oneI, twoI].map(n => Math.trunc(n / 5) % 5);
//     // console.log(oneRow, twoRow);
//     const [oneCol, twoCol] = [oneI, twoI].map(n => n % 5);
//     // console.log(oneCol, twoCol);
//     // if (25 === twoI) [twoCol, twoRow] = [4, 4];
//     // if (25 === oneI) [oneCol, oneRow] = [4, 4];
//     let oneCiphered, twoCiphered;
//     if (oneRow === twoRow) {
//       [oneCiphered, twoCiphered] = [one, two].map(
//         c => rows[oneRow][(rows[oneRow].indexOf(c) + 1) % 5],
//       );
//     } else if (oneCol === twoCol) {
//       [oneCiphered, twoCiphered] = [one, two].map(
//         c => cols[oneCol][(cols[oneCol].indexOf(c) + 1) % 5],
//       );
//     } else {
//       oneCiphered = rows[oneRow][twoCol];
//       // console.log(twoRow);
//       // console.log('!', twoRow, tripRows[twoRow]);
//       twoCiphered = rows[twoRow][oneCol];
//       // [oneCiphered, twoCiphered] = [rows[oneRow][twoCol], rows[twoRow][oneCol]];
//     }
//     // console.log(oneCiphered, twoCiphered);
//     cipherText[i] = `${oneCiphered}${twoCiphered}`.toUpperCase();
//   }

//   // console.log(cipherText);
//   cipherText = cipherText.reduce((flat, pair) => [...flat, ...pair], []);
//   // console.log(cipherText);

//   for (let i = 0; i < s.length; i++) {
//     if (' ' === s[i]) cipherText.splice(i, 0, ' ');
//   }

//   // console.log(cipherText);

//   // console.log(cipherText.join(''));

//   return cipherText.join('');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const encipher = (s, key) => {
//   let cipherable = s
//     .toLowerCase()
//     .replace(/[^a-z]/g, '')
//     .replace(/(\w)(\1)/g, '$1x$2');
//   if (1 === cipherable.length % 2) cipherable += 'x';
//   console.log(cipherable);

//   // console.log(key);
//   key = [...new Set([...key.replace(/[^a-z]/g, '')])];
//   // console.log(key);
//   const matrix = key.concat(
//     [
//       ...`abcdefgh${
//         -1 < key.indexOf('j') && key.indexOf('j') < key.indexOf('i') ? 'i' : 'j'
//       }klmnopqrstuvwxyz`,
//     ].filter(c => new RegExp(`[^${key.join('')}]`).test(c)),
//   );
//   // console.log(matrix);
//   const rows = new Array(5).fill('');
//   const cols = new Array(5).fill('');
//   for (let i = 0; i < 25; i++) {
//     rows[Math.trunc(i / 5)] += matrix[i];
//     cols[i % 5] += matrix[i];
//   }
//   // console.log(rows);
//   // console.log(cols);

//   for (const [one, two] of cipherable.match(/\w\w/g)) {
//     // console.log(one, two);
//     const [oneI, twoI] = [one, two].map(c => matrix.indexOf(c));
//     if
//     console.log(one, oneI, two, twoI);
//     const [oneRow, twoRow] = [oneI, twoI].map(n => Math.trunc(n / 5) % 5);
//     // console.log(one, oneRow, two, twoRow);
//     const [oneCol, twoCol] = [oneI, twoI].map(n => n % 5);
//     // console.log(one, oneCol, two, twoCol);
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const encipher = (s, key) => {
//   console.log('----');
//   console.log(s);
//   console.log('----');
//   console.log(key);
//   console.log('----');
//   let cipherable = s
//     .toLowerCase()
//     .replace(/[^a-z]/g, '')
//     .replace(/(\w)(\1)/g, '$1x$2');
//   if (1 === cipherable.length % 2) cipherable += 'x';
//   console.log(cipherable);

//   // console.log(key);
//   const ij = (key.match(/[IJ]/i) || ['I'])[0].toUpperCase();
//   // console.log(ij);
//   let flatMatrix = [
//     ...new Set([
//       ...key
//         .toUpperCase()
//         .replace(/[^A-Z]/g, '')
//         .replace(/[IJ]/g, ij),
//     ]),
//   ];
//   console.log(flatMatrix);
//   const reNotKey = new RegExp(`[^${flatMatrix.join('')}]`);
//   flatMatrix = flatMatrix.concat(
//     [...`ABCDEFGH${ij}KLMNOPQRSTUVWXYZ`].filter(c => reNotKey.test(c)),
//   );
//   // console.log(matrix);
//   const rows = new Array(5).fill('');
//   const cols = new Array(5).fill('');
//   for (let i = 0; i < 25; i++) {
//     rows[Math.trunc(i / 5)] += flatMatrix[i];
//     cols[i % 5] += flatMatrix[i];
//   }
//   console.log(
//     flatMatrix
//       .join('')
//       .match(/\w{0,5}/g)
//       .slice(0, 5)
//       .join('\n'),
//   );
//   // console.log(rows);
//   // console.log(cols);

//   let cipherText = [];
//   for (const [one, two] of cipherable.match(/\w\w/g)) {
//     let [oneI, twoI] = [one, two].map(c => flatMatrix.indexOf(c.toUpperCase()));
//     if (-1 === oneI) oneI = flatMatrix.indexOf(ij);
//     if (-1 === twoI) twoI = flatMatrix.indexOf(ij);
//     // console.log(`idx: ${one} = ${oneI}, ${two} = ${twoI}`);
//     const [oneRow, twoRow] = [oneI, twoI].map(n => Math.trunc(n / 5) % 5);
//     // console.log(`row: ${one} = ${oneRow}, ${two} = ${twoRow}`);
//     const [oneCol, twoCol] = [oneI, twoI].map(n => n % 5);
//     // console.log(`col: ${one} = ${oneCol}, ${two} = ${twoCol}`);

//     let oneCiphered, twoCiphered;
//     if (oneRow === twoRow) {
//       oneCiphered = rows[oneRow][(oneCol + 1) % 5];
//       twoCiphered = rows[twoRow][(twoCol + 1) % 5];
//     } else if (oneCol === twoCol) {
//       oneCiphered = cols[oneCol][(oneRow + 1) % 5];
//       twoCiphered = cols[twoCol][(twoRow + 1) % 5];
//     } else {
//       oneCiphered = rows[oneRow][twoCol];
//       // console.log(twoRow);
//       // console.log('!', twoRow, tripRows[twoRow]);
//       twoCiphered = rows[twoRow][oneCol];
//       // [oneCiphered, twoCiphered] = [rows[oneRow][twoCol], rows[twoRow][oneCol]];
//     }
//     // console.log(oneCiphered, twoCiphered);
//     cipherText.push(`${oneCiphered}${twoCiphered}`);
//   }

//   // console.log(cipherText);
//   cipherText = cipherText.reduce((flat, pair) => [...flat, ...pair], []);
//   // console.log(cipherText);

//   for (let i = 0; i < s.length; i++)
//     if (' ' === s[i]) cipherText.splice(i, 0, ' ');

//   // console.log(cipherText);

//   // console.log(cipherText.join(''));

//   return cipherText.join('');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const encipher = (s, key) => {
  const ij = (key.match(/[IJ]/i) || ['I'])[0].toUpperCase();
  // console.log(ij);
  s = s.replace(/[ij]/gi, ij);
  key = key.replace(/[ij]/gi, ij);

  // console.log('----');
  // console.log(s);
  // console.log('----');
  // console.log(key);
  // console.log('----');
  let cipherable = s
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/(\w)(\1)/g, '$1x$2');
  if (1 === cipherable.length % 2) cipherable += 'x';
  console.log(cipherable);

  // console.log(key);
  key = key.toUpperCase();
  let flatMatrix = [...new Set([...key.replace(/[^A-Z]/g, '')])];
  console.log(flatMatrix);
  const reNotKey = new RegExp(`[^${flatMatrix.join('')}]`);
  flatMatrix = flatMatrix.concat(
    [...`ABCDEFGH${ij}KLMNOPQRSTUVWXYZ`].filter(c => reNotKey.test(c)),
  );
  // console.log(matrix);
  const rows = new Array(5).fill('');
  const cols = new Array(5).fill('');
  for (let i = 0; i < 25; i++) {
    rows[Math.trunc(i / 5)] += flatMatrix[i];
    cols[i % 5] += flatMatrix[i];
  }
  console.log(
    flatMatrix
      .join('')
      .match(/\w{0,5}/g)
      .slice(0, 5)
      .join('\n'),
  );
  // console.log(rows);
  // console.log(cols);

  let cipherText = [];
  for (const [one, two] of cipherable.match(/\w\w/g)) {
    let [oneI, twoI] = [one, two].map(c => flatMatrix.indexOf(c.toUpperCase()));
    if (-1 === oneI) oneI = flatMatrix.indexOf(ij);
    if (-1 === twoI) twoI = flatMatrix.indexOf(ij);
    // console.log(`idx: ${one} = ${oneI}, ${two} = ${twoI}`);
    const [oneRow, twoRow] = [oneI, twoI].map(n => Math.trunc(n / 5) % 5);
    // console.log(`row: ${one} = ${oneRow}, ${two} = ${twoRow}`);
    const [oneCol, twoCol] = [oneI, twoI].map(n => n % 5);
    // console.log(`col: ${one} = ${oneCol}, ${two} = ${twoCol}`);

    let oneCiphered, twoCiphered;
    if (oneRow === twoRow) {
      oneCiphered = rows[oneRow][(oneCol + 1) % 5];
      twoCiphered = rows[twoRow][(twoCol + 1) % 5];
    } else if (oneCol === twoCol) {
      oneCiphered = cols[oneCol][(oneRow + 1) % 5];
      twoCiphered = cols[twoCol][(twoRow + 1) % 5];
    } else {
      oneCiphered = rows[oneRow][twoCol];
      // console.log(twoRow);
      // console.log('!', twoRow, tripRows[twoRow]);
      twoCiphered = rows[twoRow][oneCol];
      // [oneCiphered, twoCiphered] = [rows[oneRow][twoCol], rows[twoRow][oneCol]];
    }
    // console.log(oneCiphered, twoCiphered);
    cipherText.push(`${oneCiphered}${twoCiphered}`);
  }

  // console.log(cipherText);
  cipherText = cipherText.reduce((flat, pair) => [...flat, ...pair], []);
  // console.log(cipherText);

  for (let i = 0; i < s.length; i++)
    if (' ' === s[i]) cipherText.splice(i, 0, ' ');

  // console.log(cipherText);

  // console.log(cipherText.join(''));

  return cipherText.join('');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const encipher = (s, key) => {
//   const ij = (key.match(/[ij]/i) || ['I'])[0].toUpperCase();
//   // console.log(ij);
//   s = s.replace(/[ij]/gi, ij);
//   key = key.replace(/[ij]/gi, ij);

//   // console.log(key);
//   key = key.toUpperCase();
//   let flatMatrix = [...new Set([...key.replace(/[^A-Z]/g, '')])];
//   console.log(flatMatrix);
//   const reNotKey = new RegExp(`[^${flatMatrix.join('')}]`);
//   flatMatrix = flatMatrix.concat(
//     [...`ABCDEFGH${ij}KLMNOPQRSTUVWXYZ`].filter(c => reNotKey.test(c)),
//   );
//   // console.log(matrix);
//   const rows = new Array(5).fill('');
//   const cols = new Array(5).fill('');
//   for (let i = 0; i < 25; i++) {
//     rows[Math.trunc(i / 5)] += flatMatrix[i];
//     cols[i % 5] += flatMatrix[i];
//   }
//   console.log(
//     flatMatrix
//       .join('')
//       .match(/\w{0,5}/g)
//       .slice(0, 5)
//       .join('\n'),
//   );
//   // console.log(rows);
//   // console.log(cols);

//   let cipherText = [];
//   for (const [one, two] of cipherable.match(/\w\w/g)) {
//     let [oneI, twoI] = [one, two].map(c => flatMatrix.indexOf(c.toUpperCase()));
//     // console.log(`idx: ${one} = ${oneI}, ${two} = ${twoI}`);
//     const [oneRow, twoRow] = [oneI, twoI].map(n => Math.trunc(n / 5) % 5);
//     // console.log(`row: ${one} = ${oneRow}, ${two} = ${twoRow}`);
//     const [oneCol, twoCol] = [oneI, twoI].map(n => n % 5);
//     // console.log(`col: ${one} = ${oneCol}, ${two} = ${twoCol}`);

//     let oneCiphered, twoCiphered;
//     if (oneRow === twoRow) {
//       oneCiphered = rows[oneRow][(oneCol + 1) % 5];
//       twoCiphered = rows[twoRow][(twoCol + 1) % 5];
//     } else if (oneCol === twoCol) {
//       oneCiphered = cols[oneCol][(oneRow + 1) % 5];
//       twoCiphered = cols[twoCol][(twoRow + 1) % 5];
//     } else {
//       oneCiphered = rows[oneRow][twoCol];
//       // console.log(twoRow);
//       // console.log('!', twoRow, tripRows[twoRow]);
//       twoCiphered = rows[twoRow][oneCol];
//       // [oneCiphered, twoCiphered] = [rows[oneRow][twoCol], rows[twoRow][oneCol]];
//     }
//     // console.log(oneCiphered, twoCiphered);
//     cipherText.push(`${oneCiphered}${twoCiphered}`);
//   }

//   // console.log(cipherText);
//   cipherText = cipherText.reduce((flat, pair) => [...flat, ...pair], []);
//   // console.log(cipherText);

//   for (let i = 0; i < s.length; i++)
//     if (' ' === s[i]) cipherText.splice(i, 0, ' ');

//   // console.log(cipherText);

//   // console.log(cipherText.join(''));

//   return cipherText.join('');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(
  encipher('Jackdaws love my big sphinx of quartz', 'playfair jexample'),
  'EPBNOEZQ ANAD XF KBH QFBRKE QY SVLIUWM',
);

strictEqual(
  encipher('Pack my box with five dozen liquor jugs', 'playfair jexample'),
  'LYBN XF DKG YBPS METD OSVRO PRNWNE RTHQ',
);

strictEqual(
  encipher(
    'The quick onyx goblin jumps over the lazy dwarf',
    'playfair jexample',
  ),
  'ZBX OTRBN QOXG DQCPRK RTIFK QADI UDM AYWF GVLEYM',
);

strictEqual(
  encipher('Cwm fjord bank glyphs vext quiz', 'playfair jexample'),
  'GUH MEKEC DPON CYFLSZ ADIW NWMT',
);

strictEqual(
  encipher(
    'How razorback jumping frogs can level six piqued gymnasts',
    'playfair jexample',
  ),
  'DSU XFVNEDPBN RTIFRKH YENHQ DLU RDARA KMI YXKVRG HFXOLKZQM',
);

strictEqual(
  encipher(
    'Cozy lummox gives smart squid who asks for job pen',
    'playfair jexample',
  ),
  //    'Cozy lummox gives smart squid who asks for job pen',
  //    'Cozy lummmo xgive sxsma rtsqu idw hoas ksf orj obpenx',
  /* */ 'DNWF RLIMES GQETM OMQEF IUKST RGV DSFO NKA SER KDAIQR',
);

// strictEqual(
//   encipher('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'),
//   'BCDEAKHIKKFPNOPLRSTUQZXYZV',
// );

strictEqual(
  encipher(
    ' jOgA v  iK NvpYWZtf alVTO  dilv Iy h clWF Vsfjsd bfEf VJtmJAitvdHRXRK  d OncgybQuVr  bBGE  Btsgh SsaOuLOW  tHKaRysOCxO gL B ToVPLV sb X fPsvgXGahNp Ih dLOR ekeC  pIYI eW  GH rmQhfxQ',
    'evbgrl Ahe x  q XhAtAN  j',
  ),
  ' CMVX B  NU KRKZYSDK LAECF  TCAE CW X JHSK EESTWJ RSLK ECNWMHNNEJQGQVP  C PJDXGRHVAE  GHGR  VEJYE LWLYXKSA  MYJLUNGZYFO CY X HECFRK AE W ELOFZBRCXHX DK MJTQ PGVF  GTMD WC  BS BXBPLXOLLQ',
);

strictEqual(
  encipher(
    'WsWRqKovWgZIO rQM M wifToiRgUmgOZLSoUpjC qiVcEoFvVpyJemXX ExtKOzVrxyStUw R  saw QAaFpCvv Rk C UWDv  Yzorn QKOvAlMezx   WVlUUTZ QcRZLCpIfP   iPH sfz KFKN iyCtI  C gqDXPQYr XEG',
    'KxH Ve  FnUj  QdOWZ    wyYcV R vTUpDyFPiHaLw BYIDE T R b dSQtmBYEn qNsIaoqlepdis RlShUji qM  Hr GCSR A DgPvJDPXJnJLX VudmW VseVRNmWHGC C Ax NfJSKm FlxuiWoHU o V mq y',
  ),
  'THOTFEZXYSPZR BJG V BZUUCZNABJSBYDMBWJTF PFQKPXYJKHEAZQVB VHHKHCHWYXPEOH S  WTT BTYYGERJ CP K HECX  TFZOE ZYWBOFEZXC   GGVOVZH SFHNPWFAPO   KLM ZJC ZMUH JDFDX  F QZRPFPEY OKAJOAHKBE',
);

// strictEqual(
//   encipher('j IfUgg frYyIkSdlBOhpQ zkHZMl', 'HxrwbbgXp AbHRoclDT'),
//   'K KDZPH CLWVWUKMULFHGW CKUQBSIT',
// );

strictEqual(
  encipher(
    ' J Gjfu s vuZGhFJpj Y  cJQW EPJmBgH FNjQ AoIjeX mgDZH vytMSs L AZ XjL P  gA  fjfox V CLMuk UFvDUt O kX Lbai Uvjyk K LEzbyIJ WLnIUkQRVmSP bDZrH   WD s',
    'lK nOPjeGuOueiF  GVL LLTWG oPfR akSYkOicBdL X bPGpYK XI tJse KW rcUKdjlVdyBiVO jMdf R Ar GHIL tvEJdHpQN o WibYqgZcMw fJTQnRbmd LrjHw  z mnNOstC EOWp   C SO xKiAtqvdooRmxzKzB mzrY BDDp NYO Rv tFr z',
  ),
  ' E UEJJ B RJHFZGFLE S  SGHR FKEXCUZ GLGZ RLUEGM HFCXQ TSYKXL X JD PLV K  LF  WJEUP L SSNQE OEJABF R KL MOSV FJRES L MNKFMDC VVVNLGEOOBTX DLDSQ   AN CSY',
);

// strictEqual(encipher('', ''), '');
