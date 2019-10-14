// 4 kyu | Decode the Morse code, advanced
// https://www.codewars.com/kata/decode-the-morse-code-advanced/

/*

In this kata you have to write a Morse code decoder for wired electrical
telegraph.
Electric telegraph is operated on a 2-wire line with a key that, when pressed,
connects the wires together, which can be detected on a remote station. The
Morse code encodes every character being transmitted as a sequence of "dots"
(short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

"Dot" – is 1 time unit long.
"Dash" – is 3 time units long.
Pause between dots and dashes in a character – is 1 time unit long.
Pause between characters inside a word – is 3 time units long.
Pause between words – is 7 time units long.
However, the standard does not specify how long that "time unit" is. And in
fact different operators would transmit at different speed. An amateur person
may need a few seconds to transmit a single character, a skilled professional
can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by
the hardware that checks the line periodically, and if the line is connected
(the key at the remote station is down), 1 is recorded, and if the line is not
connected (remote key is up), 0 is recorded. After the message is fully
received, it gets to you for decoding as a string containing only symbols
0 and 1.

For example, the message HEY JUDE, that is
···· · −·−− ·−−− ··− −·· ·
may be received as follows:
1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the
standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

Function decodeBits(bits), that should find out the transmission rate of the
message, correctly decode the message to dots ., dashes - and spaces
(one between characters, three between words) and return those as a string.
Note that some extra 0's may naturally occur at the beginning and the end of
a message, make sure to ignore them. Also if you have trouble discerning if
the particular sequence of 1's is a dot or a dash, assume it's a dot.

Function decodeMorse(morseCode), that would take the output of the previous
function and return a human-readable string.

NOTE: For coding purposes you have to use ASCII characters . and -, not
Unicode characters.

The Morse code table is preloaded for you as MORSE_CODE dictionary; in Java
MorseCode class is provided; in Haskell the codes are in a Map String String
and can be accessed like this: morseCodes ! ".--"; in Racket MORSE-CODE and
can be accessed like this: (hash-ref MORSE-CODE ".--"). Feel free to use this
preload.

All the test strings would be valid to the point that they could be reliably
decoded as described above, so you may skip checking for errors and
exceptions, just do your best in figuring out what the message is!

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
// const decodeBits = bits => {
//   bits = bits.replace(/^0*([01]+?)0*$/, '$1');
//   freq = 1;
//   if (bits.includes('0')) {
//     let [min, max] = [Infinity, 0];
//     for (let { length: len } of bits.match(/(0+)/g)) {
//       if (len < min) min = len;
//       if (max < len) max = len;
//     }
//     // console.log(min, max);
//     if (min < max) {
//       if (0 === min % 3) freq = min / 3;
//       else if (0 === max % 7) freq = max / 7;
//     } else {
//       if (1 < min && min < 3) freq = min;
//       else if (0 === min % 7) freq = min / 7;
//       else if (0 === min % 3) freq = min / 3;
//       else freq = min;
//     }
//   } else {
//     freq = bits.length;
//   }
//   // console.log(freq);
//   bits = bits.replace(new RegExp(`([01])\\1{${freq - 1}}`, 'g'), '$1');
//   // console.log(bits);
//   let morseCode = [];
//   for (let bWord of bits.split('0000000')) {
//     const mWord = [];
//     for (let bChar of bWord.split('000')) {
//       // console.log(bChar);
//       let mChar = bChar;
//       mChar = mChar.replace(/111/g, '-');
//       mChar = mChar.replace(/1/g, '.');
//       mChar = mChar.replace(/0/g, '');
//       mWord.push(mChar);
//     }
//     morseCode.push(mWord);
//   }
//   // console.log(morseCode);
//   morseCode = morseCode.map(w => w.join(' ')).join('   ');
//   // console.log(morseCode);
//   return morseCode;
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

/**
 * @param {string} bits
 */
const decodeBits = bits => {
  bits = bits.replace(/^0*([01]+?)0*$/, '$1');
  let freq = 1;
  if (bits.includes('0')) {
    let [min, max] = [Number.MAX_VALUE, Number.MIN_VALUE];
    for (let { length: len } of bits.match(/(0+)/g)) {
      if (len < min) min = len;
      if (max < len) max = len;
    }
    if (min < max) {
      if (0 === min % 3) freq = min / 3;
      else if (0 === max % 7) freq = max / 7;
    } else {
      if (2 === min) freq = 2;
      else if (0 === min % 3) freq = min / 3;
      else if (0 === min % 7) freq = min / 7;
      else freq = min;
    }
  } else {
    freq = bits.length;
  }
  bits = bits.replace(new RegExp(`([01])\\1{${freq - 1}}`, 'g'), '$1');
  let morseCode = [];
  for (let bWord of bits.split('0000000')) {
    const mWord = [];
    for (let bChar of bWord.split('000')) {
      let mChar = bChar;
      mChar = mChar.replace(/111/g, '-');
      mChar = mChar.replace(/1/g, '.');
      mChar = mChar.replace(/0/g, '');
      mWord.push(mChar);
    }
    morseCode.push(mWord);
  }
  morseCode = morseCode.map(w => w.join(' ')).join('   ');
  return morseCode;
};

/**
 * Copy+paste of my soltuion from previous kata
 * 6 kyu | Decode the Morse code
 * https://www.codewars.com/kata/decode-the-morse-code/
 *
 * @param {string} morseCode
 */
const decodeMorse = morseCode => {
  return morseCode
    .trim()
    .split(/\s{3,}/g)
    .map(word =>
      word
        .split(/\s+/)
        .map(code => MORSE_CODE[code])
        .join(''),
    )
    .join(' ');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// "HEY JUDE"
// console.log(
//   decodeBits(
//     '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011',
//   ),
// );
// console.log(
//   decodeMorse(
//     decodeBits(
//       '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011',
//     ),
//   ),
// );
strictEqual(
  decodeMorse(
    decodeBits(
      '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011',
    ),
  ),
  'HEY JUDE',
);

// Basic bits decoding
// Expected: 'EE', instead got: 'I'
// console.log(decodeBits('10001'));
strictEqual(decodeMorse(decodeBits('10001')), 'EE');
// console.log(decodeBits('1100000011'));
strictEqual(decodeMorse(decodeBits('1100000011')), 'EE');
// console.log(decodeBits('111000000000111'));
strictEqual(decodeMorse(decodeBits('111000000000111')), 'EE');
// console.log(decodeBits('11110000000000001111'));
// console.log(decodeMorse(decodeBits('11110000000000001111')));

// Multiple bits per dot handling
// console.log(decodeMorse(decodeBits('1')));
strictEqual(decodeMorse(decodeBits('1')), 'E');
// Expected: 'E', instead got: 'T'
// console.log(decodeMorse(decodeBits('111')));
strictEqual(decodeMorse(decodeBits('11')), 'E');
// Expected: 'E', instead got: 'G'
// How did I screw this one up?

// Extra zeros handling
// Expected: 'E', instead got: 'T'
strictEqual(decodeMorse(decodeBits('011')), 'E');

// Expected: 'E', instead got: 'T'
strictEqual(decodeMorse(decodeBits('110')), 'E');

// Expected: 'I', instead got: 'H'
strictEqual(decodeMorse(decodeBits('110011')), 'I');

// Expected: 'I', instead got: 'DD'
strictEqual(decodeMorse(decodeBits('111110000011111')), 'I');

// Expected: 'M', instead got: ''
strictEqual(decodeMorse(decodeBits('1110111')), 'M');

// "1110000000111" is a good test
// "- -" (runlength 1) is the only valid possibility
strictEqual(decodeMorse(decodeBits('1110000000111')), 'T T');

// "111000111" is ambigous
// both "- -" (runlength 1) as well as ".." (runlength 3) are valid
strictEqual(decodeMorse(decodeBits('111000111')), 'TT');

// "111000111000111" is ambigous
// both "- - -" (runlength 1) as well as "..." (runlength 3) are valid
strictEqual(decodeMorse(decodeBits('111000111000111')), 'TTT');

// "111000000000111" is a good test
// ". ." (runlength 3) is only 1 valid possibility
strictEqual(decodeMorse(decodeBits('111000000000111')), 'EE');
