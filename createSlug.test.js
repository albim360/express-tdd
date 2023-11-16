const { test } = require('@jest/globals');
const createSlug = require('./createSlug');

test('createSlug dovrebbe ritornare una stringa', () => {
    const result = createSlug('Hello World');
    expect(typeof result).toBe('string');
});

test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const result = createSlug('Hello World')
    expect(result).toBe('hello-world');
});