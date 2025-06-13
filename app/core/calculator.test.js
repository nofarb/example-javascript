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

test('subtract function', () => {
  expect(subtract(1, 2)).toBe(-1.0);
  expect(subtract(2, 1)).toBe(1.0);
  expect(subtract(1.0, 2.0)).toBe(-1.0);
  expect(subtract(0, 2.0)).toBe(-2.0);
  expect(subtract(2.0, 0)).toBe(2.0);
  expect(subtract(-4, 2.0)).toBe(-6.0);
  expect(subtract(1e+100, 1e+100)).toBe(0); // Large number subtraction
});

test('multiply function', () => {
  expect(multiply(1, 2)).toBe(2);
  expect(multiply(2, 0)).toBe(0);
  expect(multiply(-2, 3)).toBe(-6);
  expect(multiply(0.5, 2)).toBe(1); // Floating point multiplication
  expect(multiply(1000, 1000)).toBe(1000000); // Large number multiplication
});

test('divide function', () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(1, 0)).toBe("Cannot divide by 0"); // Divide by zero case
  expect(divide(-10, 2)).toBe(-5);
  expect(divide(10, -2)).toBe(-5);
  expect(divide(1000, 1000)).toBe(1); // Large number division
  expect(divide(5, "a")).toThrow(); // Invalid division input
});

test('divide2 function', () => {
  expect(divide(10, 2)).toBe(5);  // Valid division
  expect(divide(1, 0)).toBe("Cannot divide by 0"); // This tests the divide by zero scenario
  expect(divide(-10, 2)).toBe(-5); // Negative division
  expect(divide(10, -2)).toBe(-5); // Negative division with swapped operands
});


test('floating-point operations', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5); // Floating point precision
  expect(subtract(0.3, 0.1)).toBeCloseTo(0.2, 5); // Floating point subtraction
  expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 5); // Floating point multiplication
});
