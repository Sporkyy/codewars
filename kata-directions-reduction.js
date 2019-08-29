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

const dirVals = {
  NORTH: 1,
  SOUTH: -1,
  EAST: 2,
  WEST: -2,
};

function dirReduc(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (0 === dirVals[arr[i - 1]] + dirVals[arr[i]]) {
      arr = [...arr.slice(0, i - 1), ...arr.slice(i + 1, arr.length)];
      i -= 2;
    }
  }
  return arr;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'EAST']));

// console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));

assert.deepStrictEqual(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), [
  'WEST',
]);

assert.deepStrictEqual(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), [
  'NORTH',
  'WEST',
  'SOUTH',
  'EAST',
]);

assert.deepStrictEqual(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);
