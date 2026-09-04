//Как ты думаешь, что выведет каждый console.log? Сначала ответь, потом проверь через bun run.

let arr = ['a', 'b', 'c'];
arr.push('d');
console.log(arr.length);

arr.pop();
console.log(arr);

arr.unshift('x');
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.at(-1));

// Вопрос: какие методы работают быстро, а какие медленно? Почему? 