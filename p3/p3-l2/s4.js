// Напиши функцию isEven(number), которая возвращает true, если число чётное, и false — если нечётное.
// Используй оператор % (остаток от деления).
// Проверь на числах: 4, 7, 0, 11

// Твой код:

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log (isEven(11));