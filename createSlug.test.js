const { test } = require('@jest/globals');
const createSlug = require('./createSlug');

test('createSlug dovrebbe ritornare una stringa', () => {
    const result = createSlug('Hello World');
    expect(typeof result).toBe('string');
});