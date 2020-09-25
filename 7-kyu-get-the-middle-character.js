// 7 kyu | Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028

/*

You are going to be given a word. Your job is to return the middle character of
the word. If the word's length is odd, return the middle character. If the
word's length is even, return the middle 2 characters.

## Examples

```
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
```

## Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly
more than 1000 in some test cases due to an error in the test cases). You do not
need to test for this. This is only here to tell you that you do not need to
worry about your solution timing out.

## Output

The middle character(s) of the word represented as a string.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

const getMiddle = s => {
  const a = [...s];
  while (2 < a.length) {
    a.shift();
    a.pop();
  }
  return a.join('');
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(getMiddle('test'), 'es');
strictEqual(getMiddle('testing'), 't');
strictEqual(getMiddle('middle'), 'dd');
strictEqual(getMiddle('A'), 'A');
