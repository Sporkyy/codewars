// 5 kyu | Merged String Checker
// https://www.codewars.com/kata/merged-string-checker

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @param {string} part1
//  * @param {string} part2
//  */
// const isMerge = (s, part1, part2) => {
//   // for (let i = 0, p1 = 0, p2 = 0; i < s.length; i++) {
//   //   console.log(i);
//   // }
//   const [sa, p1a, p2a] = [[...s], [...part1], [...part2]];
//   let [sc, p1c, p2c] = [sa.shift(), p1a.shift(), p2a.shift()];
//   while (sa.length && (p1a.length || p2a.length)) {
//     if (sc === p1c) p1c = p1a.shift();
//     else if (sc === p2c) p2c = p2a.shift();
//     else break;
//     sc = sa.shift();
//     // console.log(sa);
//   }
//   // console.log(p1a, p2a);
//   // console.log(sa.length + p1a.length + p2a.length);
//   return 0 === sa.length + p1a.length + p2a.length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @param {string} part1
//  * @param {string} part2
//  */
// const isMerge = (s, part1, part2) => {
//   // console.log({ s, part1, part2 });
//   let [ps, p1, p2] = [0, 0, 0];
//   while ((s[ps] === part1[p1] || s[ps] === part2[p2]) && ps < s.length) {
//     // console.log(ps);
//     console.log({ ps, p1, p2 });
//     console.log(s[ps]);
//     console.log(part1[p1]);
//     console.log(part2[p2]);
//     if (s[ps] === part1[p1]) {
//       ps++;
//       p1++;
//     } else if (s[ps] === part2[p2]) {
//       ps++;
//       p2++;
//     } else {
//       console.log('here');
//       break;
//     }
//   }
//   return ps === s.length && p1 === part1.length && p2 === part2.length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} s
 * @param {string} part1
 * @param {string} part2
 */
const isMerge = (s, part1, part2) =>
  s.length !== part1.length + part2.length
    ? false
    : 0 === s.length
    ? true
    : (s[0] === part1[0] && isMerge(s.slice(1), part1.slice(1), part2)) ||
      (s[0] === part2[0] && isMerge(s.slice(1), part1, part2.slice(1)));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { ok } from 'assert';

// Sample Cases
// ok(isMerge('codewars', 'code', 'wars'));
// ok(isMerge('codewars', 'cdw', 'oears'));
// ok(!isMerge('codewars', 'cod', 'wars'));

// Banana Case
// ok(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'));
// ok(isMerge('Bananas from Bahamas', 'Bananas from am', 'Bahas'));

// Extra Characters
ok(!isMerge('codewars', 'code', 'warss'));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

   s = Bananas from Bahamas |
part1 = Ba                   | has
part2 =                      | Bananas from am
-----------------------------+
   s =   nanas from Bahamas

   s = Bananas from Bahamas |
r1-p1 = Bananas from         | am
r2-p2 =              Ba      | has
r3-p1 =                ha    | s
-----------------------------+
                         mas

   s = Bananas from Bahamas |
Part1 = /Skip/               | Bahas
part2 = Bananas from         | am
part1 =              Bah     | as
part2 =                 am   |
part1 =                   as |

*/
