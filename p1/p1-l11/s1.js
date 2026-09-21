// Перепиши этот if-else в одну строку с тернарным оператором

// let age = 20;
// let category;
// if (age >= 18) {
//     category = 'взрослый';
// } else {
//     category = 'ребёнок';
// }
// console.log(category);

let ageInput = prompt('Enter your age:');
let age = Number(ageInput);

let category = age >= 18 ? 'Adult' : 'Child';
console.log(category)

// А теперь для этого кода с else if:
// let score = 75;
// let grade;
// if (score >= 90) {
//     grade = 'A';
// } else if (score >= 75) {
//     grade = 'B';
// } else {
//     grade = 'C';
// }
// console.log(grade);

let scoreInput = prompt('Enter your score:')
let score = Number(scoreInput)

let grade = (score >= 90) ? 'A' : (score >= 75) ? 'B' : 'C'
console.log(grade)


// Подсказка: тернарники можно вкладывать, но это снижает читаемость
