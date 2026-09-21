// Объяви одну и ту же функцию сложения тремя разными способами:
// 1. Как Function Declaration — function addDecl(a, b)
// 2. Как Function Expression — let addExpr = function(a, b)
// 3. Как Arrow Function — let addArrow = (a, b) =>
//
// Вызови все три с аргументами 3 и 4 и выведи результаты.

// Твой код:
function addDecl(a, b){
    return a + b;
}

let addExpr = function(a, b) {
    return a + b;
}

let addArrow = (a, b) => a + b;

console.log(addArrow(3, 4));