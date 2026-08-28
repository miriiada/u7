// Напиши программу, которая:
//
// 1. Запроси возраст через prompt() — сохрани в переменную age
// 2. Преобразуй строку в число: Number(age)
// 3. Выведи:
//    - "Совершеннолетний: true/false"  (>= 18)
//    - "Подросток: true/false"         (>= 12 и < 18)
//    - "Пенсионер: true/false"         (>= 65)
//    - "Может водить машину: true/false" (>= 18)
//
// Используй операторы сравнения и строгое равенство

let ageInput = prompt('Enter your age:');
let age = Number(ageInput);

console.log('Adult:', age >= 18);
console.log('Подросток:', age >= 12 && age < 18);
console.log('Пенсионер:', age >= 65);
console.log('Может водить:', age >= 18);