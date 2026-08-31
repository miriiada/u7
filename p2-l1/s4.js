// Маркетинговый отдел получает данные о сотрудниках.
// Данные могут быть неполными — используй ??
// для подстановки значений по умолчанию.

const SALARY = 300000;
const DAYS_WORKED = 22;

// Этим данным можно доверять — они точно пришли из БД
const name = 'Иванов';

// А эти данные могли быть не заполнены в системе.
// salaryRaw — null (не указан), daysRaw — undefined (нет данных)
const salaryRaw = null;
const daysRaw = undefined;

// 1. Используй ?? для подстановки значений по умолчанию
//    salary = salaryRaw ?? ???
//    days = daysRaw ?? ???

const salary = salaryRaw ?? SALARY;
const days = daysRaw ?? DAYS_WORKED;

// 2. Посчитай зарплату за отработанные дни:
//    salaryPerDay = salary / WORK_DAYS_IN_MONTH
//    daySalary = Math.round(salaryPerDay * days)

const salaryPerDay = salary / DAYS_WORKED;
const daySalary = Math.round(salaryPerDay * days);

// 3. Выведи результат
console.log('Сотрудник: ' + name + ', начислено: ' + daySalary + ' тенге');


// ---
// Дополнительно: замени ?? на || — заметил разницу?
// Как поведёт себя ||, если salaryRaw = 0 (а не null)?
// Проверь оба варианта.
