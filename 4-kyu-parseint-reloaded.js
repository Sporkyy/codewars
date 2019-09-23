//
//

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const map = new Map([
//   ['', 0],
//   ['one', 1],
//   ['two', 2],
//   ['three', 3],
//   ['four', 4],
//   ['five', 5],
//   ['six', 6],
//   ['seven', 7],
//   ['eight', 8],
//   ['nine', 9],
//   ['ten', 10],
//   ['eleven', 11],
//   ['twelve', 12],
//   ['twenty', 20],
//   ['thirty', 30],
//   ['forty', 40],
//   ['fifty', 50],
//   ['sixty', 60],
//   ['seventy', 70],
//   ['eighty', 80],
//   ['ninety', 90],
// ]);

/**
 * @param {string} word
 */
// const parseInt = string => {
//   console.log(string);
//   string = string
//     .replace(/\s+and\s+/, ' ')
//     .replace('-', ' ')
//     .trim();

//   if (map.has(string)) return map.get(string);

//   let total = 0;
//   // let millions, thousands, hundreds, tens, ones;
//   // let [millions, thousands, hundreds, tens, ones] = [0, 0, 0, 0, 0];

//   // if (string.includes('million')) {
//   //   [millions, string] = string.split('million');
//   // }
//   // console.log(millions);
//   // // console.log(string);

//   // if (string.includes('thousand')) {
//   //   [thousands, string] = string.split('thousand');
//   //   console.log(thousands);
//   //   total += parseInt(thousands) * 1000;
//   // }
//   // console.log(string);

//   // Hundreds
//   if (string.includes('hundred')) {
//     // [, hundreds, string] = string.match(/(.*)\s+hundred\s+(.*)/);
//     // [hundreds, string] = string.split('hundred');
//     // console.log(hundreds);
//     // console.log(parseInt(hundreds) * 100);
//     // console.log(string);
//     // total += parseInt(hundreds) * 100;
//   }

//   // console.log(string);

//   // Tens
//   if (string.includes('ty')) {
//     // console.log(string.match(/(\w+ty)\s+(.*)/));
//     // console.log(string);
//     // console.log(string.match(/(\w+(?:teen|ty))\s*(.*)/));
//     // [, tens, string] = string.match(/(\w+(?teen|ty))\s*(.*)/);
//     // console.log(tens);
//     // total += parseInt(tens);
//   }

//   // Teens
//   if (string.includes('teen')) {
//     console.log(string.split('teen'));
//   }

//   // Ones
//   if (0 < string.trim().length) {
//     // total += parseInt(string);
//   }

//   return total;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} string
 */
const parseInt = string => {
  // console.log(string);
  string = string.trim();
  if (0 === string.length) return 0;

  if (/^\w+$/.test(string)) {
    // console.log(string);
    let total = 0;
    const prefixes = {
      ze: () => 0,
      on: () => 1,
      el: () => 1,
      tw: () => 2,
      th: () => 3,
      fo: () => 4,
      fi: () => 5,
      si: () => 6,
      se: () => 7,
      ei: () => 8,
      ni: () => 9,
      te: () => 10,
    };
    total += prefixes[string.slice(0, 2)]();
    if (string.includes('een') || string.includes('el')) total += 10;
    else if (string.includes('ty')) total *= 10;
    return total;
  }

  string = string.replace(/\s+and\s+/, ' ').replace('-', ' ');

  let total = 0;
  let [millions, thousands, hundreds, tens] = [0, 0, 0, 0, 0];

  if (string.includes('million')) {
    [millions, string] = string.split('million');
    total += parseInt(millions) * 1000000;
  }

  if (string.includes('thousand')) {
    [thousands, string] = string.split('thousand');
    total += parseInt(thousands) * 1000;
  }

  if (string.includes('hundred')) {
    [hundreds, string] = string.split('hundred');
    total += parseInt(hundreds) * 100;
  }

  if (string.includes('ty')) {
    [, tens, string] = string.match(/(\w+ty)\s*(.*)/);
    total += parseInt(tens);
  }

  total += parseInt(string);

  return total;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(parseInt('zero'), 0);
assert.strictEqual(parseInt('one'), 1);
assert.strictEqual(parseInt('two'), 2);
assert.strictEqual(parseInt('three'), 3);
assert.strictEqual(parseInt('four'), 4);
assert.strictEqual(parseInt('five'), 5);
assert.strictEqual(parseInt('six'), 6);
assert.strictEqual(parseInt('seven'), 7);
assert.strictEqual(parseInt('eight'), 8);
assert.strictEqual(parseInt('nine'), 9);
assert.strictEqual(parseInt('ten'), 10);

assert.strictEqual(parseInt('eleven'), 11);
assert.strictEqual(parseInt('twelve'), 12);
assert.strictEqual(parseInt('thirteen'), 13);
assert.strictEqual(parseInt('seventeen'), 17);

assert.strictEqual(parseInt('twenty'), 20);
assert.strictEqual(parseInt('twenty two'), 22);
assert.strictEqual(parseInt('forty-six'), 46);
assert.strictEqual(parseInt('ninety'), 90);
assert.strictEqual(parseInt('ninety four'), 94);

assert.strictEqual(parseInt('one hundred and eighty nine'), 189);
assert.strictEqual(parseInt('two hundred forty-six'), 246);

assert.strictEqual(
  parseInt('seven hundred eighty-three thousand nine hundred and nineteen'),
  783919,
);

assert.strictEqual(parseInt('one million'), 1000000);

assert.strictEqual(parseInt('forty-six million'), 46000000);

assert.strictEqual(
  parseInt(
    'nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine',
  ),
  999999999,
);

assert.strictEqual(parseInt('six hundred million'), 600000000);

assert.strictEqual(
  parseInt('eight hundred and seventy three million'),
  873000000,
);

assert.strictEqual(
  parseInt(
    'nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred and ninety-nine',
  ),
  999999999,
);
