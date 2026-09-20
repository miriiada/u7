import { describe, test, expect } from 'bun:test';
import { drawTree } from './drawTree.js';

const NL = String.fromCharCode(10);

const EMPTY = '';

const ONE_TIER = [
    '  #',
    ' ###',
    '#####',
    '  #',
].join(NL);

const TWO_TIERS = [
    '   #',
    '  ###',
    ' #####',
    '   #',
    '  ###',
    ' #####',
    '#######',
    '   #',
    '   #',
].join(NL);

const THREE_TIERS = [
    '    #',
    '   ###',
    '  #####',
    '    #',
    '   ###',
    '  #####',
    ' #######',
    '    #',
    '   ###',
    '  #####',
    ' #######',
    '#########',
    '    #',
    '    #',
    '    #',
].join(NL);

const FOUR_HEIGHT = [
    '     #',
    '    ###',
    '   #####',
    '  #######',
    '     #',
    '    ###',
    '   #####',
    '  #######',
    ' #########',
    '     #',
    '    ###',
    '   #####',
    '  #######',
    ' #########',
    '###########',
    '     #',
    '     #',
    '     #',
    '     #',
].join(NL);

describe('drawTree', () => {
    test('height 0 returns an empty string', () => {
        expect(drawTree(0)).toBe(EMPTY);
    });

    test('negative height returns an empty string', () => {
        expect(drawTree(-1)).toBe(EMPTY);
    });

    test('height 1 draws one tier', () => {
        expect(drawTree(1)).toBe(ONE_TIER);
    });

    test('height 2 draws two tiers', () => {
        expect(drawTree(2)).toBe(TWO_TIERS);
    });

    test('height 3 draws three tiers', () => {
        expect(drawTree(3)).toBe(THREE_TIERS);
    });

    test('height 4 grows three tiers', () => {
        expect(drawTree(4)).toBe(FOUR_HEIGHT);
    });
});