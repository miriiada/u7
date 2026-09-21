// Как ты думаешь, что выведет код? Обрати внимание на краткий синтаксис стрелочной функции без {}.

let double = (x) => x * 2;
let greet = (name) => 'Привет, ' + name;

console.log(double(4));
console.log(greet('Алия'));
console.log(double(double(3)));
