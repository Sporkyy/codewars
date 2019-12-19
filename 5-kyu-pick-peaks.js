// 5 kyu | Pick peaks
// https://www.codewars.com/kata/pick-peaks/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {Number[]} arr
//  * @return {Number[][]}
//  */
// const pickPeaks = arr => {
//   const [pos, peaks] = [[], []];
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] <= arr[i - 1] || arr[i] < arr[i + 1]) continue;
//     if (arr.slice(pos[pos.length - 1], i).every(n => n === arr[i])) continue;
//     if (arr.slice(0, i).every(n => n === arr[0])) continue;
//     if (arr.slice(i, -1).every(n => n === arr[arr.length - 1])) continue;
//     pos.push(i);
//     peaks.push(arr[i]);
//   }
//   console.log({ pos, peaks });
//   return { pos, peaks };
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {Number[]} arr
//  * @return {Number[][]}
//  */
// const pickPeaks = arr => {
//   const [pos, peaks] = [[], []];

//   for (let mid = 1; mid < arr.length - 1; mid++) {
//     let [left, right] = [mid - 1, mid + 1];
//     // while (arr[left] === arr[mid]) left++;
//     while (arr[right] === arr[mid]) right++;
//     // console.log(mid);
//     if (arr[left] < arr[mid] && arr[right] < arr[mid]) {
//       pos.push(mid);
//       peaks.push(arr[mid]);
//     }
//   }

//   // console.log({ pos, peaks });

//   return { pos, peaks };
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {Number[]} arr
 * @return {Number[][]}
 */
const pickPeaks = arr => {
  const [pos, peaks] = [[], []];
  for (let mi = 1; mi < arr.length - 1; mi++) {
    let [li, ri] = [mi - 1, mi + 1];
    while (arr[ri] === arr[mi]) ri++;
    if (arr[li] < arr[mi] && arr[ri] < arr[mi]) {
      pos.push(mi);
      peaks.push(arr[mi]);
    }
    mi = ri - 1;
  }
  return { pos, peaks };
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), {
  pos: [3, 7],
  peaks: [6, 3],
});

deepStrictEqual(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), {
  pos: [3, 7],
  peaks: [6, 3],
});

deepStrictEqual(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]), {
  pos: [3, 7, 10],
  peaks: [6, 3, 2],
});

deepStrictEqual(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]), {
  pos: [2, 4],
  peaks: [3, 2],
});

deepStrictEqual(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]), {
  pos: [2],
  peaks: [3],
});

deepStrictEqual(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), {
  pos: [2],
  peaks: [3],
});

deepStrictEqual(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]), {
  pos: [2],
  peaks: [3],
});

deepStrictEqual(
  pickPeaks([
    1, // 0
    2, // 1
    5, // 2
    4, // 3
    3, // 4
    2, // 5
    3, // 6
    6, // 7
    4, // 8
    1, // 9
    2, // 10
    3, // 11
    3, // 12
    4, // 13
    5, // 14
    3, // 15
    2, // 16
    1, // 17
    2, // 18
    3, // 19
    5, // 20
    5, // 21
    4, // 22
    3, // 23
  ]),
  { pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] },
);

deepStrictEqual(pickPeaks([]), { pos: [], peaks: [] });

deepStrictEqual(pickPeaks([1, 1, 1, 1]), { pos: [], peaks: [] });
