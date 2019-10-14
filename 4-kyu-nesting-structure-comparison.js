// 4 kyu | Nesting Structure Comparison
// https://www.codewars.com/kata/nesting-structure-comparison/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Array.prototype.sameStructureAs = function(other) {
  const normalize = s => s.replace(/\"[^\"]\"/g, '').replace(/[^\[\],]/g, '');
  return normalize(JSON.stringify(this)) === normalize(JSON.stringify(other));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual([1, 1, 1].sameStructureAs([2, 2, 2]), true);

strictEqual([1, [1, 1]].sameStructureAs([2, [2, 2]]), true);

strictEqual([1, [1, 1]].sameStructureAs([[2, 2], 2]), false);

strictEqual([1, [1, 1]].sameStructureAs([[2], 2]), false);

strictEqual([[[], []]].sameStructureAs([[[], []]]), true);

strictEqual([[[], []]].sameStructureAs([[1, 1]]), false);

strictEqual([1, '[', ']'].sameStructureAs(['[', ']', 1]), true);
