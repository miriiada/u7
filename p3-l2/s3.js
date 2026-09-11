// Напиши функцию safeDivide(a, b), которая возвращает результат деления a на b.
// Если b равно 0 — верни строку 'Ошибка: деление на ноль' и выйди из функции досрочно.
// Проверь: safeDivide(10, 2), safeDivide(10, 0)

// Твой код:

function safeDivide(a, b) {
    if (b === 0) {
        return ('Error: division by zero');
    }   else {
        return a / b;
    }
}
console.log(safeDivide(10, 2));