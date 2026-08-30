const OPV_RATE = 0.10;        // 10% — пенсионные отчисления
const IPN_RATE = 0.10;        // 10% — подоходный налог
const BONUS_RATE = 0.15;      // 15% — премия
const BONUS_DAYS = 20;        // порог дней для премии

const employeeName = prompt('Enter your name:');
const employeeSalary = Number(prompt('Enter your salary:'));
const daysWorked = Number(prompt('Enter the number of days worked:'));

const bonusAmount = daysWorked > BONUS_DAYS ? employeeSalary * BONUS_RATE : 0;
const salaryAndBonus = employeeSalary + bonusAmount;
const totalDeductions = salaryAndBonus * (OPV_RATE + IPN_RATE);
const opv = salaryAndBonus * OPV_RATE;
const ipn = salaryAndBonus * IPN_RATE;
const netSalary = salaryAndBonus - totalDeductions;

console.log(` Employee Name: ${employeeName} \n Gross salary: ${employeeSalary} KZT\n Days worked: ${daysWorked}\n Bonus (15%): ${bonusAmount} KZT\n Deduction base: ${salaryAndBonus} KZT\n ────────\n OPV (10%): ${opv} KZT\n IPN (10%): ${ipn} KZT\n  ────────\n Net income: ${netSalary} KZT`);