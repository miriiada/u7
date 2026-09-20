import { describe, test, expect } from 'bun:test';
import { reverseText } from './reverseText.js';

describe('reverseText', () => {
    test('empty string stays empty', () => {
        expect(reverseText('')).toBe('');
    });

    test('one character stays unchanged', () => {
        expect(reverseText('a')).toBe('a');
    });

    test('reverses a latin word', () => {
        expect(reverseText('cat')).toBe('tac');
    });

    test('reverses a cyrillic word', () => {
        expect(reverseText('кот')).toBe('ток');
    });

    test('palindrome stays the same', () => {
        expect(reverseText('шалаш')).toBe('шалаш');
    });
});