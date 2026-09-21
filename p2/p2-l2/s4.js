// В отделе маркетинга считают зарплату по формуле:
// наРуки = (оклад + премия) - ОПВ - ИПН
//
// Но в коде закралась ошибка приоритетов — платежная ведомость
// показывает неверные суммы. Найди и исправь ошибку.

const salary = 500000;
const bonusRate = 0.15;
const OPV_RATE = 0.1;
const IPN_RATE = 0.1;

// ❌ ТАК НЕПРАВИЛЬНО — приоритеты сбивают расчёт!
// salary + salary * bonusRate — это то же самое?
const totalWrong = salary + salary * bonusRate;
const opvWrong = totalWrong * OPV_RATE;
const ipnWrong = (totalWrong - opvWrong) * IPN_RATE;
const netWrong = totalWrong - opvWrong - ipnWrong;
console.log('❌ Неправильно: на руки', netWrong, 'тг');

// ✅ ИСПРАВЛЕНИЕ — используй скобки явно
// База = оклад + премия. Премия = оклад * 0.15
// totalCorrect = ???
// OPV = totalCorrect * 0.1
// IPN = (totalCorrect - OPV) * 0.1
// netCorrect = totalCorrect - OPV - IPN

const totalCorrect = salary + (salary * bonusRate);
const opvCorrect = totalCorrect * OPV_RATE;
const ipnCorrect = (totalCorrect - opvCorrect) * IPN_RATE;
const netCorrect = totalCorrect - opvCorrect - ipnCorrect;
console.log('✅ Исправлено: на руки', netCorrect, 'тг');

// Какая разница и почему?
// Подсказка: в wrong варианте salary + salary * bonusRate — умножение раньше сложения

// ---
// Дополнительно: перепиши формулу так, чтобы было понятно без скобок
// Используй промежуточные переменные:
// bonus = salary * bonusRate
// base = salary + bonus
// ... и так далее
