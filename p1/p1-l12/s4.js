// Напиши программу, которая:
// 1. Запрашивает через prompt() число (строку)
// 2. Явно преобразует строку в число через Number()
// 3. Вычисляет 10% от этого числа
// 4. Выводит: '10% от X равно Y'
//
// Дополнительно: если пользователь ввёл не число (Number() вернул NaN),
// выведи 'Ошибка: введите число'
//
// Используй Number() и проверку Number.isNaN()

let userInput = prompt('Enter your number:');
let numUserInput = Number(userInput);
let conclusion = numUserInput * 0.10;

let conclusionUser = Number.isNaN(numUserInput) ? `You did not enter numbers, try again` : `10% from ${numUserInput} will ${conclusion}`;
console.log(conclusionUser)
