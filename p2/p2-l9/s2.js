// Предскажи, что выведет каждый цикл. Зачем нужен for...in?

const salaries = {
    Иванов: 500000,
    Петрова: 450000,
    Сидоров: 480000,
};

for (let key in salaries) {
    console.log(key + ': ' + salaries[key] + ' тг');
}

console.log('in check:', 'Иванов' in salaries, 'Смирнов' in salaries);

// Вопрос: что выведет for...in? Можно ли то же самое сделать через for...of?