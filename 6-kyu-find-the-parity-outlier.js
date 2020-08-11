// 6 kyu | Find The Parity Outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

/*

You are given an array (which will have a length of at least 3, but could be
very large) containing integers. The array is either entirely comprised of odd
integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.

## Examples

`[2, 4, 0, 100, 4, 11, 2602, 36]`

Should return: 11 (the only odd number)

`[160, 3, 1719, 19, 11, 13, -21]`

Should return: 160 (the only even number)

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// You have passed all of the tests! :)

// const findOutlier = integers => {
//   const [one, two, three] = integers.map(n => Math.abs(n) % 2);
//   console.log(one, two, three);
//   if (one !== two && one !== three) return integers[0];
//   else if (two !== one && two !== three) return integers[1];
//   else if (three !== one && three !== two) return integers[2];
//   else return integers.filter(n => Math.abs(n) % 2 !== one)[0];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const findOutlier = integers => {
//   const [one, two, three] = integers.map(n => Math.abs(n) % 2);
//   if (one !== two && one !== three) return integers[0];
//   else if (two !== one && two !== three) return integers[1];
//   else if (three !== one && three !== two) return integers[2];
//   else return integers.filter(n => Math.abs(n) % 2 !== one)[0];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const findOutlier = (
//   integers,
//   targetMod = [1, 1, 0, 0][
//     integers.slice(0, 3).reduce((acc, curr) => acc + (Math.abs(curr) % 2), 0)
//   ],
// ) => integers.find(n => Math.abs(n) % 2 === targetMod);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const findOutlier = integers =>
  (targetMod => integers.find(n => Math.abs(n) % 2 === targetMod))(
    [1, 1, 0, 0][
      integers.slice(0, 3).reduce((acc, curr) => acc + (Math.abs(curr) % 2), 0)
    ],
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// strictEqual(findOutlier([0, 1, 2]), 1);
strictEqual(findOutlier([1, 2, 3]), 2);
strictEqual(findOutlier([2, 6, 8, 10, 3]), 3);
strictEqual(findOutlier([0, 0, 3, 0, 0]), 3);
strictEqual(findOutlier([1, 1, 0, 1, 1]), 0);
strictEqual(findOutlier([0, 1, 1]), 0);
strictEqual(findOutlier([1, 0, 1]), 0);
strictEqual(findOutlier([1, 1, 0]), 0);
strictEqual(findOutlier([1, 0, 0]), 1);
strictEqual(findOutlier([0, 1, 0]), 1);
strictEqual(findOutlier([0, 0, 1]), 1);
strictEqual(findOutlier([0, 0, 0, 1]), 1);
strictEqual(findOutlier([1, 1, 1, 0]), 0);
strictEqual(
  findOutlier([
    10412705,
    -166560461,
    -121421615,
    -192622773,
    -78614259,
    -42331461,
    -9034677,
    -9038749,
    121114927,
    24028977,
    68267221,
    74695045,
    -7372645,
    37307989,
    187226911,
    79716759,
    197593609,
    3689613,
    -37393519,
    164044096,
    -84726797,
    7948467,
    -10802753,
    146714649,
    -99900489,
    43324915,
    -156230557,
    4962109,
    81162623,
    -18399707,
    8856401,
    -174731207,
    170228661,
    -10709825,
    -83771979,
    -77153801,
    144087979,
  ]),
  164044096,
);
strictEqual(
  findOutlier([
    -128900489,
    -16794287,
    63075667,
    149518241,
    -174695257,
    115631995,
    -64986555,
    -15712259,
    24532155,
    -90331139,
    54569867,
    -112592083,
    -86075641,
    -114467267,
    150972127,
    176925172,
    120215619,
    47689521,
    25916827,
    -126152337,
    112758309,
    167828381,
    22334115,
    78318827,
    -160845635,
    -31036763,
    69452255,
    41977923,
    -176588815,
    27502735,
    -94039143,
    192776597,
    -48529903,
    105261787,
    60173573,
    28183571,
    154282973,
    174681505,
    -60294851,
    -59858665,
    -101299511,
    4200813,
    -12080535,
    76379525,
    -199369039,
    38196409,
    -14074473,
    -160275521,
    -62399757,
  ]),
  176925172,
);
