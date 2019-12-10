// 5 kyu | Blackjack Scorer
// https://www.codewars.com/kata/blackjack-scorer

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string[]} a
//  * @param {string[]} b
//  */
// const addArrays = (a, b) => {
//   const res = new Set();
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       res.add(a[i] + b[j]);
//     }
//   }
//   return [...res];
// };

// // console.log(addArrays([1, 11], [1, 11]));

// const scoreHand = cards => {
//   let scores = [];
//   for (const card of cards) {
//     let value = 0;
//     switch (card) {
//       case '2':
//         value = [2];
//         break;
//       case '3':
//         value = [3];
//         break;
//       case '4':
//         value = [4];
//         break;
//       case '5':
//         value = [5];
//         break;
//       case '6':
//         value = [6];
//         break;
//       case '7':
//         value = [7];
//         break;
//       case '8':
//         value = [8];
//         break;
//       case '9':
//         value = [9];
//         break;
//       case '10':
//         value = [10];
//         break;
//       case 'J':
//         value = [10];
//         break;
//       case 'Q':
//         value = [10];
//         break;
//       case 'K':
//         value = [10];
//         break;
//       case 'A':
//         value = [1, 11];
//         break;
//     }
//     if (0 === scores.length) {
//       scores = value;
//       continue;
//     }
//     scores = addArrays(scores, value);
//   }

//   console.log(scores);
//   console.log(true == scores.filter(s => s <= 21));
//   console.log(false == scores.filter(s => s <= 21));
//   console.log(scores.filter(s => s <= 21) || 'a');
//   console.log(scores.filter(s => 21 < s));

//   let underOrEqualTo21 = scores.filter(s => s <= 21);
//   console.log(underOrEqualTo21);
//   if (0 < underOrEqualTo21.length) return Math.max(...underOrEqualTo21);

//   let over21 = scores.filter(s => 21 < s);
//   console.log(over21);
//   if (0 < over21.length) return Math.min(...over21);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string[]} a
//  * @param {string[]} b
//  */
// const addArrays = (a, b) => {
//   const res = new Set();
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       res.add(a[i] + b[j]);
//     }
//   }
//   return [...res];
// };

// /**
//  * @param {string[]} a
//  * @param {string[]} b
//  */
// const addArrays = (a, b) => {
//   const res = new Array(a.length * b.length);
//   for (let i = 0, z = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++, z++) {
//       res[z] = a[i] + b[j];
//     }
//   }
//   return res;
// };

// const getValue = card => ('A' === card ? [1, 11] : [Number(card) || 10]);

// /**
//  * @param {string[]} cards
//  * @returns
//  */
// const scoreHand = cards => {
//   let scores = [];
//   for (const card of cards) {
//     let value = getValue(card);
//     if (0 === scores.length) {
//       scores = value;
//       continue;
//     }
//     scores = addArrays(scores, value);
//   }

//   let underOrEqualTo21 = scores.filter(s => s <= 21);
//   if (0 < underOrEqualTo21.length) return Math.max(...underOrEqualTo21);

//   let over21 = scores.filter(s => 21 < s);
//   if (0 < over21.length) return Math.min(...over21);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} a
//  * @param {number[]} b
//  * @returns {number[]}
//  */
// const crossJoinSum = (a, b) =>
//   a.reduce((acc, curr) => acc.concat(b.map(x => curr + x)), []);

// /**
//  * @param {string} card
//  * @returns {number[]}
//  */
// const cardValue = card => ('A' === card ? [1, 11] : [Number(card) || 10]);

// /**
//  * @param {string[]} cards
//  * @returns {number}
//  */
// const scoreHand = cards =>
//   cards
//     .map(c => cardValue(c))
//     .reduce((acc, curr) => crossJoinSum(acc, curr))
//     .reduce((acc, curr) => (curr <= 21 && 21 - curr < 21 - acc ? curr : acc));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string[]} cards
//  * @returns {number}
//  */
// const scoreHand = cards =>
//   cards
//     .map(card => ('A' === card ? [1, 11] : [Number(card) || 10]))
//     .reduce((acc1, curr1) =>
//       acc1.reduce((acc2, curr2) => acc2.concat(curr1.map(n => n + curr2)), []),
//     )
//     .reduce((acc, curr) => (curr <= 21 && 21 - curr < 21 - acc ? curr : acc));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} cards
 * @returns {number}
 */
const scoreHand = cards => {
  new
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(scoreHand(["3"]), 3);
strictEqual(scoreHand(["A"]), 11);
strictEqual(scoreHand(["A", "A"]), 12);
strictEqual(scoreHand(["A", "A", "A", "A"]), 14);
strictEqual(scoreHand(["A", "J"]), 21);
strictEqual(scoreHand(["A", "J", "A"]), 12);
strictEqual(scoreHand(["A", "J", "7"]), 18);
strictEqual(scoreHand(["8", "7", "A"]), 16);
strictEqual(scoreHand(["6", "5", "A", "3", "2", "A"]), 18);
strictEqual(scoreHand(["K", "4", "3", "2", "A"]), 20);
strictEqual(scoreHand(["A", "10", "2"]), 13);
strictEqual(scoreHand(["K", "4", "3", "2", "A", "Q"]), 30);
strictEqual(scoreHand(["5", "4", "3", "2", "A", "K"]), 25);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

  [1, 2]
+ [3, 4]
--------------
  [4, 5, 5, 6]

  [1, 2, 3]
+ [4, 5]
--------------
  [5, 6, 6, 7, 7, 8]

*/
