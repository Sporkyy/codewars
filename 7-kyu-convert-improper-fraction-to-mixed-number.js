// 7 kyu | Convert Improper Fraction to Mixed Number
// https://www.codewars.com/kata/584acbee7d22f84dc80000e2

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {string} fraction
 * @returns {string}
 */
const getMixedNum = fraction => {
  const [num, denom] = fraction.split('/');
  const [quot, rem] = [Math.trunc(num / denom), num % denom];
  if (!quot) return fraction;
  if (!rem) return `${quot}`;
  return `${quot} ${Math.abs(rem)}/${denom}`;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(getMixedNum('18/11'), '1 7/11');
strictEqual(getMixedNum('13/5'), '2 3/5');
strictEqual(getMixedNum('75/10'), '7 5/10');
