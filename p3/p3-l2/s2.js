// Как ты думаешь, что выведет каждый console.log? Проверь себя, выполнив код.

function printTwice(text) {
    console.log(text);
    console.log(text);
}

let result = printTwice('Hello');
console.log('result равен: ' + result);
console.log(typeof result);
