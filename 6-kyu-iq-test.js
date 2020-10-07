// 6 kyu | IQ Test
// https://www.codewars.com/kata/552c028c030765286c00007d

/*

Bob is preparing to pass IQ test. The most frequent task in this test is to find
out which one of the given numbers differs from the others. Bob observed that
one number usually differs from the others in evenness. Help Bob — to check his
answers, he needs a program that among the given numbers finds one that is
different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means
indexes of the elements start from 1 (not 0)

##Examples :

```
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
```

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {string} s
 * @returns {number}
 */
const iqTest = s => {
  const numbers = s.split(' ');
  const [odds, evens] = [[], []];
  for (let i = 0; i < numbers.length; i++) {
    if (0 === numbers[i] % 2) evens.push(i + 1);
    else odds.push(i + 1);
    if (1 < evens.length && 1 === odds.length) return odds[0];
    if (1 < odds.length && 1 === evens.length) return evens[0];
  }
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(iqTest('2 4 7 8 10'), 3);
strictEqual(iqTest('1 2 2'), 1);
