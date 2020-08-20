// 6 kyu | Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001

/*

Write a function that takes in a string of one or more words, and returns the
same string, but with all five or more letter words reversed (Just like the name
of this Kata). Strings passed in will consist of only letters and spaces. Spaces
will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test" spinWords( "This is
another test" )=> returns "This is rehtona test"

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const spinWords = s =>
  s
    .split(' ')
    .map(word => (4 < word.length ? [...word].reverse().join('') : word))
    .join(' ');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(spinWords('Welcome'), 'emocleW');
strictEqual(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
strictEqual(spinWords('This is a test'), 'This is a test');
strictEqual(spinWords('This is another test'), 'This is rehtona test');
strictEqual(
  spinWords('You are almost to the last test'),
  'You are tsomla to the last test',
);
strictEqual(
  spinWords('Just kidding there is still one more'),
  'Just gniddik ereht is llits one more',
);
strictEqual(
  spinWords('Seriously this is the last one'),
  'ylsuoireS this is the last one',
);
