// 8 kyu | Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and
the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should
return [10, -65].

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const countPositivesSumNegatives = input =>
  !input || !input.length
    ? []
    : input.reduce(
        ([cnt, sum], n) => {
          if (0 < n) cnt++;
          else sum += n;
          return [cnt, sum];
        },
        [0, 0],
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(
  countPositivesSumNegatives([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15,
  ]),
  [10, -65],
);

deepStrictEqual(
  countPositivesSumNegatives([
    0,
    2,
    3,
    0,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
  ]),
  [8, -50],
);

deepStrictEqual(countPositivesSumNegatives(null), []);

deepStrictEqual(countPositivesSumNegatives([]), []);
