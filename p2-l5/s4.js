// В отделе маркетинга ищем сотрудников с окладом выше 480 000 тг.
// Используй while. Как только нашёл — остановись (break).

const employees = ['Иванов', 'Петрова', 'Сидоров', 'Козлова'];
const salaries = [500000, 450000, 480000, 520000];

const threshold = 480000;
let found = false;
let i = 0;

while (i < employees.length) {
    if (salaries[i] > threshold) {
        console.log('Найден: ' + employees[i] + ' — ' + salaries[i] + ' тг');
        found = true;
        break;
    }
    i++;
}

if (!found) {
    console.log('Сотрудников с окладом больше ' + threshold + ' не найдено');
}

// ---
// Дополнительно: перепиши то же самое через for.
// Какой цикл удобнее для этой задачи? Почему?


for ()