// 4 kyu | One Line Task: Squirrel And Tree
// https://www.codewars.com/kata/one-line-task-squirrel-and-tree/

/*

Since the weather was good, some students decided to go for a walk in the
park after the first lectures of the new academic year. There they saw a
squirrel, which climbed a tree in a spiral at a constant angle to the ground.
They calculated that in one loop the squirrel climbs h meters
(vertical height), the height of the tree is equal to H (v in Ruby), and
the length of its circumference equals S.

These calculations were exhausting, so now the students need your help to
figure out how many meters the path length of squirrel climbed when it
reached the tree top. The result should be rounded to 4 decimal places.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * This is the correct solution
 *
 * @param {number} h Rise from one revolution around the tree
 * @param {number} H Height of the tree
 * @param {number} S Circumference of the tree
 * @returns
 */
const squirrel = (h, H, S) =>
  parseFloat((((h ** 2 + S ** 2) ** 0.5 * H) / h).toFixed(4));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Unlocked solution; not wasting any more of my time time on this
// squirrel=(h,H,S)=>+Math.hypot(H,H*S/h).toFixed(4)
// Seriously, don't write code like that

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(squirrel(4, 16, 3), 20);

strictEqual(squirrel(4, 4, 3), 5);

strictEqual(squirrel(8, 9, 37), 42.5869);

strictEqual(squirrel(526, 682, 140), 705.7435);

strictEqual(squirrel(247, 857, 669), 2474.3392);

strictEqual(squirrel(2, 11, 47), 258.7339);

strictEqual(squirrel(73, 97, 244), 338.4185);

strictEqual(squirrel(15, 774, 948), 48922.923);

strictEqual(squirrel(21, 29, 60), 87.7856);

strictEqual(squirrel(83, 97, 86), 139.6799);
