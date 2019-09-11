// 4 kyu | Human readable duration format
// https://www.codewars.com/kata/human-readable-duration-format

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const formatDuration = seconds => {
  let duration = 'now';
  const units = [];
  const years = Math.trunc(seconds / (60 * 60 * 24 * 365));
  if (0 < years) {
    units.push(`${years} year${1 < years ? 's' : ''}`);
    seconds = seconds % (60 * 60 * 24 * 365);
  }
  const days = Math.trunc(seconds / (60 * 60 * 24));
  if (0 < days) {
    units.push(`${days} day${1 < days ? 's' : ''}`);
    seconds = seconds % (60 * 60 * 24);
  }
  const hours = Math.trunc(seconds / (60 * 60));
  if (0 < hours) {
    units.push(`${hours} hour${1 < hours ? 's' : ''}`);
    seconds = seconds % (60 * 60);
  }
  const minutes = Math.trunc(seconds / 60);
  if (0 < minutes) {
    units.push(`${minutes} minute${1 < minutes ? 's' : ''}`);
    seconds = seconds % 60;
  }
  if (0 < seconds) {
    units.push(`${seconds} second${1 < seconds ? 's' : ''}`);
  }
  if (0 < units.length) duration = units.join(', ');
  return duration.replace(/(.*),\s([^,]+)$/, '$1 and $2');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const assert = require('assert');

assert.strictEqual(formatDuration(1), '1 second');
assert.strictEqual(formatDuration(62), '1 minute and 2 seconds');
assert.strictEqual(formatDuration(120), '2 minutes');
assert.strictEqual(formatDuration(3600), '1 hour');
assert.strictEqual(formatDuration(3662), '1 hour, 1 minute and 2 seconds');
assert.strictEqual(
  formatDuration(36622222),
  '1 year, 58 days, 20 hours, 50 minutes and 22 seconds',
);
