// 5 kyu | Convert A Hex String To RGB
// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

/*

When working with color values it can sometimes be useful to extract the
individual red, green, and blue (RGB) component values for a color. Implement a
function that meets these requirements:

- Accepts a case-insensitive hexadecimal color string as its parameter (ex.
  `"#FF9933"` or `"#ff9933"`)
- Returns an object with the structure `{r: 255, g: 153, b: 51}` where r, g, and
  b range from 0 through 255

*Note*: your implementation does not need to support the shorthand form of
hexadecimal notation (ie `"#FFF"`)

## Example

"#FF9933" --> {r: 255, g: 153, b: 51}

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// const hexStringToRGB = hexString =>
//   (([, r, g, b]) => ({ r, g, b }))(
//     hexString.match(/^#(..)(..)(..)$/).map(hex => Number.parseInt(hex, 16)),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const hexStringToRGB = s =>
  (([r, g, b]) => ({ r, g, b }))(s.match(/(\w{2})/g).map(h => +`0x${h}`));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

deepStrictEqual(hexStringToRGB('#FF9933'), { r: 255, g: 153, b: 51 });
