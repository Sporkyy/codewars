// 6 kyu | Berlin Clock
// https://www.codewars.com/kata/5a1463678ba9145a670000f9/train/javascript

/*

The "Berlin Clock" is the first public clock in the world that tells the time by
means of illuminated, coloured fields, for which it entered the Guinness Book of
Records upon its installation on 17 June 1975.

The clock is read from the top row to the bottom. The top row of four red fields
denote five full hours each, alongside the second row, also of four red fields,
which denote one full hour each, displaying the hour value in 24-hour format.
The third row consists of eleven yellow-and-red fields, which denote five full
minutes each (the red ones also denoting 15, 30 and 45 minutes past), and the
bottom row has another four yellow fields, which mark one full minute each. The
round yellow light on top blinks to denote even- (when lit) or odd-numbered
(when unlit) seconds.

Example: Two fields are lit in the first row (five hours multiplied by two, i.e.
ten hours), but no fields are lit in the second row; therefore the hour value is
10. Six fields are lit in the third row (five minutes multiplied by six, i.e.
thirty minutes), while the bottom row has one field on (plus one minute). Hence,
the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

Task: Write a function that takes in a particular time as 24h format
('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The
parameters should be as follows:

- “O” = Light off
- “R” = Red light
- “Y” = Yellow light

## Example Test Case
### Input String
```
12:56:01
```

## Output String
```
O
RROO
RROO
YYRYYRYYRYY
YOOO
```

Please check the example test cases for the required output format.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// const berlinClock = time => {
//   const [h, m, s] = time.split(':').map(Number);
//   // console.log(h, m, s);
//   const [nt, n1, n2, n3, n4] = [
//     s % 2,
//     Math.trunc(h / 5),
//     h % 5,
//     Math.trunc(m / 5),
//     m % 5,
//   ];
//   // console.log(`${nt}\n${n1}\n${n2}\n${n3}\n${n4}\n`);
//   const [top, row1, row2, row3, row4] = [
//     nt === 1 ? 'O' : 'Y',
//     'R'.repeat(n1).padEnd(4, 'O'),
//     'R'.repeat(n2).padEnd(4, 'O'),
//     'Y'.repeat(n3).padEnd(11, 'O').replace(/YYY/g, 'YYR'),
//     'Y'.repeat(n4).padEnd(4, 'O'),
//   ];
//   // console.log(`${top}\n${row1}\n${row2}\n${row3}\n${row4}\n`);
//   return `${top}\n${row1}\n${row2}\n${row3}\n${row4}`;
//   // O
//   // RROO
//   // RROO
//   // YYRYYRYYRYY
//   // YOOO
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// const berlinClock = time => {
//   const [h, m, s] = time.split(':').map(Number);
//   return [
//     s % 2 === 1 ? 'O' : 'Y',
//     'R'.repeat(Math.trunc(h / 5)).padEnd(4, 'O'),
//     'R'.repeat(h % 5).padEnd(4, 'O'),
//     'Y'
//       .repeat(Math.trunc(m / 5))
//       .padEnd(11, 'O')
//       .replace(/YYY/g, 'YYR'),
//     'Y'.repeat(m % 5).padEnd(4, 'O'),
//   ].join('\n');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// const berlinClock = (time, [h, m, s] = time.split(':').map(Number)) =>
//   [
//     s % 2 === 1 ? 'O' : 'Y',
//     'R'.repeat(Math.trunc(h / 5)).padEnd(4, 'O'),
//     'R'.repeat(h % 5).padEnd(4, 'O'),
//     'Y'
//       .repeat(Math.trunc(m / 5))
//       .padEnd(11, 'O')
//       .replace(/YYY/g, 'YYR'),
//     'Y'.repeat(m % 5).padEnd(4, 'O'),
//   ].join('\n');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const berlinClock = time =>
  (([h, m, s]) =>
    [
      s % 2 === 1 ? 'O' : 'Y',
      'R'.repeat(Math.trunc(h / 5)).padEnd(4, 'O'),
      'R'.repeat(h % 5).padEnd(4, 'O'),
      'Y'
        .repeat(Math.trunc(m / 5))
        .replace(/YYY/g, 'YYR')
        .padEnd(11, 'O'),
      'Y'.repeat(m % 5).padEnd(4, 'O'),
    ].join('\n'))(time.split(':').map(Number));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(berlinClock('12:56:01'), 'O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO');
/*
O
RROO
RROO
YYRYYRYYRYY
YOOO
*/

strictEqual(berlinClock('00:00:00'), 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO');

strictEqual(berlinClock('22:32:45'), 'O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO');
