// Отдел маркетинга — объединяем всё: объект окладов и массив сотрудников.
// Используй for...in для объекта и for...of для массива.

const employees = ['Иванов', 'Петрова', 'Сидоров', 'Козлова'];
const salaries = {
    Иванов: 500000,
    Петрова: 450000,
    Сидоров: 480000,
    Козлова: 520000,
};

// 1. Выведи всех сотрудников через for...of
console.log('=== Сотрудники отдела ===');
for (let name of employees) {
    console.log(name);
}

// 2. Выведи оклады через for...in
console.log('n=== Оклады ===');
for (let name in salaries) {
    console.log(name + ': ' + salaries[name] + ' тг');
}

// 3. Найди сотрудника с максимальным окладом
let maxName = '';
let maxSalary = 0;
for (let name in salaries) {
    if (salaries[name] > maxSalary) {
        maxSalary = salaries[name];
        maxName = name;
    }
}
console.log('nМаксимальный оклад: ' + maxName + ' — ' + maxSalary + ' тг');

// ---
// Дополнительно: проверь, все ли сотрудники из массива employees
// есть в объекте salaries (используй оператор in)
// Если кого-то нет — выведи предупреждение
