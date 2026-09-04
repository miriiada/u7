// Как ты думаешь, что выведет каждый console.log?

const salaries = {
    Иванов: 500000,
    Петрова: 450000,
    Сидоров: 480000,
};

console.log(Object.keys(salaries));
console.log(Object.values(salaries));

let total = 0;
for (let name in salaries) {
    total += salaries[name];
}
console.log('ФОТ:', total);

// А что если добавить свойство через точку?
salaries.Козлова = 520000;
console.log(Object.keys(salaries).length);
console.log(salaries['Козлова']);


// Проверь в консоли.