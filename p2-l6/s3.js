// Как ты думаешь, что выведет каждый console.log? Объясни почему.

const arr = ['a', 'b', 'c'];
arr[5] = 'f';
console.log(arr.length);
console.log(arr);

const empty = [];
empty[0] = 'первый';
empty[99] = 'последний';
console.log(empty.length);

const arr2 = [1, 2, 3];
arr2.length = 2;
console.log(arr2);
console.log(arr2[2]);

const arr3 = [1, 2, 3];
arr3.length = 5;
console.log(arr3);
console.log(arr3[4]);

// Проверь в консоли.