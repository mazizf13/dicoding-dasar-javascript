import {test} from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(5, 10), 15);
});

test('should return 0 when one number is negative', () =>{
    assert.strictEqual(sum(-5, 10), 0);
});

test('should return 0 when both numbers are negative', () => {
    assert.strictEqual(sum(-5, -10), 0);
});

test('should return 0 when one number is not a number', () => {
    assert.strictEqual(sum('-5', 10), 0);
})

test('should return 0 when both inputs are not numbers', () => {
    assert.strictEqual(sum('5', '10'), 0);
})

test('should return the sum when one number is zero', () => {
    assert.strictEqual(sum(0, 10), 10);
})

test('should return the sum when both number are zero', () => {
    assert.strictEqual(sum(0,0), 0);
})

test('should return the sum of two decimal numbers', () =>{
    assert.strictEqual(sum(2.5, 3.7), 6.2);
});

test('should return the sum of very small floating numbers', () => {
    const result = sum(0.0001, 0.0002);
    const expected = 0.0003;

    assert.ok(Math.abs(result - expected) < Number.EPSILON);
});

test('should return the sum of large numbers', () => {
    assert.strictEqual(sum(1e+100, 1e+100), 2e+100);
});
  
test('should return 0 if one argument is an object', () => {
    assert.strictEqual(sum({}, 10), 0);
});
  
test('should return 0 if one argument is an array', () => {
    assert.strictEqual(sum([], 10), 0);
});
  
test('should return 0 if one argument is undefined', () => {
    assert.strictEqual(sum(undefined, 10), 0);
});
  
test('should return 0 if one argument is null', () =>{
    assert.strictEqual(sum(null, 10), 0);
});
  