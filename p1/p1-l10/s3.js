// Напиши программу, которая:
// 1. Спрашивает возраст через prompt()
// 2. Если возраст >= 18 - выводит «Взрослый»
// 3. Если возраст >= 12 и < 18 - выводит «Подросток»
// 4. Иначе - выводит «Ребёнок»
//
// Используй if / else if / else
// Подсказка: prompt() возвращает строку, используй Number() для преобразования

let ageInput = prompt('Enter your age');
let age = Number(ageInput);

if (age >= 18)  {
    console.log('You are a adult')
}   else if (age >= 12 && age <= 18) {
    console.log ('You are a teenager')
}   else {
    console.log('You are a child')
}