// 5 kyu | Human Readable Time
// https://www.codewars.com/kata/human-readable-time/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const humanReadable = seconds => {
  const hours = Math.trunc(seconds / (60 * 60));
  seconds %= 60 * 60;
  const minutes = Math.trunc(seconds / 60);
  seconds %= 60;
  return [hours, minutes, seconds]
    .map(t => t.toString().padStart(2, '0'))
    .join(':');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(humanReadable(0), '00:00:00');
strictEqual(humanReadable(5), '00:00:05');
strictEqual(humanReadable(60), '00:01:00');
strictEqual(humanReadable(86399), '23:59:59');
strictEqual(humanReadable(359999), '99:59:59');
