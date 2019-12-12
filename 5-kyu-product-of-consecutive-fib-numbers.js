// 5 kyu | Product of consecutive Fib numbers
// https://www.codewars.com/kata/product-of-consecutive-fib-numbers

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const productFib = prod => {
  let [pen, ult] = [0, 1];
  while (pen * ult < prod) [pen, ult] = [ult, pen + ult];
  return [pen, ult, prod === pen * ult];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepEqual } from 'assert';

deepEqual(productFib(4895), [55, 89, true]);
deepEqual(productFib(5895), [89, 144, false]);
deepEqual(productFib(74049690), [6765, 10946, true]);
deepEqual(productFib(84049690), [10946, 17711, false]);
deepEqual(productFib(193864606), [10946, 17711, true]);
deepEqual(productFib(447577), [610, 987, false]);
deepEqual(productFib(602070), [610, 987, true]);
