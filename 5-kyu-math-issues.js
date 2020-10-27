// 5 kyu | Math Issues
// https://www.codewars.com/kata/5267faf57526ea542e0007fb/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

Oh no, our Math object was "accidently" reset. Can you re-implement some of
those functions? We can assure, that only non-negative numbers are passed as
arguments. So you don't have to consider things like undefined, null, NaN,
negative numbers, strings and so on.

Here is a list of functions, we need:

- Math.round()
- Math.ceil()
- Math.floor()

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

Math.round = function (number) {
  const part = number % 1;
  const whole = number - part;
  return (whole + (part < 0.5 ? 0 : 1)) | 0;
};

Math.ceil = function (number) {
  const part = number % 1;
  const whole = number - part;
  return (whole + (0 === part ? 0 : 1)) | 0;
};

Math.floor = function (number) {
  return number | 0;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(Math.round(0.4), 0, 'Math.round(0.4)');
strictEqual(Math.round(0.5), 1, 'Math.round(0.5)');

strictEqual(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
strictEqual(Math.ceil(0.5), 1, 'Math.ceil(0.5)');

strictEqual(Math.floor(0.4), 0, 'Math.floor(0.4)');
strictEqual(Math.floor(0.5), 0, 'Math.floor(0.5)');

// strictEqual(Math.round(1.4), 1);
// strictEqual(Math.round(2.4), 2);
