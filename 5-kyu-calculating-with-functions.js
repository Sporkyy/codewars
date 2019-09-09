// 5 kyu | Calculating with Functions
// https://www.codewars.com/kata/calculating-with-functions

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const zero = s => (s ? eval(`0 ${s}`) : 0);
const one = s => (s ? eval(`1 ${s}`) : 1);
const two = s => (s ? eval(`2 ${s}`) : 2);
const three = s => (s ? eval(`3 ${s}`) : 3);
const four = s => (s ? eval(`4 ${s}`) : 4);
const five = s => (s ? eval(`5 ${s}`) : 5);
const six = s => (s ? eval(`6 ${s}`) : 6);
const seven = s => (s ? eval(`7 ${s}`) : 7);
const eight = s => (s ? eval(`8 ${s}`) : 8);
const nine = s => (s ? eval(`9 ${s}`) : 9);

const plus = n => `+ ${n}`;
const minus = n => `- ${n}`;
const times = n => `* ${n}`;
const dividedBy = n => `/ ${n}`;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

// console.log(one());
// console.log(one(plus()));
// console.log(one(plus(one())));

assert.strictEqual(seven(times(five())), 35);
assert.strictEqual(four(plus(nine())), 13);
assert.strictEqual(eight(minus(three())), 5);
assert.strictEqual(six(dividedBy(two())), 3);
