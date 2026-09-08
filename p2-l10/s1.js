const WORK_DAYS_IN_MONTH = 22;
const OPV_RATE = 0.10;
const IPN_RATE = 0.10;

const employees = ['Иванов', 'Петрова', 'Сидоров', 'Козлова'];

const salaries = {
    Иванов: 500000,
    Петрова: 450000,
    Сидоров: 480000,
    Козлова: 520000,
};

const workDays = {
    Иванов: 20,
    Петрова: 18,
    Сидоров: 22,
    Козлова: 20,
};

let totalPayroll = 0;
let totalOPV = 0;
let totalIPN = 0;
let totalNet = 0;
let fullMounthCount = 0;

for (let employee of employees) {
    const accrued = Math.round(salaries[employee] / WORK_DAYS_IN_MONTH * workDays[employee]);
    const accruedOpv = Math.round(accrued * OPV_RATE);
    const accruedIPN = Math.round((accrued - accruedOpv) * IPN_RATE);
    const takeHomePay = Math.round(accrued - accruedOpv - accruedIPN);
    console.log(`${employee}: ${salaries[employee]}, Accrued: ${accrued}, Accrued OPV: ${accruedOpv}, Accrued IPN: ${accruedIPN}, Take Home Pay: ${takeHomePay}`);

    totalPayroll += accrued;
    totalOPV += accruedOpv;
    totalIPN += accruedIPN;
    totalNet += takeHomePay;
    fullMounthCount ? WORK_DAYS_IN_MONTH === workDays[employee] : fullMounthCount++;
}

