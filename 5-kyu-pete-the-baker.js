// 5 kyu | Pete, the baker
// https://www.codewars.com/kata/pete-the-baker/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const cakes = (recipe, available) => {
//   let cnt = Infinity;
//   for (const [ingredient, amount] of Object.entries(recipe)) {
//     // console.log(ingredient, amount);
//     cnt = Math.min(cnt, Math.trunc(available[ingredient] / amount));
//   }
//   // console.log(cnt || 0);
//   return cnt || 0;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const cakes = (recipe, available) =>
  Object.entries(recipe).reduce(
    (acc, [ingredient, amount]) =>
      Math.min(acc, Math.trunc(available[ingredient] / amount)),
    Infinity,
  ) || 0;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
  ),
  2,
);

strictEqual(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 },
  ),
  0,
);

strictEqual(cakes({ flour: 300, milk: 100 }, { flour: 2000, milk: 2000 }), 6);
