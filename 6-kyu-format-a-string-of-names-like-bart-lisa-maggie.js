// 6 kyu | Format a string of names like 'Bart, Lisa & Maggie'.
// https://www.codewars.com/kata/53368a47e38700bd8300030d

/*

## Given

An array containing hashes of names

## Return

A string formatted as a list of names separated by commas except for the last
two names, which should be separated by an ampersand.

## Note

All the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time: 793ms
// Passed: 45
// Failed: 0
// You have passed all of the tests! :)

const list = names =>
  names.reduce(
    (acc, { name }, idx) =>
      `${acc}${!idx ? '' : idx < names.length - 1 ? ', ' : ' & '}${name}`,
    '',
  );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(
  list([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Homer' },
    { name: 'Marge' },
  ]),
  'Bart, Lisa, Maggie, Homer & Marge',
);

strictEqual(
  list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]),
  'Bart, Lisa & Maggie',
);

strictEqual(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa');

strictEqual(list([{ name: 'Bart' }]), 'Bart');

strictEqual(list([]), '');
