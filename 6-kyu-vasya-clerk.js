// 6 kyu | Vasya - Clerk
// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

/*

The new "Avengers" movie has just been released! There are a lot of people at
the cinema box office standing in a huge line. Each of them has a single 100, 50
or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single
person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no
money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the
bills he has at hand at that moment. Otherwise return NO.

Examples:
- tickets([25, 25, 50]) // => YES
- tickets([25, 100]) // => NO. Vasya will not have enough money to give change
  to 100 dollars
- tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills
  to give 75 dollars of change (you can't make two bills of 25 from one of 50)

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const tickets = peopleInLine => {
//   const bills = new Map([
//     [100, 0],
//     [50, 0],
//     [25, 0],
//   ]);
//   for (const person of peopleInLine) {
//     // console.log('⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯');
//     // console.log(person);
//     bills.set(person, bills.get(person) + 1);
//     // console.log(bills);
//     let change = person - 25;
//     // console.log(change);
//     for (let [size, cnt] of bills.entries()) {
//       while (size <= change && 0 < cnt) {
//         change -= size;
//         cnt--;
//       }
//       bills.set(size, cnt);
//     }
//     // console.log(change);
//     if (0 !== change) return 'NO';
//   }
//   // console.log(bills);
//   return 'YES';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tickets = peopleInLine => {
  const bills = new Map([
    [100, 0],
    [50, 0],
    [25, 0],
  ]);
  for (const person of peopleInLine) {
    bills.set(person, bills.get(person) + 1);
    let change = person - 25;
    for (let [size, cnt] of bills.entries()) {
      while (size <= change && 0 < cnt) {
        change -= size;
        cnt--;
      }
      bills.set(size, cnt);
    }
    if (0 !== change) return 'NO';
  }
  return 'YES';
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(tickets([25, 25, 50]), 'YES');
strictEqual(tickets([25, 100]), 'NO');
strictEqual(tickets([25, 25, 50, 50]), 'YES');
strictEqual(tickets([25, 25, 100]), 'NO');
strictEqual(tickets([25, 50, 100]), 'NO');
strictEqual(tickets([25, 50, 25, 100]), 'YES');
strictEqual(tickets([25, 25, 25, 100]), 'YES');
strictEqual(tickets([25, 25, 25, 25, 100]), 'YES');
