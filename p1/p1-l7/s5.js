// Напиши программу, которая:
//
// 1. Объяви переменную word = 'JavaScript'
// 2. Выведи word в верхнем регистре: word.toUpperCase()
// 3. Теперь объяви num = 123
// 4. Попробуй вызвать num.toUpperCase() — что произойдёт?
// 5. Объясни в комментарии, почему возникла ошибка


let word = 'Javascript';
console.log(word.toUpperCase());

let num = 123;
console.log(num.toUpperCase());

// Будт ошибка при попытке вывести num так как toUpperCase не применяется к цифрам

