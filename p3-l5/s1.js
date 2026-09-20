// Штатное расписание отдела (HR-система)
const department = {
    name: 'Маркетинг',
    employees: ['Иванов', 'Петрова', 'Сидоров', 'Козлова', 'Ли'],
};

// Оклады сотрудников (бухгалтерия)
const salaries = {
    Иванов: 500000,
    Петрова: 450000,
    Сидоров: 480000,
    Козлова: 520000,
    Ли: 380000,
};

// Табель отработанных дней (начальник отдела)
const workDays = {
    Иванов: 20,
    Петрова: 18,
    Сидоров: 22,
    Козлова: 20,
    Ли: 15,
};

// Производственный календарь (HR-отдел)
const calendar = {
    month: 'Июнь 2026',
    workDaysInMonth: 22,
};

// Налоговые ставки (Налоговый кодекс РК)
const taxConfig = {
    OPV_RATE: 0.10,
    IPN_RATE: 0.10,
};

const COLUMNS = [
    ['name',    'Сотрудник'],
    ['salary',  'Оклад'],
    ['days',    'Дней'],
    ['accrued', 'Начислено'],
    ['held',    'Удержано'],
    ['net',     'На руки'],
];



function calcAccrued (salary, daysWorked, workDaysInMonth) {
    return Math.round(salary / workDaysInMonth * daysWorked);
}

function calcOpv (accrued) {
    return Math.round(accrued * taxConfig.OPV_RATE);
}

function calcIpn (accrued, opv) {
    return Math.round((accrued - opv) * taxConfig.IPN_RATE);
}

function calcEmployee (name, salary, daysWorked) {
   const accrued = calcAccrued(salary, daysWorked, calendar.workDaysInMonth);
   const opv = calcOpv(accrued);
   const ipn = calcIpn(accrued, opv);
   const net = accrued - opv - ipn;
   return {name, salary, daysWorked, accrued, opv, ipn, net};
}

function calcDepartment (department, salaries, workDays, calendar) {
    let totalPayroll = 0;
    let totalOPV = 0;
    let totalIPN = 0;
    let totalNet = 0;
    let fullMonthCount = 0;
    const employeeResults = [];

    for (const employee of department.employees) {
        const employeeValue = calcEmployee(employee, salaries[employee], workDays[employee]);
        employeeResults.push(employeeValue);

        totalPayroll += employeeValue.accrued;
        totalOPV += employeeValue.opv;
        totalIPN += employeeValue.ipn;
        totalNet += employeeValue.net;

        if (employeeValue.daysWorked === calendar.workDaysInMonth) {
            fullMonthCount++;
        }
    }
    return {
        employeeResults,
        totalPayroll,
        totalOPV,
        totalIPN,
        totalNet,
        fullMonthCount,
        departmentName: department.name,
        month: calendar.month,
    }
    const departmentResult = calcDepartment(
        department,
        salaries,
        workDays,
        calendar
    );
    const discountPrice = calcDiscount(price, discountPercent);
}

function formatMoney(amount) {
    return amount.toLocaleString('ru-RU') + 'тг.';
}

function renderToText(result) {
    let text = `Ведомость: ${result.departmentName}\n`;
    text += `Месяц: ${result.month}\n`;
    text += `---\n`;
    text += `Сотрудник | Оклад | Дней | Начислено | Удержано | На руки\n`;
    text += `---\n`;

    for (const employee of result.employeeResults) {
        const withheld = employee.opv + employee.ipn;

        text += `${employee.name} | `;
        text += `${formatMoney(employee.salary)} | `;
        text += `${employee.daysWorked} | `;
        text += `${formatMoney(employee.accrued)} | `;
        text += `${formatMoney(withheld)} | `;
        text += `${formatMoney(employee.net)}\n`;
    }

    text += `---\n`;
    text += `ИТОГО по отделу:\n`;
    text += `  Фонд начислений: ${formatMoney(result.totalPayroll)}\n`;
    text += `  Удержано ОПВ: ${formatMoney(result.totalOPV)}\n`;
    text += `  Удержано ИПН: ${formatMoney(result.totalIPN)}\n`;
    text += `  К выплате: ${formatMoney(result.totalNet)}\n`;
    text += `  Полный месяц: ${result.fullMonthCount} чел.`;

    return text;
}




function main() {
    const result = calcDepartment(department, salaries, workDays, calendar);
    const text = renderToText(result);

    console.log(text);
}


main();

