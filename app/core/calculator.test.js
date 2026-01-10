import { expect, test } from 'vitest';

import {
  add,
  divide,
  multiply,
  subtract,
} from './calculator'

test('add function', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1.0, 2.0)).toBe(3.0);
  expect(add(0, 2.0)).toBe(2.0);
  expect(add(2.0, 0)).toBe(2.0);
  expect(add(-4, 2.0)).toBe(-2.0);
  expect(add(1e+100, 1e+100)).toBe(2e+100); // Large number addition
});
