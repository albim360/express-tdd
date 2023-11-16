const { test } = require('@jest/globals');
const createSlug = require('./createSlug');

test('createSlug dovrebbe ritornare una stringa', () => {
    const existingPosts = ['hello-world', 'another-post'];
    const result = createSlug('Hello World', existingPosts);
    expect(typeof result).toBe('string');
});

test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const existingPosts = ['hello-world', 'hello-world-1', 'another-post'];
    const result = createSlug('Hello World', existingPosts);
    expect(result).toBe('hello-world-2'); 
});



test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    const result = createSlug('Hello World', []);
    expect(result).toEqual('hello-world');
});

test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    const existingPosts = ['hello-world', 'hello-world-1', 'another-post'];
    const result = createSlug('Hello World', existingPosts);
    expect(result).toBe('hello-world-2'); 
});

test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    expect(() => createSlug(null, [])).toThrow('Il titolo non è presente o ha un formato errato');
});

test('createSlug dovrebbe lanciare un errore se manca l’array dei post', () => {
    expect(() => createSlug('Hello World')).toThrow('L\'array dei post è mancante');
});

