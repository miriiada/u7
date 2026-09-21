// Что вернёт двойное отрицание для этих значений?

console.log(!!'hello'); // true
console.log(!!'');  // false
console.log(!!0);   // false
console.log(!!1);   //true
console.log(!!null);    // false
console.log(!!undefined);   // false
console.log(!!NaN); // false
console.log(!![]);  // true
console.log(!!{});  // true
console.log(!!'false'); // true

// ? Почему 'false' — truthy? Ведь это строка 'false', не false!
// ? Сколько всего falsy значений в JS? Назови их.

// Все значения false в js
// false
// 0
// ''
// null
// undefined
// NaN