import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

const timeout = 1000; 

test('should return the sum of two numbers', { timeout }, () => {
  assert.strictEqual(sum(2, 3), 5);

  assert.strictEqual(sum(-2, -3), -5);

  assert.strictEqual(sum(2, -3), -1);

  assert.strictEqual(sum(0, 0), 0);
});
