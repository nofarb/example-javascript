import { expect, test } from 'vitest';
import { square, cube, factorial } from './mathUtils';

test('square function', () => {
  expect(square(2)).toBe(4);
  expect(square(-3)).toBe(9);
});



// Intentionally leave factorial untested for now
