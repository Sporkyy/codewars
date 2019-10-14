// 5 kyu | Directions Reduction
// https://www.codewars.com/kata/directions-reduction/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const dirVals = {
//   NORTH: 1,
//   SOUTH: -1,
//   EAST: 2,
//   WEST: -2,
// };

// function dirReduc(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     // console.log(dirVals[arr[i - 1]] + dirVals[arr[i]]);
//     if (0 === dirVals[arr[i - 1]] + dirVals[arr[i]]) {
//       // console.log(arr.slice(0, i - 1));
//       // console.log(arr.slice(i + 1, arr.length));
//       // console.log([...arr.slice(0, i - 1), ...arr.slice(i + 1, arr.length)]);
//       arr = [...arr.slice(0, i - 1), ...arr.slice(i + 1, arr.length)];
//       i -= 2;
//     }
//   }
//   return arr;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const dirVals = {
//   NORTH: 1,
//   SOUTH: -1,
//   EAST: 2,
//   WEST: -2,
// };

// function dirReduc(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (0 === dirVals[arr[i - 1]] + dirVals[arr[i]]) {
//       arr = [...arr.slice(0, i - 1), ...arr.slice(i + 1, arr.length)];
//       i -= 2;
//     }
//   }
//   return arr;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const dirVals = {
  NORTH: 1,
  SOUTH: -1,
  EAST: 2,
  WEST: -2,
};

function dirReduc(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (0 === dirVals[arr[i - 1]] + dirVals[arr[i]]) {
      arr.splice(i - 1, 2);
      i -= 2;
    }
  }
  return arr;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'EAST']));

// console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));

deepStrictEqual(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']),
  ['WEST'],
);

deepStrictEqual(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), [
  'NORTH',
  'WEST',
  'SOUTH',
  'EAST',
]);

deepStrictEqual(
  dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']),
  [],
);
