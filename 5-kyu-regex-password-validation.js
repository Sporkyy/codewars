// 5 kyu | Regex Password Validation
// https://www.codewars.com/kata/52e1476c8147a7547a000811

/*

You need to write regex that will validate a password to make sure it meets the
following criteria:

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number

Valid passwords will only be alphanumeric characters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const validate = password =>
  /.{6,}/.test(password) &&
  /[a-z]/.test(password) &&
  /[A-Z]/.test(password) &&
  /\d/.test(password) &&
  !/[^A-Za-z0-9]/.test(password);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

ok(validate('djI38D55'), 'djI38D55 - Expected true');
ok(!validate('a2.d412'), 'a2.d412 - Expected false');
ok(!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
ok(!validate('!fdjn345'), '!fdjn345 - Expected false');
ok(!validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
ok(!validate('123'), '123 - Expected false');
ok(!validate('abc'), 'abc - Expected false');
ok(validate('Password123'), 'Password123 - Expected true');
