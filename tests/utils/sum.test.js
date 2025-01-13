import { sum } from '@utils/sum';  // Ensure the correct path to your sum function

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + -1 to equal -2', () => {
  expect(sum(-1, -1)).toBe(-2);
});

test('adds 1.5 + 1.5 to equal 3', () => {
  expect(sum(1.5, 1.5)).toBe(3);
});
