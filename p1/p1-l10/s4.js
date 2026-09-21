// Напиши программу, которая:
//
// 1. Запроси через prompt() число — оценку от 0 до 100
// 2. Преобразуй строку в число
// 3. Через if / else if / else выведи букву:
//    - 90 и выше → "A"
//    - 75 и выше → "B"
//    - 50 и выше → "C"
//    - ниже 50   → "D"
// 4. Если число меньше 0 или больше 100 — выведи "Ошибка: неверная оценка"
//
// Используй строгое сравнение === и логические операторы.


let userInput =  prompt('Enter number 0 to 100');
let numUser = Number(userInput);

if (numUser >= 90 && numUser <= 100) {
    console.log('A');
}   else if (numUser >= 75 && numUser <= 89) {
    console.log('B');
}   else if (numUser >= 50 && numUser <= 74) {
    console.log('C');
}   else if (numUser <= 50 && numUser >= 0) {
    console.log('D')
}   else {
    console.log('Error: incorrect assessment')
}