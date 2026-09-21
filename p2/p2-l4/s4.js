// В отдел пришли данные с ошибкой: имена написаны в разном регистре.
// Нужно привести все имена к формату: первая буква заглавная, остальные строчные.

const names = ['иванов', 'ПЕТРОВА', 'сИдОрОв', 'КОЗЛОВА'];

for (let i = 0; i < names.length; i++) {
    const original = names[i];


    // Сделай первую букву заглавной, остальные — строчными
    // Подсказка: используй str[0], str.slice(1), .toUpperCase(), .toLowerCase()
const formatted = original[0].toUpperCase() + original.slice(1).toLowerCase();
    console.log(original + ' ' + formatted);
}

let count = 0;

for (let i = 0; i < names.length; i++) {
    if (names[i][0].toUpperCase() === 'К') {
        console.log(names[i]); count++;
    }
}
console.log(`Найдено кол-во К: ${count}`);

// ---
// Дополнительно: посчитай, сколько имён начинается на букву 'К' (учти регистр)
