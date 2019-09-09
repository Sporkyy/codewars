<?php

// 8 kyu | Even or Odd
// https://www.codewars.com/kata/even-or-odd/

// function even_or_odd(int $n): string
// {
//   return 0 === $n % 2 ? 'Even' : 'Odd';
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function even_or_odd(int $n): string
{
  return $n & 1 ? 'Odd' : 'Even';
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

assert(even_or_odd(2) === 'Even');
assert(even_or_odd(0) === 'Even');
assert(even_or_odd(7) === 'Odd');
assert(even_or_odd(1) === 'Odd');
