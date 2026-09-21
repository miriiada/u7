//Предскажи результат. Чем for...of отличается от for...in?

const employees = ['Иванов', 'Петрова', 'Сидоров'];

// for...of — перебор значений
for (let name of employees) {
    console.log(name);
}

// for...in на массиве — перебор индексов
for (let idx in employees) {
    console.log(idx, typeof idx);
}

// Строки тоже итерируемые
let word = 'JS';
for (let ch of word) {
    console.log(ch);
}

// Вопрос: почему for...in на массиве возвращает строки? Какой цикл рекомендуется для массивов?