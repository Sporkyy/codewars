// 4 kyu | Catching Car Mileage Numbers
// https://www.codewars.com/kata/catching-car-mileage-numbers/

/*

"7777...8?!??!", exclaimed Bob, "I missed it again! Argh!"

Every time there's an interesting number coming up, he notices and then
promptly forgets. Who doesn't like catching those one-off interesting
mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked
into his car's computer, and we have a box hooked up that reads mileage
numbers. We've got a box glued to his dash that lights up yellow or green
depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the
function that parses the mileage number input, and returns a 2 if the
number is "interesting" (see below), a 1 if an interesting number occurs
within the next two miles, or a 0 if the number is not interesting.

"Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the
following criteria:

- Any digit followed by all zeros: 100, 90000
- Every digit is the same number: 1111
- The digits are sequential, incementing†: 1234
- The digits are sequential, decrementing‡: 4321
- The digits are a palindrome: 1221 or 73837
- The digits match one of the values in the awesomePhrases array

† For incrementing sequences, 0 should come after 9, and not before 1,
  as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9,
  as in 3210.

So, you should expect these inputs and outputs:

// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2

Error Checking

- A number is only interesting if it is greater than 99!
- Input will always be an integer greater than 0, and less than 1,000,000,000.
- The awesomePhrases array will always be provided, and will always be an
  array, but may be empty. (Not everyone thinks numbers spell funny words...)
- You should only ever output 0, 1, or 2.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const reverseInt = n =>
  parseInt(
    n
      .toString()
      .split('')
      .reverse()
      .join(''),
    10,
  );

const isDigitFollowedByZeroes = n => /^[1-9]0+$/.test(n);
const isHomogenous = n => /^(\d)\1+$/.test(n);
const isIncrementing = n => '1234567890'.includes(n);
const isDecrementing = n => '9876543210'.includes(n);
const isPalindrome = n => n === reverseInt(n);

/**
 * @param {number} number
 * @param {number[]} awesomePhrases
 */
const isInteresting = (number, awesomePhrases) => {
  if (number < 98) return 0;
  const map = new Map();
  for (let i = number; i < number + 3; i++)
    if (99 < i) map.set(i, i === number ? 2 : 1);
  for (let [n, v] of map)
    if (
      isDigitFollowedByZeroes(n) ||
      isHomogenous(n) ||
      isIncrementing(n) ||
      isDecrementing(n) ||
      isPalindrome(n) ||
      awesomePhrases.includes(n)
    )
      return v;
  return 0;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// Defacto boring
strictEqual(isInteresting(0, []), 0);
strictEqual(isInteresting(3, [1337, 256]), 0);
strictEqual(isInteresting(97, []), 0);

// Digit Followed by Zeroes
strictEqual(isInteresting(100, []), 2);
strictEqual(isInteresting(98, []), 1);
strictEqual(isInteresting(99, []), 1);

// Incrementing
strictEqual(isInteresting(1234, []), 2);
strictEqual(isInteresting(889, []), 1);
strictEqual(isInteresting(890, []), 2);
strictEqual(isInteresting(1229, []), 0);
strictEqual(isInteresting(1230, []), 0);

// Decrementing
strictEqual(isInteresting(4321, []), 2);
strictEqual(isInteresting(4320, []), 1);
strictEqual(isInteresting(4322, []), 0);

// Close to, but not quite a palindrome
strictEqual(isInteresting(11208, [1337, 256]), 0);

// Palindrome
strictEqual(isInteresting(11211, [1337, 256]), 2);
strictEqual(isInteresting(11209, [1337, 256]), 1);

// In the awesomePhrases Array
strictEqual(isInteresting(1336, [1337, 256]), 1);
strictEqual(isInteresting(1337, [1337, 256]), 2);
