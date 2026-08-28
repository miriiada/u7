// Напиши программу, которая:
//
// 1. Запроси через prompt() температуру на улице
// 2. Запроси через prompt() идёт ли дождь (введи true или false)
//    Подсказка: строку 'true' можно сравнить === 'true'
// 3. Выведи "Можно гулять: true/false"
//
// Гулять можно, если:
//   - температура > 0 И температура < 35
//   - И дождя НЕТ (!isRaining)
//
// Используй логические операторы &&, ||, !

let tempInput = prompt('How temp on outside?');
let numTempOut = Number(tempInput);
let rainOut = prompt('Rainy in outside? (true/false)');
let rainCheck = rainOut === 'true';
let cloudy = prompt('Cloudy in outside? (true/false)');

let canWalk = ( numTempOut > 0 && numTempOut < 35 && !rainCheck );
console.log( `You can walk: ${canWalk}, and cloudy: ${cloudy}` );

// А если температура ниже 0 — можно? А если > 35?
// Допиши условие: можно гулять ещё и если облачно, но без дождя.