// Твоя задача — посчитать итоговую цену товара с НДС и скидкой.
// Разбей задачу на три функции (декомпозиция):
// 1. calcDiscount(price, percent) — возвращает цену со скидкой
// 2. calcVat(price) — добавляет 12% НДС к цене
// 3. calcFinalPrice(price, discountPercent) — использует первые две и возвращает итоговую цену
//
// Проверь: calcFinalPrice(10000, 10) — должно получиться: скидка 10%, затем НДС 12%

// Твой код:
const price = 10000;
const discountPercent = 10;


function calcDiscount(price, percent) {
    let discountAmount = price * percent / 100 ;
    return price - discountAmount;
}

function calcVat(price) {
    return price * 0.12 + price;
}

function calcFinalPrice(price, discountPercent) {
    const discountPrice = calcDiscount(price, discountPercent);
    return discountPrice;
}

// calcDiscount(10000, 10000);

// console.log(calcDiscount(10000, 10));
// console.log(calcVat(10000));
// console.log(discountPercent);
console.log(discountPrice);
console.log(calcFinalPrice());
