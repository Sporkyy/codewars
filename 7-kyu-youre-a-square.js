// 7 kyu | You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

/*

# A square of squares

You like building blocks. You especially like building blocks that are squares.
And what you even like more, is to arrange them into a square of square building
blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up
with an ordinary rectangle! Those blasted things! If you just had a way to know,
whether you're currently working in vain… Wait! That's it! You just have to
check if your number of building blocks is a perfect square.

## Task

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the
square of an integer; in other words, it is the product of some integer with
itself.

The tests will always use some integral number, so don't worry about that in
dynamic typed languages.

## Examples

```
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
```

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const isSquare = n => 0 === Math.sqrt(n) % 1;

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

ok(!isSquare(-1), '-1: Negative numbers cannot be square numbers');
ok(isSquare(0), '0 is a square number (0 * 0)');
ok(!isSquare(3), '3 is not a square number');
ok(isSquare(4), '4 is a square number (2 * 2)');
ok(isSquare(25), '25 is a square number (5 * 5)');
ok(!isSquare(26), '26 is not a square number');
