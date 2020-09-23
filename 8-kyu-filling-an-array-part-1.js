// 8 kyu | Filling an array (part 1)
// https://www.codewars.com/kata/filling-an-array-part-1/

/*

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0
to 4:

```
arr(5) // => [0,1,2,3,4]
```

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

// const arr = N => (!N ? [] : [...new Array(N).keys()]);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const arr = N => [...new Array(N || 0).keys()];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok, deepStrictEqual } from 'assert';

ok(arr() instanceof Array);
deepStrictEqual(arr(), []);
deepStrictEqual(arr(4), [0, 1, 2, 3]);
