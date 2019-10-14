// 5 kyu | Sum of Pairs
// https://www.codewars.com/kata/sum-of-pairs/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sum_pairs = (ints, s) => {
//   let result = [, Infinity];
//   for (let p1 = 0, p2 = 1, comp = s - ints[0]; p1 < ints.length; p2++) {
//     if (ints.length < p2) {
//       p1++;
//       p2 = p1 + 1;
//       comp = s - ints[p1];
//     }
//     // console.log(`p1=${p1} p2=${p2} comp=${comp}`);
//     if (ints[p2] === comp && p2 < result[1]) result = [p1, p2];
//   }
//   // console.log(result);
//   return 'undefined' !== typeof result[0]
//     ? [ints[result[0]], ints[result[1]]]
//     : undefined;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sum_pairs = (ints, s) => {
//   ints = ints.reverse();
//   let result = [, Infinity];
//   for (let p1 = 0, p2 = 1, comp = s - ints[0]; p1 < ints.length; p2++) {
//     if (ints.length < p2) {
//       p1++;
//       p2 = p1 + 1;
//       comp = s - ints[p1];
//     }
//     // console.log(`p1=${p1} p2=${p2} comp=${comp}`);
//     if (ints[p2] === comp && p2 < result[1]) result = [p1, p2];
//   }
//   // console.log(result);
//   return 'undefined' !== typeof result[0]
//     ? [ints[result[1]], ints[result[0]]]
//     : undefined;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sum_pairs = (ints, s) => {
//   const dict = {};
//   let firstP2;
//   for (let p1 = 0, p2 = 1, comp = s - ints[0]; p1 < ints.length; p2++) {
//     if (firstP2 && firstP2 < p2) p2 = Infinity;
//     if (ints.length < p2) {
//       p1++;
//       p2 = p1 + 1;
//       comp = s - ints[p1];
//     }
//     if (ints[p2] === comp) {
//       if (!firstP2) firstP2 = p2;
//       if ('undefined' === typeof dict[p2 - p1]) {
//         dict[p2 - p1] = [ints[p1], ints[p2]];
//       }
//       p2 = Infinity;
//     }
//   }
//   // console.log(dict);
//   if (0 === Object.keys(dict).length) return undefined;
//   // console.log(dict[Math.min(...Object.keys(dict).map(s => parseInt(s)))]);
//   return dict[Math.min(...Object.keys(dict).map(s => parseInt(s)))];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sum_pairs = (ints, s) => {
//   const dict = {};
//   for (let i = 0; i < ints.length; i++) {
//     if (dict.hasOwnProperty(ints[i])) dict[ints[i]].push(i);
//     else dict[ints[i]] = [i];
//   }
//   console.log(dict);
//   let num1Index = Infinity;
//   let num2Index = Infinity;
//   for (let i = 0; i < ints.length; i++) {
//     const comp = s - ints[i];
//     console.log(ints[i], comp);
//     if (!dict.hasOwnProperty(comp)) continue;
//     console.log(ints[i], comp);
//     let compI;
//     console.log(dict[comp]);
//     for (let j = 0; j < dict[comp].length; j++) {
//       if (i < dict[comp][j]) {
//         compI = j;
//         break;
//       }
//     }
//     if ('undefined' === typeof compI) continue;
//     console.log(i, compI);
//     console.log(ints[i], ints[compI]);
//     //   // console.log(indices);
//     //   if (i < compI && i + compI < indices[0] + indices[1]) {
//     //     indices = [i, compI];
//     //   }
//   }
//   // if (Infinity === indices[0]) return undefined;
//   // // console.log(indices);
//   // return [ints[indices[0]], ints[indices[1]]];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sum_pairs = (ints, s) => {
//   let indices = [Infinity, Infinity];
//   for (let i = 0; i < indices[1] && i < ints.length; i++) {
//     compI = ints.slice(i + 1).indexOf(s - ints[i]);
//     if (compI < 0) continue;
//     compI += i + 1;
//     if (-1 < compI && i < compI && i < indices[1] && compI < indices[1])
//       indices = [i, compI];
//   }
//   if (Infinity === indices[0]) return undefined;
//   return [ints[indices[0]], ints[indices[1]]];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const sum_pairs = (ints, s) => {
  let indices = [Infinity, Infinity];
  const seen = {};
  for (let i = 0; i < indices[1] && i < ints.length; i++) {
    if (seen.hasOwnProperty(ints[i])) continue;
    seen[ints[i]] = true;
    const ci = ints.indexOf(s - ints[i], i + 1);
    if (ci < 0 || indices[1] < ci) continue;
    indices = [i, ci];
  }
  if (Infinity === indices[0]) return undefined;
  return [ints[indices[0]], ints[indices[1]]];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(sum_pairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);

deepStrictEqual(sum_pairs([1, -2, 3, 0, -6, 1], -6), [0, -6]);

deepStrictEqual(sum_pairs([20, -13, 40], -7), undefined);

deepStrictEqual(sum_pairs([1, 2, 3, 4, 1, 0], 2), [1, 1]);

deepStrictEqual(sum_pairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);

deepStrictEqual(sum_pairs([4, -2, 3, 3, 4], 8), [4, 4]);

deepStrictEqual(sum_pairs([0, 2, 0], 0), [0, 0]);

deepStrictEqual(sum_pairs([5, 9, 13, -3], 10), [13, -3]);
