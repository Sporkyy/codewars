// 5 kyu | Merged String Checker
// https://www.codewars.com/kata/merged-string-checker

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} s
 * @param {string} part1
 * @param {string} part2
 */
const isMerge = (s, part1, part2) => {
  // for (let i = 0, p1 = 0, p2 = 0; i < s.length; i++) {
  //   console.log(i);
  // }
  const [sa, p1a, p2a] = [[...s], [...part1], [...part2]];
  let [sc, p1c, p2c] = [sa.shift(), p1a.shift(), p2a.shift()];
  while (sa.length && (p1a.length || p2a.length)) {
    if (sc === p1c) p1c = p1a.shift();
    else if (sc === p2c) p2c = p2a.shift();
    else break;
    sc = sa.shift();
    // console.log(sa);
  }
  // console.log(p1a, p2a);
  // console.log(sa.length + p1a.length + p2a.length);
  return 0 === sa.length + p1a.length + p2a.length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { ok } from 'assert';

ok(isMerge('codewars', 'code', 'wars'));
ok(isMerge('codewars', 'cdw', 'oears'));
ok(!isMerge('codewars', 'cod', 'wars'));
