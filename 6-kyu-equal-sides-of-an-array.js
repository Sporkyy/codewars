// 6 kyu | Equal Sides Of An Array
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

/*

You are going to be given an array of integers. Your job is to take that array
and find an index N where the sum of the integers to the left of N is equal to
the sum of the integers to the right of N. If there is no index that would make
this happen, return -1.

## For example

Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the
index 3, because at the 3rd position of the array, the sum of left side of the
index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal
6.

Let's look at another one.

You are given the array {1,100,50,-51,1,1}: Your function will return the index
1, because at the 1st position of the array, the sum of left side of the index
({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

## Last one

You are given the array {20,10,-80,10,10,15,35}

At index 0 the left side is {}

The right side is {10,-80,10,10,15,35}

They both are equal to 0 when added. (Empty arrays are equal to 0 in this
problem)

Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of
an array starts at 0.

## Input

An integer array of length 0 < arr < 1000. The numbers in the array can be any
integer positive or negative.

## Output

The lowest index N where the side to the left of N is equal to the side to the
right of N. If you do not find an index that fits these rules, then you will
return -1.

## Note

If you are given an array with multiple answers, return the lowest correct
index.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// /**
//  * @param {number[]} arr
//  * @returns {number}
//  */
// const findEvenIndex = arr => {
//   const lSums = (sum => [0, ...arr.map(n => (sum += n))])(0);
//   console.log(lSums);
//   const rSums = lSums.map(n => lSums[lSums.length - 1] - n);
//   console.log(rSums);
//   lSums.pop();
//   // console.log(lSums);
//   rSums.shift();
//   // console.log(rSums);
//   for (let i = 0; i < arr.length; i++) if (lSums[i] === rSums[i]) return i;
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// /**
//  * @param {number[]} arr
//  * @returns {number}
//  */
// const findEvenIndex = arr => {
//   const lSums = (sum => [0, ...arr.map(n => (sum += n))])(0);
//   const rSums = lSums.map(n => lSums[lSums.length - 1] - n);
//   lSums.pop();
//   rSums.shift();
//   for (let i = 0; i < arr.length; i++) if (lSums[i] === rSums[i]) return i;
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

/**
 * @param {number[]} arr
 * @returns {number}
 */
const findEvenIndex = arr => {
  for (
    let i = 0, lSum = 0, rSum = arr.reduce((sum, n) => sum + n);
    i < arr.length;
    i++
  ) {
    rSum -= arr[i];
    if (lSum === rSum) return i;
    lSum += arr[i];
  }
  return -1;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3);

strictEqual(findEvenIndex([1, 100, 50, -51, 1, 1]), 1);

/*

|     |   1 | 100 |  50 | -51 |   1 |   1 |     |
|     |   0 |   1 | 101 | 151 | 100 | 101 | 102 |
| 102 | 101 |   1 | -49 |   2 |   1 |   0 |     |

*/

strictEqual(findEvenIndex([1, 2, 3, 4, 5, 6]), -1);

strictEqual(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3);

strictEqual(findEvenIndex([20, 10, -80, 10, 10, 15, 35]), 0);

/*

|    | 20 |  10 | -80 |  10 |  10 |  15 |  35 |    |
|    |  0 |  20 |  30 | -50 | -40 | -30 | -15 | 20 |
| 20 |  0 | -10 |  70 |  60 |  50 |  35 |  0  |    |

*/

strictEqual(findEvenIndex([10, -80, 10, 10, 15, 35, 20]), 6);

strictEqual(findEvenIndex([0, 8]), 1);

strictEqual(findEvenIndex([8]), 0);
