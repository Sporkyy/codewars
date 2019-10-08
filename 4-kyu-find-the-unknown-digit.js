// 4 kyu | Find the unknown digit
// https://www.codewars.com/kata/find-the-unknown-digit

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} exp
 */
const solveExpression = exp => {
  exp = exp
    .replace('=', '==')
    .replace(/\-\-/g, '- -')
    .replace(/\+\+/g, '+ +');
  for (let i = 0, tmp = exp; i <= 9; i++, tmp = exp) {
    if (tmp.includes(i)) continue;
    tmp = tmp.replace(/\?/g, i);
    if (/(?:^|[\+\-\*\=])0\d/.test(tmp)) continue;
    try {
      if (eval(tmp)) return i;
    } catch (err) {}
  }
  return -1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(solveExpression('1+1=?'), 2);
strictEqual(solveExpression('123*45?=5?088'), 6);
strictEqual(solveExpression('-5?*-1=5?'), 0);
strictEqual(solveExpression('19--45=5?'), -1);
strictEqual(solveExpression('??*??=302?'), 5);
strictEqual(solveExpression('?*11=??'), 2);
strictEqual(solveExpression('??*1=??'), 2);
strictEqual(solveExpression('??+??=??'), -1);

// Random tests (sampling)
strictEqual(solveExpression('?70*165=160050'), 9);

// Vexsome problems
strictEqual(solveExpression('0*?=0'), 1);
strictEqual(solveExpression('?*0=0'), 1);
strictEqual(solveExpression('?83850-68610=?15240'), 7);
strictEqual(solveExpression('-7715?5--484?00=-28?9?5'), 6);
strictEqual(solveExpression('50685?--1?5630=652?8?'), 4);
