// 6 kyu | Character with longest consecutive repetition
// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/

/*

For a given string s find the character c (or C) with longest consecutive
repetition and return:

```
[c, l]
```

where l (or L) is the length of the repetition. If there are two or more
characters with the same l return the first in order of appearance.

For empty string return:

```
["", 0]
```

Happy coding! :)

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)

/**
 * @param {string} s
 */
const longestRepetition = s => {
  let [left, right] = [0, 0];
  let [char, len] = ['', 0];
  while (right < s.length) {
    while (s[left] === s[right]) right++;
    if (len < right - left) [char, len] = [s[left], right - left];
    left = right++;
  }
  return [char, len];
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

deepStrictEqual(longestRepetition('aaaabb'), ['a', 4]);
deepStrictEqual(longestRepetition('bbbaaabaaaa'), ['a', 4]);
deepStrictEqual(longestRepetition('cbdeuuu900'), ['u', 3]);
deepStrictEqual(longestRepetition('abbbbb'), ['b', 5]);
deepStrictEqual(longestRepetition('aabb'), ['a', 2]);
deepStrictEqual(longestRepetition(''), ['', 0]);
deepStrictEqual(longestRepetition('ba'), ['b', 1]);
