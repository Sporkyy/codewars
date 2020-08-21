// 5 kyu | Greed is Good
// https://www.codewars.com/kata/5270d0d18625160ada0000e4

/*

Greed is a dice game played with five six-sided dice. Your mission, should you
choose to accept it, is to score a throw according to these rules. You will
always be given an array with five six-sided dice values.

```
Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point
```

A single die can only be counted once in each roll. For example, a given "5" can
only count as part of a triplet (contributing to the 500 points) or as a single
50 points, but not both in the same roll.

Example scoring

```
Throw       Score
---------   ------------------
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
```

In some languages, it is possible to mutate the input to the function. This is
something that you should never do. If you mutate the input, you will not be
able to pass all the tests.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const score = dice => {
  const cnts = new Array(7).fill(0);
  const threes = [0, 1000, 200, 300, 400, 500, 600];
  const singles = [0, 100, 0, 0, 0, 50, 0];
  let score = 0;
  for (const die of dice) cnts[die]++;
  for (let i = 1; i < 7; i++) {
    score += threes[i] * Math.trunc(cnts[i] / 3);
    score += singles[i] * (cnts[i] % 3);
  }
  return score;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// It should value this as worthless
strictEqual(score([2, 3, 4, 6, 2]), 0);

// It should value this triplet correctly
strictEqual(score([4, 4, 4, 3, 3]), 400);

// It should value this mixed set correctly
strictEqual(score([2, 4, 4, 5, 4]), 450);

strictEqual(score([1, 1, 1, 1, 3]), 1100);

strictEqual(score([1, 1, 1, 1, 5]), 1150);

strictEqual(score([1, 5, 1, 3, 4]), 250);
