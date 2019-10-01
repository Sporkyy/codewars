// 4 kyu | Nesting Structure Comparison
// https://www.codewars.com/kata/nesting-structure-comparison/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Array.prototype.sameStructureAs = function(other) {
  const normalize = s => s.replace(/\"[^\"]\"/g, '').replace(/[^\[\],]/g, '');
  return normalize(JSON.stringify(this)) === normalize(JSON.stringify(other));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual([1, 1, 1].sameStructureAs([2, 2, 2]), true);

assert.strictEqual([1, [1, 1]].sameStructureAs([2, [2, 2]]), true);

assert.strictEqual([1, [1, 1]].sameStructureAs([[2, 2], 2]), false);

assert.strictEqual([1, [1, 1]].sameStructureAs([[2], 2]), false);

assert.strictEqual([[[], []]].sameStructureAs([[[], []]]), true);

assert.strictEqual([[[], []]].sameStructureAs([[1, 1]]), false);

assert.strictEqual([1, '[', ']'].sameStructureAs(['[', ']', 1]), true);
