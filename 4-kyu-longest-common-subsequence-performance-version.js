// 4 kyu | Longest Common Subsequence (Performance version)
// https://www.codewars.com/kata/longest-common-subsequence-performance-version

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   let result = '';
//   for (char of x) {
//     if (new RegExp([...(result + char)].join('.*')).test(y)) result += char;
//   }
//   console.log(result);
//   if (x.length === y.length) {
//     let r2 = '';
//     for (char of y) {
//       if (new RegExp([...(r2 + char)].join('.*')).test(x)) r2 += char;
//     }
//     console.log(r2);
//     if (result.length < r2.length) result = r2;
//   }
//   console.log(result);
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   const memo = new Set();
//   for (let char of x) {
//     if (0 === memo.size && new RegExp(`${char}.*`).test(y)) {
//       memo.add(char);
//       // console.log(char);
//       continue;
//     }
//     // console.log(char);
//     // console.log(memo);
//     for (let cand of memo) {
//       cand += char;
//       // console.log(cand);
//       if (memo.has(cand)) continue;
//       if (new RegExp([...cand].join('.*')).test(y)) memo.add(cand);
//     }
//   }
//   // console.log(memo);
//   let result = '';
//   for (cand of memo) if (result.length < cand.length) result = cand;
//   // console.log(result);
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   const temp = [...x].reduce((acc, curr) => {
//     for (let key of Object.keys(acc)) acc[`${key}${curr}`] = 0;
//     acc[curr] = 0;
//     return acc;
//   }, {});
//   const options = Object.keys(temp).sort(
//     ({ length: a }, { length: b }) => b - a,
//   );
//   for (let option of options) {
//     if (new RegExp([...option].join('.*')).test(y)) {
//       return option;
//     }
//   }
//   return '';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   const poss = {};
//   for (let c of [...x]) {
//     // console.log(c);
//     for (let key of Object.keys(poss)) poss[`${key}${c}`] = 0;
//     poss[c] = 0;
//   }
//   // console.log(poss);
//   const cand = {};
//   for (let p of Object.keys(poss)) {
//     const len = p.length;
//     if ('undefined' !== typeof cand[len]) continue;
//     if (new RegExp([...p].join('.*')).test(y)) cand[len] = p;
//   }
//   // console.log(cand);
//   const result = cand[Object.keys(cand).sort((a, b) => b - a)[0]];
//   return result || '';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   const possibilities = [...x].reduce((acc, curr) => {
//     for (let value of Array.from(acc)) acc.add(`${value}${curr}`);
//     return acc.add(curr);
//   }, new Set());
//   // console.log(possibilities);
//   const result = Array.from(possibilities).reduce(
//     (acc, curr) =>
//       acc.length < curr.length && new RegExp([...curr].join('.*')).test(y)
//         ? curr
//         : acc,
//     '',
//   );
//   // console.log(result);
//   return result || '';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) =>
//   y.length < x.length
//     ? lcs(y, x)
//     : Array.from(
//         [...x].reduce((acc, curr) => {
//           for (let value of Array.from(acc)) acc.add(`${value}${curr}`);
//           return acc.add(curr);
//         }, new Set()),
//       ).reduce(
//         (acc, curr) =>
//           acc.length < curr.length && new RegExp([...curr].join('.*')).test(y)
//             ? curr
//             : acc,
//         '',
//       ) || '';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   const possibilities = [...x].reduce((acc, curr) => {
//     for (let value of Array.from(acc)) acc.add(`${value}${curr}`);
//     return acc.add(curr);
//   }, new Set());
//   // console.log(possibilities);
//   const candidates = new Array(x.length).fill().map(u => []);
//   // console.log(candidates);
//   for (let possibility of possibilities) {
//     candidates[possibility.length - 1].push(possibility);
//   }
//   // console.log(candidates);
//   for (let i = candidates.length - 1; 0 <= i; i--) {
//     for (let j = candidates[i].length - 1; 0 <= j; j--) {
//       if (new RegExp([...candidates[i][j]].join('.*')).test(y)) {
//         return candidates[i][j];
//       }
//     }
//   }
//   return '';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   if (0 === x.length || 0 === y.length) return '';
//   const possibilities = [...x].reduce((acc, curr) => {
//     for (let value of Array.from(acc)) {
//       const temp = `${value}${curr}`;
//       if (!acc.has(temp) && new RegExp([...temp].join('.*')).test(y)) {
//         acc.add(temp);
//       }
//     }
//     if (!acc.has(curr) && -1 < y.indexOf(curr)) acc.add(curr);
//     // console.log(acc);
//     return acc;
//   }, new Set());
//   // console.log(possibilities);
//   const candidates = new Array(x.length).fill().map(u => []);
//   // console.log(candidates);
//   for (let possibility of possibilities) {
//     candidates[possibility.length - 1].push(possibility);
//   }
//   // console.log(candidates);
//   for (let i = candidates.length - 1; 0 <= i; i--) {
//     for (let j = candidates[i].length - 1; 0 <= j; j--) {
//       if (new RegExp([...candidates[i][j]].join('.*')).test(y)) {
//         return candidates[i][j];
//       }
//     }
//   }
//   return '';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
// const lcs = (x, y) => {
//   if (y.length < x.length) return lcs(y, x);
//   if (0 === x.length || 0 === y.length) return '';
//   y = [...y].filter(c => -1 < x.indexOf(c)).join('');
//   const possibilities = [...x].reduce((acc, curr) => {
//     for (let value of Array.from(acc)) {
//       const temp = `${value}${curr}`;
//       if (!acc.has(temp) && new RegExp([...temp].join('.*')).test(y)) {
//         acc.add(temp);
//       }
//     }
//     if (!acc.has(curr) && -1 < y.indexOf(curr)) acc.add(curr);
//     // console.log(acc);
//     return acc;
//   }, new Set());
//   // console.log(possibilities);
//   const candidates = new Array(x.length).fill().map(u => []);
//   // console.log(candidates);
//   for (let possibility of possibilities) {
//     candidates[possibility.length - 1].push(possibility);
//   }
//   // console.log(candidates);
//   for (let i = candidates.length - 1; 0 <= i; i--) {
//     for (let j = candidates[i].length - 1; 0 <= j; j--) {
//       if (new RegExp([...candidates[i][j]].join('.*')).test(y)) {
//         return candidates[i][j];
//       }
//     }
//   }
//   return '';
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} x
 * @param {string} y
 */
const lcs = (x, y) => {
  if (y.length < x.length) return lcs(y, x);
  if (0 === x.length || 0 === y.length) return '';
  y = [...y].filter(c => -1 < x.indexOf(c)).join('');
  const possibilities = [...x].reduce((acc, curr) => {
    for (let value of Array.from(acc)) {
      const temp = `${value}${curr}`;
      if (!acc.has(temp) && new RegExp([...temp].join('.*')).test(y)) {
        acc.add(temp);
      }
    }
    if (!acc.has(curr) && -1 < y.indexOf(curr)) acc.add(curr);
    // console.log(acc);
    return acc;
  }, new Set());
  // console.log(possibilities);
  const candidates = new Array(x.length).fill().map(u => []);
  // console.log(candidates);
  for (let possibility of possibilities) {
    candidates[possibility.length - 1].push(possibility);
  }
  // console.log(candidates);
  for (let i = candidates.length - 1; 0 <= i; i--) {
    for (let j = candidates[i].length - 1; 0 <= j; j--) {
      if (new RegExp([...candidates[i][j]].join('.*')).test(y)) {
        return candidates[i][j];
      }
    }
  }
  return '';
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

assert.strictEqual(lcs('', ''), '');
assert.strictEqual(lcs('abc', ''), '');
assert.strictEqual(lcs('', 'abc'), '');
assert.strictEqual(lcs('abc', 'abc'), 'abc');
assert.strictEqual(lcs('a', 'b'), '');
assert.strictEqual(lcs('a', 'a'), 'a');
assert.strictEqual(lcs('abc', 'ac'), 'ac');
assert.strictEqual(lcs('abcdef', 'abc'), 'abc');
assert.strictEqual(lcs('abcdef', 'acf'), 'acf');
assert.strictEqual(lcs('anothertest', 'notatest'), 'nottest');
assert.strictEqual(lcs('132535365', '123456789'), '12356');
assert.strictEqual(lcs('nothardlythefinaltest', 'zzzfinallyzzz'), 'final');
assert.strictEqual(
  lcs('abcdefghijklmnopq', 'apcdefghijklmnobq'),
  'acdefghijklmnoq',
);
