//Предскажи результат. Чем отличаются два цикла?

let i = 0;
while (i < 3) {
    console.log('while:', i);
    i++;
}

let j = 0;
do {
    console.log('do-while:', j);
    j++;
} while (j < 3);

// А теперь — что выведет каждый, если условие сразу ложно?
let a = 10;
while (a < 3) {
    console.log('while-rare:', a);
    a++;
}

let b = 10;
do {
    console.log('do-rare:', b);
    b++;
} while (b < 3);


// Вопрос: сколько раз выполнится while? А do-while? Почему?