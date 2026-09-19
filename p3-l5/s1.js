// Штатное расписание отдела (HR-система)
const department = {
    name: 'Маркетинг',
    employees: ['Иванов', 'Петрова', 'Сидоров', 'Козлова'],
};

// Оклады сотрудников (бухгалтерия)
const salaries = {
    Иванов: 500000,
    Петрова: 450000,
    Сидоров: 480000,
    Козлова: 520000,
};

// Табель отработанных дней (начальник отдела)
const workDays = {
    Иванов: 20,
    Петрова: 18,
    Сидоров: 22,
    Козлова: 20,
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

    }
}

console.log(calcEmployee('Иванов', 500000, 20));

main();
