// 5 kyu | Blackjack Scorer
// https://www.codewars.com/kata/blackjack-scorer

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} a
 * @param {string[]} b
 */
const addArrays = (a, b) => {
  const res = new Set();
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      res.add(a[i] + b[j]);
    }
  }
  return [...res];
};

// console.log(addArrays([1, 11], [1, 11]));

const scoreHand = cards => {
  let scores = [];
  for (const card of cards) {
    let value = 0;
    switch (card) {
      case '2':
        value = [2];
        break;
      case '3':
        value = [3];
        break;
      case '4':
        value = [4];
        break;
      case '5':
        value = [5];
        break;
      case '6':
        value = [6];
        break;
      case '7':
        value = [7];
        break;
      case '8':
        value = [8];
        break;
      case '9':
        value = [9];
        break;
      case '10':
        value = [10];
        break;
      case 'J':
        value = [10];
        break;
      case 'Q':
        value = [10];
        break;
      case 'K':
        value = [10];
        break;
      case 'A':
        value = [1, 11];
        break;
    }
    if (0 === scores.length) {
      scores = value;
      continue;
    }
    scores = addArrays(scores, value);
  }

  console.log(scores);
  console.log(true == scores.filter(s => s <= 21));
  console.log(false == scores.filter(s => s <= 21));
  console.log(scores.filter(s => s <= 21) || 'a');
  console.log(scores.filter(s => 21 < s));

  let underOrEqualTo21 = scores.filter(s => s <= 21);
  console.log(underOrEqualTo21);
  if (0 < underOrEqualTo21.length) return Math.max(...underOrEqualTo21);

  let over21 = scores.filter(s => 21 < s);
  console.log(over21);
  if (0 < over21.length) return Math.min(...over21);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// Calculate scores with cards 2-10
strictEqual(scoreHand(['2', '3']), 5);
strictEqual(scoreHand(['7', '7', '8']), 22);
strictEqual(scoreHand(['4', '7', '8']), 19);

// should score J, Q and K as 10
strictEqual(scoreHand(['K', 'J', 'Q']), 30);

// should core hands with Aces correctly
strictEqual(scoreHand(['A', '3']), 14);
strictEqual(scoreHand(['A', 'A']), 12);
strictEqual(scoreHand(['A', '2', 'A', '9', '9']), 22);
