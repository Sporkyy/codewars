// 5 kyu | Calculating with Functions
// https://www.codewars.com/kata/calculating-with-functions

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const zero = s => (s ? Math.trunc(eval(`0 ${s}`)) : 0);
// const one = s => (s ? Math.trunc(eval(`1 ${s}`)) : 1);
// const two = s => (s ? Math.trunc(eval(`2 ${s}`)) : 2);
// const three = s => (s ? Math.trunc(eval(`3 ${s}`)) : 3);
// const four = s => (s ? Math.trunc(eval(`4 ${s}`)) : 4);
// const five = s => (s ? Math.trunc(eval(`5 ${s}`)) : 5);
// const six = s => (s ? Math.trunc(eval(`6 ${s}`)) : 6);
// const seven = s => (s ? Math.trunc(eval(`7 ${s}`)) : 7);
// const eight = s => (s ? Math.trunc(eval(`8 ${s}`)) : 8);
// const nine = s => (s ? Math.trunc(eval(`9 ${s}`)) : 9);

// const plus = n => `+ ${n}`;
// const minus = n => `- ${n}`;
// const times = n => `* ${n}`;
// const dividedBy = n => `/ ${n}`;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const zero = fn => (fn ? fn.call(this, 0, fn) : 0);
// const one = fn => (fn ? fn.call(this, 1, fn) : 1);
// const two = fn => (fn ? fn.call(this, 2, fn) : 2);
// const three = fn => (fn ? fn.call(this, 3, fn) : 3);
// const four = fn => (fn ? fn.call(this, 4, fn) : 4);
// const five = fn => (fn ? fn.call(this, 5, fn) : 5);
// const six = fn => (fn ? fn.call(this, 6, fn) : 6);
// const seven = fn => (fn ? fn.call(this, 7, fn) : 7);
// const eight = fn => (fn ? fn.call(this, 8, fn) : 8);
// const nine = fn => (fn ? fn.call(this, 9, fn) : 9);

// const plus = y => x => x + y;
// const minus = y => x => x - y;
// const times = y => x => x * y;
// const dividedBy = y => x => Math.trunc(x / y);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const zero = fn => (fn ? fn(0) : 0);
const one = fn => (fn ? fn(1) : 1);
const two = fn => (fn ? fn(2) : 2);
const three = fn => (fn ? fn(3) : 3);
const four = fn => (fn ? fn(4) : 4);
const five = fn => (fn ? fn(5) : 5);
const six = fn => (fn ? fn(6) : 6);
const seven = fn => (fn ? fn(7) : 7);
const eight = fn => (fn ? fn(8) : 8);
const nine = fn => (fn ? fn(9) : 9);

const plus = y => x => x + y;
const minus = y => x => x - y;
const times = y => x => x * y;
const dividedBy = y => x => Math.trunc(x / y);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// console.log(one());
// console.log(one(plus()));
// console.log(one(plus(one())));

strictEqual(seven(times(five())), 35);
strictEqual(four(plus(nine())), 13);
strictEqual(eight(minus(three())), 5);
strictEqual(six(dividedBy(two())), 3);
strictEqual(six(dividedBy(four())), 1);
