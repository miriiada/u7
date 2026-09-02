// Отдел маркетинга. Напечатай всех сотрудников через цикл.

const employees = ['Иванов', 'Петрова', 'Сидоров', 'Козлова'];
const salaries = [500000, 450000, 480000, 520000];

// Используй for для вывода:
// 1. Иванов: 500000 тг
// 2. Петрова: 450000 тг
// ...

// Твой код:
for (let i = 0; i < employees.length; i++) {
    console.log((i +1) + '. ' + employees[i] + ': ' + salaries[i] + ' KZT')
}

// ---
// Дополнительно: посчитай среднюю зарплату по отделу
let total = 0;
for (let i = 0; i < salaries.length; i++) {
    total += salaries[i];
}
console.log('Средняя: ' + (total / salaries.length) + ' тг')
