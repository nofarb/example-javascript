import { expect, test } from 'vitest';
import { square, cube, factorial } from './mathUtils';

test('square function', () => {
  expect(square(2)).toBe(4);
  expect(square(-3)).toBe(9);
});

test('cube function', () => {
  expect(cube(2)).toBe(8);
  expect(cube(-3)).toBe(-27);
});

// Intentionally leave factorial untested for now
