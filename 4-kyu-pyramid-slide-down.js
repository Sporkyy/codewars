// https://www.codewars.com/kata/pyramid-slide-down
// 4 kyu | Pyramid Slide Down

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class PyramidBlock {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    return this;
  }
}

class Pyramid {
  constructor(tiers) {
    this.pyramidion = null;
    if (0 === tiers.length) return;
    const nodes = [];
    for (let i = 0; i < tiers.length; i++) {
      for (let j = 0; j < tiers[i].length; j++) {
        tiers[i][j] = new PyramidBlock(tiers[i][j]);
      }
    }
    for (let i = 0; i < tiers.length; i++) {
      for (let j = 0; j < tiers[i].length; j++) {
        if ('undefined' !== typeof tiers[i + 1]) {
          tiers[i][j].left = tiers[i + 1][j];
          tiers[i][j].right = tiers[i + 1][j + 1];
        }
      }
    }
    this.pyramidion = tiers[0][0];
    return this;
  }
}

const longestSlideDown = pyramid => {
  const p = new Pyramid(pyramid);
  const slide = [];
  const recurseOfTheMummy = block => {
    const { val, left, right } = block;
    slide.push(val);
    if (left && right) recurseOfTheMummy(right.val < left.val ? left : right);
  };
  recurseOfTheMummy(p.pyramidion);
  // console.log(slide);
  // console.log(slide.reduce((a, c) => a + c));
  return slide.reduce((a, c) => a + c);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

//       3       |         [0,0]
//     7   4     |      [1,0]  [1,1]
//   2   4   6   |   [2,0]  [2,1]  [2,2]
// 8   5   9   3 | [3,0]  [3,1]  [3,2]  [3,3]

// console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));

// assert.strictEqual(
//   longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]),
//   23,
//   'should work for small pyramids',
// );

//                        75
//                      95  64
//                    17  47  82
//                  18  35  87  10
//                 20  4  82  47  65
//                19  1  23  75  3  34
//              88  2  77  73  7  63  67
//            99  65  4  28  6  16  70  92
//         41  41  26  56  83  40  80  70  33
//       41  48  72  33  47  32  37  16  94  29
//     53  71  44  65  25  43  91  52  97  51  14
//    70  11  33  28  77  73  17  78  39  68  17  57
//   91  71  52  38  17  14  91  43  58  50  27  29  48
//  63  66  4  68  89  53  67  30  73  16  69  87  40  31
// 4  62  98  27  23  9  70  98  73  93  38  53  60  4  23

console.log(
  longestSlideDown([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ]),
);

// assert.strictEqual(
//   longestSlideDown([
//     [75],
//     [95, 64],
//     [17, 47, 82],
//     [18, 35, 87, 10],
//     [20, 4, 82, 47, 65],
//     [19, 1, 23, 75, 3, 34],
//     [88, 2, 77, 73, 7, 63, 67],
//     [99, 65, 4, 28, 6, 16, 70, 92],
//     [41, 41, 26, 56, 83, 40, 80, 70, 33],
//     [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//     [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//     [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//     [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//     [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//     [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
//   ]),
//   1074,
//   'should work for medium pyramids',
// );
