// Предскажи что выведет каждый console.log:

let set = new Set([1, 2, 3, 1, 2]);
console.log(set.size);
console.log(set.has(3));
console.log(set.has(5));

set.add(4);
set.add(2);  // дубликат
console.log(set.size);

let arr = [...set];
console.log(arr);

// Вопрос: сколько элементов в Set после добавления дубликатов? Как превратить Set обратно в массив?