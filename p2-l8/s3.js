// Предскажи что выведет каждый console.log. Обрати внимание на разницу между Object и Map.

let obj = {};
let map = new Map();

obj[0] = 'ноль';
obj['0'] = 'ноль строка';
console.log(obj);
// ? Сколько свойств в obj? Почему?

map.set(0, 'ноль');
map.set('0', 'ноль строка');
console.log(map.size);
// ? Сколько записей в map?

let john = { name: 'John' };
obj[john] = 123;
console.log(obj);
// ? Какой ключ получился?

map.set(john, 123);
console.log(map.get(john));
// ? А тут?

// Вопрос: в чём принципиальное отличие Map от Object? Зачем нужен Map, если есть Object?