// 6 kyu | The Supermarket Queue
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

/*

There is a queue for the self-checkout tills at the supermarket. Your task is
write a function to calculate the total time required for all the customers to
check out!

## input

- customers: an array of positive integers representing the queue. Each integer
  represents a customer, and its value is the amount of time they require to
  check out.
- n: a positive integer, the number of checkout tills.

## output

The function should return an integer, the total time required.

Important Please look at the examples and clarifications below, to ensure you
understand the task correctly :)

## Examples

```
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
```

## Clarifications
- There is only ONE queue serving many tills, and
- The order of the queue NEVER changes, and
- The front person in the queue (i.e. the first element in the array/list)
  proceeds to a till as soon as it becomes free.

N.B. You should assume that all the test input will be valid, as specified
above.

P.S. The situation in this kata can be likened to the
more-computer-science-related idea of a thread pool, with relation to running
multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)
// Completed in 9ms

// const queueTime = (customers, n) => {
//   // console.log(customers);
//   const queue = new Array(n).fill(0);
//   // console.log(queue);
//   let cnt = 0;
//   while (customers.length || !queue.every(till => 0 === till)) {
//     // console.log(cnt);
//     // console.log(queue);
//     while (customers.length && queue.includes(0))
//       queue[queue.indexOf(0)] += customers.shift();
//     // console.log(queue);
//     for (let i = 0; i < n; i++) if (0 < queue[i]) queue[i]--;
//     cnt++;
//   }
//   // console.log(queue, cnt);
//   return cnt;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)
// Completed in 5ms

// /**
//  * @param {number[]} customers
//  * @param {number} n
//  * @returns {number}
//  */
// const queueTime = (customers, n) => {
//   const queue = new Array(n).fill(0);
//   let time = 0;
//   while (customers.length || !queue.every(till => 0 === till)) {
//     while (customers.length && queue.includes(0))
//       queue[queue.indexOf(0)] += customers.shift();
//     for (let i = 0; i < n; i++) queue[i] = Math.max(0, queue[i] - 1);
//     time++;
//   }
//   return time;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)
// Completed in 2ms

// /**
//  * @param {number[]} customers
//  * @param {number} n
//  * @returns {number}
//  */
// const queueTime = (customers, n) => {
//   let tills = new Array(n).fill(0);
//   while (customers.length) {
//     tills[tills.indexOf(Math.min(...tills))] += customers.shift();
//   }
//   return Math.max(...tills);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// You have passed all of the tests! :)
// Completed in 2ms

/**
 * @param {number[]} customers
 * @param {number} n
 * @returns {number}
 */
const queueTime = (customers, n) =>
  Math.max(
    ...customers.reduce((tills, customer) => {
      tills[tills.indexOf(Math.min(...tills))] += customer;
      return tills;
    }, new Array(n).fill(0)),
  );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(queueTime([], 1), 0);
strictEqual(queueTime([1, 2, 3, 4], 1), 10);
strictEqual(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
strictEqual(queueTime([1, 2, 3, 4, 5], 100), 5);
strictEqual(queueTime([1, 2, 3, 4, 5], 10), 5);
