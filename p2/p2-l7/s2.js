// Как ты думаешь, что выведет каждый console.log? Сначала ответь, потом проверь.

let user = { name: 'Алия', age: 30 };
console.log(user.name);
console.log(user['age']);

let key = 'name';
console.log(user[key]);

user.city = 'Алматы';
console.log(user.city);

delete user.age;
console.log(user.age);

console.log('name' in user);
console.log('age' in user);

// Вопрос: чем отличается user.name от user['name']? Когда какой синтаксис удобнее?