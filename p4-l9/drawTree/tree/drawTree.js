export function drawTree(height) {
    if (height <= 0) {
        return '';
    }

    const tierCount = Math.min(height, 3);
    const firstTierHeight = Math.max(height, 3);

    const lastTierHeight = firstTierHeight + tierCount - 1;
    const baseWidth = lastTierHeight * 2 - 1;

    const lines = [];

    for (let tier = 0; tier < tierCount; tier++) {
        const tierHeight = firstTierHeight + tier;
        const tierLines = drawTier(tierHeight, baseWidth);

        for (const line of tierLines) {
            lines.push(line);
        }
    }

    const trunkSpaces = (baseWidth - 1) / 2;

    for (let i = 0; i < height; i++) {
        lines.push(' '.repeat(trunkSpaces) + '#');
    }

    return lines.join('\n');
}

function drawTier(height, baseWidth) {
    const lines = [];

    for (let row = 1; row <= height; row++) {
        const hashCount = row * 2 - 1;
        const spaces = (baseWidth - hashCount) / 2;

        lines.push(
            ' '.repeat(spaces) + '#'.repeat(hashCount)
        );
    }

    return lines;
}