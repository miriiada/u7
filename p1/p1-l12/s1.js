// Что выведет каждый вызов? Попробуй предсказать.

console.log(Number('123')); // num
console.log(Number('12.5'));    // num
console.log(Number('abc')); // NaN
console.log(Number(''));    // NaN or null, ошибся будет 0
console.log(+'42'); // Number 42
console.log(+'-3.14');  // Number -3.14
console.log(parseInt('12.7'));  // num, немного ошибся отрезалась дробная часть ответ 12
console.log(parseFloat('12.7abc')); // num без букв 12.7
console.log(parseInt('100px')); // num 100
console.log(parseInt('abc123'));    // num 123, ошибся будет NaN

// ? Какая разница между Number() и parseInt/parseFloat?
// Проверь в консоли.
