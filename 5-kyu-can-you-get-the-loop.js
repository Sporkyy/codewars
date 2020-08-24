// 5 kyu | Can you get the loop ?
// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863

/*

You are given a node that is the beginning of a linked list. This list always
contains a tail and a loop.

Your objective is to determine the length of the loop.

For example in the following picture the tail's size is 3 and the loop size is
11.

Image and video hosting by TinyPic

```
// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next
Note: do NOT mutate the nodes!
```

Thanks to shadchnev, I broke all of the methods from the Hash class.

Don't miss dmitry's article in the discussion after you pass the Kata !!

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const loop_size = node => {
  const arr = [];
  let tmp = node;
  while (tmp.next) {
    if (arr.includes(tmp.next)) return arr.length - arr.indexOf(tmp.next);
    arr.push(tmp.next);
    tmp = tmp.next;
  }
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
  getNext() {
    return this.next;
  }
}

const createList = arr => {
  const nodes = [];
  for (let i = 0; i < arr.length; i++) {
    if (0 < i && arr[i] < arr[i - 1]) {
      nodes[i - 1].next = nodes[arr[i]];
      break;
    }
    const node = new Node(arr[i]);
    if (0 < i) nodes[i - 1].next = node;
    nodes.push(node);
  }
  // console.log(nodes);
  return nodes[0];
};

strictEqual(
  loop_size(createList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 4])),
  11,
);
