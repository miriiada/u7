const WORK_DAYS_IN_MONTH = 22;
const OPV_RATE = 0.10;
const IPN_RATE = 0.10;

const employees = ['Иванов', 'Петрова', 'Сидоров', 'Козлова', 'Линкольн'];

const salaries = {
    Иванов: 500000,
    Петрова: 450000,
    Сидоров: 480000,
    Козлова: 520000,
    Линкольн: 0,
};

const workDays = {
    Иванов: 20,
    Петрова: 18,
    Сидоров: 22,
    Козлова: 20,
    Линкольн: 0,
};

let totalPayroll = 0;
let totalOPV = 0;
let totalIPN = 0;
let totalNet = 0;
let fullMonthCount = 0;

console.log('Employee | Salary | Accrued | OPV | IPN | Take Home Pay');

for (const employee of employees) {
    const accrued = Math.round(salaries[employee] / WORK_DAYS_IN_MONTH * workDays[employee]);
    const accruedOpv = Math.round(accrued * OPV_RATE);
    const accruedIPN = Math.round((accrued - accruedOpv) * IPN_RATE);
    const takeHomePay = Math.round(accrued - accruedOpv - accruedIPN);

    totalPayroll += accrued;
    totalOPV += accruedOpv;
    totalIPN += accruedIPN;
    totalNet += takeHomePay;
    if (WORK_DAYS_IN_MONTH === workDays[employee]) {
        fullMonthCount++;
    }

    console.log(`${employee} | ${salaries[employee]} | ${accrued} | ${accruedOpv} | ${accruedIPN} | ${takeHomePay}`);

}
console.log('\n');
console.log(`Metric | Expectation`);
console.log(`Total payroll fund: | ${totalPayroll}`);
console.log(`Total mandatory social tax withheld | ${totalOPV}`);
console.log(`Total personal income tax withheld | ${totalIPN}`);
console.log(`Total payment | ${totalNet}`);
console.log(`Employee on full month count | ${fullMonthCount}`);


