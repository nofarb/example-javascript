import { expect, test } from 'vitest';
import { square, cube, factorial } from './mathUtils';

test('square function', () => {
  expect(square(2)).toBe(4);
  expect(square(-3)).toBe(9);
  expect(square(0)).toBe(0);
  expect(square(1000)).toBe(1000000); // Large number
});

test('cube function', () => {
  expect(cube(2)).toBe(8);
  expect(cube(-3)).toBe(-27);
  expect(cube(0)).toBe(0);
  expect(cube(1000)).toBe(1000000000); // Large number
});

test('factorial function', () => {
  expect(factorial(0)).toBe(1); // Factorial of 0 is 1
  expect(factorial(1)).toBe(1); // Factorial of 1 is 1
  expect(factorial(5)).toBe(120); // Factorial of 5 is 120
  expect(factorial(6)).toBe(720); // Factorial of 6 is 720
  expect(() => factorial(-1)).toThrow(); // Negative factorial should throw an error
});
