// 6 kyu | Decode the Morse code
// https://www.codewars.com/kata/decode-the-morse-code/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const codes = {
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

const decodeMorse = morseCode => {
  return morseCode
    .trim()
    .split(/\s{3,}/g)
    .map(word =>
      word
        .split(/\s+/)
        .map(code => codes[code])
        .join(''),
    )
    .join(' ');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
assert.strictEqual(decodeMorse('.... . -.--     .--- ..- -.. .'), 'HEY JUDE');
assert.strictEqual(decodeMorse('...---...'), 'SOS');
assert.strictEqual(decodeMorse('...---... -.-.--'), 'SOS!');
assert.strictEqual(decodeMorse('     ...---...          '), 'SOS');
assert.strictEqual(decodeMorse('-.... .-.-.- ----.'), '6.9');
