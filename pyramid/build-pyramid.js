export function buildPyramid(height, char = '#') {
    function makePyramidRow(symCount) {
        if (symCount === 1) return char;
        return `${char}{' '.repeat(symCount - 2)}${char}`;
    }
    let result = '';
    for (let i = 1; i <= height; i++) {
        const spaces = ' '.repeat(height - (i));
        result  += i === height
            result += '#'.repeat(i * 2 - 1) + '\n';
        } else {
            result += spaces + makePyramidRow(i * 2 - 1) + '\n';
        }
    }
    return result;
}