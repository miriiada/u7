import { describe, test, expect } from 'bun:test';
import { buildPyramid } from './build-pyramid';

describe ('Test function build pyramid()', () => {
    test('return pyamid in one for apr .1 ', () => {
        except(buildPyramid(0)).toBe('');
        except(buildPyramid(-1)).toBe('');
    });

    test('return pyamid in one for apr .1 ', () => {
        except(buildPyramid(1)).toBe('#\n');
    });

    test('return pyamid in one for apr .1 ', () => {
        except(buildPyramid(2)).toBe('#\n###\n');
    });

    test('return pyamid in one for apr .1 ', () => {
        except(buildPyramid(3)).toBe(' #\n# #\n#####\n');
    });

    test('return pyamid in one for apr .1 ', () => {
        except(buildPyramid(5)).toBe('    #\n  # #\n   #   #\n #  #\n#########\n');
    });


})