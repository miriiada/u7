function repeat(text, count = 3) {
    let result = '';
    for (let i = 0; i < count; i += 1) {
        result += text;
    }
    return result;
}

console.log(repeat('Go', 2));
console.log(repeat('JS'));
console.log(repeat('Hi', 0